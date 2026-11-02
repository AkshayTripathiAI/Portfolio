export function monthsSince(start, now = new Date()) {
  return Math.max(0, (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()));
}

// "3 yrs 4 mos"
export function formatDuration(months) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rest || !years) parts.push(`${rest} mo${rest === 1 ? '' : 's'}`);
  return parts.join(' ');
}

// "3+" once past a full year, otherwise "<n> months"
export function yearsLabel(months) {
  const years = Math.floor(months / 12);
  return years ? `${years}${months % 12 ? '+' : ''}` : `${months} months`;
}

// Splits text so numeric metrics like "95%+", "1M+", "10K+" can be emphasised.
const METRIC_RE = /(\d+(?:[.,]\d+)?(?:[kKLM])?(?:%\+?|\+))/g;
export function splitMetrics(text) {
  return text.split(METRIC_RE).map((part, i) => ({ text: part, metric: i % 2 === 1 }));
}
