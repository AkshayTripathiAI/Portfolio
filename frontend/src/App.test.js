import { render, screen } from '@testing-library/react';
import App from './App';
import { formatDuration, monthsSince, splitMetrics, yearsLabel } from './utils/experience';

test('renders the home page hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /akshay tripathi/i })).toBeInTheDocument();
});

test('computes experience from the start date', () => {
  const start = new Date(2023, 6, 1);
  expect(monthsSince(start, new Date(2026, 10, 2))).toBe(40);
  expect(formatDuration(40)).toBe('3 yrs 4 mos');
  expect(formatDuration(12)).toBe('1 yr');
  expect(formatDuration(5)).toBe('5 mos');
  expect(yearsLabel(40)).toBe('3+');
  expect(yearsLabel(36)).toBe('3');
});

test('highlights metrics in text', () => {
  const metrics = splitMetrics('Handled 10L+ queries with 95%+ accuracy, 15k+ samples and 70% less effort')
    .filter((part) => part.metric)
    .map((part) => part.text);
  expect(metrics).toEqual(['10L+', '95%+', '15k+', '70%']);
});
