import React from 'react';

interface HeaderProps {
  onPrintReport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPrintReport }) => {
  return (
    <header className="app-header">
      <div className="logo-group">
        <a href="/" className="app-logo">
          <span className="logo-pulse-dot"></span>
          <span>InspectFlow</span>
        </a>
        <span className="badge-engine">v2.4 Core Engine</span>
      </div>

      <div className="header-status">
        <div className="status-live">
          <span className="status-dot"></span>
          <span>OWASP Header Audit Online</span>
        </div>
        <button
          type="button"
          onClick={onPrintReport}
          className="quick-pill-btn"
          style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }}
          title="Print or export audit report"
        >
          Export PDF Report ?
        </button>
      </div>
    </header>
  );
};
