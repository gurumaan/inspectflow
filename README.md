# InspectFlow — Web Architecture, Security & Tech Stack Auditor

A developer security and web architecture auditing suite built to inspect HTTP security headers, evaluate OWASP compliance, detect underlying tech stacks, and simulate responsive multi-device viewports for any web application.

---

## System Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          Target Domain / URL                           │
│                      (e.g., https://lemon.io)                          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        InspectFlow Audit Engine                        │
│                                                                        │
│   ┌────────────────────┐ ┌────────────────────┐ ┌───────────────────┐  │
│   │   OWASP Security   │ │   Tech Stack Radar │ │   SSL & Latency   │  │
│   │   (CSP, HSTS, XFO) │ │  (React, CDN, CMS) │ │   (TLS 1.3, TTFB) │  │
│   └─────────┬──────────┘ └─────────┬──────────┘ └─────────┬─────────┘  │
│             │                      │                      │            │
│             └──────────────────────┼──────────────────────┘            │
│                                    ▼                                   │
│                     ┌─────────────────────────────┐                    │
│                     │ Composite Score & Grade (A+)│                    │
│                     └──────────────┬──────────────┘                    │
└────────────────────────────────────┼───────────────────────────────────┘
                                     │
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         Interactive Studio UI                          │
│                                                                        │
│   ┌──────────────────┐ ┌──────────────────┐ ┌────────────────────────┐ │
│   │ Remediation Code │ │ OpenGraph Social │ │ Responsive Sandbox     │ │
│   │ (Next, Exp, Nginx)│ │ Preview Card     │ │ (Mobile, Tablet, Mac)  │ │
│   └──────────────────┘ └──────────────────┘ └────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Core Capabilities

- **OWASP Header Compliance:** Automated analysis of essential security headers including `Content-Security-Policy`, `Strict-Transport-Security (HSTS)`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- **Actionable Remediation Snippets:** One-click copyable production configuration code tailored for **Next.js**, **Express.js**, and **Nginx**.
- **Tech Stack Heuristic Detector:** Identifies frontend frameworks, UI libraries, CDN edge infrastructure, and web analytics tools based on header signatures and script bundle patterns.
- **Responsive Viewport Sandbox:** Interactive multi-device rendering emulator to preview live websites inside iPhone 15 (390px), iPad Air (768px), and Full Desktop viewports.
- **OpenGraph & SEO Inspector:** Real-time social share card simulator validating title lengths, meta descriptions, canonical tags, and crawler directives.
- **Executive Audit Export:** Instant export to raw structured JSON or print-ready PDF audit reports.

---

## Tech Stack

- **Frontend & UI:** React 19, TypeScript
- **Tooling & Bundler:** Vite 8 (Rolldown engine)
- **Styling:** Custom Obsidian Dark System (`#070a11` palette with cyan accents)
- **Zero Heavy External Dependencies:** Pure web standards, sub-100ms load time.

---

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gurumaan/inspectflow.git
   cd inspectflow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## Engineering Highlights

1. **Deterministic Scoring Engine:** The composite security score is weighted according to OWASP Top 10 severity: Critical headers (CSP, HSTS) account for 45% of the score, High-severity headers (X-Frame-Options, X-Content-Type-Options) account for 35%, and Medium/Low headers make up the remainder.
2. **Dynamic Remediation Generation:** Rather than simply reporting missing headers, the engine generates copy-paste ready middleware code for modern stacks (Next.js config headers, Express Helmet middleware, and Nginx server blocks).
3. **High Performance:** Bundles cleanly under 70KB gzip with 60fps animations and zero third-party UI framework bloat.

---

## License

MIT License &copy; 2026 Gursharan Singh.
