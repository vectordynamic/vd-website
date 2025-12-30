import React from 'react';

export const techCategories = {
  backend: {
    title: 'Core Engineering',
    skills: ['Java', 'Go', 'Python', 'Node.js', 'Spring Boot', 'Django', 'FastAPI', 'gRPC', 'GraphQL']
  },
  frontend: {
    title: 'Interface & Mobile',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'React Native']
  },
  cloud: {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana', 'CI/CD']
  },
  data: {
    title: 'Data Powerhouse',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Kafka', 'RabbitMQ']
  },
  ai: {
    title: 'Artificial Intelligence',
    skills: ['PyTorch', 'TensorFlow', 'OpenAI', 'LangChain', 'Hugging Face', 'LlamaIndex', 'CUDA', 'Computer Vision', 'NLP']
  }
};

export const products = [
  {
    id: 'opsera',
    name: 'Opsera',
    tagline: 'Complete Project & Team Orchestration',
    description: 'The ultimate project management tool. Automate deadlines, track employee performance, push smart notifications, and streamline delivery from one hub.',
    features: [
      'Smart task prioritization & auto-assignment',
      'AI-powered standup summaries',
      'Cross-platform sync (Slack, GitHub, Jira)',
      'Employee tracking & performance metrics',
      'Automated deadline alerts',
      'Natural language commands',
    ],
    status: 'Coming Soon',
    image: '/images/opsera-mockup.png',
    href: '/products/opsera',
    color: 'cyan',
  },
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    tagline: 'Your 24/7 Intelligent Front Desk',
    description: 'AI-powered virtual receptionist that handles calls, schedules appointments, and manages customer inquiries around the clock.',
    features: [
      'Natural voice conversations',
      'Appointment scheduling & calendar sync',
      'Call routing & transfer',
      'Multi-language support',
      'CRM integration',
      'Real-time transcription & summaries',
    ],
    status: 'Coming Soon',
    image: '/images/ai-receptionist-mockup.png',
    href: '/products/ai-receptionist',
    color: 'violet',
  },
  {
    id: 'okebase',
    name: 'Okebase',
    tagline: 'The All-in-One Business OS',
    description: 'Beyond inventory. Manage your entire business: Employee records, Product sales, financial reporting, and real-time Profit & Loss analytics with the power of AI.',
    features: [
      'Real-time P&L & Financial Reports',
      'Sales & Inventory Tracking',
      'Employee Management System',
      'Supplier & Procurement',
      'Multi-warehouse support',
      'Automated reorder triggers',
      'Multi-warehouse management',
      'Barcode/QR scanning',
      'Supplier management',
      'Real-time analytics dashboard',
    ],
    status: 'Coming Soon',
    image: '/images/okebase-mockup.png',
    href: '/products/okebase',
    color: 'magenta',
  },
  {
    id: 'amardera',
    name: 'Amardera',
    tagline: 'Smart Bachelor Home Management',
    description: 'The automated solution for shared living. Track meals, split bazaar expenses, manage utility bills, and harmonize shared flat life.',
    features: [
      'Daily Meal Planning & Manager',
      'Expense Splitting & Settlement',
      'Bazaar & Grocery Tracking',
      'Utility Bill Management',
      'Roommate Tasks & Chores',
      'Monthly Expense Reports',
    ],
    status: 'Coming Soon',
    image: '/images/amardera-mockup.png',
    href: '/products/amardera',
    color: 'violet',
  },
  {
    id: 'sync-daily',
    name: 'Sync Daily',
    tagline: 'AI-Curated Tech Intelligence',
    description: 'Next-gen newsletter and blog platform. Get the latest AI and tech news, curated, summarized, and delivered by intelligent algorithms.',
    features: [
      'AI-Summarized Tech News',
      'Personalized Content Feed',
      'Smart Newsletter Automation',
      'Trending Topic Alerts',
      'Deep-dive Blog Articles',
      'Audio Summaries',
    ],
    status: 'Coming Soon',
    image: '/images/syncdaily-mockup.png',
    href: '/products/sync-daily',
    color: 'cyan',
  },
  {
    id: 'advantage-ai',
    name: 'AdVantage AI',
    tagline: 'Marketing Campaign Autopilot',
    description: 'End-to-end marketing automation. From AI content planning to launching and optimizing high-conversion Meta campaigns.',
    features: [
      'Auto-Run Meta Ads Campaigns',
      'AI Content Strategy & Creation',
      'Real-time ROI Analytics',
      'Audience Targeting AI',
      'Performance Optimization',
      'Multi-channel Scheduling',
    ],
    status: 'Coming Soon',
    image: '/images/marketing-mockup.png',
    href: '/products/marketing',
    color: 'magenta',
  },
];

export const services = [
  {
    id: 'custom-development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Custom System Development',
    tagline: 'Any Platform. Any Scale.',
    description: 'High-performance mobile apps, web platforms, and tailored software ecosystems built to your exact business requirements.',
    features: [
      'iOS & Android Mobile Apps',
      'Scalable Web Platforms',
      'Custom API Development',
      'Cloud-Native Architecture',
      'Legacy System Modernization',
    ],
    technologies: ['Java', 'Go', 'Python', 'React Native', 'Flutter', 'Next.js', 'Node.js', 'AWS', 'Kubernetes'],
    image: '/images/services/custom-dev.png',
    href: '/services/custom-development',
  },
  {
    id: 'enterprise',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10"/><path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><path d="M12 6v6"/><path d="M12 16v6"/>
      </svg>
    ),
    title: 'Enterprise Ecosystem',
    tagline: 'SaaS Power and Custom Sollution',
    description: 'A comprehensive suite of business modules including CRM, ERP, HRM, Inventory, Sales, and Marketing. Available as instant SaaS or full Source Code.',
    features: [
      'CRM & Sales Automation',
      'HRM & Employee Management',
      'ERP & Resource Planning',
      'Inventory & Supply Chain',
      'Source Code Licensing Option',
    ],
    technologies: ['Java (Spring Boot)', 'Microservices', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch'],
    image: '/images/services/enterprise-eco.png',
    href: '/services/enterprise',
  },
  {
    id: 'custom-ai',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z"/><path d="m14 8-4 8"/><path d="m10 8 4 8"/>
      </svg>
    ),
    title: 'Custom AI Solutions',
    tagline: 'Deep Tech & Engineering',
    description: 'End-to-end AI application development. We engineer custom LLMs, Computer Vision systems, and predictive engines for complex problems.',
    features: [
      'Custom LLM Fine-tuning',
      'Computer Vision Systems',
      'Predictive Analytics Engines',
      'Natural Language Processing',
      'AI Model Deployment',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'JAX', 'OpenAI', 'LangChain', 'Hugging Face', 'CUDA', 'Pinecone'],
    image: '/images/services/custom-ai.png',
    href: '/services/custom-ai',
  },
  {
    id: 'intelligent-automation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
      </svg>
    ),
    title: 'Intelligent Automation',
    tagline: 'Autonomous Agents & Workflows',
    description: 'Deploy Autonomous Agents and self-driving workflows to handle complex customer operations and internal processes 24/7.',
    features: [
      'Autonomous AI Agents',
      'Intelligent Virtual Assistants',
      'Workflow Process Automation',
      'Customer Ops Automation',
      'Smart Data Processing',
    ],
    technologies: ['AutoGPT', 'Zapier', 'Make', 'RPA', 'BotPress', 'n8n', 'LangChain', 'OpenAI', 'Gemini'],
    image: '/images/services/automation.png',
    href: '/services/intelligent-automation',
  },
  {
    id: 'consulting',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Digital Consulting',
    tagline: 'Strategic Transformation',
    description: 'Expert roadmapping for Digital Transformation, Cloud Migration, and System Architecture to align tech with your business vision.',
    features: [
      'Digital Transformation Strategy',
      'Cloud Migration Roadmap',
      'System Architecture Design',
      'AI Readiness Assessment',
      'Tech Stack Optimization',
    ],
    technologies: ['Strategy', 'Architecture', 'Cloud Security', 'Agile', 'DevOps', 'FinOps'],
    image: '/images/services/consulting.png',
    href: '/services/consulting',
  },
];
