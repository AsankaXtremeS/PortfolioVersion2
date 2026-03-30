import { Layers3, ShieldCheck, Zap , ShoppingBag} from 'lucide-react'

export const projects = [
  {
    id: 1,
    name: 'Pulse Commerce Platform',
    tagline: 'Modular commerce, built to convert.',
    summary: 'A modular commerce core with analytics, role-based dashboards, and scalable checkout flows built for high-traffic retail environments.',
    overview: `Pulse is a full-stack commerce platform engineered for conversion-first thinking. The architecture separates concerns into discrete modules - catalog, cart, checkout, analytics - each independently deployable.

The dashboard layer gives operators real-time insight into funnel drop-off, revenue attribution by channel, and inventory velocity. Role-based access ensures store managers, warehouse teams, and executives each see precisely what they need.

Checkout was rebuilt from the ground up around UX research: one-tap saved addresses, inline card validation, and a three-step flow that eliminates friction. The result was a measurable jump in completed transactions.`,
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Redis'],
    metric: '38% faster checkout',
    metricDetail: 'Measured against previous monolithic checkout across 12k sessions.',
    icon: Zap,
    image: '/Assets/projects/pulse.jpg',
    github: 'https://github.com/yourusername/pulse-commerce',
    live: 'https://pulse-commerce.vercel.app',
    status: 'Live',
    year: '2024',
  },
  {
    id: 2,
    name: 'Medlink Workflow Suite',
    tagline: 'Healthcare operations, orchestrated.',
    summary: 'Healthcare operations product for appointment orchestration, secure messaging, and clinical workflow automation at scale.',
    overview: `Medlink addresses the operational chaos that plagues mid-sized healthcare providers. At its core is an appointment orchestration engine that accounts for provider availability, room assignment, equipment requirements, and patient preferences simultaneously.

Secure messaging was built with end-to-end encryption and audit trails compliant with healthcare data standards. Every message, document share, and status change is timestamped and attributable.

The automation layer handles routine tasks: reminder sequences, follow-up scheduling, referral routing, and discharge summaries - cutting administrative overhead without sacrificing clinical accuracy.`,
    stack: ['React', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Docker'],
    metric: '48k monthly interactions',
    metricDetail: 'Across 6 clinic sites within 3 months of deployment.',
    icon: ShieldCheck,
    image: '/Assets/projects/medlink.jpg',
    github: 'https://github.com/yourusername/medlink',
    live: null,
    status: 'Internal',
    year: '2024',
  },
  {
    id: 3,
    name: 'Orbit DevOps Console',
    tagline: 'Release governance at a glance.',
    summary: 'Internal platform for release governance, service health snapshots, and deployment observability across distributed infrastructure.',
    overview: `Orbit was born from the pain of managing deployments across a fragmented microservices ecosystem. The console unifies release pipelines, service health, and incident history into a single pane of glass.

The release governance layer enforces structured change management: required reviewers, automated pre-flight checks, rollback procedures, and post-deploy health gates. Nothing ships without passing the chain.

Service health snapshots aggregate metrics from multiple sources - uptime monitors, error trackers, and log streams - into a coherent operational picture. On-call engineers can diagnose and act without context-switching between six tools.`,
    stack: ['Next.js', 'GraphQL', 'AWS', 'Terraform', 'Prometheus', 'PostgreSQL'],
    metric: '66% fewer release incidents',
    metricDetail: 'Compared to pre-Orbit baseline over 90 days.',
    icon: Layers3,
    image: '/Assets/projects/orbit.jpg',
    github: 'https://github.com/yourusername/orbit-console',
    live: 'https://orbit-demo.vercel.app',
    status: 'Live',
    year: '2025',
  },
  {
  id: 4,
  name: 'Essentique',
  tagline: 'Premium fragrance engineered.',
  summary: 'E-commerce platform for luxury fragrances, featuring robust background order processing, secure authentication, and a premium UI.',
  overview: 'Essentique elevates the online fragrance shopping experience. At its core is a lightning-fast catalog powered by Next.js and MongoDB, designed to deliver high-resolution imagery and complex product variants instantly.\n\nSecurity and user experience are prioritized with Clerk for seamless authentication and Cloudinary for optimized media delivery. The elegant interface is crafted with Tailwind CSS for a premium, responsive feel.\n\nBehind the scenes, Inngest powers the robust automation layer handling critical asynchronous tasks like order confirmations, secure payment webhooks, and inventory syncing, completely decoupled from the main application thread to ensure maximum performance.',
  stack: ['Next.js 16', 'React 19', 'MongoDB', 'Inngest', 'Clerk', 'Cloudinary', 'Tailwind CSS', 'Vercel'],
  metric: 'Sub-second catalog rendering',
  metricDetail: 'Powered by Next.js SSR and optimized Cloudinary asset delivery.',
  icon: ShoppingBag,
  image: '/Assets/projects/Essentique.png',
  github: 'https://github.com/AsankaXtremeS/E-com.git',
  live: 'https://essenqueperfumes.vercel.app/',
  status: 'Live',
  year: '2024',
},
]
