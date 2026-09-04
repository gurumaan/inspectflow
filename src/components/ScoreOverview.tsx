import React from 'react';
import type { AuditReport } from '../types/audit';

interface ScoreOverviewProps {
  report: AuditReport;
}

export const ScoreOverview: React.FC<ScoreOverviewProps> = ({ report }) => {
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'var(--emerald)';
    if (score >= 70) return 'var(--cyan)';
    if (score >= 50) return 'var(--amber)';
    return 'var(--coral)';
  };

  const scoreColor = getScoreColor(report.score);

  return (
    <section className="overview-grid" aria-label="Audit Overview">
      {/* Circle Grade Card */}
      <div className="score-card">
        <div className="score-circle" style={{ borderColor: scoreColor, boxShadow: `0 0 25px ${scoreColor}33` }}>
          <span className="score-number" style={{ color: scoreColor }}>{report.score}</span>
          <span className="score-grade">Grade {report.grade}</span>
        </div>
        <span className="score-label">Security & Integrity Index</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>
          {report.hostname}
        </span>
      </div>

      {/* Metrics Strip */}
      <div className="metrics-strip">
        <div className="metric-box">
          <span className="metric-title">TTFB Latency</span>
          <span className="metric-val" style={{ color: 'var(--cyan)' }}>{report.latencyMs} ms</span>
          <span className="metric-sub">{report.performance.rating} Response</span>
        </div>

        <div className="metric-box">
          <span className="metric-title">SSL Encryption</span>
          <span className="metric-val" style={{ color: 'var(--emerald)' }}>TLS 1.3</span>
          <span className="metric-sub">{report.ssl.daysRemaining} days valid</span>
        </div>

        <div className="metric-box">
          <span className="metric-title">OWASP Headers</span>
          <span className="metric-val">
            {report.headers.filter((h) => h.present).length} / {report.headers.length}
          </span>
          <span className="metric-sub">Protections Active</span>
        </div>

        <div className="metric-box">
          <span className="metric-title">Tech Stack</span>
          <span className="metric-val">{report.techStack.length} Detected</span>
          <span className="metric-sub">Frameworks & CDN</span>
        </div>

        <div className="metric-box">
          <span className="metric-title">HTTP Protocol</span>
          <span className="metric-val">HTTP/2</span>
          <span className="metric-sub">Multiplexed Streams</span>
        </div>

        <div className="metric-box">
          <span className="metric-title">Audited At</span>
          <span className="metric-val" style={{ fontSize: '0.95rem' }}>
            {new Date(report.timestamp).toLocaleTimeString()}
          </span>
          <span className="metric-sub">Local Machine Engine</span>
        </div>
      </div>
    </section>
  );
};
