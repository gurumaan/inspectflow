import React, { useState, useEffect } from 'react';
import type { AuditReport } from './types/audit';
import { auditWebsite } from './services/auditor';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { ScoreOverview } from './components/ScoreOverview';
import { SecurityTab } from './components/SecurityTab';
import { TechStackTab } from './components/TechStackTab';
import { SeoTab } from './components/SeoTab';
import { DeviceSandbox } from './components/DeviceSandbox';
import './styles/inspectflow.css';

export const App: React.FC = () => {
  const [report, setReport] = useState<AuditReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'security' | 'tech' | 'seo' | 'sandbox'>('security');

  // Initial scan on load for guru4code.online
  useEffect(() => {
    handleAudit('guru4code.online');
  }, []);

  const handleAudit = async (targetUrl: string) => {
    setIsLoading(true);
    try {
      const result = await auditWebsite(targetUrl);
      setReport(result);
    } catch (e) {
      console.error('Audit failed:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="app-wrapper">
      <Header onPrintReport={handlePrintReport} />

      <SearchBar
        currentUrl={report?.url || 'guru4code.online'}
        isLoading={isLoading}
        onAudit={handleAudit}
      />

      {report && (
        <main>
          <ScoreOverview report={report} />

          {/* Navigation Tabs */}
          <nav className="tabs-nav" aria-label="Audit Sections">
            <button
              type="button"
              className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <span>??? OWASP Security Headers</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>({report.headers.length})</span>
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
              onClick={() => setActiveTab('tech')}
            >
              <span>? Tech Stack Detected</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>({report.techStack.length})</span>
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => setActiveTab('seo')}
            >
              <span>?? OpenGraph & Metadata</span>
            </button>

            <button
              type="button"
              className={`tab-btn ${activeTab === 'sandbox' ? 'active' : ''}`}
              onClick={() => setActiveTab('sandbox')}
            >
              <span>?? Responsive Sandbox</span>
            </button>
          </nav>

          {/* Active Tab Content */}
          <section style={{ minHeight: '400px' }}>
            {activeTab === 'security' && <SecurityTab headers={report.headers} />}
            {activeTab === 'tech' && <TechStackTab techStack={report.techStack} />}
            {activeTab === 'seo' && <SeoTab report={report} />}
            {activeTab === 'sandbox' && <DeviceSandbox url={report.url} />}
          </section>

          {/* Footer Bar */}
          <footer className="export-bar">
            <span>Audit Token: {report.id} ? Engine by Gursharan Singh</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(report, null, 2));
                  alert('Audit JSON copied to clipboard!');
                }}
                className="quick-pill-btn"
              >
                Copy Raw JSON
              </button>
              <button
                type="button"
                onClick={handlePrintReport}
                className="quick-pill-btn"
                style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }}
              >
                Print / PDF Report
              </button>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
};
