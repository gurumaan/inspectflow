export type Severity = 'critical' | 'high' | 'medium' | 'low';

export type Grade = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

export interface SecurityHeaderCheck {
  name: string;
  headerKey: string;
  present: boolean;
  value?: string;
  severity: Severity;
  description: string;
  recommendation: string;
  fixCode: {
    nextjs: string;
    express: string;
    nginx: string;
  };
}

export interface TechItem {
  category: 'Frontend' | 'Framework' | 'Infrastructure' | 'Styling' | 'Analytics' | 'Security';
  name: string;
  version?: string;
  description: string;
}

export interface AuditReport {
  id: string;
  url: string;
  hostname: string;
  timestamp: string;
  status: number;
  latencyMs: number;
  score: number;
  grade: Grade;
  ssl: {
    valid: boolean;
    issuer: string;
    daysRemaining: number;
    protocol: string;
  };
  headers: SecurityHeaderCheck[];
  techStack: TechItem[];
  seo: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    hasCanonical: boolean;
    hasRobots: boolean;
  };
  performance: {
    ttfbMs: number;
    rating: 'Optimal' | 'Moderate' | 'Degraded';
    httpVersion: string;
  };
}
