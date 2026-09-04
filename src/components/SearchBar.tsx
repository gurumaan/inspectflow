import React, { useState } from 'react';

interface SearchBarProps {
  currentUrl: string;
  isLoading: boolean;
  onAudit: (url: string) => void;
}

const PRESET_URLS = [
  'guru4code.online',
  'lemon.io',
  'stripe.com',
  'github.com',
  'ycombinator.com'
];

export const SearchBar: React.FC<SearchBarProps> = ({ currentUrl, isLoading, onAudit }) => {
  const [inputVal, setInputVal] = useState(currentUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onAudit(inputVal.trim());
    }
  };

  const handleSelectPreset = (url: string) => {
    setInputVal(url);
    onAudit(url);
  };

  return (
    <section className="audit-hero">
      <h1 className="hero-title">Web Security & Tech Stack Inspector</h1>
      <p className="hero-subtitle">
        Audit any domain for OWASP security headers, SSL certificate health, framework detection, and responsive viewport rendering.
      </p>

      <form onSubmit={handleSubmit} className="audit-input-bar">
        <div className="input-protocol">https://</div>
        <input
          type="text"
          className="url-input"
          placeholder="Enter domain (e.g. lemon.io or guru4code.online)..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" className="btn-scan" disabled={isLoading}>
          {isLoading ? (
            <span>Inspecting...</span>
          ) : (
            <>
              <span>RUN AUDIT</span>
              <span>?</span>
            </>
          )}
        </button>
      </form>

      <div className="quick-pills">
        <span style={{ color: 'var(--text-muted)' }}>Quick Benchmarks:</span>
        {PRESET_URLS.map((url) => (
          <button
            key={url}
            type="button"
            className="quick-pill-btn"
            onClick={() => handleSelectPreset(url)}
          >
            {url}
          </button>
        ))}
      </div>
    </section>
  );
};
