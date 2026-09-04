import React, { useState } from 'react';

interface DeviceSandboxProps {
  url: string;
}

export const DeviceSandbox: React.FC<DeviceSandboxProps> = ({ url }) => {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const getWidth = () => {
    switch (device) {
      case 'mobile':
        return '390px';
      case 'tablet':
        return '768px';
      case 'desktop':
        return '100%';
    }
  };

  return (
    <div>
      <div className="sandbox-controls">
        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Interactive viewport rendering emulator for <strong>{url}</strong>
        </div>

        <div className="device-buttons">
          <button
            type="button"
            className={`device-btn ${device === 'mobile' ? 'active' : ''}`}
            onClick={() => setDevice('mobile')}
          >
            ?? Mobile (390px)
          </button>
          <button
            type="button"
            className={`device-btn ${device === 'tablet' ? 'active' : ''}`}
            onClick={() => setDevice('tablet')}
          >
            ?? Tablet (768px)
          </button>
          <button
            type="button"
            className={`device-btn ${device === 'desktop' ? 'active' : ''}`}
            onClick={() => setDevice('desktop')}
          >
            ??? Desktop (Full)
          </button>
        </div>
      </div>

      <div className="iframe-wrapper" style={{ width: getWidth(), maxWidth: '100%' }}>
        <iframe
          src={url}
          title={`Live preview of ${url}`}
          className="sandbox-iframe"
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      </div>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
        Note: Sites with strict X-Frame-Options: DENY (like Google or Stripe) prevent external iframe embedding as an intended security protection.
      </p>
    </div>
  );
};
