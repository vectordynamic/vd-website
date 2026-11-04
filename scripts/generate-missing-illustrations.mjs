import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Brand palette
const BG = '#F6F3EC';
const INK = '#101418';
const MUTED_INK = '#3A424A';
const FAINT = '#E3DDD2';
const RULE = '#D9D3C7';
const SIGNAL = '#C93D20';      // Cinnabar
const VERDIGRIS = '#1F6F66';   // Verdigris
const SURFACE = '#ECE6DA';

// 1. SyncDaily - Developer pipeline & automated digest schematic
const syncdailySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 670" width="1200" height="670">
  <rect width="1200" height="670" fill="${BG}"/>
  
  <!-- Subtle coordinate grid -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${FAINT}" stroke-width="0.5"/>
    </pattern>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#101418" flood-opacity="0.04"/>
    </filter>
  </defs>
  <rect width="1200" height="670" fill="url(#grid)" opacity="0.6"/>

  <!-- Architectural framing -->
  <rect x="60" y="50" width="1080" height="570" fill="none" stroke="${RULE}" stroke-width="1"/>
  <circle cx="60" cy="50" r="3" fill="${INK}"/>
  <circle cx="1140" cy="50" r="3" fill="${INK}"/>
  <circle cx="60" cy="620" r="3" fill="${INK}"/>
  <circle cx="1140" cy="620" r="3" fill="${INK}"/>

  <!-- Top schematic bar -->
  <line x1="60" y1="100" x2="1140" y2="100" stroke="${RULE}" stroke-width="1"/>
  <text x="80" y="82" font-family="monospace" font-size="11" fill="${MUTED_INK}" letter-spacing="2">FIG 02 // SYNCDAILY PIPELINE ARCHITECTURE</text>
  <text x="1000" y="82" font-family="monospace" font-size="11" fill="${VERDIGRIS}" font-weight="bold" letter-spacing="1">STATUS: OPERATIONAL</text>

  <!-- Left: Git Event Stream / Pipeline -->
  <g transform="translate(100, 130)">
    <rect x="0" y="0" width="400" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">EVENT BUS &amp; REPO ACTIVITY</text>
    <line x1="24" y1="52" x2="376" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Timeline trunk -->
    <line x1="60" y1="80" x2="60" y2="400" stroke="${INK}" stroke-width="2" stroke-dasharray="4 4"/>
    
    <!-- Commit nodes -->
    <circle cx="60" cy="110" r="6" fill="${SIGNAL}"/>
    <circle cx="60" cy="110" r="10" fill="none" stroke="${SIGNAL}" stroke-width="1" opacity="0.4"/>
    <line x1="60" y1="110" x2="100" y2="110" stroke="${SIGNAL}" stroke-width="1.5"/>
    <rect x="100" y="94" width="260" height="32" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="112" y="114" font-family="monospace" font-size="11" fill="${INK}">push: 4 commits to core/api</text>

    <circle cx="60" cy="180" r="5" fill="${VERDIGRIS}"/>
    <line x1="60" y1="180" x2="100" y2="180" stroke="${RULE}" stroke-width="1.5"/>
    <rect x="100" y="164" width="260" height="32" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="112" y="184" font-family="monospace" font-size="11" fill="${INK}">pr #142: merged to main</text>

    <circle cx="60" cy="250" r="5" fill="${INK}"/>
    <line x1="60" y1="250" x2="100" y2="250" stroke="${RULE}" stroke-width="1.5"/>
    <rect x="100" y="234" width="260" height="32" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="112" y="254" font-family="monospace" font-size="11" fill="${INK}">deploy: release v2.4.1 [ok]</text>

    <circle cx="60" cy="320" r="6" fill="${SIGNAL}"/>
    <line x1="60" y1="320" x2="100" y2="320" stroke="${SIGNAL}" stroke-width="1.5"/>
    <rect x="100" y="304" width="260" height="32" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="112" y="324" font-family="monospace" font-size="11" fill="${INK}">review: 12 threads resolved</text>

    <!-- Data metric tags -->
    <rect x="24" y="370" width="105" height="48" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="36" y="390" font-family="monospace" font-size="9" fill="${MUTED_INK}">RAW EVENTS</text>
    <text x="36" y="408" font-family="monospace" font-size="14" font-weight="bold" fill="${INK}">2,840</text>

    <rect x="145" y="370" width="115" height="48" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="157" y="390" font-family="monospace" font-size="9" fill="${MUTED_INK}">LATENCY</text>
    <text x="157" y="408" font-family="monospace" font-size="14" font-weight="bold" fill="${VERDIGRIS}">42ms</text>

    <rect x="276" y="370" width="100" height="48" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="288" y="390" font-family="monospace" font-size="9" fill="${MUTED_INK}">BOT FILTER</text>
    <text x="288" y="408" font-family="monospace" font-size="14" font-weight="bold" fill="${SIGNAL}">99.4%</text>
  </g>

  <!-- Center Transfer Bridge -->
  <g transform="translate(500, 280)">
    <line x1="20" y1="75" x2="120" y2="75" stroke="${INK}" stroke-width="2"/>
    <polygon points="120,70 135,75 120,80" fill="${INK}"/>
    <circle cx="75" cy="75" r="22" fill="${BG}" stroke="${RULE}" stroke-width="1.5"/>
    <path d="M 68 75 L 75 68 L 82 75 L 75 82 Z" fill="${SIGNAL}"/>
    <text x="75" y="115" font-family="monospace" font-size="10" fill="${MUTED_INK}" text-anchor="middle">TRANSFORM</text>
  </g>

  <!-- Right: Generated Daily Digest Card -->
  <g transform="translate(650, 130)">
    <rect x="0" y="0" width="450" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    
    <!-- Digest Header -->
    <rect x="0" y="0" width="450" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="13" font-weight="bold" fill="${BG}" letter-spacing="1">SYNCDAILY // EXECUTIVE DIGEST</text>
    <circle cx="415" cy="25" r="4" fill="${SIGNAL}"/>

    <!-- Digest Content Lines -->
    <text x="28" y="85" font-family="sans-serif" font-size="14" font-weight="bold" fill="${INK}">Engineering Velocity · Yesterday</text>
    <text x="28" y="105" font-family="sans-serif" font-size="11" fill="${MUTED_INK}">Generated at 08:00 UTC · 0 fluff · 100% verified Git data</text>
    <line x1="28" y1="120" x2="422" y2="120" stroke="${RULE}" stroke-width="1"/>

    <text x="28" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="${VERDIGRIS}">✓ Shipped to Production</text>
    <text x="44" y="172" font-family="sans-serif" font-size="11" fill="${INK}">• Webhook idempotency engine deployed without downtime</text>
    <text x="44" y="192" font-family="sans-serif" font-size="11" fill="${INK}">• Stripe checkout billing flow updated with tax calculation</text>

    <text x="28" y="230" font-family="sans-serif" font-size="12" font-weight="bold" fill="${SIGNAL}">⚠ Attention Required</text>
    <text x="44" y="252" font-family="sans-serif" font-size="11" fill="${INK}">• PR #145 (Auth token refresh) awaiting senior review (3h elapsed)</text>

    <text x="28" y="290" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">⚡ Key Metrics</text>
    
    <!-- Mini Metric Cards -->
    <rect x="28" y="310" width="118" height="60" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
    <text x="38" y="332" font-family="monospace" font-size="9" fill="${MUTED_INK}">CYCLE TIME</text>
    <text x="38" y="356" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">4.2 hrs</text>

    <rect x="156" y="310" width="118" height="60" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
    <text x="166" y="332" font-family="monospace" font-size="9" fill="${MUTED_INK}">COMMITS</text>
    <text x="166" y="356" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">28</text>

    <rect x="284" y="310" width="138" height="60" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
    <text x="294" y="332" font-family="monospace" font-size="9" fill="${MUTED_INK}">STANDUP TIME SAVED</text>
    <text x="294" y="356" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">18 mins</text>

    <!-- Footer signature -->
    <line x1="28" y1="395" x2="422" y2="395" stroke="${RULE}" stroke-width="1"/>
    <text x="28" y="420" font-family="monospace" font-size="10" fill="${MUTED_INK}">Automated standup summary delivered via Slack &amp; Email</text>
  </g>
</svg>
`;

// 2. Opsera - Field service operations and dispatch engine schematic
const opseraSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 670" width="1200" height="670">
  <rect width="1200" height="670" fill="${BG}"/>
  
  <defs>
    <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${FAINT}" stroke-width="0.5"/>
    </pattern>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#101418" flood-opacity="0.04"/>
    </filter>
  </defs>
  <rect width="1200" height="670" fill="url(#grid2)" opacity="0.6"/>

  <!-- Architectural framing -->
  <rect x="60" y="50" width="1080" height="570" fill="none" stroke="${RULE}" stroke-width="1"/>
  <circle cx="60" cy="50" r="3" fill="${INK}"/>
  <circle cx="1140" cy="50" r="3" fill="${INK}"/>
  <circle cx="60" cy="620" r="3" fill="${INK}"/>
  <circle cx="1140" cy="620" r="3" fill="${INK}"/>

  <line x1="60" y1="100" x2="1140" y2="100" stroke="${RULE}" stroke-width="1"/>
  <text x="80" y="82" font-family="monospace" font-size="11" fill="${MUTED_INK}" letter-spacing="2">FIG 03 // OPSERA REAL-TIME DISPATCH ENGINE</text>
  <text x="960" y="82" font-family="monospace" font-size="11" fill="${VERDIGRIS}" font-weight="bold" letter-spacing="1">48 ACTIVE FIELD TECHNICIANS</text>

  <!-- Left: Geographic Territory & Route Network -->
  <g transform="translate(100, 130)">
    <rect x="0" y="0" width="480" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#shadow2)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">TERRITORY DISPATCH &amp; ROUTE GRAPH</text>
    <line x1="24" y1="52" x2="456" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Map grid abstract network -->
    <circle cx="120" cy="140" r="28" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="120" y="144" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle" fill="${INK}">HUB-N</text>

    <circle cx="360" cy="140" r="28" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="360" y="144" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle" fill="${INK}">HUB-E</text>

    <circle cx="240" cy="260" r="34" fill="${BG}" stroke="${SIGNAL}" stroke-width="2"/>
    <circle cx="240" cy="260" r="42" fill="none" stroke="${SIGNAL}" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="240" y="264" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle" fill="${SIGNAL}">CENTRAL</text>

    <circle cx="130" cy="380" r="26" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="130" y="384" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle" fill="${INK}">HUB-W</text>

    <circle cx="350" cy="380" r="26" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="350" y="384" font-family="monospace" font-size="10" font-weight="bold" text-anchor="middle" fill="${INK}">HUB-S</text>

    <!-- Network connections with active dispatch pulses -->
    <line x1="148" y1="140" x2="332" y2="140" stroke="${RULE}" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="120" y1="168" x2="216" y2="240" stroke="${SIGNAL}" stroke-width="2"/>
    <line x1="360" y1="168" x2="264" y2="240" stroke="${VERDIGRIS}" stroke-width="2"/>
    <line x1="220" y1="284" x2="145" y2="360" stroke="${RULE}" stroke-width="1.5"/>
    <line x1="260" y1="284" x2="335" y2="360" stroke="${SIGNAL}" stroke-width="2"/>

    <!-- Active technician markers -->
    <circle cx="168" cy="204" r="5" fill="${SIGNAL}"/>
    <text x="180" y="208" font-family="monospace" font-size="9" fill="${MUTED_INK}">TECH #12</text>

    <circle cx="312" cy="204" r="5" fill="${VERDIGRIS}"/>
    <text x="324" y="208" font-family="monospace" font-size="9" fill="${MUTED_INK}">TECH #04</text>

    <circle cx="297" cy="322" r="5" fill="${SIGNAL}"/>
    <text x="310" y="326" font-family="monospace" font-size="9" fill="${MUTED_INK}">TECH #29</text>
  </g>

  <!-- Right: Dispatch Ticket Lifecycle & Metrics -->
  <g transform="translate(620, 130)">
    <rect x="0" y="0" width="480" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#shadow2)"/>
    <rect x="0" y="0" width="480" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="13" font-weight="bold" fill="${BG}" letter-spacing="1">DISPATCH QUEUE // OFFLINE-SYNC ENABLED</text>

    <!-- Queue rows -->
    <g transform="translate(24, 70)">
      <rect x="0" y="0" width="432" height="64" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="32" r="6" fill="${SIGNAL}"/>
      <text x="36" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Emergency HVAC Compressor Replacement</text>
      <text x="36" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">#WO-9482 · Austin Medical Center · SLA: 45 min</text>
      <rect x="335" y="20" width="80" height="24" rx="3" fill="${SIGNAL}" opacity="0.15"/>
      <text x="375" y="36" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}" text-anchor="middle">DISPATCHED</text>
    </g>

    <g transform="translate(24, 146)">
      <rect x="0" y="0" width="432" height="64" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="32" r="6" fill="${VERDIGRIS}"/>
      <text x="36" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Scheduled Preventive Electrical Audit</text>
      <text x="36" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">#WO-9480 · Apex Logistics Warehouse · SLA: 4 hr</text>
      <rect x="335" y="20" width="80" height="24" rx="3" fill="${VERDIGRIS}" opacity="0.15"/>
      <text x="375" y="36" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}" text-anchor="middle">COMPLETED</text>
    </g>

    <g transform="translate(24, 222)">
      <rect x="0" y="0" width="432" height="64" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="32" r="6" fill="${INK}"/>
      <text x="36" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Pump Valve Calibration &amp; Pressure Test</text>
      <text x="36" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">#WO-9483 · Travis Water Plant · SLA: 2 hr</text>
      <rect x="335" y="20" width="80" height="24" rx="3" fill="${RULE}" opacity="0.5"/>
      <text x="375" y="36" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}" text-anchor="middle">QUEUED</text>
    </g>

    <!-- Operational Proof Metrics -->
    <g transform="translate(24, 305)">
      <rect x="0" y="0" width="134" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">SLA COMPLIANCE</text>
      <text x="14" y="52" font-family="sans-serif" font-size="18" font-weight="bold" fill="${VERDIGRIS}">99.8%</text>

      <rect x="149" y="0" width="134" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">FIRST-TRIP FIX</text>
      <text x="163" y="52" font-family="sans-serif" font-size="18" font-weight="bold" fill="${INK}">91.4%</text>

      <rect x="298" y="0" width="134" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">OFFLINE BUFFER</text>
      <text x="312" y="52" font-family="sans-serif" font-size="18" font-weight="bold" fill="${SIGNAL}">ZERO LOSS</text>
    </g>

    <line x1="24" y1="395" x2="456" y2="395" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="420" font-family="monospace" font-size="10" fill="${MUTED_INK}">Full native SQLite sync buffer ensures 100% field durability</text>
  </g>
</svg>
`;

// 3. AdVantage AI - Programmatic creative intelligence & attribution schematic
const advantageAiSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 670" width="1200" height="670">
  <rect width="1200" height="670" fill="${BG}"/>
  
  <defs>
    <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${FAINT}" stroke-width="0.5"/>
    </pattern>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#101418" flood-opacity="0.04"/>
    </filter>
  </defs>
  <rect width="1200" height="670" fill="url(#grid3)" opacity="0.6"/>

  <!-- Architectural framing -->
  <rect x="60" y="50" width="1080" height="570" fill="none" stroke="${RULE}" stroke-width="1"/>
  <circle cx="60" cy="50" r="3" fill="${INK}"/>
  <circle cx="1140" cy="50" r="3" fill="${INK}"/>
  <circle cx="60" cy="620" r="3" fill="${INK}"/>
  <circle cx="1140" cy="620" r="3" fill="${INK}"/>

  <line x1="60" y1="100" x2="1140" y2="100" stroke="${RULE}" stroke-width="1"/>
  <text x="80" y="82" font-family="monospace" font-size="11" fill="${MUTED_INK}" letter-spacing="2">FIG 04 // ADVANTAGE AI MULTI-TOUCH ATTRIBUTION &amp; CREATIVE VARIATION</text>
  <text x="970" y="82" font-family="monospace" font-size="11" fill="${SIGNAL}" font-weight="bold" letter-spacing="1">MARKOV MODEL // VERIFIED</text>

  <!-- Left: Creative Matrix & Generation Stream -->
  <g transform="translate(100, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#shadow3)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">CREATIVE VARIATION MATRIX</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Matrix cards -->
    <g transform="translate(24, 75)">
      <rect x="0" y="0" width="185" height="110" rx="6" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="10" fill="${MUTED_INK}">VARIANT A1 [HOOK: ROI]</text>
      <rect x="14" y="36" width="157" height="8" rx="2" fill="${RULE}"/>
      <rect x="14" y="52" width="110" height="8" rx="2" fill="${RULE}"/>
      <text x="14" y="90" font-family="monospace" font-size="11" font-weight="bold" fill="${INK}">CTR: 2.14%</text>
      <text x="110" y="90" font-family="monospace" font-size="10" fill="${MUTED_INK}">N=24k</text>
    </g>

    <g transform="translate(231, 75)">
      <rect x="0" y="0" width="185" height="110" rx="6" fill="${BG}" stroke="${SIGNAL}" stroke-width="2"/>
      <rect x="120" y="8" width="55" height="18" rx="3" fill="${SIGNAL}"/>
      <text x="147" y="21" font-family="monospace" font-size="8" font-weight="bold" fill="#FFF" text-anchor="middle">WINNER</text>
      <text x="14" y="24" font-family="monospace" font-size="10" fill="${SIGNAL}" font-weight="bold">VARIANT B3 [AUDIT]</text>
      <rect x="14" y="36" width="157" height="8" rx="2" fill="${RULE}"/>
      <rect x="14" y="52" width="140" height="8" rx="2" fill="${RULE}"/>
      <text x="14" y="90" font-family="monospace" font-size="11" font-weight="bold" fill="${SIGNAL}">CTR: 5.82%</text>
      <text x="110" y="90" font-family="monospace" font-size="10" fill="${MUTED_INK}">N=31k</text>
    </g>

    <g transform="translate(24, 205)">
      <rect x="0" y="0" width="185" height="110" rx="6" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="10" fill="${MUTED_INK}">VARIANT C2 [CASE STUDY]</text>
      <rect x="14" y="36" width="157" height="8" rx="2" fill="${RULE}"/>
      <rect x="14" y="52" width="90" height="8" rx="2" fill="${RULE}"/>
      <text x="14" y="90" font-family="monospace" font-size="11" font-weight="bold" fill="${INK}">CTR: 3.40%</text>
      <text x="110" y="90" font-family="monospace" font-size="10" fill="${MUTED_INK}">N=19k</text>
    </g>

    <g transform="translate(231, 205)">
      <rect x="0" y="0" width="185" height="110" rx="6" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="10" fill="${MUTED_INK}">VARIANT D1 [FOUNDER]</text>
      <rect x="14" y="36" width="157" height="8" rx="2" fill="${RULE}"/>
      <rect x="14" y="52" width="125" height="8" rx="2" fill="${RULE}"/>
      <text x="14" y="90" font-family="monospace" font-size="11" font-weight="bold" fill="${INK}">CTR: 2.88%</text>
      <text x="110" y="90" font-family="monospace" font-size="10" fill="${MUTED_INK}">N=22k</text>
    </g>

    <line x1="24" y1="340" x2="416" y2="340" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="370" font-family="monospace" font-size="10" fill="${MUTED_INK}">REAL-TIME BANDIT EXPLORATION</text>
    <text x="24" y="392" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">85% Traffic routed to top variant B3 automatically</text>
  </g>

  <!-- Right: Attribution Graph & ROAS -->
  <g transform="translate(580, 130)">
    <rect x="0" y="0" width="520" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#shadow3)"/>
    <rect x="0" y="0" width="520" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="13" font-weight="bold" fill="${BG}" letter-spacing="1">ATTRIBUTION GRAPH // MARKOV CHAIN CONFIDENCE</text>

    <!-- Attribution Chart -->
    <g transform="translate(40, 90)">
      <!-- Axes -->
      <line x1="0" y1="160" x2="440" y2="160" stroke="${INK}" stroke-width="1.5"/>
      <line x1="0" y1="0" x2="0" y2="160" stroke="${INK}" stroke-width="1.5"/>

      <!-- Grid lines -->
      <line x1="0" y1="40" x2="440" y2="40" stroke="${RULE}" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="0" y1="80" x2="440" y2="80" stroke="${RULE}" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="0" y1="120" x2="440" y2="120" stroke="${RULE}" stroke-width="1" stroke-dasharray="3 3"/>

      <!-- Target curve (ROAS lift) -->
      <path d="M 0 145 C 80 140, 140 110, 200 85 C 280 50, 360 25, 440 20" fill="none" stroke="${SIGNAL}" stroke-width="2.5"/>
      <circle cx="200" cy="85" r="5" fill="${SIGNAL}"/>
      <circle cx="440" cy="20" r="5" fill="${SIGNAL}"/>

      <!-- Baseline curve -->
      <path d="M 0 150 C 100 148, 200 142, 300 138 C 380 135, 420 132, 440 130" fill="none" stroke="${MUTED_INK}" stroke-width="1.5" stroke-dasharray="4 4"/>

      <!-- Labels -->
      <text x="440" y="12" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}" text-anchor="end">+4.8x ROAS</text>
      <text x="440" y="146" font-family="monospace" font-size="10" fill="${MUTED_INK}" text-anchor="end">BASELINE</text>
    </g>

    <!-- Bottom summary table -->
    <g transform="translate(24, 280)">
      <rect x="0" y="0" width="150" height="70" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">BLENDED CAC</text>
      <text x="14" y="52" font-family="sans-serif" font-size="20" font-weight="bold" fill="${VERDIGRIS}">-42.6%</text>

      <rect x="162" y="0" width="150" height="70" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">MODEL CONFIDENCE</text>
      <text x="14" y="52" font-family="sans-serif" font-size="20" font-weight="bold" fill="${INK}">99.2%</text>

      <rect x="324" y="0" width="150" height="70" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">ATTRIBUTED REVENUE</text>
      <text x="14" y="52" font-family="sans-serif" font-size="20" font-weight="bold" fill="${SIGNAL}">\$1.84M</text>
    </g>

    <line x1="24" y1="380" x2="496" y2="380" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="405" font-family="monospace" font-size="10" fill="${MUTED_INK}">No third-party pixel leakage · 100% first-party server-side attribution pipeline</text>
  </g>
</svg>
`;

async function build() {
  const dir = path.resolve('public/images/work');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tasks = [
    { name: 'syncdaily.webp', svg: syncdailySvg },
    { name: 'opsera.webp', svg: opseraSvg },
    { name: 'advantage-ai.webp', svg: advantageAiSvg },
  ];

  for (const { name, svg } of tasks) {
    const outPath = path.join(dir, name);
    await sharp(Buffer.from(svg))
      .resize(1200, 670, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(outPath);
    const stat = fs.statSync(outPath);
    console.log(`Generated ${name}: ${stat.size} bytes (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});

