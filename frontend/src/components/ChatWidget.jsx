import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { API_URL } from '../config';
import { profile } from '../data/profile';
import './ChatWidget.css';

const MAX_LENGTH = 600;
const HISTORY_SENT = 10;

const SUGGESTIONS = [
  'What does Akshay work on right now?',
  'Has he built agentic AI systems?',
  'What are his strongest skills?',
  'How can I contact him?',
];

const GREETING = {
  role: 'assistant',
  content: `Hi! I'm an AI assistant that knows ${profile.name.split(' ')[0]}'s experience, skills and projects. What would you like to know?`,
  local: true,
};

// Parses a Server-Sent Events stream from /api/chat, calling onEvent for each JSON payload.
async function readEvents(response, onEvent) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split('\n\n');
    buffer = events.pop();
    for (const event of events) {
      const line = event.split('\n').find((l) => l.startsWith('data:'));
      if (!line) continue;
      try {
        onEvent(JSON.parse(line.slice(5)));
      } catch {
        // ignore malformed events
      }
    }
  }
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const abortRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const updateLast = (update) =>
    setMessages((prev) => [...prev.slice(0, -1), { ...prev[prev.length - 1], ...update(prev[prev.length - 1]) }]);

  const send = async (text) => {
    const question = text.trim();
    if (!question || streaming) return;

    const history = [...messages, { role: 'user', content: question }];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history
            .filter((m) => !m.local && !m.error && m.content)
            .slice(-HISTORY_SENT)
            .map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'The assistant is unavailable right now.');
      }

      await readEvents(response, (event) => {
        if (event.delta) updateLast((last) => ({ content: last.content + event.delta }));
        if (event.error) updateLast(() => ({ error: event.error }));
      });
    } catch (error) {
      if (error.name !== 'AbortError') {
        const message = error instanceof TypeError ? 'Network error. Please check your connection and try again.' : error.message;
        updateLast(() => ({ error: message }));
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  const showSuggestions = messages.length === 1 && !streaming;
  const firstName = profile.name.split(' ')[0];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.section
            className="chat-panel"
            role="dialog"
            aria-label={`Chat about ${profile.name}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <header className="chat-header">
              <img src={profile.photo} alt="" className="chat-avatar" />
              <div className="chat-title">
                <strong>Ask about {firstName}</strong>
                <span>
                  <span className="chat-status-dot" aria-hidden="true" /> AI assistant · answers from his profile
                </span>
              </div>
              <button type="button" className="chat-icon-btn" onClick={close} aria-label="Close chat">
                <i className="bi bi-x-lg" aria-hidden="true" />
              </button>
            </header>

            <div className="chat-messages" ref={listRef} aria-live="polite">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message chat-message-${message.role}`}>
                  {message.content && <p>{message.content}</p>}
                  {message.role === 'assistant' && !message.content && !message.error && streaming && index === messages.length - 1 && (
                    <span className="chat-typing" aria-label="Assistant is typing">
                      <span />
                      <span />
                      <span />
                    </span>
                  )}
                  {message.error && (
                    <p className="chat-error">
                      {message.error}{' '}
                      <a href={`mailto:${profile.email}`}>Email {firstName}</a>
                    </p>
                  )}
                </div>
              ))}

              {showSuggestions && (
                <div className="chat-suggestions">
                  {SUGGESTIONS.map((suggestion) => (
                    <button key={suggestion} type="button" onClick={() => send(suggestion)}>
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form className="chat-input" onSubmit={onSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask anything about ${firstName}…`}
                maxLength={MAX_LENGTH}
                aria-label="Your question"
              />
              <button type="submit" className="chat-send" disabled={!input.trim() || streaming} aria-label="Send">
                <i className="bi bi-arrow-up" aria-hidden="true" />
              </button>
            </form>
            <p className="chat-disclaimer">AI can make mistakes. For anything important, email {firstName}.</p>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        className={`chat-launcher${open ? ' is-open' : ''}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : `Ask AI about ${firstName}`}
      >
        <i className={`bi ${open ? 'bi-x-lg' : 'bi-stars'}`} aria-hidden="true" />
        {!open && <span className="chat-launcher-label">Ask about me</span>}
      </button>
    </>
  );
}

export default ChatWidget;
