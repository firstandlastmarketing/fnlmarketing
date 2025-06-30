/**
 * Data Model Overview — businessData.js
 *
 * This file is the central "brain" for the Jacob AI chatbot and the website's content.
 * It exports all core business data for First & Last Marketing.
 *
 * The data is structured into logical, modular objects:
 * - about: Company mission, values, founder info, and what makes the business unique.
 * - contact: All contact details, business hours, form configuration, and location.
 * - hero: Content for the main landing page hero section.
 * - services: An array of primary service offerings with deep details (features, process, results, FAQs).
 * - addonServices: Detailed breakdown of individual add-on services, including pricing, descriptions, and FAQs.
 * - pricing: Comprehensive pricing tiers for core packages like Websites and Blogs, including FAQs.
 * - promo: Data for the current promotional offer, including text, CTA, and pricing details.
 * - niches: Specific industry verticals the business targets.
 * - portfolioProjects: Case studies and examples of work.
 * - siteLinks: Navigation links, matching the app's routing structure.
 * - generalFaqs: A collection of common questions from across the business.
 *
 * Each primary export includes a .type property for easy identification and a .lastUpdated timestamp for auditing.
 * This file should be the single source of truth for business information.
 */

// ===================================================================================
// 1. About Information
// ===================================================================================
export const about = {
  type: 'about',
  lastUpdated: '2025-06-30T10:00:00Z',
  mission:
    'At First and Last Marketing, our mission is to give every business—big or small—the power to compete and win online. We don\'t just build websites; we build visibility, trust, and growth systems powered by smart automation and personalized strategies.',
  summary:
    'We\'re a full-service digital agency helping local and national businesses generate leads, boost conversions, and dominate their niche online. Our expert team blends web design, automation, AI tools, and SEO to deliver consistent results.',
  faithAligned: true,
  founder: {
    name: 'Enoch A. Twumasi',
    title: 'Founder & CEO',
  },
  values: [
    'Faith at the center of our mission',
    'Lead generation and automation focus',
    'Transparency, strategy, and results',
  ],
  highlights: [
    { stat: '100+', label: 'Automation Features' },
    { stat: '24/7', label: 'Lead Capture' },
    { stat: '10+', label: 'Years Combined Exp.' },
    { stat: '99.9%', label: 'Uptime Guarantee' },
  ],
  differentiation: [
    'Advanced SEO, PPC, and conversion-focused web design',
    'Secure, high-performance hosting with 99.9% uptime',
    'Reputation Management Software with automation',
    'Database Reactivation Campaigns to revive old leads',
    'Email & SMS automation for lead nurturing',
    'AI Chatbots and Live Chat that converts',
    'Social Media Scheduler for visibility and consistency',
  ],
};

// ===================================================================================
// 2. Contact & Location
// ===================================================================================
export const contact = {
  type: 'contact',
  lastUpdated: '2025-06-30T10:00:00Z',
  location: 'Springfield, Missouri',
  phone: '+1 (573) 202-0088',
  email: 'contact@firstandlastmarketing.com',
  hours: {
    sunday: '8am - 8pm',
    monday: '8am - 8pm',
    tuesday: '8am - 8pm',
    wednesday: '8am - 8pm',
    thursday: '8am - 8pm',
    friday: '8am - 4pm',
    saturday: 'Closed',
  },
  form: {
    fields: ['name', 'phone', 'email', 'services', 'message'],
    sendMethod: 'EmailJS',
    availableServices: [
      'Web Design & Development',
      'Web Hosting',
      'Online Reputation Management',
      'Database Reactivation Campaigns',
      'Email & SMS Marketing Automation',
      'Live Chat & AI Chatbot Platforms',
      'Social Media Post Schedulers',
    ],
    confirmationMessage: 'Thank you! Your message has been received. We’ll be in touch soon.',
  },
  map: {
    embedURL: 'https://www.openstreetmap.org/export/embed.html?bbox=-93.3276%2C37.1783%2C-93.2892%2C37.2051&layer=mapnik&marker=37.1917%2C-93.3084',
    markerCoordinates: { lat: 37.1917, lng: -93.3084 },
    city: 'Springfield',
    state: 'Missouri',
  },
  tagline: 'Ready to grow your brand online? Get in touch for web design, hosting, or reputation services.',
};

// ===================================================================================
// 3. Hero Section Content
// ===================================================================================
export const hero = {
  type: 'hero',
  lastUpdated: '2025-06-30T10:00:00Z',
  headline: 'Turn Clicks Into Clients—Smart Sites. Real Leads. On Autopilot.',
  subheadline:
    'We combine high-converting websites with powerful AI and marketing automation to generate leads on autopilot.',
  ctas: [
    { label: 'Discover Our Pricing & Packages', href: '#pricing' },
    { label: 'Explore Our Services', href: '#services' },
  ],
  slideshow: {
    delayMs: 4000,
    slides: [
      { industry: 'HVAC Specialists', image: 'first-last-marketing-web-design-springfield-mo-hvac-company-website-screenshot.png' },
      { industry: 'Plumbers', image: 'first-last-marketing-web-design-springfield-mo-plumbing-service-website-screenshot.png' },
      { industry: 'Electricians', image: 'first-last-marketing-web-design-springfield-mo-electrical-website-screenshot.png' },
      { industry: 'Home Remodelers', image: 'first-last-marketing-web-design-springfield-mo-home-remodeling-website-screenshot.png' },
      { industry: 'Roofers', image: 'first-last-marketing-web-design-springfield-mo-roofing-company-website-screenshot.png' },
      { industry: 'Pest Control Experts', image: 'first-last-marketing-web-design-springfield-mo-pest-control-website-screenshot.png' },
      { industry: 'Landscapers', image: 'first-last-marketing-web-design-springfield-mo-landscaping-website-screenshot.png' },
      { industry: 'Cleaning Services', image: 'first-last-marketing-web-design-springfield-mo-cleaning-service-website-screenshot.png' },
    ],
  },
};

// ===================================================================================
// 4. Primary Services (Detailed)
// ===================================================================================
export const services = [
  {
    type: 'service',
    id: 'web-design',
    name: 'Web Design & Development',
    description: 'Modern, responsive websites that convert visitors and grow your brand.',
    features: {
      'Design Excellence & User Experience': [
        'Custom Visual Design: Interactive prototypes to ensure your vision is realized.',
        'Conversion-Driven Layouts: Strategic placement of CTAs and lead forms to maximize conversions.',
        'Accessibility First: Rigorous testing for WCAG 2.1 compliance.',
      ],
      'Modern Development & Performance': [
        'Latest Technologies: Build with React, Next.js, WordPress, or headless CMS.',
        'Mobile-First & Responsive: Flawless performance on all devices.',
        'Lightning-Fast Load Times: Optimized for top scores on Google PageSpeed.',
        'SEO Technical Best Practices: Semantic HTML, structured data, and clean URLs.',
      ],
      'Content Management & Integrations': [
        'Flexible CMS Solutions (WordPress, Webflow, or custom headless CMS).',
        'Third-Party Integrations: Seamless connections to CRMs, marketing automation, and analytics.',
      ],
    },
    process: [
      'Discovery & Strategy',
      'Wireframing & Prototyping',
      'Design & Branding',
      'Development',
      'Quality Assurance',
      'Launch & Training',
      'Ongoing Support',
    ],
    results: [
      'B2B SaaS: Redesigned site led to a 60% increase in demo requests.',
      'Local Service Business: 3x increase in inbound calls from improved mobile UX and local SEO.',
      'eCommerce Brand: Custom Shopify build boosted conversion rates by 42%.',
    ],
    cta: 'Ready to transform your online presence? Book a free strategy session.',
  },
  {
    type: 'service',
    id: 'web-hosting',
    name: 'Fast & Secure Web Hosting',
    description: 'Blazing-fast managed hosting with 99.9% uptime and top-tier security.',
    features: {
      'Enterprise-Grade Infrastructure': ['Global Data Centers', 'SSD & NVMe Storage', 'Auto-Scaling Resources'],
      'Advanced Security Suite': ['Web Application Firewall (WAF)', 'Daily Malware Scanning', 'DDoS Protection', 'Free SSL'],
      'Performance Optimization': ['Global CDN', 'Advanced Caching', 'Image & Asset Optimization'],
      'Hassle-Free Management': ['One-Click Staging', 'Automated Backups', 'Intuitive Dashboard'],
    },
    cta: 'Let us handle the tech, so you can focus on what you do best. Contact us for a free hosting assessment.',
  },
  {
    type: 'service',
    id: 'reputation',
    name: 'Online Reputation Management',
    description: 'Take control of your brand image and turn reviews into lasting trust.',
    features: {
      'Review Generation': ['Automated Review Requests', 'Multi-Channel Outreach (Email, SMS)', 'Review Funnel Pages'],
      'Active Monitoring': ['Real-Time Alerts', 'Professional Response Templates', 'Reputation Recovery Help'],
      'Local SEO Impact': ['Directory Management', 'Google Business Profile Optimization', 'Website Review Widgets'],
    },
    cta: 'Take control of your reputation. Book a free audit to build trust and win more business.',
  },
  {
    type: 'service',
    id: 'database-reactivation',
    name: 'Database Reactivation Campaigns',
    description: 'Wake up dormant leads using automated campaigns that re-engage and convert.',
    features: {
      'Strategic Segmentation': ['Data Cleansing', 'Behavioral Segmentation', 'Personalized Content'],
      'Multi-Channel Outreach': ['Email Campaigns', 'SMS & MMS', 'Ringless Voicemail Drops', 'Retargeting Ads'],
      'Automation & Analytics': ['Automated Follow-Ups', 'Win-Back Offers', 'Seamless CRM Sync', 'ROI Dashboards'],
    },
    cta: 'Unlock hidden revenue in your database. Book a free assessment to turn dormant leads into active customers.',
  },
  {
    type: 'service',
    id: 'email-sms-automation',
    name: 'Email & SMS Marketing Automation',
    description: 'Automate your marketing with targeted messages that nurture and convert.',
    features: {
      'Segmentation & Personalization': ['Dynamic Segments', 'Personalized Content', 'Predictive Analytics'],
      'Automation Flows': ['Drip Campaigns', 'Event-Based Triggers', '2-Way SMS', 'Omni-Channel Journeys'],
      'Optimization & Analytics': ['A/B Testing', 'Smart Send Times', 'Detailed Reporting'],
    },
    cta: 'Convert more leads while saving time. Book a free demo to see how automation can transform your results.',
  },
  {
    type: 'service',
    id: 'ai-chatbots',
    name: 'Live Chat & AI Chatbot Platforms',
    description: 'Engage visitors instantly and qualify leads with human-like chatbots or live support.',
    features: {
      'AI Chatbots': ['Natural Language Processing', 'Lead Qualification', 'Knowledge Base Integration', 'Appointment Booking'],
      'Live Chat': ['Instant Notifications', 'Team Collaboration', 'File Sharing', 'Visitor Insights'],
      'Customization': ['Fully Branded Widgets', 'CRM & Marketing Automation Sync', 'Analytics & Reporting'],
    },
    cta: 'Keep visitors engaged 24/7. Book a free demo to boost conversions and customer satisfaction.',
  },
  {
    type: 'service',
    id: 'social-schedulers',
    name: 'Social Media Post Schedulers',
    description: 'Stay consistent online with automated post scheduling and analytics.',
    features: {
      'Scheduling': ['Cross-Platform Posting', 'Bulk Uploads', 'Drag-and-Drop Calendar'],
      'Content Optimization': ['AI-Powered Captions & Hashtags', 'Image & Video Editing', 'Content Library'],
      'Analytics': ['Real-Time Insights', 'Best Time to Post Recommendations', 'Competitor Benchmarking'],
    },
    cta: 'Spend less time posting and more time growing. Book a free trial to see how easy social media management can be.',
  },
  {
    type: 'service',
    id: 'seo',
    name: 'SEO Campaigns & Optimization',
    description: 'Boost your search rankings and drive organic traffic with targeted SEO strategies, technical audits, and ongoing optimization.',
    features: {
      'SEO Audit & Strategy': ['Comprehensive website audit', 'Competitor and keyword research', 'Custom SEO roadmap'],
      'On-Page Optimization': ['Meta tags, headings, and schema markup', 'Internal linking', 'Speed enhancements'],
      'Content & Authority': ['SEO blog content planning', 'Backlink outreach', 'Citation building'],
    },
    cta: 'Ready to climb the rankings? Book a free SEO audit and see how we can grow your traffic.',
  },
];
services.type = 'services';
services.lastUpdated = '2025-06-30T10:00:00Z';

// ===================================================================================
// 5. Add-on Services (Individually Sold)
// ===================================================================================
export const addonServices = {
  type: 'addonServices',
  lastUpdated: '2025-06-30T10:00:00Z',
  intro:
    'At First and Last Marketing, we go beyond websites to deliver the full digital infrastructure your business needs to grow. These optional services are built to enhance your visibility, automate your workflows, and engage your leads — all with transparent pricing and flexible terms.',
  pricingTable: [
    { service: 'Fast & Secure Web Hosting', price: '$120/year', marketPrice: '$180 – $400/year' },
    { service: 'Online Reputation Management', price: '$300/month', marketPrice: '$500 – $1,500/month' },
    { service: 'Database Reactivation Campaigns', price: '$450 (one-time)', marketPrice: '$750 – $2,000+' },
    { service: 'Email & SMS Automation', price: '$250 setup + $100/month', marketPrice: '$400 – $1,200/month' },
    { service: 'Live Chat & AI Chatbots', price: '$350 setup + $30/month', marketPrice: '$500 – $1,500+ setup' },
    { service: 'Social Media Schedulers', price: '$200 setup + $50/month', marketPrice: '$300 – $1,000/month' },
  ],
  services: [
    {
      id: 'hosting-addon',
      name: 'Fast & Secure Web Hosting',
      price: '$120/year',
      description: 'High-speed hosting with 99.9% uptime, free SSL, and blazing performance. We handle the full setup and monitoring so your site loads fast and stays online. Most competitors charge $180–$400/year — we offer premium hosting at a fraction of the cost.',
    },
    {
      id: 'reputation-addon',
      name: 'Online Reputation Management',
      price: '$300/month',
      description: 'Build trust, improve reviews, and protect your online brand. We monitor major review platforms, alert you to new reviews, automate positive review requests, and help address negative reviews. Typical market rates run $500–$1,500/month.',
    },
    {
      id: 'reactivation-addon',
      name: 'Database Reactivation Campaigns',
      price: '$450 (one-time)',
      description: 'Reignite conversations with cold leads using personalized email & SMS campaigns. We create the strategy, build automated sequences, and launch the campaign for immediate results without new ad spend.',
    },
    {
      id: 'automation-addon',
      name: 'Email & SMS Automation',
      price: '$250 setup + $100/month',
      description: 'Set up intelligent automations for lead follow-ups, appointment reminders, and promotions. Includes 1–3 custom workflows plus monthly support. Our setup is efficient and lean compared to other agencies.',
    },
    {
      id: 'chat-addon',
      name: 'Live Chat & AI Chatbots',
      price: '$350 setup + $30/month',
      description: 'Effortlessly address visitor inquiries in real-time and cultivate leads around the clock with live chat widgets or AI-driven chatbots. Ideal for transforming inquisitive visitors into genuine clients.',
    },
    {
      id: 'social-addon',
      name: 'Social Media Schedulers',
      price: '$200 setup + $50/month',
      description: 'Systematize your postings across various platforms with a unified interface, monthly scheduling options, and analytics. This saves hours of manual effort while keeping your brand dynamic.',
    },
  ],
  monthlyFeesExplained: {
    intro: 'Some services come with a one-time setup fee and a monthly fee. Here\'s how it works:',
    setup: 'The Setup Fee covers configuration, custom integration, strategy building, and launch tailored to your business.',
    monthly: 'The Monthly Fee covers ongoing access to platforms, monitoring, tech support, and minor updates to keep systems running smoothly.',
  },
  additionalNotes: {
    bundle: 'Combine services with your Website Package for special pricing.',
    flexible: 'You’re free to upgrade, pause, or cancel any monthly service with 14 days’ notice.',
    scale: 'Our plans are designed to scale as your business expands.',
  },
  faqs: [
    { q: 'Are these add-on services required for my website to work?', a: 'No, they are entirely optional. However, they add significant value by enhancing lead capture, SEO, and automation.' },
    { q: 'Why is there a setup fee AND a monthly fee for some services?', a: 'The setup fee covers the initial custom work and launch. The monthly fee covers ongoing costs like platform access, monitoring, and support to keep things running.' },
    { q: 'Can I cancel monthly services at any time?', a: 'Yes, we only require 14 days’ notice to pause or cancel any ongoing service.' },
    { q: 'What kind of support is included in the monthly fee?', a: 'Monthly plans include priority email support, ongoing monitoring, light content edits where applicable, and performance checks.' },
    { q: 'Can I change the services later if my needs grow?', a: 'Definitely. All our solutions are scalable. We can expand automations or upgrade your tools as your business grows.' },
    { q: 'Is there a discount if I buy more than one service?', a: 'Yes, bundling two or more services gives you access to exclusive discounts. Ask us for a custom quote.' },
    { q: 'Will you train me on how to use these tools?', a: 'We provide simple video walkthroughs so you can confidently manage your tools, though we continue to handle most tasks for you behind the scenes.' },
  ],
};

// ===================================================================================
// 6. Pricing for Packages (Websites & Blogs)
// ===================================================================================
export const pricing = {
  type: 'pricing',
  lastUpdated: '2025-06-30T10:00:00Z',
  websites: {
    title: 'Website Design Packages',
     tiers: [
      {
        id: 'basic-website',
        tier: 'Basic',
        price: '$350',
        market: '$800 – $2,000',
        pages: 'Up to 4',
        description: 'Perfect for startups, solo entrepreneurs, and local service providers. Launch fast with a clean, professional site that’s optimized for search and tailored for conversion.',
        includes: [
          'Up to 4 custom-designed pages (e.g., Home, About, Services, Contact)',
          'Full on-page SEO (keywords, meta tags, speed optimizations)',
          'Manual Indexing submission to Google & Bing',
          'Domain connection',
          'Fully mobile-responsive design',
          'Built-in lead capture form',
        ],
      },
      {
        id: 'growth-website',
        tier: 'Growth',
        price: '$650',
        market: '$2,000 – $5,000',
        pages: 'Up to 7',
        description: 'Best for small-to-midsize businesses ready to scale. Get stronger search performance, more space to explain your services, and a better user experience.',
        includes: [
          'Everything in Basic',
          'Up to 7 pages (extra service or landing pages)',
          'Enhanced SEO strategy',
          'Basic analytics integration',
          'Social media buttons and widget placement',
        ],
      },
      {
        id: 'premium-website',
        tier: 'Premium',
        price: '$1200',
        market: '$5,000 – $10,000+',
        pages: 'Up to 12',
        description: 'Ideal for growing brands needing full web power. A comprehensive, scalable online presence that’s designed to impress, convert, and grow with your business.',
        includes: [
          'Everything in Growth',
          'Up to 12 fully customized pages',
          'Google Analytics setup & tracking',
          'Priority support',
          'Performance tuning (image optimization, lazy loading)',
          'Extra lead capture elements (multi-step forms, sticky CTAs)',
        ],
      },
    ],
    faqs: [
      { q: 'Do I own my website after it’s built?', a: 'Yes. You get full ownership of your site. No subscriptions, no renting. It’s 100% yours.' },
      { q: 'Are the package prices one-time fees?', a: 'All listed prices are one-time fees. You only pay again if you request new work or add-ons.' },
      { q: 'Can I upgrade my package later?', a: 'Absolutely. Your website is built to scale. You can add more pages or features as your business grows.' },
      { q: 'Do I need to buy hosting separately?', a: 'Yes. Hosting is not included in the website package price. We can help you choose a reliable host and get it set up.' },
      { q: 'How long does it take to complete a site?', a: 'Delivery is typically 7–14 business days depending on the tier and your content readiness.' },
      { q: 'Can you write the content for my website?', a: 'Yes. Content writing is available as an add-on service. We offer SEO copywriting that speaks to your ideal audience.' },
      { q: 'Is the design custom or template-based?', a: 'Every site we build is custom-designed to match your brand, not a generic template. We use modern frameworks like React and TailwindCSS.' },
      { q: 'Do you handle e-commerce websites?', a: 'E-commerce is not included in these packages but can be quoted separately. We build beautiful Shopify or custom React storefronts on request.' },
    ],
  },
  blogs: {
    title: 'Blog Packages',
    tiers: [
      {
        id: 'basic-blog',
        tier: 'Basic',
        price: '$350',
        market: '$500 – $2,000',
        description: 'Ideal for small businesses or startups just getting started with content marketing. Helps establish online authority on a budget.',
        includes: ['Full blog setup', '3 SEO-optimized blog posts targeting relevant keywords'],
      },
      {
        id: 'standard-blog',
        tier: 'Standard',
        price: '$650',
        market: '$2,001 – $5,000',
        description: 'Designed for growing businesses ready to deepen their content strategy and SEO presence. Ideal for generating consistent leads.',
        includes: ['Everything in Basic', '6 SEO-optimized blog posts', 'Comprehensive SEO integration (keyword research, meta tags)'],
      },
      {
        id: 'premium-blog',
        tier: 'Premium',
        price: '$1200+',
        market: '$5,001 – $20,000+',
        description: 'The complete solution for businesses focused on a high-impact content strategy for market leadership and sustained organic growth.',
        includes: ['Full blog setup customized to your industry', '10+ expert-written, SEO-optimized posts', 'Comprehensive SEO strategy and content calendar', 'Analytics integration and performance monitoring'],
      },
    ],
    faqs: [
      { q: 'How long does it take to set up the blog and publish posts?', a: 'Setup typically takes 3–5 business days. The first batch of posts is delivered within 1–2 weeks, depending on the tier.' },
      { q: 'Can I request specific topics for the blog posts?', a: 'Yes, we encourage you to share preferred topics and keywords. We align content with your business goals.' },
      { q: 'What if I need more posts than included?', a: 'Additional blog posts can be purchased separately at competitive rates. We offer scalable options.' },
      { q: 'Are the blog posts optimized for SEO?', a: 'Absolutely. Each post is crafted with keyword research, meta tags, proper structure, and other SEO best practices.' },
      { q: 'Do you handle publishing the posts on my website?', a: 'Yes, we manage the entire publishing process to ensure your blog looks professional and functions correctly.' },
    ],
  },
};

// ===================================================================================
// 7. Current Promotional Offer
// ===================================================================================
export const promo = {
  type: 'promo',
  lastUpdated: '2025-06-30T10:00:00Z',
  headline: '🎉 Stop Renting. Own Your Website.',
  message: 'Most sites are rented — you\'re paying forever for something you don’t own. Let First and Last Marketing build you a blazing-fast, fully custom website that’s 100% yours. No subscriptions. No cookie cutters. Just results.',
  subtext: 'Don’t waste $4,000 on templated fluff. Get it done right for $100.',
  offerCTA: '🚀 Claim for $100',
  source: 'First and Last Marketing',
  pricing: {
    promoWebsiteBuild: 100,
    typicalCompetitorCost: 4000,
    ownershipModel: 'You own it. No subscription.',
  },
  promoValues: ['Custom Design', 'Blazing Fast', 'No Cookie Cutters', 'One-Time Cost', 'SEO Ready'],
};

// ===================================================================================
// 8. Targeted Business Niches
// ===================================================================================
export const niches = [
  { id: 'niche-1', title: 'Home Services & Contractors', icon: '🔧', description: 'Plumbers, HVAC, electricians, roofers.', cta: { label: 'See Contractor Solutions', link: '/contractors' } },
  { id: 'niche-2', title: 'Community-Focused Local Shops', icon: '🏪', description: 'Boutiques, cafés, locksmiths, hobby shops.', cta: { label: 'See Shop Solutions', link: '/shops' } },
  { id: 'niche-3', title: 'Ethnic & Artisan Food', icon: '🍽️', description: 'Specialty eateries often invisible online.', cta: { label: 'See Food Solutions', link: '/ethnicfood' } },
  { id: 'niche-4', title: 'Auto Repair & After-Hour Services', icon: '🚗', description: 'Mechanics, detailing shops, tire centers.', cta: { label: 'See Auto Solutions', link: '/autorepair' } },
  { id: 'niche-5', title: 'Small Medical & Wellness Practices', icon: '🏥', description: 'Chiropractors, therapists, urgent cares.', cta: { label: 'See Medical Solutions', link: '/medical' } },
  { id: 'niche-6', title: 'Specialty Food Trucks / Catering', icon: '🍲', description: 'Most operate by word of mouth.', cta: { label: 'See Catering Solutions', link: '/catering' } },
  { id: 'niche-7', title: 'Lodging / Event Venues & B&Bs', icon: '🏨', description: 'Airbnb hosts, wedding barns, boutique stays.', cta: { label: 'See Lodging Solutions', link: '/lodging' } },
  { id: 'niche-8', title: 'Nonprofits / Community Services', icon: '✨', description: 'Charities and local centers.', cta: { label: 'See Nonprofit Solutions', link: '/nonprofits' } },
];
niches.type = 'niches';
niches.lastUpdated = '2025-06-30T10:00:00Z';

// ===================================================================================
// 9. Portfolio / Case Studies
// ===================================================================================
export const portfolioProjects = [
  {
    type: 'portfolio',
    id: 'portfolio-1',
    title: 'E&C Clinic - Website',
    industry: 'Healthcare / Medical',
    description: 'A clean, trust-building layout for patient-focused navigation and lead generation.',
    result: 'Bounce rate dropped by 43% and mobile engagement increased by 71% within 60 days.',
  },
  {
    type: 'portfolio',
    id: 'portfolio-2',
    title: 'Carolin’s Kitchen - Website',
    industry: 'Food & Beverage / Catering',
    description: 'Authentic Dominican food site with modern layout and vivid visuals, optimized for catering inquiries.',
    result: 'The site consistently receives praise and actively converts visitors into catering leads.',
  },
  {
    type: 'portfolio',
    id: 'portfolio-3',
    title: 'First & Last Marketing - Hero Section',
    industry: 'Marketing / Web Design',
    description: 'Our own site showcases modern design, fast-loading UI, and lead-gen best practices.',
    result: 'Average visit duration is over 3 minutes, and our hero converts visitors into leads at 11.4%.',
  },
];
portfolioProjects.type = 'portfolio';
portfolioProjects.lastUpdated = '2025-06-30T10:00:00Z';

// ===================================================================================
// 10. Site Navigation Links (Matches App.jsx routes)
// ===================================================================================
export const siteLinks = {
  type: 'siteLinks',
  lastUpdated: '2025-06-30T10:00:00Z',
  internalAnchors: [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ],
  staticRoutes: [
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    // Niche landing pages
    { to: '/contractors', label: 'Home Services & Contractors' },
    { to: '/shops', label: 'Local Shops' },
    { to: '/ethnicfood', label: 'Ethnic & Artisan Food' },
    { to: '/autorepair', label: 'Auto Repair' },
    { to: '/medical', label: 'Medical & Wellness' },
    { to: '/catering', label: 'Food Trucks & Catering' },
    { to: '/lodging', label: 'Lodging & Event Venues' },
    { to: '/nonprofits', label: 'Nonprofits & Community Services' },
  ],
  legal: [
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms-of-use', label: 'Terms of Use' }
  ],
};

// ===================================================================================
// 11. General FAQs (Consolidated)
// ===================================================================================
export const generalFaqs = {
  type: 'faqs',
  lastUpdated: '2025-06-30T10:00:00Z',
  faqs: [
    // General
    { q: 'How do I get started?', a: 'The best way is to book a free strategy call or fill out our project kickoff form. We’ll guide you through the next steps.' },
    { q: 'What makes First & Last Marketing different?', a: 'We combine agency-level quality with small business pricing, fast turnaround, and a focus on real results through automation and conversion-focused design.' },
    { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment options for most projects. Just ask us for details during our call.' },
    // Services
    { q: 'Do you offer ongoing support after a project is launched?', a: 'Absolutely. We provide ongoing maintenance, updates, analytics, and optimization packages to keep your assets performing at their best.' },
    { q: 'Can you integrate with my existing CRM or marketing tools?', a: 'Yes, we specialize in seamless integrations with tools like HubSpot, Salesforce, Mailchimp, Zapier, and more.' },
    // Hosting
    { q: 'Is email hosting included with web hosting?', a: 'Yes, we can set up integrated email or connect your domain to professional services like Google Workspace or Microsoft 365.' },
    { q: 'What if my site gets hacked?', a: 'If you are on our hosting and maintenance plan, we provide instant cleanup, restoration, and a full security audit at no extra cost.' },
    // Reputation
    { q: 'Can you remove negative reviews?', a: 'While we cannot guarantee removal, we work with platforms to report violations and help you respond professionally to minimize the impact.' },
  ]
};