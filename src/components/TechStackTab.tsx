import React from 'react';
import type { TechItem } from '../types/audit';

interface TechStackTabProps {
  techStack: TechItem[];
}

export const TechStackTab: React.FC<TechStackTabProps> = ({ techStack }) => {
  return (
    <div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
        Identified technologies based on HTTP response headers, DOM footprints, meta tags, and script bundle analysis.
      </p>

      <div className="tech-grid">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-card">
            <span className="tech-cat-pill">{tech.category}</span>
            <h4 className="tech-name">
              {tech.name} {tech.version && <span style={{ fontSize: '0.75rem', color: 'var(--cyan)' }}>v{tech.version}</span>}
            </h4>
            <p className="tech-desc">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
