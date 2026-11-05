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

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function frameSvg(figLabel, rightStatus, bodyContent) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 670" width="1200" height="670">
  <rect width="1200" height="670" fill="${BG}"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${FAINT}" stroke-width="0.6"/>
    </pattern>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#101418" flood-opacity="0.04"/>
    </filter>
  </defs>
  <rect width="1200" height="670" fill="url(#grid)" opacity="0.65"/>

  <!-- Architectural framing -->
  <rect x="60" y="50" width="1080" height="570" fill="none" stroke="${RULE}" stroke-width="1"/>
  <circle cx="60" cy="50" r="3" fill="${INK}"/>
  <circle cx="1140" cy="50" r="3" fill="${INK}"/>
  <circle cx="60" cy="620" r="3" fill="${INK}"/>
  <circle cx="1140" cy="620" r="3" fill="${INK}"/>

  <!-- Top schematic bar -->
  <line x1="60" y1="100" x2="1140" y2="100" stroke="${RULE}" stroke-width="1"/>
  <text x="84" y="81" font-family="monospace" font-size="11" fill="${MUTED_INK}" letter-spacing="1.8">${escapeXml(figLabel)}</text>
  <text x="1116" y="81" font-family="monospace" font-size="11" fill="${VERDIGRIS}" font-weight="bold" letter-spacing="1.2" text-anchor="end">${escapeXml(rightStatus)}</text>

  ${bodyContent}
</svg>`;
}

// 01. Okebase — Multi-Entity ERP & Operations Ledger
const okebaseSvg = frameSvg(
  'FIG 01 // OKEBASE MULTI-ENTITY ERP & LEDGER ARCHITECTURE',
  'ISOLATION: POSTGRES RLS + JSONB',
  `
  <!-- Left: Holding Group & Tenant Hierarchy -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">MULTI-ENTITY TENANT HIERARCHY</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Parent Holding Node -->
    <rect x="110" y="72" width="220" height="44" rx="5" fill="${INK}"/>
    <text x="220" y="99" font-family="monospace" font-size="11" font-weight="bold" fill="${BG}" text-anchor="middle">HOLDING GROUP // MASTER ORG</text>

    <!-- Connector lines -->
    <line x1="220" y1="116" x2="220" y2="142" stroke="${INK}" stroke-width="1.5"/>
    <line x1="95" y1="142" x2="345" y2="142" stroke="${INK}" stroke-width="1.5"/>
    <line x1="95" y1="142" x2="95" y2="164" stroke="${INK}" stroke-width="1.5"/>
    <line x1="220" y1="142" x2="220" y2="164" stroke="${INK}" stroke-width="1.5"/>
    <line x1="345" y1="142" x2="345" y2="164" stroke="${INK}" stroke-width="1.5"/>

    <!-- 3 Subsidiary Cards -->
    <g transform="translate(24, 164)">
      <rect x="0" y="0" width="122" height="84" rx="5" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="12" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}">ENTITY A (USD)</text>
      <text x="12" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}"> Mfg &amp; Wholesale</text>
      <text x="12" y="60" font-family="monospace" font-size="9" fill="${MUTED_INK}">4 Warehouses</text>
      <text x="12" y="74" font-family="monospace" font-size="9" fill="${VERDIGRIS}">RLS Policy: #01</text>
    </g>

    <g transform="translate(159, 164)">
      <rect x="0" y="0" width="122" height="84" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}">ENTITY B (EUR)</text>
      <text x="12" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">EU Distribution</text>
      <text x="12" y="60" font-family="monospace" font-size="9" fill="${MUTED_INK}">3 Branches</text>
      <text x="12" y="74" font-family="monospace" font-size="9" fill="${VERDIGRIS}">RLS Policy: #02</text>
    </g>

    <g transform="translate(294, 164)">
      <rect x="0" y="0" width="122" height="84" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}">ENTITY C (GBP)</text>
      <text x="12" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">Direct Retail</text>
      <text x="12" y="60" font-family="monospace" font-size="9" fill="${MUTED_INK}">9 POS Nodes</text>
      <text x="12" y="74" font-family="monospace" font-size="9" fill="${VERDIGRIS}">RLS Policy: #03</text>
    </g>

    <!-- Runtime Schema Extension Layer -->
    <g transform="translate(24, 270)">
      <rect x="0" y="0" width="392" height="82" rx="6" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">METADATA-DRIVEN CUSTOM SCHEMA ENGINE</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Custom fields indexed via GIN on JSONB (0 migrations)</text>
      <text x="16" y="64" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Per-subsidiary DAG approval chains &amp; RBAC</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">QUERY P95</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">&lt; 50ms</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">LEDGER ROWS</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">10M+ Rows</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">TENANT LEAK</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">0.00%</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: Double-Entry Inventory & Consolidated Ledger -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">CONSOLIDATED DOUBLE-ENTRY LEDGER</text>
    <circle cx="438" cy="25" r="4" fill="${SIGNAL}"/>

    <!-- Journal Stream -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="422" height="62" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Inter-Company Stock Transfer #IC-8841</text>
      <text x="16" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">Entity A → Entity B (EU-Central) · Auto-Eliminated</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${VERDIGRIS}" opacity="0.15"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}" text-anchor="middle">BALANCED</text>
    </g>

    <g transform="translate(24, 148)">
      <rect x="0" y="0" width="422" height="62" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Purchase Order Approval #PO-4092</text>
      <text x="16" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">Rule: &gt;\$25k → Branch Mgr + CFO Sign-off</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${SIGNAL}" opacity="0.15"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}" text-anchor="middle">APPROVED</text>
    </g>

    <g transform="translate(24, 224)">
      <rect x="0" y="0" width="422" height="62" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Lot &amp; Serial Valuation (FIFO / Weighted Avg)</text>
      <text x="16" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">Append-only stock journal · Zero negative drift</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${INK}" opacity="0.1"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}" text-anchor="middle">VERIFIED</text>
    </g>

    <!-- Consolidated P&L Strip -->
    <g transform="translate(24, 306)">
      <rect x="0" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">GROUP ROLLUP</text>
      <text x="14" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${INK}">Real-Time</text>

      <rect x="145" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="159" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">AUDIT TRAIL</text>
      <text x="159" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${VERDIGRIS}">Immutable</text>

      <rect x="290" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="304" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">MONTH CLOSE</text>
      <text x="304" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${SIGNAL}">-78% Time</text>
    </g>

    <line x1="24" y1="396" x2="446" y2="396" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="422" font-family="monospace" font-size="10" fill="${MUTED_INK}">Partitioned PostgreSQL tables + Materialized Rollup Views</text>
  </g>
  `
);

// 02. VoxFlow — Autonomous Voice & Lead Dispatch Engine
const voxflowSvg = frameSvg(
  'FIG 02 // VOXFLOW AUTONOMOUS VOICE & LEAD DISPATCH ENGINE',
  'VOICE LATENCY: < 500MS SUB-SECOND',
  `
  <!-- Left: Full-Duplex Voice Pipeline -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">SIP / WEBRTC VOICE STREAMING</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Audio Waveform Box -->
    <rect x="24" y="72" width="392" height="104" rx="6" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
    <text x="40" y="94" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">LIVE CALL // BARGE-IN VAD ACTIVE (8kHz μ-law)</text>
    <path d="M 40 135 L 75 135 L 88 112 L 100 156 L 114 98 L 128 164 L 142 104 L 156 152 L 170 120 L 185 142 L 205 135 L 235 135 L 248 110 L 262 158 L 276 102 L 290 160 L 304 118 L 318 145 L 340 135 L 395 135" fill="none" stroke="${SIGNAL}" stroke-width="2.5"/>

    <!-- Trigger Modes -->
    <g transform="translate(24, 194)">
      <rect x="0" y="0" width="188" height="76" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}">INBOUND RECEPTION</text>
      <text x="14" y="44" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">24/7 First-Ring Pickup</text>
      <text x="14" y="62" font-family="monospace" font-size="9" fill="${MUTED_INK}">Concurrent line bursting</text>

      <rect x="204" y="0" width="188" height="76" rx="5" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="218" y="24" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}">OUTBOUND SPEED-TO-LEAD</text>
      <text x="218" y="44" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Dials Leads in &lt; 45s</text>
      <text x="218" y="62" font-family="monospace" font-size="9" fill="${MUTED_INK}">Web form &amp; ad webhook trigger</text>
    </g>

    <!-- Guardrail State Machine -->
    <g transform="translate(24, 286)">
      <rect x="0" y="0" width="392" height="68" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">CONVERSATION STATE MACHINE</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${MUTED_INK}">Greeting → Intent &amp; Budget → Slot Lock → SIP Transfer</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">TURN LATENCY</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">460ms</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">LEAD CALL</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">&lt; 45 sec</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">MISSED CALLS</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">0</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: Transactional Calendar Lock & CRM Writeback -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">CALENDAR LOCK &amp; CRM DISPATCH</text>
    <circle cx="438" cy="25" r="4" fill="${VERDIGRIS}"/>

    <!-- Booking Card -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="422" height="92" rx="5" fill="${SURFACE}" stroke="${VERDIGRIS}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${VERDIGRIS}">✓ ATOMIC SLOT RESERVATION LOCKED</text>
      <text x="16" y="48" font-family="sans-serif" font-size="13" font-weight="bold" fill="${INK}">Thu, 14:30 EST — Senior Specialist Consultation</text>
      <text x="16" y="70" font-family="monospace" font-size="10" fill="${MUTED_INK}">Google Calendar + HubSpot Deal #HS-2941 + SMS Confirmation Sent</text>
    </g>

    <!-- Structured Call Extraction -->
    <g transform="translate(24, 180)">
      <rect x="0" y="0" width="422" height="106" rx="5" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">STRUCTURED POST-CALL PAYLOAD</text>
      <text x="16" y="48" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Caller Intent: Commercial HVAC Retrofit (Multi-Site)</text>
      <text x="16" y="68" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Qualification Score: 94/100 (Urgent Timeline · Approved Budget)</text>
      <text x="16" y="88" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Action: Booked Slot + Automated Follow-up Cadence Scheduled</text>
    </g>

    <!-- Summary Metrics -->
    <g transform="translate(24, 306)">
      <rect x="0" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <rect x="145" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <rect x="290" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>

      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">BOOKING RATE</text>
      <text x="14" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${VERDIGRIS}">3.4x Lift</text>

      <text x="159" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">DOUBLE-BOOKS</text>
      <text x="159" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${INK}">Zero</text>

      <text x="304" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">CRM SYNC</text>
      <text x="304" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${SIGNAL}">100% Auto</text>
    </g>

    <line x1="24" y1="396" x2="446" y2="396" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="422" font-family="monospace" font-size="10" fill="${MUTED_INK}">Twilio SIP Trunking · Deepgram Nova-2 · ElevenLabs Turbo · Redis Lock</text>
  </g>
  `
);

// 03. AdVantage — Omnichannel AI Sales & Campaign Engine
const advantageAiSvg = frameSvg(
  'FIG 03 // ADVANTAGE OMNICHANNEL AI SALES & CAMPAIGN ENGINE',
  'CHANNELS: WHATSAPP · INSTAGRAM · MESSENGER',
  `
  <!-- Left: Unified Meta Messaging Inbox -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">UNIFIED SOCIAL DM &amp; WHATSAPP INBOX</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Channel Thread 1 -->
    <g transform="translate(24, 70)">
      <rect x="0" y="0" width="392" height="68" rx="5" fill="${BG}" stroke="${VERDIGRIS}" stroke-width="1.5"/>
      <text x="14" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}">WHATSAPP BUSINESS // +1 (512) 894-****</text>
      <text x="14" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">"Is SKU #402 in stock in King size, and when can it ship?"</text>
      <text x="14" y="58" font-family="monospace" font-size="9" fill="${MUTED_INK}">AI Closer: Verified 14 units in WH-East · Sent Stripe Checkout Link</text>
    </g>

    <!-- Channel Thread 2 -->
    <g transform="translate(24, 150)">
      <rect x="0" y="0" width="392" height="68" rx="5" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="14" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}">INSTAGRAM DM // AD COMMENT TRIGGER</text>
      <text x="14" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">Commented "PRICE" on Q4 Carousel Reel #08</text>
      <text x="14" y="58" font-family="monospace" font-size="9" fill="${MUTED_INK}">AI Closer: Sent private spec sheet + 10% bundle offer in 1.8s</text>
    </g>

    <!-- Channel Thread 3 -->
    <g transform="translate(24, 230)">
      <rect x="0" y="0" width="392" height="68" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}">FACEBOOK MESSENGER // VIP ESCALATION</text>
      <text x="14" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">Custom B2B wholesale inquiry (120 units)</text>
      <text x="14" y="58" font-family="monospace" font-size="9" fill="${MUTED_INK}">Action: Routed to Senior Rep with full thread &amp; margin summary</text>
    </g>

    <!-- Grounding bar -->
    <g transform="translate(24, 312)">
      <rect x="0" y="0" width="392" height="44" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="27" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">CATALOG GROUNDING: 0 Hallucinated Prices or Promos</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">REPLY SPEED</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">1.8 sec</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">AUTO-RESOLVED</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">84.2%</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">DM CONVERSION</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">+38.5%</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: Closed-Loop Ad Campaign & Spend Guardrails -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">META AD PLANNER &amp; SPEND CIRCUIT BREAKER</text>
    <circle cx="438" cy="25" r="4" fill="${SIGNAL}"/>

    <!-- ROAS Chart -->
    <g transform="translate(36, 84)">
      <line x1="0" y1="140" x2="398" y2="140" stroke="${INK}" stroke-width="1.5"/>
      <line x1="0" y1="0" x2="0" y2="140" stroke="${INK}" stroke-width="1.5"/>
      <line x1="0" y1="35" x2="398" y2="35" stroke="${RULE}" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="0" y1="70" x2="398" y2="70" stroke="${RULE}" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="0" y1="105" x2="398" y2="105" stroke="${RULE}" stroke-width="1" stroke-dasharray="3 3"/>

      <path d="M 0 125 C 70 118, 130 95, 190 70 C 260 42, 330 22, 398 16" fill="none" stroke="${SIGNAL}" stroke-width="2.5"/>
      <circle cx="190" cy="70" r="4.5" fill="${SIGNAL}"/>
      <circle cx="398" cy="16" r="4.5" fill="${SIGNAL}"/>

      <path d="M 0 130 C 100 126, 200 120, 398 112" fill="none" stroke="${MUTED_INK}" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="398" y="10" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}" text-anchor="end">CLOSED-LOOP ROAS: 4.6x</text>
      <text x="398" y="128" font-family="monospace" font-size="9" fill="${MUTED_INK}" text-anchor="end">UNASSISTED BASELINE</text>
    </g>

    <!-- Spend Guardrail Box -->
    <g transform="translate(24, 240)">
      <rect x="0" y="0" width="422" height="50" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="21" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}">HARD SPEND CAP ENFORCED IN CODE</text>
      <text x="14" y="39" font-family="monospace" font-size="10" fill="${INK}">Daily Ceiling: \$2,500 · CPA Breaker: \$42.00 · Human Gate: Required</text>
    </g>

    <!-- Bottom summary table -->
    <g transform="translate(24, 306)">
      <rect x="0" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">BLENDED CAC</text>
      <text x="14" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${VERDIGRIS}">-36.4%</text>

      <rect x="145" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="159" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">OVERSPEND</text>
      <text x="159" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${INK}">\$0.00</text>

      <rect x="290" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="304" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">CHANNELS</text>
      <text x="304" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${SIGNAL}">FB · IG · WA</text>
    </g>

    <line x1="24" y1="396" x2="446" y2="396" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="422" font-family="monospace" font-size="10" fill="${MUTED_INK}">Meta Graph API · WhatsApp Cloud API · Catalog RAG · Stripe Webhooks</text>
  </g>
  `
);

// 04. Opsera — Slack-Native Company Operations OS
const opseraSvg = frameSvg(
  'FIG 04 // OPSERA SLACK-NATIVE COMPANY OPERATIONS OS',
  'SLACK COMMANDS + RBAC + WEB COCKPIT',
  `
  <!-- Left: Slack Command & AI Structuring Surface -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">SLACK WORKSPACE EXECUTION SURFACE</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Slash Command 1 -->
    <g transform="translate(24, 70)">
      <rect x="0" y="0" width="392" height="66" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="22" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">/standup submit · #eng-platform</text>
      <text x="14" y="42" font-family="sans-serif" font-size="11" fill="${INK}">Shipped Stripe webhook retry worker · Blocked on AWS IAM role</text>
      <text x="14" y="58" font-family="monospace" font-size="9" fill="${VERDIGRIS}">✓ Linked to Task #OP-312 · Blocker routed to DevOps Lead</text>
    </g>

    <!-- Slash Command 2 -->
    <g transform="translate(24, 148)">
      <rect x="0" y="0" width="392" height="66" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="22" font-family="monospace" font-size="10" font-weight="bold" fill="${VERDIGRIS}">/leave request · Nov 18–Nov 20 (3 Days)</text>
      <text x="14" y="42" font-family="sans-serif" font-size="11" fill="${INK}">Auto-checked sprint capacity &amp; PTO balance (11 days remaining)</text>
      <text x="14" y="58" font-family="monospace" font-size="9" fill="${MUTED_INK}">Approved by EM in Slack → Reassigned 2 active sprint tickets</text>
    </g>

    <!-- AI Message Structurer -->
    <g transform="translate(24, 226)">
      <rect x="0" y="0" width="392" height="74" rx="5" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="14" y="22" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">AI THREAD-TO-TASK STRUCTURER</text>
      <text x="14" y="42" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">14-message client thread → Structured Epic + 4 Subtasks</text>
      <text x="14" y="60" font-family="monospace" font-size="9" fill="${MUTED_INK}">Assigned Owners · Priority: High · Acceptance Criteria Attached</text>
    </g>

    <!-- RBAC Strip -->
    <g transform="translate(24, 312)">
      <rect x="0" y="0" width="392" height="44" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="27" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">RBAC: Admin · Project Lead · Contributor · Observer</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">SLACK ACK</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">&lt; 250ms</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">STANDUP RATE</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">98.4%</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">MEETING CUT</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">-6.5h/wk</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: Unified Executive Web Dashboard -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">UNIFIED EXECUTIVE WEB COMMAND CENTER</text>
    <circle cx="438" cy="25" r="4" fill="${VERDIGRIS}"/>

    <!-- Sprint & Backlog Rows -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="422" height="62" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="31" r="6" fill="${VERDIGRIS}"/>
      <text x="36" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Checkout API V2 Sprint · 18/20 Complete</text>
      <text x="36" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">Lead: @sarah · Velocity: 94% · 0 Blockers</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${VERDIGRIS}" opacity="0.15"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}" text-anchor="middle">ON TRACK</text>
    </g>

    <g transform="translate(24, 148)">
      <rect x="0" y="0" width="422" height="62" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="31" r="6" fill="${SIGNAL}"/>
      <text x="36" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">SOC2 Audit Logging Epic · Stalled 36h</text>
      <text x="36" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">Auto-Nudge Sent to @marcus · Escalated</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${SIGNAL}" opacity="0.15"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}" text-anchor="middle">FOLLOW-UP</text>
    </g>

    <g transform="translate(24, 224)">
      <rect x="0" y="0" width="422" height="62" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="31" r="6" fill="${INK}"/>
      <text x="36" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Company-Wide Leave &amp; Capacity Matrix</text>
      <text x="36" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">34 Active Engineers · 2 On Leave · Adjusted</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${INK}" opacity="0.1"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}" text-anchor="middle">SYNCED</text>
    </g>

    <!-- Operational Metrics -->
    <g transform="translate(24, 306)">
      <rect x="0" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">CONTEXT SWITCH</text>
      <text x="14" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${VERDIGRIS}">Eliminated</text>

      <rect x="145" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="159" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">RBAC SCOPES</text>
      <text x="159" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${INK}">4 Roles</text>

      <rect x="290" y="0" width="132" height="68" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="304" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">STATE DRIFT</text>
      <text x="304" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${SIGNAL}">Zero</text>
    </g>

    <line x1="24" y1="396" x2="446" y2="396" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="422" font-family="monospace" font-size="10" fill="${MUTED_INK}">Slack Bolt SDK · BullMQ Event Workers · Next.js Command Cockpit</text>
  </g>
  `
);

// 05. SyncDaily — Personalized AI Intelligence Platform
const syncdailySvg = frameSvg(
  'FIG 05 // SYNCDAILY PERSONALIZED AI INTELLIGENCE PLATFORM',
  'ANALYZE ONCE · TAILOR PER PERSONA',
  `
  <!-- Left: Multi-Source AI/Tech Ingestion & Clustering -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">INGESTION &amp; SEMANTIC DEDUPLICATION</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Source Stream -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="392" height="46" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="23" r="5" fill="${SIGNAL}"/>
      <text x="36" y="27" font-family="monospace" font-size="11" fill="${INK}">arXiv CS.AI / CS.LG · 180+ Daily Preprints</text>
    </g>
    <g transform="translate(24, 130)">
      <rect x="0" y="0" width="392" height="46" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="23" r="5" fill="${VERDIGRIS}"/>
      <text x="36" y="27" font-family="monospace" font-size="11" fill="${INK}">GitHub Trending · Model Releases &amp; Benchmarks</text>
    </g>
    <g transform="translate(24, 188)">
      <rect x="0" y="0" width="392" height="46" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <circle cx="20" cy="23" r="5" fill="${INK}"/>
      <text x="36" y="27" font-family="monospace" font-size="11" fill="${INK}">Big Tech Labs · SEC Filings · Venture Rounds</text>
    </g>

    <!-- Clustering Engine Box -->
    <g transform="translate(24, 250)">
      <rect x="0" y="0" width="392" height="102" rx="6" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">DENSE VECTOR CLUSTERING (PGVECTOR)</text>
      <text x="16" y="48" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">40+ Duplicate Articles → 1 Canonical Event Graph</text>
      <text x="16" y="70" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Verified primary citations (arXiv DOI / Repo URL)</text>
      <text x="16" y="88" font-family="monospace" font-size="10" fill="${MUTED_INK}">• O(Clusters) LLM cost decoupling (Zero per-user bloat)</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">DAILY SOURCES</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">3,200+</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">NOISE CUT</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">98.6%</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">CITATIONS</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">100% Linked</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: Role-Personalized Decision Briefings -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">ROLE-PERSONALIZED IMPACT &amp; ACTION ENGINE</text>
    <circle cx="438" cy="25" r="4" fill="${SIGNAL}"/>

    <!-- Persona 1: Founder / Executive -->
    <g transform="translate(24, 70)">
      <rect x="0" y="0" width="422" height="86" rx="5" fill="${SURFACE}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="16" y="22" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">PERSONA 01 // BUSINESS LEADER &amp; FOUNDER</text>
      <text x="16" y="44" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Commercial Impact, Build-vs-Buy &amp; Defensibility</text>
      <text x="16" y="66" font-family="monospace" font-size="10" fill="${MUTED_INK}">Action: Shift inference workloads to open-weights (-62% COGS)</text>
    </g>

    <!-- Persona 2: Software / ML Engineer -->
    <g transform="translate(24, 170)">
      <rect x="0" y="0" width="422" height="86" rx="5" fill="${SURFACE}" stroke="${VERDIGRIS}" stroke-width="1.5"/>
      <text x="16" y="22" font-family="monospace" font-size="10" font-weight="bold" fill="${VERDIGRIS}">PERSONA 02 // SOFTWARE &amp; ML ENGINEER</text>
      <text x="16" y="44" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Architecture Benchmarks, VRAM Specs &amp; Migration Path</text>
      <text x="16" y="66" font-family="monospace" font-size="10" fill="${MUTED_INK}">Action: Drop-in vLLM Speculative Decoding PR template attached</text>
    </g>

    <!-- Persona 3: Student & Researcher -->
    <g transform="translate(24, 270)">
      <rect x="0" y="0" width="422" height="86" rx="5" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="22" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">PERSONA 03 // STUDENT &amp; RESEARCHER</text>
      <text x="16" y="44" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Foundational Concepts, Skill Roadmap &amp; Open Problems</text>
      <text x="16" y="66" font-family="monospace" font-size="10" fill="${MUTED_INK}">Action: Curated replication notebook + portfolio project brief</text>
    </g>

    <line x1="24" y1="382" x2="446" y2="382" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="412" font-family="monospace" font-size="10" fill="${MUTED_INK}">Delivered daily via Interactive Web Feed &amp; Role-Routed Digest</text>
  </g>
  `
);

// 06. LedgerFlow — Autonomous AP & 3-Way Match Pipeline
const ledgerflowSvg = frameSvg(
  'FIG 06 // LEDGERFLOW AUTONOMOUS AP & 3-WAY MATCH PIPELINE',
  'DETERMINISTIC MATH + 3-WAY PO/GRN MATCH',
  `
  <!-- Left: Multi-Format Document Intake & Vision Extraction -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">MULTI-FORMAT INVOICE &amp; RECEIPT INTAKE</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Document Cards -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="392" height="64" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">VENDOR PDF // #INV-2026-8841 (3 Pages, Scanned)</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${MUTED_INK}">Extracted: 28 Line Items · Tax: \$1,420.00 · Total: \$19,170.00</text>
    </g>

    <g transform="translate(24, 150)">
      <rect x="0" y="0" width="392" height="64" rx="5" fill="${BG}" stroke="${VERDIGRIS}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${VERDIGRIS}">DETERMINISTIC ARITHMETIC VERIFICATION</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${INK}">Σ(Qty × UnitPrice) + Tax - Discount == InvoiceTotal [PASS]</text>
    </g>

    <g transform="translate(24, 228)">
      <rect x="0" y="0" width="392" height="64" rx="5" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">FUZZY DUPLICATE &amp; FRAUD GUARD</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${INK}">Cross-checked SHA-256 + Vendor Tax ID + Date Window (±5d)</text>
    </g>

    <g transform="translate(24, 308)">
      <rect x="0" y="0" width="392" height="44" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="27" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">GL CODING: Historical Vendor Mapping (99.4% Precision)</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">STRAIGHT-THRU</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">87.4%</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">MATH ERRORS</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">0 Posted</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">CYCLE TIME</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">11 sec</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: 3-Way Match Engine & Exception Workbench -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">3-WAY MATCH ENGINE &amp; ERP VOUCHER SYNC</text>
    <circle cx="438" cy="25" r="4" fill="${VERDIGRIS}"/>

    <!-- Match Row 1 -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="422" height="66" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">PO #4410 ↔ GRN #9012 ↔ Invoice #8841</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${MUTED_INK}">Qty &amp; Price Variance: 0.0% → Auto-Posted</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${VERDIGRIS}" opacity="0.15"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}" text-anchor="middle">MATCHED</text>
    </g>

    <!-- Match Row 2 -->
    <g transform="translate(24, 152)">
      <rect x="0" y="0" width="422" height="66" rx="4" fill="${SURFACE}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">PO #4418 ↔ GRN #9019 ↔ Invoice #8890</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${SIGNAL}">Flagged: Unit price +6.2% above PO contract</text>
      <rect x="330" y="10" width="76" height="22" rx="3" fill="${SIGNAL}" opacity="0.15"/>
      <text x="368" y="25" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}" text-anchor="middle">EXCEPTION</text>
    </g>

    <!-- Match Row 3 -->
    <g transform="translate(24, 232)">
      <rect x="0" y="0" width="422" height="60" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">Idempotent Accounting Ledger Sync</text>
      <text x="16" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">QuickBooks · Xero · NetSuite · Okebase ERP (Source PDF Attached)</text>
    </g>

    <!-- Bottom summary table -->
    <g transform="translate(24, 308)">
      <rect x="0" y="0" width="132" height="66" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">OVERPAYMENTS</text>
      <text x="14" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${VERDIGRIS}">Blocked</text>

      <rect x="145" y="0" width="132" height="66" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="159" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">HUMAN REVIEW</text>
      <text x="159" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${INK}">1-Click Diff</text>

      <rect x="290" y="0" width="132" height="66" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="304" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">CLOSE SPEED</text>
      <text x="304" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${SIGNAL}">4.5x Faster</text>
    </g>

    <line x1="24" y1="396" x2="446" y2="396" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="422" font-family="monospace" font-size="10" fill="${MUTED_INK}">Vision Layout Parser · Deterministic Validator · 3-Way Match Engine</text>
  </g>
  `
);

// 07. RunwayIQ — 13-Week Treasury, BI & Demand Forecaster
const runwayiqSvg = frameSvg(
  'FIG 07 // RUNWAYIQ 13-WEEK TREASURY, BI & DEMAND FORECASTER',
  'BACKTESTED P10 / P50 / P90 FORECAST BANDS',
  `
  <!-- Left: Cross-Stack ETL & Inventory Reorder Engine -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">UNIFIED TREASURY &amp; SKU DEMAND WAREHOUSE</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Connectors -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="188" height="58" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}">REVENUE &amp; ORDERS</text>
      <text x="12" y="42" font-family="monospace" font-size="10" fill="${MUTED_INK}">Shopify · Stripe · HubSpot</text>

      <rect x="204" y="0" width="188" height="58" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="216" y="22" font-family="monospace" font-size="9" font-weight="bold" fill="${INK}">LEDGER &amp; BANKING</text>
      <text x="216" y="42" font-family="monospace" font-size="10" fill="${MUTED_INK}">QuickBooks · Xero · Plaid</text>
    </g>

    <!-- SKU Reorder Alert Box -->
    <g transform="translate(24, 146)">
      <rect x="0" y="0" width="392" height="96" rx="5" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">SKU STOCKOUT &amp; LEAD-TIME RADAR</text>
      <text x="16" y="48" font-family="sans-serif" font-size="12" font-weight="bold" fill="${INK}">SKU-104 (Core Assembly) · Stockout in 19 Days</text>
      <text x="16" y="68" font-family="monospace" font-size="10" fill="${MUTED_INK}">Supplier Lead Time: 21d · Safety Stock Buffer: 14d</text>
      <text x="16" y="84" font-family="monospace" font-size="10" fill="${VERDIGRIS}">→ Recommended PO: 1,250 Units (\$38,400 Cash Impact)</text>
    </g>

    <!-- What-If Simulator -->
    <g transform="translate(24, 258)">
      <rect x="0" y="0" width="392" height="94" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">INTERACTIVE "WHAT-IF" SCENARIO ENGINE</text>
      <text x="16" y="46" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Scenario: AR collection slips +15d &amp; +2 Senior Hires</text>
      <text x="16" y="66" font-family="monospace" font-size="10" fill="${MUTED_INK}">• Week-9 Cash Trough: \$412k (Above \$350k Covenant Floor)</text>
      <text x="16" y="82" font-family="monospace" font-size="9" fill="${VERDIGRIS}">Deterministic Python model · Zero LLM math fabrication</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">HORIZON</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">13 Weeks</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">MODEL WAPE</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">4.8%</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">STOCKOUTS</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">-64%</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: 13-Week Probabilistic Cash Curve & Monday Briefing -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">13-WEEK CASH RUNWAY (P10 / P50 / P90 BANDS)</text>
    <circle cx="438" cy="25" r="4" fill="${SIGNAL}"/>

    <!-- Forecast Fan Chart -->
    <g transform="translate(36, 84)">
      <line x1="0" y1="145" x2="398" y2="145" stroke="${INK}" stroke-width="1.5"/>
      <line x1="0" y1="0" x2="0" y2="145" stroke="${INK}" stroke-width="1.5"/>

      <!-- Confidence Band Polygon (P10-P90) -->
      <polygon points="0,95 80,82 160,96 240,65 320,45 398,30 398,85 320,92 240,110 160,128 80,108 0,95" fill="${VERDIGRIS}" opacity="0.16"/>

      <!-- P90 Upper Bound -->
      <path d="M 0 95 L 80 82 L 160 96 L 240 65 L 320 45 L 398 30" fill="none" stroke="${VERDIGRIS}" stroke-width="1.2" stroke-dasharray="3 3"/>
      <!-- P50 Median Forecast -->
      <path d="M 0 95 L 80 95 L 160 112 L 240 88 L 320 68 L 398 56" fill="none" stroke="${VERDIGRIS}" stroke-width="2.5"/>
      <!-- P10 Downside Bound -->
      <path d="M 0 95 L 80 108 L 160 128 L 240 110 L 320 92 L 398 85" fill="none" stroke="${SIGNAL}" stroke-width="1.5" stroke-dasharray="4 3"/>

      <!-- Minimum Cash Threshold Line -->
      <line x1="0" y1="132" x2="398" y2="132" stroke="${SIGNAL}" stroke-width="1"/>
      <text x="398" y="24" font-family="monospace" font-size="9" font-weight="bold" fill="${VERDIGRIS}" text-anchor="end">P50 MEDIAN: \$1.18M (WK 13)</text>
      <text x="398" y="127" font-family="monospace" font-size="9" font-weight="bold" fill="${SIGNAL}" text-anchor="end">COVENANT FLOOR: \$350K</text>
    </g>

    <!-- Monday 07:00 AM Executive Briefing Card -->
    <g transform="translate(24, 248)">
      <rect x="0" y="0" width="422" height="126" rx="5" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">MONDAY 07:00 AM // EXECUTIVE ANOMALY BRIEFING</text>
      <text x="16" y="48" font-family="monospace" font-size="10" fill="${MUTED_INK}">1. Net Cash Position: \$842,100 (+6.4% vs Forecast P50)</text>
      <text x="16" y="68" font-family="monospace" font-size="10" fill="${SIGNAL}">2. Alert: Invoice #INV-904 (\$64k) 8d past historical mean</text>
      <text x="16" y="88" font-family="monospace" font-size="10" fill="${VERDIGRIS}">3. Action: Place PO for SKU-104 before Friday (sea-freight)</text>
      <text x="16" y="108" font-family="monospace" font-size="9" fill="${MUTED_INK}">Backtested against Seasonal Naive baseline prior to deployment</text>
    </g>

    <line x1="24" y1="396" x2="446" y2="396" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="422" font-family="monospace" font-size="10" fill="${MUTED_INK}">statsforecast · LightGBM · dbt Semantic Layer · PostgreSQL</text>
  </g>
  `
);

// 08. VaultRAG — Permission-Scoped Knowledge & Data Engine
const vaultragSvg = frameSvg(
  'FIG 08 // VAULTRAG PERMISSION-SCOPED KNOWLEDGE & DATA ENGINE',
  'ACL-ENFORCED HYBRID RAG + DATA HYGIENE',
  `
  <!-- Left: Data Hygiene, Fuzzy Deduplication & ACL Ingestion -->
  <g transform="translate(96, 130)">
    <rect x="0" y="0" width="440" height="450" rx="8" fill="${SURFACE}" stroke="${RULE}" stroke-width="1" filter="url(#cardShadow)"/>
    <text x="24" y="36" font-family="monospace" font-size="12" font-weight="bold" fill="${INK}" letter-spacing="1">ENTITY DEDUPLICATION &amp; ACL INGESTION</text>
    <line x1="24" y1="52" x2="416" y2="52" stroke="${RULE}" stroke-width="1"/>

    <!-- Data Health & Splink Deduplication -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="392" height="82" rx="5" fill="${BG}" stroke="${VERDIGRIS}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${VERDIGRIS}">STAGE 01 // PROBABILISTIC ENTITY RESOLUTION (SPLINK)</text>
      <text x="16" y="46" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">Merged 4,120 Duplicate CRM &amp; Vendor Records</text>
      <text x="16" y="66" font-family="monospace" font-size="9" fill="${MUTED_INK}">Data Health Score: 64% → 98.7% · Supersedes stale SOP versions</text>
    </g>

    <!-- ACL Pre-Filter Matrix -->
    <g transform="translate(24, 170)">
      <rect x="0" y="0" width="392" height="106" rx="5" fill="${BG}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">STAGE 02 // PRE-RETRIEVAL ACL SECURITY GATE</text>
      <text x="16" y="48" font-family="monospace" font-size="10" fill="${INK}">✓ Role: Field_Ops → Allowed: Engineering_SOPs, Safety_Manuals</text>
      <text x="16" y="68" font-family="monospace" font-size="10" fill="${SIGNAL}">✕ Blocked at SQL Layer: Board_Decks, Payroll_2026, M&amp;A_Legal</text>
      <text x="16" y="88" font-family="monospace" font-size="9" fill="${MUTED_INK}">Zero restricted chunks ever enter LLM prompt context</text>
    </g>

    <!-- Hybrid Search Strip -->
    <g transform="translate(24, 292)">
      <rect x="0" y="0" width="392" height="60" rx="5" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${INK}">STAGE 03 // HYBRID BM25 + DENSE VECTOR + RERANKER</text>
      <text x="16" y="44" font-family="monospace" font-size="10" fill="${MUTED_INK}">Reciprocal Rank Fusion + Cross-Encoder Top-K Verification</text>
    </g>

    <!-- Bottom Metrics -->
    <g transform="translate(24, 370)">
      <rect x="0" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="12" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">ACL LEAKAGE</text>
      <text x="12" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${VERDIGRIS}">0.00%</text>

      <rect x="135" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="147" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">DATA HEALTH</text>
      <text x="147" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${INK}">98.7%</text>

      <rect x="270" y="0" width="122" height="56" rx="4" fill="${BG}" stroke="${RULE}" stroke-width="1"/>
      <text x="282" y="20" font-family="monospace" font-size="9" fill="${MUTED_INK}">HALLUCINATION</text>
      <text x="282" y="42" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">Abstains</text>
    </g>
  </g>

  <!-- Center Arrow -->
  <g transform="translate(546, 330)">
    <line x1="0" y1="25" x2="64" y2="25" stroke="${INK}" stroke-width="2"/>
    <polygon points="64,20 76,25 64,30" fill="${INK}"/>
  </g>

  <!-- Right: Cited Answer Synthesis & Knowledge Gap Telemetry -->
  <g transform="translate(634, 130)">
    <rect x="0" y="0" width="470" height="450" rx="8" fill="${BG}" stroke="${INK}" stroke-width="1.5" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="470" height="50" rx="8" fill="${INK}"/>
    <text x="24" y="31" font-family="monospace" font-size="12" font-weight="bold" fill="${BG}" letter-spacing="1">VERIFIED CITATION RESPONSE &amp; GAP RADAR</text>
    <circle cx="438" cy="25" r="4" fill="${VERDIGRIS}"/>

    <!-- Cited Answer Card -->
    <g transform="translate(24, 72)">
      <rect x="0" y="0" width="422" height="122" rx="5" fill="${SURFACE}" stroke="${VERDIGRIS}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${VERDIGRIS}">✓ VERIFIED ANSWER (CONFIDENCE: 0.94)</text>
      <text x="16" y="48" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="${INK}">"Lockout/Tagout requires dual sign-off for &gt;480V panels."</text>
      <text x="16" y="72" font-family="monospace" font-size="10" fill="${MUTED_INK}">Citation [1]: Safety_SOP_v4.2.pdf · Page 14, Sec 3.2 (Active)</text>
      <text x="16" y="92" font-family="monospace" font-size="10" fill="${MUTED_INK}">Citation [2]: Electrical_Compliance_2026.docx · Clause 8.1</text>
      <text x="16" y="110" font-family="monospace" font-size="9" fill="${VERDIGRIS}">Deprecated v3.1 SOP automatically excluded from retrieval</text>
    </g>

    <!-- Strict Abstention & Knowledge Gap Logger -->
    <g transform="translate(24, 210)">
      <rect x="0" y="0" width="422" height="84" rx="5" fill="${SURFACE}" stroke="${SIGNAL}" stroke-width="1.5"/>
      <text x="16" y="24" font-family="monospace" font-size="10" font-weight="bold" fill="${SIGNAL}">STRICT ABSTENTION &amp; DOC GAP TELEMETRY</text>
      <text x="16" y="46" font-family="sans-serif" font-size="11" font-weight="bold" fill="${INK}">Query: "Cold-storage lithium customs form for Brazil"</text>
      <text x="16" y="66" font-family="monospace" font-size="10" fill="${MUTED_INK}">Score: 0.31 (&lt;0.78 gate) → Abstained + Logged Missing SOP</text>
    </g>

    <!-- Bottom summary table -->
    <g transform="translate(24, 310)">
      <rect x="0" y="0" width="132" height="66" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="14" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">CITATION RATE</text>
      <text x="14" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${VERDIGRIS}">100%</text>

      <rect x="145" y="0" width="132" height="66" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="159" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">LOOKUP TIME</text>
      <text x="159" y="50" font-family="sans-serif" font-size="17" font-weight="bold" fill="${INK}">1.4 sec</text>

      <rect x="290" y="0" width="132" height="66" rx="4" fill="${SURFACE}" stroke="${RULE}" stroke-width="1"/>
      <text x="304" y="24" font-family="monospace" font-size="9" fill="${MUTED_INK}">SOURCES</text>
      <text x="304" y="50" font-family="sans-serif" font-size="16" font-weight="bold" fill="${SIGNAL}">Drive · SP</text>
    </g>

    <line x1="24" y1="396" x2="446" y2="396" stroke="${RULE}" stroke-width="1"/>
    <text x="24" y="422" font-family="monospace" font-size="10" fill="${MUTED_INK}">Splink Entity Resolution · pgvector + BM25 · Cross-Encoder Rerank</text>
  </g>
  `
);

async function build() {
  const dir = path.resolve('public/images/work');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tasks = [
    { name: 'okebase.webp', svg: okebaseSvg },
    { name: 'voxflow.webp', svg: voxflowSvg },
    { name: 'ai-receptionist.webp', svg: voxflowSvg },
    { name: 'advantage-ai.webp', svg: advantageAiSvg },
    { name: 'opsera.webp', svg: opseraSvg },
    { name: 'syncdaily.webp', svg: syncdailySvg },
    { name: 'ledgerflow.webp', svg: ledgerflowSvg },
    { name: 'runwayiq.webp', svg: runwayiqSvg },
    { name: 'vaultrag.webp', svg: vaultragSvg },
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
