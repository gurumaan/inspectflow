import React, { useState } from 'react';
import type { SecurityHeaderCheck } from '../types/audit';

interface SecurityTabProps {
  headers: SecurityHeaderCheck[];
}

export const SecurityTab: React.FC<SecurityTabProps> = ({ headers }) => {
  const [expandedHeader, setExpandedHeader] = useState<string | null>(null);
  const [codeTab, setCodeTab] = useState<'nextjs' | 'express' | 'nginx'>('nextjs');

  const toggleExpand = (headerKey: string) => {
    setExpandedHeader(expandedHeader === headerKey ? null : headerKey);
  };

  return (
    <div className="headers-list">
      {headers.map((h) => (
        <article
          key={h.headerKey}
          className={`header-card ${h.present ? 'pass' : 'fail'}`}
        >
          <div className="header-card-top">
            <div className="header-title-group">
              <span className={`status-pill ${h.present ? 'pill-pass' : 'pill-fail'}`}>
                {h.present ? 'PASS' : 'MISSING'}
              </span>
              <div>
                <h3 className="header-name">{h.name}</h3>
                <span className="header-key">{h.headerKey}</span>
              </div>
            </div>

            <button
              type="button"
              className="quick-pill-btn"
              onClick={() => toggleExpand(h.headerKey)}
            >
              {expandedHeader === h.headerKey ? 'Hide Remediation ?' : 'View Fix Snippet ?'}
            </button>
          </div>

          <p className="header-desc">{h.description}</p>

          {h.present && h.value && (
            <div className="header-val-box">
              <strong>Header Value:</strong> {h.value}
            </div>
          )}

          {!h.present && (
            <div style={{ fontSize: '0.8rem', color: 'var(--amber)', marginBottom: '0.65rem' }}>
              <strong>Risk / Recommendation:</strong> {h.recommendation}
            </div>
          )}

          {expandedHeader === h.headerKey && (
            <div className="remediation-box">
              <div className="remediation-title">
                <span>? How to configure in production:</span>
                <div style={{ display: 'flex', gap: '0.35rem', marginLeft: 'auto' }}>
                  {(['nextjs', 'express', 'nginx'] as const).map((framework) => (
                    <button
                      key={framework}
                      type="button"
                      onClick={() => setCodeTab(framework)}
                      style={{
                        padding: '0.15rem 0.5rem',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        background: codeTab === framework ? 'var(--cyan-glow)' : 'transparent',
                        color: codeTab === framework ? 'var(--cyan)' : 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                    >
                      {framework.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <pre className="code-snippet">
                <code>{h.fixCode[codeTab]}</code>
              </pre>
            </div>
          )}
        </article>
      ))}
    </div>
  );
};
