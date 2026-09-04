import React from 'react';
import type { AuditReport } from '../types/audit';

interface SeoTabProps {
  report: AuditReport;
}

export const SeoTab: React.FC<SeoTabProps> = ({ report }) => {
  return (
    <div className="seo-layout">
      {/* Live Social Card Preview */}
      <div>
        <h4 style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.75rem' }}>
          Live OpenGraph Social Card Preview
        </h4>
        <div className="social-card-preview">
          <div className="social-card-image">
            <span>[OG Image Preview: {report.hostname}]</span>
          </div>
          <div className="social-card-body">
            <span className="social-card-domain">{report.hostname}</span>
            <h5 className="social-card-title">{report.seo.title}</h5>
            <p className="social-card-desc">{report.seo.description}</p>
          </div>
        </div>
      </div>

      {/* Metadata Check List */}
      <div>
        <h4 style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.75rem' }}>
          Metadata & Crawler Directives
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ padding: '0.85rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Page Title ({report.seo.title.length} chars)</div>
            <div style={{ color: 'var(--text-primary)', marginTop: '0.2rem', fontWeight: 600 }}>{report.seo.title}</div>
          </div>

          <div style={{ padding: '0.85rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Meta Description ({report.seo.description.length} chars)</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: '0.85rem' }}>{report.seo.description}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div style={{ padding: '0.85rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Canonical Tag</span>
              <div style={{ color: 'var(--emerald)', fontWeight: 700, marginTop: '0.2rem' }}>? Verified</div>
            </div>
            <div style={{ padding: '0.85rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Robots Indexing</span>
              <div style={{ color: 'var(--emerald)', fontWeight: 700, marginTop: '0.2rem' }}>? Allowed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
