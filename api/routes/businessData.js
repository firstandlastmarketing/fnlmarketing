/*
/api/routes/businessData.js
--------------------------------------------------------------------------------
REVISION: 3.0.0 "AI Agent Knowledge & Configuration"
PURPOSE:
This file is the complete, unified "brain" for the Jacob AI agent. It has been
restructured and deeply enriched to power the tool-using capabilities of the
new chat.js agent architecture. It provides not just information, but also
behavioral configuration, sales strategies, and a resource library.
*/

export const businessData = {
  // =======================================================================
  // 1. PERSONA: The AI's core identity and behavioral rules.
  // =======================================================================
  persona: {
    aiAssistantName: "Jacob",
    voiceAttributes: ["Professional", "Confident", "Helpful", "Proactive", "Clear", "Trustworthy"],
    coreValuesToEmbody: [
      "Client Success is Our Success: We are genuinely invested in our clients' growth.",
      "Transparency & Honesty: No jargon. No hidden fees. We provide clear, direct answers.",
      "Ownership & Empowerment: We build permanent assets for our clients, not temporary rentals.",
      "Faith-Driven Integrity: We operate with honesty and serve our clients' best interests.",
    ],
    keyTalkingPoints: {
      websiteOwnership: "A key difference at First and Last Marketing is that you **own your website 100%**. It's a one-time investment for a permanent business asset, not a monthly rental fee that you pay forever.",
      automationBenefits: "Our automation services are designed to save you time and capture leads you might be missing. Think of it as having an expert sales assistant working for you 24/7, even while you sleep.",
      onboardingProcess: "Getting started is simple. The first step is a brief, no-pressure strategy call. From there, we handle all the technical work so you can focus on your business.",
      consultativeApproach: "To make sure I recommend the perfect solution, could you tell me a bit more about your business and what you're hoping to achieve online?",
    },
  },

  // =======================================================================
  // 2. COMPANY INFO: Foundational details about the business.
  // =======================================================================
  companyInfo: {
    name: "First and Last Marketing",
    founder: "Enoch A. Twumasi",
    location: "Springfield, Missouri, USA",
    phone: "+1 (573) 202-0088",
    email: "contact@firstandlastmarketing.com",
    mission: "Our mission is to empower businesses to thrive by GOD's grace through building high-performance digital marketing systems that deliver measurable growth and a real return on investment.",
    story: "Founded by Enoch A. Twumasi by GOD's Grace, First and Last Marketing was born from a passion for helping businesses succeed with faith-based integrity. We saw too many businesses paying for overpriced, underperforming websites and knew there was a better way.",
    differentiation: [
      "You Own Your Website: One-time fee for a permanent asset you control.",
      "Conversion-Focused Design: Our sites are built to generate leads, not just to look pretty.",
      "All-in-One Growth Stack: We integrate web, automation, and reputation management seamlessly.",
      "Transparent, Fair Pricing: Agency-quality results without the opaque, high-end agency fees.",
    ],
  },

  // =======================================================================
  // 3. KNOWLEDGE BASE: The structured data for all services, pricing, & FAQs.
  // This is the primary data source for the `get_service_details` tool.
  // =======================================================================
  knowledgeBase: {
        // --- CORE SERVICES (DEEPLY ENRICHED FOR AI AGENT) ---
    // This array is the primary data source for the `get_service_details` tool.
    // Each object is a complete dossier on a service, containing everything
    // the AI needs to discuss, qualify, and handle objections for it.
    services: [
      {
        id: "web-design",
        name: "Web Design & Development",
        keywords: ["website", "web design", "new site", "build a site", "redesign my website", "e-commerce", "ecommerce", "wordpress", "custom code", "react", "vite"],
        description: "We custom-code modern, responsive websites from scratch that are not only beautiful but are engineered to convert visitors into paying customers and scale with your business.",
        benefits: [
          "Increase qualified leads and sales with conversion-focused design.",
          "Establish strong brand credibility with a unique, professional site.",
          "Achieve lightning-fast load times that Google rewards for SEO.",
          "Enjoy the flexibility of a custom build that can grow with your business.",
          "Provide an excellent user experience on all devices.",
        ],
        salesAngle: "Focus on the fact that this is a one-time cost for a permanent, high-performance asset they own forever. Contrast this with slow, insecure template sites where they just 'rent' their online presence.",
        leadQualificationQuestions: [
          "Are you looking to build a brand new website, or improve an existing one?",
          "What is the primary goal of your website? (e.g., generate leads, sell products, provide information)",
          "Are there any websites you particularly admire the design or functionality of?",
        ],
        commonObjections: {
          "It's too expensive": "I understand that budget is a key consideration. That's why we offer packages at different price points, starting at just $350. Think of this as a one-time investment in a permanent, high-performance asset for your business, rather than a recurring rental fee on a slow template.",
          "I can build it myself on Wix/Squarespace": "That's a fair question, and template builders are useful for simple online brochures. However, our approach is fundamentally different and is designed for businesses serious about performance, security, and growth. We custom-code every website from scratch in VS Code using modern technologies like React, Vite, and Tailwind CSS. This means your site isn't just a template; it's a finely-tuned business asset. The benefits are significant: lightning-fast loading speeds that Google rewards for SEO, a unique design that perfectly matches your brand, and the flexibility to add any custom feature you can imagine as your business grows. We build for professional performance, not just DIY looks."
        },
        pricing: {
            type: "packages",
            referenceId: "websites" // Links to the main pricing object
        }
      },
      {
        id: "ai-chatbots",
        name: "Live Chat & AI Chatbot Platforms",
        keywords: ["chatbot", "live chat", "ai assistant", "jacob", "24/7 support", "automate answers", "lead qualification", "message square"],
        description: "Engage website visitors 24/7, answer common questions instantly, and qualify leads automatically with a human-like, custom-trained AI chatbot.",
        benefits: [
          "Capture 3x more leads, even outside business hours.",
          "Reduce support tickets by up to 40% by providing instant answers.",
          "Automate appointment scheduling and reduce admin workload by 60%.",
          "Free up your team from repetitive questions to focus on high-value tasks.",
          "Seamlessly hand over conversations to a human agent when needed.",
        ],
        salesAngle: "Position this as a 'digital employee' that works tirelessly for a fraction of the cost. It ensures no lead is ever missed and that every visitor gets an instant, helpful response.",
        leadQualificationQuestions: [
            "What are some of the most common, repetitive questions your customers ask?",
            "How many leads do you estimate you miss after business hours or when your team is busy?",
            "Would automating appointment booking or lead qualification save your team valuable time?"
        ],
        commonObjections: {
          "I'm worried it will sound robotic": "That's a very valid concern. Our approach is to train the AI on your specific business data and brand voice, just like me! The goal isn't to trick users, but to provide instant, helpful answers. We also ensure there's always a clear and easy way for a user to request a human agent.",
          "Is it difficult to set up?": "Not at all for you. We handle the entire white-glove setup, including the AI training, scripting, and integration with your website. It's ready to go from day one."
        },
        pricing: {
            type: "addon",
            setupFee: "$350",
            monthlyFee: "$30"
        }
      },
      {
        id: "seo",
        name: "SEO Campaigns & Optimization",
        keywords: ["seo", "ranking", "google", "search engine", "get found online", "first page", "organic traffic", "backlinks"],
        description: "Boost your search rankings and drive organic, high-intent traffic to your website with our targeted, long-term SEO strategies.",
        benefits: [
          "Increase organic website traffic and attract higher quality, ready-to-buy leads.",
          "Build long-term brand authority and trust in your industry.",
          "Achieve a higher ROI than traditional advertising, as strong rankings deliver leads for years.",
          "Achieve #1 ranking for critical local terms like 'emergency plumber' as we did for a client, leading to a 200% call increase.",
        ],
        salesAngle: "SEO is an investment in your long-term visibility. While ads stop when you stop paying, strong SEO rankings can bring in qualified leads for years to come, making it one of the highest ROI activities in marketing.",
        leadQualificationQuestions: [
            "What are the most important services or products you want to be found for on Google?",
            "Who are your main competitors, and how are they performing online?",
            "Have you done any SEO work in the past?"
        ],
        commonObjections: {
          "How long does it take to see results?": "That's the most important question for SEO. While some technical improvements can be seen quickly, gaining significant traction and ranking changes for competitive keywords typically takes 3-6 months. SEO is a long-term strategy, but the benefits are lasting.",
          "Can you guarantee a #1 ranking?": "No ethical SEO provider can guarantee a #1 spot, as Google's algorithm is complex and always changing. What we *do* guarantee is that we will use proven, best-practice strategies to significantly improve your rankings, traffic, and—most importantly—your lead flow."
        },
        pricing: {
            type: "addon",
            monthlyFee: "$300+" // Varies based on campaign
        }
      },
      {
        id: "web-hosting",
        name: "Fast & Secure Web Hosting",
        keywords: ["hosting", "cpanel", "server", "uptime", "fast website", "secure hosting", "ssl", "cdn", "migration"],
        description: "Blazing-fast managed hosting with 99.9% uptime, robust protection, and top-tier security to ensure your website is always online and performing at its best.",
        benefits: [
          "Improve your SEO rankings with up to 80% faster load times.",
          "Ensure a positive user experience and protect your brand with 99.9% guaranteed uptime.",
          "Eliminate technical worries with our expert 24/7 management and white-glove migration service.",
          "Protect your site from threats with our Advanced Security Suite, including a WAF, malware scanning, and DDoS protection.",
        ],
        salesAngle: "Your website is your digital storefront; slow or offline hosting is like locking the doors during business hours. We provide premium, worry-free hosting that protects your investment and customer experience.",
        leadQualificationQuestions: [
          "Are you experiencing slow load times or downtime with your current host?",
          "What's your biggest concern with your current hosting: speed, security, or cost?",
          "Do you currently have reliable daily backups for your website?",
        ],
        commonObjections: {
          "Can you migrate my existing site for free?": "Yes, for most platforms our team provides a complimentary white-glove migration service. We handle everything to ensure a seamless transition with zero downtime for your visitors.",
          "What if my site gets hacked?": "It's a major benefit of our managed hosting. In the unlikely event of a compromise, we provide instant cleanup, restoration from your daily backups, and a full security audit at no extra cost to get you back online safely and quickly."
        },
        pricing: {
            type: "addon",
            monthlyFee: "$120/year"
        }
      },
      {
        id: "reputation-management",
        name: "Online Reputation Management",
        keywords: ["reputation", "reviews", "5 stars", "star rating", "google reviews", "yelp"],
        description: "Take control of your brand image, generate a steady stream of positive reviews, and turn customer feedback into lasting trust and more business.",
        benefits: [
          "Dramatically increase your average star rating, as we did for a client who went from 3.2 to 4.8 stars.",
          "Build powerful social proof that attracts new customers and boosts local SEO.",
          "Reduce the impact of negative reviews by 70% or more.",
          "Gain valuable insights from customer feedback to improve your operations.",
        ],
        salesAngle: "In today's market, your online reviews ARE your reputation. We give you a proactive system to build a 5-star reputation that consistently attracts new clients and puts you ahead of the competition.",
        leadQualificationQuestions: [
          "What is your current star rating on Google or other important review sites?",
          "Do you currently have a system in place for asking customers for reviews?",
          "How much time does your team spend responding to or managing online reviews?",
        ],
        commonObjections: {
          "Can you remove negative reviews?": "While no one can guarantee the removal of a legitimate review, we do work with platforms to report policy violations. More importantly, our strategy focuses on burying negative comments with a wave of new, positive reviews, which is far more effective for winning new customers.",
          "Will this feel authentic to my customers?": "Absolutely. The system works by making it incredibly easy for your genuinely happy customers to share their positive experiences. We simply remove the friction and automate the follow-up; the great reviews come from your great service."
        },
        pricing: {
            type: "addon",
            monthlyFee: "$300/month"
        }
      },
      {
        id: "database-reactivation",
        name: "Database Reactivation Campaigns",
        keywords: ["database", "reactivation", "old leads", "past customers", "win back", "dormant leads"],
        description: "Wake up dormant leads and past customers in your existing database using automated campaigns that re-engage, re-qualify, and convert without new ad spend.",
        benefits: [
          "Generate significant new sales from old leads, like the $42k we generated for a client in one month.",
          "Unlock hidden revenue without spending a dime on new advertising.",
          "Clean and organize your contact list for better future marketing.",
          "Win back past customers and increase their lifetime value.",
        ],
        salesAngle: "Your biggest source of new business might be the leads you already have. We help you mine that gold and turn dormant contacts into active, paying customers.",
        leadQualificationQuestions: [
          "Do you have a list of past customers or old leads that you aren't currently marketing to?",
          "What was the original source of these contacts (e.g., old inquiries, past events)?",
          "If you could reactivate 10% of that list, what would that mean for your business revenue?",
        ],
        commonObjections: {
          "Will this annoy my old contacts?": "That's a smart concern. Our approach is value-driven. We don't just spam them; we use smart segmentation and compelling win-back offers. We also use strict frequency capping and clear opt-outs to respect their inbox and maximize engagement.",
          "Is this compliant with privacy laws?": "100%. We strictly follow all best practices for consent and data protection under CAN-SPAM, GDPR, and other regulations to ensure your campaigns are both effective and compliant."
        },
        pricing: {
            type: "addon",
            oneTimeFee: "$450"
        }
      },
      {
        id: "email-sms-automation",
        name: "Email & SMS Marketing Automation",
        keywords: ["email automation", "sms marketing", "drip campaign", "nurture sequence", "mailchimp", "activecampaign", "convertkit"],
        description: "Automate your marketing with targeted, personalized messages that nurture leads through the sales process, keep customers engaged, and drive repeat business.",
        benefits: [
          "Save hours of manual follow-up time every week.",
          "Double your lead-to-client conversion rates with automated nurture sequences.",
          "Increase sales by 28% or more with features like abandoned cart recovery.",
          "Reduce no-shows for appointments by up to 45% with automated reminders.",
        ],
        salesAngle: "Stop letting qualified leads fall through the cracks. Automation ensures every single lead gets a timely, personalized follow-up at the perfect moment, dramatically increasing your conversion rates and saving you time.",
        leadQualificationQuestions: [
          "What is the most time-consuming follow-up task you or your team does manually right now?",
          "On average, how many 'touches' does it take to convert a new lead into a customer?",
          "Do you have a process for re-engaging customers after a sale to encourage repeat business?",
        ],
        commonObjections: {
          "Will this work with my existing tools?": "Yes, we specialize in seamless integrations with all major CRMs, eCommerce platforms, and marketing tools, including Shopify, HubSpot, Salesforce, and many more.",
          "I don't have a contact list to market to.": "Not a problem. We can help you build and segment your audience from scratch, using high-converting lead magnets, landing pages, and other list-building strategies as part of a larger project."
        },
        pricing: {
            type: "addon",
            setupFee: "$250",
            monthlyFee: "$100"
        }
      },
      {
        id: "social-schedulers",
        name: "Social Media Scheduling",
        keywords: ["social media", "scheduler", "posting", "hootsuite", "buffer", "later", "content calendar", "instagram", "facebook"],
        description: "Stay consistent and visible on social media with an all-in-one platform for automated post scheduling, content optimization, and performance analytics.",
        benefits: [
          "Save countless hours on social media management.",
          "Double your posting frequency and increase audience engagement by 60% or more.",
          "Increase website traffic from your social media channels by up to 40%.",
          "Use AI-powered tools to generate captions and find trending hashtags instantly.",
        ],
        salesAngle: "Consistency is the absolute key to success on social media. Our tool lets you plan and schedule your entire month's content in one afternoon, so you can stay visible and engaging while you focus on actually running your business.",
        leadQualificationQuestions: [
          "How much time are you currently spending each week on posting to social media?",
          "Which social media platforms are most important for your business?",
          "Do you find it challenging to come up with new content ideas consistently?",
        ],
        commonObjections: {
          "Does this support video formats like Instagram Reels and Stories?": "Yes, absolutely. You can plan, schedule, and publish all formats in advance, including permanent posts, Reels, Stories, and video content across multiple platforms.",
          "Is it better than just using the native schedulers in Facebook or Instagram?": "Yes, for two main reasons. First, it allows you to manage ALL your platforms from a single calendar, saving immense time. Second, it provides consolidated analytics and AI content tools that the native schedulers lack."
        },
        pricing: {
            type: "addon",
            setupFee: "$200",
            monthlyFee: "$50"
        }
      },
      {
        id: "blog-development",
        name: "Blog Development & Strategy",
        keywords: ["blog", "content marketing", "article writing", "content strategy", "authority", "thought leadership", "pensquare"],
        description: "Build industry authority and drive a consistent flow of high-quality organic traffic with a professionally written, SEO-optimized blog.",
        benefits: [
          "Increase your organic website traffic by 150% or more within months.",
          "Establish your brand as the go-to authority and expert in your niche.",
          "Generate a consistent, predictable flow of inbound leads from your content.",
          "Rank on the first page of Google for dozens of high-value keywords relevant to your customers.",
        ],
        salesAngle: "A high-quality blog is a powerful lead-generation asset that works for you 24/7. Unlike ads, a single great article can attract customers for years, making it an investment with compounding returns.",
        leadQualificationQuestions: [
          "Who is your target audience, and what are their biggest pain points or questions?",
          "Do you currently have a blog, and if so, what challenges are you facing with it?",
          "If you were seen as the #1 expert in your field, what would that mean for your business?",
        ],
        commonObjections: {
          "Do you write the articles, or do I have to?": "We have a team of expert, U.S.-based writers who will craft original, plagiarism-free content tailored specifically to your brand voice and industry. We handle everything from topic ideation to publishing.",
          "How is the success of a blog measured?": "It's more than just traffic. We track key business metrics like organic keyword rankings, time on page, and, most importantly, the number of qualified leads and conversions generated directly from your blog content."
        },
        pricing: {
            type: "packages",
            referenceId: "blogs" // Links to the main pricing object
        }
      }
    ],

        // --- PRICING PACKAGES & ADD-ONS (DEEPLY ENRICHED) ---
    // This object contains all pricing data for websites, blogs, and individual add-ons.
    // It's the primary data source for any user queries related to cost, features, and comparisons.
    pricing: {
      // WEBSITE PACKAGES
      websites: {
        title: "Website Design Packages",
        intro: "A one-time investment for a permanent, high-performance marketing asset. All packages are custom-coded from scratch using modern technology like React and Tailwind CSS, and are built to be SEO-ready from day one.",
        tiers: [
          {
            id: "basic-website",
            tier: "Basic",
            price: "$350",
            marketPrice: "$800 – $2,000",
            pages: "Up to 4",
            bestFor: "Startups, solo entrepreneurs, and local service providers needing a professional, effective online presence fast.",
            description: "Launch quickly with a clean, professional site that establishes your credibility and starts capturing leads. Includes up to 4 custom-designed pages (e.g., Home, About, Services, Contact) with full on-page SEO.",
            keyFeatures: [
              "Up to 4 Custom-Designed Pages",
              "Full On-Page SEO (keywords, meta tags)",
              "Manual Indexing Submission (Google & Bing)",
              "Domain Connection & SSL Assistance",
              "Fully Mobile-Responsive Design",
              "Built-in Lead Capture Form"
            ]
          },
          {
            id: "growth-website",
            tier: "Growth",
            price: "$650",
            marketPrice: "$2,000 – $5,000",
            pages: "Up to 7",
            bestFor: "Established small-to-midsize businesses ready to increase lead flow and showcase a wider range of services.",
            description: "Our most popular package, perfect for scaling. Get stronger search performance and more space to explain your services. Includes everything in Basic, plus up to 7 pages and enhanced SEO strategy.",
            keyFeatures: [
              "Everything in Basic",
              "Up to 7 Pages (e.g., extra service pages)",
              "Enhanced SEO Strategy & Structure",
              "Basic Analytics Integration",
              "Social Media Integration"
            ]
          },
          {
            id: "premium-website",
            tier: "Premium",
            price: "$1200",
            marketPrice: "$5,000 – $10,000+",
            pages: "Up to 12",
            bestFor: "Market leaders or businesses scaling quickly who need a robust, feature-rich platform to dominate their niche.",
            description: "The complete digital foundation. Ideal for growing brands needing full web power with advanced features for maximum performance. Includes everything in Growth, plus up to 12 pages and priority support.",
            keyFeatures: [
              "Everything in Growth",
              "Up to 12 Fully Customized Pages",
              "Google Analytics Setup & Tracking",
              "Priority Support (Build & Launch)",
              "Advanced Performance Tuning (Image Optimization, Lazy Loading)",
              "Extra Lead Capture Elements (e.g., Multi-Step Forms)"
            ]
          }
        ],
        faqs: [
          { q: "Do I own my website after it’s built?", a: "Yes, 100%. You get full ownership of all the code and assets. No subscriptions, no renting. It’s your permanent business asset." },
          { q: "Are the package prices one-time fees?", a: "Correct. All listed prices are one-time fees for the design and development work. The only separate, recurring costs would be for optional services like hosting or ongoing retainers." },
          { q: "Is the design custom or from a template?", a: "Every site we build is 100% custom-designed and custom-coded to match your brand. We do not use templates. We use modern frameworks like React and TailwindCSS for ultimate flexibility and performance." },
          { q: "How long does it take to complete a site?", a: "Our process is very efficient. Delivery is typically just a few days, but can sometimes extend to 7-14 business days depending on the project complexity and how quickly we receive content and feedback from you." },
          { q: "Do I need to buy hosting separately?", a: "Yes, hosting is separate as it gives you full control. We can deploy your site to a high-performance host like Vercel or Netlify, and we can guide you through choosing the best option." },
          { q: "Can you write the content for my website?", a: "Yes. Professional, SEO-friendly content writing is available as an affordable add-on service. We can craft compelling copy and find visuals that resonate with your customers." },
          { q: "Do you build e-commerce sites?", a: "Yes, we do. E-commerce functionality is not included in these packages but can be quoted separately. We build beautiful, high-converting storefronts on Shopify or as custom React applications." }
        ]
      },
      // BLOG PACKAGES
      blogs: {
        title: "Blog Packages",
        intro: "Establish your authority and attract organic traffic with consistently high-quality, SEO-optimized content. Each package includes a full blog setup tailored to your brand.",
        tiers: [
          {
            id: "basic-blog",
            tier: "Basic",
            price: "$350",
            marketPrice: "$500 – $2,000",
            bestFor: "Businesses new to content marketing who want to test the waters and start building topical authority.",
            description: "Ideal for startups wanting to establish online authority on a budget. Includes full blog setup and 3 high-quality, SEO-optimized posts crafted to engage your audience.",
            keyFeatures: [
              "Full Blog Setup & Integration",
              "3 SEO-Optimized Blog Posts",
              "Keyword Research for Topics",
              "Professional Writing & Editing"
            ]
          },
          {
            id: "standard-blog",
            tier: "Standard",
            price: "$650",
            marketPrice: "$2,001 – $5,000",
            bestFor: "Growing businesses ready to commit to a consistent content strategy to generate leads and improve search rankings.",
            description: "Designed to deepen your content strategy and SEO presence. Includes everything in Basic, plus 6 SEO-optimized posts and comprehensive SEO integration (meta tags, internal linking).",
            keyFeatures: [
              "Everything in Basic",
              "6 SEO-Optimized Blog Posts",
              "Comprehensive SEO Integration",
              "Improved On-Page SEO for Posts"
            ]
          },
          {
            id: "premium-blog",
            tier: "Premium",
            price: "$1200+",
            marketPrice: "$5,001 – $20,000+",
            bestFor: "Businesses aiming for market leadership through a dominant content strategy that covers all aspects of their niche.",
            description: "The complete solution for market leadership. Includes full setup, 10+ expert-written posts, a comprehensive SEO strategy with a content calendar, and performance monitoring.",
            keyFeatures: [
              "Everything in Standard",
              "10+ Expert-Written SEO Posts",
              "Comprehensive SEO Strategy & Content Calendar",
              "Analytics Integration & Performance Monitoring"
            ]
          }
        ],
        faqs: [
          { q: "How long does it take to set up the blog and publish posts?", a: "Setup typically takes 3–5 business days. After that, each batch of posts is delivered within 1–2 weeks, depending on the tier. We keep you informed throughout the process." },
          { q: "Can I request specific topics or keywords for the posts?", a: "Absolutely! We encourage you to share your preferred topics and customer pain points. We’ll align all content with your business goals and industry best practices." },
          { q: "Do you handle publishing the posts on my website?", a: "Yes, we manage the entire publishing process to ensure your blog looks professional and functions correctly on your site." },
          { q: "What if I want ongoing blog content creation?", a: "We offer flexible monthly blogging packages and retainer services to keep your content fresh and your audience engaged. Just ask us for a custom plan." }
        ]
      },
      // ADD-ON SERVICES
      addonServices: {
        title: "Individually Sold Services & Add-ons",
        intro: "Enhance your website and automate your business with our powerful add-on services. These can be added to any website package or purchased individually to create a complete growth system.",
        monthlyFeesExplained: {
          intro: "Some services come with a one-time setup fee and a recurring monthly or yearly fee. Here's the breakdown:",
          setup: "The one-time Setup Fee covers the expert configuration, custom integration, strategy building, and launch of the system, all tailored to your specific business needs.",
          recurring: "The Monthly or Yearly Fee covers ongoing software access, platform costs, continuous monitoring, tech support, and minor updates to keep your systems running smoothly and effectively."
        },
        services: [
          { name: 'Fast & Secure Web Hosting', price: '$120/year', marketPrice: '$180 – $400/year', description: 'High-speed hosting with 99.9% uptime, free SSL, and blazing performance. We handle the full setup and monitoring so your site loads fast and stays online.' },
          { name: 'Online Reputation Management', price: '$300/month', marketPrice: '$500 – $1,500/month', description: 'Monitor and improve your reviews across major platforms. We automate positive review requests and help manage your brand image.' },
          { name: 'Database Reactivation Campaigns', price: '$450 (one-time)', marketPrice: '$750 – $2,000+', description: 'Re-engage dormant leads with automated email & SMS campaigns. A powerful way to generate revenue from your existing contact list without new ad spend.' },
          { name: 'Email & SMS Automation', price: '$250 setup + $100/month', marketPrice: '$400 – $1,200/month', description: 'Set up intelligent automations for lead follow-ups, appointment reminders, and promotions. Includes 1-3 custom workflows.' },
          { name: 'Live Chat & AI Chatbots', price: '$350 setup + $30/month', marketPrice: '$500 – $1,500+ setup', description: 'Engage visitors 24/7 with a live chat widget or a custom-trained AI chatbot like me to qualify leads and answer questions.' },
          { name: 'Social Media Schedulers', price: '$200 setup + $50/month', marketPrice: '$300 – $1,000/month', description: 'Schedule your posts across multiple social media platforms from a single interface, complete with analytics and engagement metrics.' },
        ],
        faqs: [
          { q: "Are these services required for my website to work?", a: "No, they are entirely optional. However, they add significant value by enhancing lead capture, improving SEO, and automating your marketing." },
          { q: "Why is there a setup fee AND a monthly fee for some services?", a: "The setup fee covers the initial, intensive work of custom building and launching the system for you. The smaller monthly fee then covers the ongoing costs like software licenses, monitoring, and priority support to ensure it keeps running perfectly." },
          { q: "Can I cancel monthly services at any time?", a: "Yes, absolutely. We believe in earning your business every month. We only require 14 days’ notice to pause or cancel any ongoing service." },
          { q: "Is there a discount if I buy more than one service?", a: "Yes, bundling two or more services with a website package often comes with a discount. Let me know which services you're interested in, and I can get you a custom quote." }
        ]
      }
    },

        // --- FAQS (General & Comprehensive) ---
    // This consolidated list serves as a primary knowledge source for handling a wide
    // range of user questions, from initial contact to specific technical details.
    faqs: [
      // CATEGORY: Getting Started & Process
      {
        category: "Getting Started & Process",
        q: "How do I get started with a project?",
        a: "The best way is to book a free, no-pressure strategy call using our online scheduler. Alternatively, you can fill out our project form. We’ll discuss your goals, answer all your questions, and recommend the best path forward."
      },
      {
        category: "Getting Started & Process",
        q: "How long does a website project take to complete?",
        a: "Our process is very efficient. Delivery is typically just a few days, but can sometimes extend to 7-14 business days depending on the project complexity and how quickly we receive content and feedback from you. We'll provide a clear timeline before we begin."
      },
      {
        category: "Getting Started & Process",
        q: "Can you write the content and find images for my website?",
        a: "Yes, absolutely. We offer professional, SEO-friendly content writing and stock photography sourcing as affordable add-on services. We can craft compelling copy and find powerful visuals that resonate with your customers."
      },
      {
        category: "Getting Started & Process",
        q: "Can I request revisions during the design process?",
        a: "Yes, of course. Reasonable rounds of revisions are included in every project to ensure the final product meets your expectations. We'll discuss the specifics of the revision process before we start so everything is clear."
      },
      {
        category: "Getting Started & Process",
        q: "Will you train me on how to use the tools or my new website?",
        a: "Definitely. For any tools we set up, we provide simple video walkthroughs or screen-shares so you can feel confident. For new websites, we provide training on how to manage your content through the CMS."
      },

      // CATEGORY: Pricing & Payments
      {
        category: "Pricing & Payments",
        q: "Are the website package prices a one-time fee or monthly?",
        a: "All our website package prices are strictly one-time fees. You pay once for the design and development, and you own the website outright. There are no recurring charges to us for the website itself."
      },
      {
        category: "Pricing & Payments",
        q: "Why do some add-on services have a setup fee AND a monthly fee?",
        a: "That's a great question. The one-time Setup Fee covers the initial, intensive work of custom building, integrating, and launching the system for you. The smaller Monthly Fee then covers the ongoing costs like software licenses, platform access, monitoring, and priority support to ensure it keeps running perfectly."
      },
      {
        category: "Pricing & Payments",
        q: "Do you offer payment plans?",
        a: "Yes, for most larger projects, we offer flexible payment plans to make the investment more manageable. We can discuss the best options for you during our initial strategy call."
      },
      {
        category: "Pricing & Payments",
        q: "Is there a discount if I buy more than one service or bundle them?",
        a: "Yes, we often provide discounts for clients who bundle two or more services with a website package. If you let me know which services you're interested in, I can work on getting you a custom quote."
      },

      // CATEGORY: Services & Technical
      {
        category: "Services & Technical",
        q: "What makes First & Last Marketing different from other agencies?",
        a: "Our core difference is our focus on building permanent assets for you. You own your website 100%. We combine agency-level quality and custom-coded technology with transparent, fair pricing, and a relentless focus on generating a real return on your investment."
      },
      {
        category: "Services & Technical",
        q: "Is your website design template-based or custom?",
        a: "Every site we build is 100% custom-designed and custom-coded from scratch to match your brand. We do not use generic templates. We build with modern technologies like React, Vite, and Tailwind CSS for maximum performance, security, and flexibility."
      },
      {
        category: "Services & Technical",
        q: "Can you integrate with my existing CRM or other tools?",
        a: "Yes, we specialize in seamless integrations. We can connect your website and our marketing tools with hundreds of popular platforms like HubSpot, Salesforce, Mailchimp, Calendly, and many more."
      },
      {
        category: "Services & Technical",
        q: "Do you build e-commerce websites to sell products online?",
        a: "We certainly do. While e-commerce functionality isn't included in our standard website packages, we can provide a separate quote for it. We build beautiful, high-converting storefronts on platforms like Shopify or as fully custom React applications."
      },
      {
        category: "Services & Technical",
        q: "Do you offer ongoing support after a project is launched?",
        a: "Absolutely. While you own your site completely, we offer optional monthly maintenance and support retainers. These plans handle things like software updates, security monitoring, performance optimizations, and priority support for any questions you have."
      },

      // CATEGORY: Ownership & Policies
      {
        category: "Ownership & Policies",
        q: "Do I truly own my website after it’s built?",
        a: "Yes, 100%. You get full ownership of all the code, design files, and content. There are no subscriptions, no renting, and no vendor lock-in. It is your permanent business asset to do with as you please."
      },
      {
        category: "Ownership & Policies",
        q: "Do I need to buy hosting separately?",
        a: "Yes, and this is by design to ensure you have full ownership and control. Hosting is not included in the website package price. We will help you choose a reliable, high-performance host (like Vercel, Netlify, or SiteGround) and handle the entire deployment and setup process for you."
      },
      {
        category: "Ownership & Policies",
        q: "Can I cancel monthly services at any time?",
        a: "Yes, you can. We believe in earning your business every month and don't lock clients into long-term contracts for monthly services. We only require a 14-day notice to pause or cancel any ongoing plan."
      },
      {
        category: "Ownership & Policies",
        q: "Can I change or upgrade my services later as my business grows?",
        a: "Definitely. All our solutions are built to be scalable. You can add more pages or features to your website, or upgrade your monthly add-on services as your business expands and your needs evolve."
      }
    ],
  },

    // =======================================================================
  // 4. AGENT CONFIGURATION: The Strategic & Behavioral Core
  // This data directs the AI's proactive behavior, sales strategy, and conversational flow.
  // It is the rulebook for turning Jacob from a reactive bot into a proactive consultant.
  // =======================================================================
  agentConfig: {
    // --- Proactive Engagement & Sales Funnel Nudges ---
    // These are triggered by frontend events to make Jacob appear intelligent and context-aware.
    proactiveEngagement: {
      onInitialPageLoad: {
        delaySeconds: 15,
        messages: [
          "Finding the right marketing strategy can be tough. Is there a specific goal I can help you with today, like getting more leads or improving your website?",
          "Welcome! I'm here to help you navigate our solutions. Feel free to ask me anything about how we can help your business grow.",
          "Just browsing? If you have any questions about digital marketing, from SEO to AI chatbots, I'm ready to help.",
        ]
      },
      onScrollToPricing: {
        triggerElementId: "pricing-section", // Assumes your pricing section has this ID
        messages: [
          "I see you're checking out our pricing. We focus on transparent, up-front costs for assets you own forever. Do you have any questions about our packages?",
          "Analyzing the numbers? I can help clarify what's included in each package or even discuss custom options if you have a specific budget in mind.",
        ]
      },
      onPageview_SpecificService: {
        // NOTE: Frontend logic would detect the page URL (e.g., '/services/seo')
        // and provide the AI with the context.
        messageTemplate: "I see you're looking into our {{serviceName}} services. That's a powerful way to {{serviceBenefit}}. A common question I get is '{{commonQuestion}}'. Can I help answer that for you?",
        // Example variables for the template:
        // serviceName: "SEO Campaigns"
        // serviceBenefit: "drive long-term organic traffic"
        // commonQuestion: "how long does it take to see results"
      },
      onIdle: {
        delaySeconds: 60,
        messages: [
          "It looks like you might be weighing some options. A great place to start is our free, no-pressure strategy call. Would you be interested in booking one?",
          "Did you know we have a number of case studies showing how we've helped businesses like yours? I can share one relevant to your industry if you'd like.",
          "Sometimes the right question is the hardest part. Is there anything, big or small, I can help clarify for you about digital marketing?",
        ]
      },
      onExitIntent: {
        // Triggered when the user's mouse moves towards the top of the browser to leave.
        messages: [
          "Before you go, did you find what you were looking for? A quick 30-second chat with me might save you hours of research.",
          "Wait! Don't leave empty-handed. Would you like our free guide on '5 Website Mistakes That Kill Conversions' before you head out?",
        ]
      }
    },

    // --- Strategic Lead Qualification ---
    // A library of questions Jacob can use to understand a user's needs, budget, and authority.
    leadQualification: {
      // General questions to start a discovery process.
      discoveryQuestions: [
        "To start, could you tell me a little bit about your business and what industry you're in?",
        "What's the biggest marketing challenge you're facing right now?",
        "What would a 'win' look like for your business in the next 6 months from a marketing perspective?",
        "Have you worked with a marketing agency or freelancer before? What was that experience like?",
      ],
      // Deeper questions to qualify a lead further down the funnel.
      deepDiveQuestions: {
        budget: [
          "Do you have a specific budget allocated for this project? Knowing this helps me recommend the most impactful solutions for your investment.",
          "To give you the most accurate recommendations, are we looking at a budget closer to our Basic packages, or are you exploring more comprehensive solutions like our Premium tiers?",
        ],
        timeline: [
          "How soon are you looking to get started on this project?",
          "Is there a specific deadline or event you're trying to prepare for?",
        ],
        painPoints: [
          "What's the one thing you wish your website or marketing did for you that it isn't doing today?",
          "If you could wave a magic wand and solve one marketing problem instantly, what would it be?",
        ]
      }
    },

    // --- Feedback Collection & Conversation Closing ---
    // For improving Jacob's performance and ending conversations gracefully.
    feedbackAndClosing: {
      onHelpfulInteraction: {
        // Triggered after the AI has successfully answered 2-3 questions or used a tool effectively.
        message: "I'm glad I could help with that! Just for my own improvement, on a scale of 1-5, how helpful has this conversation been so far?",
      },
      onFormSubmissionSuccess: {
        message: "Thank you for that information! Our team will review it and get in touch with you shortly. Is there anything else at all I can assist you with today?",
      },
      onConversationEnd: {
        // Used when the conversation naturally concludes.
        message: "It was a pleasure chatting with you! If you think of anything else, you know where to find me. Have a great day!",
      }
    }
  },

  // =======================================================================
  // 5. RESOURCES: A Library of Content to Build Trust & Showcase Expertise
  // This section is strategically designed to be 100% genuine. It reframes
  // "case studies" as "project showcases" and replaces fabricated testimonials
  // with powerful value propositions and actionable guides.
  // =======================================================================
  resources: {
    // --- Project Showcase: Demonstrating Our Craft ---
    // Instead of traditional case studies, these showcase our technical and design
    // capabilities on real, high-quality builds.
    projectShowcase: [
      {
        id: "showcase-01",
        title: "First & Last Marketing - Our Flagship Site",
        relatedServiceIds: ["web-design", "seo", "ai-chatbots"],
        summary: "Our own website serves as a living demonstration of our capabilities. It's custom-coded from scratch for peak performance, features advanced animations, and is integrated with this very AI assistant to showcase our proficiency in building modern, interactive web experiences.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js"],
        keyFeatures: ["Conversion-focused UI/UX", "High Google PageSpeed Scores", "AI Agent Integration", "Seamless Responsive Design"]
      },
      {
        id: "showcase-02",
        title: "E&C Clinic - A Healthcare Web Application Concept",
        relatedServiceIds: ["web-design", "seo"],
        summary: "A demonstration project built to showcase our ability to create clean, professional, and trustworthy websites for service-based industries. It highlights our skills in creating intuitive navigation, clear calls-to-action, and an accessible user experience that builds confidence with users.",
        techStack: ["React", "Vite", "CSS Modules"],
        keyFeatures: ["WCAG Accessibility Principles", "Service-Oriented Architecture", "Trust-Building Design Elements", "Mobile-First Layout"]
      },
      {
        id: "showcase-03",
        title: "Carolin's Kitchen - A Visual Brand Showcase",
        relatedServiceIds: ["web-design"],
        summary: "This project was built to demonstrate our expertise in creating visually rich, vibrant websites for brands where aesthetics are key. It features a stunning photo gallery, a streamlined inquiry form, and a design that makes the product—in this case, food—the hero of the story.",
        techStack: ["JavaScript (ES6+)", "HTML5", "CSS Grid & Flexbox"],
        keyFeatures: ["Visually-Driven Storytelling", "Optimized Image Loading", "Simple & Effective Lead Capture Forms"]
      }
    ],

    // --- Value Propositions: Our Core Beliefs in Action ---
    // Instead of testimonials, we present our core promises to you. This is our pledge.
    valuePropositions: [
        {
          id: "vp-01",
          relatedServiceIds: ["web-design"],
          statement: "We Build Assets, Not Expenses.",
          elaboration: "A website from us is a permanent, high-performance asset that you own completely. It's an investment in your growth, not a recurring rental fee on a generic template."
        },
        {
          id: "vp-02",
          relatedServiceIds: ["web-design", "seo", "ai-chatbots"],
          statement: "Clarity from Code to Conversation.",
          elaboration: "We believe in transparency. Our code is clean and scalable, our pricing is upfront, and our communication is direct. You will always know what you're getting and why."
        },
        {
          id: "vp-03",
          relatedServiceIds: ["seo", "ai-chatbots", "email-sms-automation"],
          statement: "Your Growth is Our Metric.",
          elaboration: "We are obsessed with results. Our success isn't measured by pretty designs, but by the tangible impact we have on your lead flow, conversion rates, and overall business growth."
        }
    ],
    
        // --- Key Blog Posts & Guides: Sharing Our Knowledge ---
    // A library of valuable content the AI can offer to nurture leads and prove expertise.
    keyBlogPosts: [
        {
          id: "blog-01",
          title: "The Ultimate Guide to Digital Marketing in 2025",
          relatedServiceIds: ["seo", "web-design", "email-sms-automation"],
          url: "https://www.firstandlastmarketing.com/blog/ultimate-guide-digital-marketing-2025",
          summary: "A comprehensive overview of the essential marketing strategies businesses need to succeed in the current landscape."
        },
        {
          id: "blog-02",
          title: "Why Custom-Coded Websites Outperform Templates",
          relatedServiceIds: ["web-design"],
          url: "https://www.firstandlastmarketing.com/blog/web-design-trends-2025", // Note: Using the trends URL as it aligns best.
          summary: "Explains the critical difference in speed, SEO, and security between a custom-coded asset and a generic template."
        },
        {
          id: "blog-03",
          title: "How an AI Chatbot Can Triple Your Lead Conversion",
          relatedServiceIds: ["ai-chatbots"],
          url: "https://www.firstandlastmarketing.com/blog/chat-automation-human-touch",
          summary: "Details how 24/7 automated assistants can capture leads, answer questions, and improve customer service without sounding robotic."
        },
        {
          id: "blog-04",
          title: "Top SEO Trends for SaaS Businesses in 2025",
          relatedServiceIds: ["seo"],
          url: "https://www.firstandlastmarketing.com/blog/top-seo-trends-2025-saas",
          summary: "Covers the latest search engine optimization trends specifically for Software-as-a-Service businesses."
        },
        {
          id: "blog-05",
          title: "Building an Effective SEO Content Strategy for SaaS",
          relatedServiceIds: ["seo", "blog-development"],
          url: "https://www.firstandlastmarketing.com/blog/seo-content-strategy-saas-2025",
          summary: "A step-by-step guide on creating a content strategy that drives organic traffic for SaaS companies."
        },
        {
          id: "blog-06",
          title: "A Review of Top Marketing Automation Tools for 2025",
          relatedServiceIds: ["email-sms-automation", "database-reactivation"],
          url: "https://www.firstandlastmarketing.com/blog/top-marketing-automation-tools-2025",
          summary: "An analysis of the best tools on the market for automating your marketing efforts and nurturing leads."
        },
        {
          id: "blog-07",
          title: "A Guide to Online Reputation Management for SaaS",
          relatedServiceIds: ["reputation-management"],
          url: "https://www.firstandlastmarketing.com/blog/reputation-management-saas",
          summary: "Explains how Software-as-a-Service companies can effectively manage their online reputation to build trust and authority."
        },
        {
          id: "blog-08",
          title: "Actionable Strategies to Turn Website Visitors into Leads",
          relatedServiceIds: ["web-design", "ai-chatbots"],
          url: "https://www.firstandlastmarketing.com/blog/turn-visitors-into-leads",
          summary: "Provides proven, actionable strategies for converting your existing website traffic into a consistent flow of qualified leads."
        },
        {
          id: "blog-09",
          title: "7 Common Landing Page Mistakes to Avoid in 2025",
          relatedServiceIds: ["web-design"],
          url: "https://www.firstandlastmarketing.com/blog/landing-page-mistakes-2025",
          summary: "Highlights critical design and copy errors that hurt landing page conversion rates and provides clear instructions on how to fix them."
        },
        {
          id: "blog-10",
          title: "The Transformative Role of AI in Marketing for 2025",
          relatedServiceIds: ["ai-chatbots", "email-sms-automation"],
          url: "https://www.firstandlastmarketing.com/blog/ai-in-marketing-2025",
          summary: "An exploration of how Artificial Intelligence is fundamentally changing the marketing landscape and how your business can leverage it."
        },
    ],

  // =======================================================================
  // 6. LINKS & FORMS: Essential URLs and form structures for reliable reference.
  // =======================================================================
    // =======================================================================
  // 6. LINKS & SITE MAP: The AI's complete, structured map of the website.
  // This is a significant upgrade from a simple list. It categorizes all URLs
  // and enriches blog content, making it discoverable and useful for the AI agent.
  // =======================================================================
  links: {
    // --- Primary Navigation & Core Pages ---
    main: {
      home: "https://www.firstandlastmarketing.com/",
      services: "https://www.firstandlastmarketing.com/services",
      portfolio: "https://www.firstandlastmarketing.com/portfolio",
      about: "https://www.firstandlastmarketing.com/about",
      contact: "https://www.firstandlastmarketing.com/contact",
      pricing: "https://www.firstandlastmarketing.com/pricing",
      blog: "https://www.firstandlastmarketing.com/blog",
    },

    // --- High-Value Conversion Actions ---
    keyActions: {
      onboarding: "https://www.firstandlastmarketing.com/onboarding",
      booking: "https://www.firstandlastmarketing.com/book-a-call",
    },

    // --- Legal & Policy Pages ---
    legal: {
      privacyPolicy: "https://www.firstandlastmarketing.com/privacy-policy",
      termsOfUse: "https://www.firstandlastmarketing.com/terms-of-use",
    },

    // --- Specific Landing Pages for Niches ---
    // This structure allows the AI to recommend targeted pages.
    nicheLandingPages: [
      {
        name: "Home Services & Contractors",
        path: "/contractors",
        url: "https://www.firstandlastmarketing.com/contractors",
        keywords: ["contractor", "hvac", "plumber", "electrician", "roofer", "home service"],
      },
      // Add more niche pages here as they are created
    ],

    // --- Enriched Blog Content Library ---
    // This allows the AI to find and recommend specific, relevant articles.
    blogContent: {
      main: "https://www.firstandlastmarketing.com/blog",
      featuredArticles: [
        {
          title: "The Ultimate Guide to Digital Marketing in 2025",
          url: "https://www.firstandlastmarketing.com/blog/ultimate-guide-digital-marketing-2025",
          keywords: ["guide", "digital marketing", "2025", "overview", "strategy"],
          summary: "A comprehensive overview of essential marketing strategies for success."
        },
        {
          title: "Top SEO Trends for SaaS in 2025",
          url: "https://www.firstandlastmarketing.com/blog/top-seo-trends-2025-saas",
          keywords: ["seo", "trends", "saas", "ranking", "b2b"],
          summary: "Covers the latest SEO trends specifically for Software-as-a-Service businesses."
        },
        {
          title: "Building an SEO Content Strategy for SaaS",
          url: "https://www.firstandlastmarketing.com/blog/seo-content-strategy-saas-2025",
          keywords: ["seo", "content strategy", "saas", "blogging", "authority"],
          summary: "A guide on creating a content strategy that drives organic traffic for SaaS companies."
        },
        {
          title: "Top Marketing Automation Tools for 2025",
          url: "https://www.firstandlastmarketing.com/blog/top-marketing-automation-tools-2025",
          keywords: ["marketing automation", "tools", "email", "sms", "drip campaign"],
          summary: "A review of the best tools for automating your marketing efforts and nurturing leads."
        },
        {
          title: "A Guide to Reputation Management for SaaS",
          url: "https://www.firstandlastmarketing.com/blog/reputation-management-saas",
          keywords: ["reputation management", "reviews", "saas", "brand image"],
          summary: "Explains how SaaS companies can manage their online reputation to build trust."
        },
        {
          title: "How to Turn Website Visitors into Leads",
          url: "https://www.firstandlastmarketing.com/blog/turn-visitors-into-leads",
          keywords: ["conversion", "leads", "visitors", "cro", "lead generation"],
          summary: "Actionable strategies for converting your website traffic into qualified leads."
        },
        {
          title: "Balancing Chat Automation with a Human Touch",
          url: "https://www.firstandlastmarketing.com/blog/chat-automation-human-touch",
          keywords: ["chatbot", "ai", "automation", "human touch", "customer service"],
          summary: "Discusses the importance of integrating AI chatbots with human support for the best customer experience."
        },
        {
          title: "Common Landing Page Mistakes to Avoid in 2025",
          url: "https://www.firstandlastmarketing.com/blog/landing-page-mistakes-2025",
          keywords: ["landing page", "mistakes", "conversion", "design", "optimization"],
          summary: "Highlights critical errors that hurt landing page conversion rates and how to fix them."
        },
        {
          title: "The Role of AI in Marketing for 2025",
          url: "https://www.firstandlastmarketing.com/blog/ai-in-marketing-2025",
          keywords: ["ai", "artificial intelligence", "marketing", "future", "trends"],
          summary: "An exploration of how AI is changing the marketing landscape and how businesses can leverage it."
        },
        {
          title: "Top Web Design Trends for 2025",
          url: "https://www.firstandlastmarketing.com/blog/web-design-trends-2025",
          keywords: ["web design", "trends", "ui", "ux", "2025", "website"],
          summary: "A look at the latest design trends that are shaping modern, effective websites."
        }
      ]
    }
  },
    // =======================================================================
  // 7. LEAD FORM CONFIGURATION: Structured data for intelligent form handling.
  // This is the final piece of the knowledge base, elevated from a simple list
  // to a full configuration block for the lead capture process.
  // =======================================================================
  leadForm: {
    title: "Project Onboarding & Quote Request",
    description: "Excellent! Let's get a few details about your project. This will help us understand your needs and prepare a tailored quote and strategy for our initial call.",
    confirmationMessage: "Thank you for reaching out! We've received your information and will be in touch shortly to discuss your project. Is there anything else I can help with?",
    
    // This structured array provides rich data for the frontend form,
    // linking user-friendly labels to machine-readable values.
    availableServices: [
      {
        label: "Web Design & Development",
        value: "web-design",
        description: "A custom-coded website built from scratch to grow your brand."
      },
      {
        label: "Live Chat & AI Chatbot Platforms",
        value: "ai-chatbots",
        description: "A 24/7 automated assistant to engage visitors and capture leads."
      },
      {
        label: "SEO Campaigns & Optimization",
        value: "seo",
        description: "Long-term strategies to boost your Google rankings and organic traffic."
      },
      {
        label: "Fast & Secure Web Hosting",
        value: "web-hosting",
        description: "Reliable, high-speed hosting for your new or existing website."
      },
      {
        label: "Online Reputation Management",
        value: "reputation-management",
        description: "Build a 5-star reputation by generating and managing online reviews."
      },
      {
        label: "Database Reactivation Campaigns",
        value: "database-reactivation",
        description: "Re-engage old leads and past customers to unlock hidden revenue."
      },
      {
        label: "Email & SMS Marketing Automation",
        value: "email-sms-automation",
        description: "Automate your follow-ups, reminders, and marketing messages."
      },
      {
        label: "Social Media Scheduling",
        value: "social-schedulers",
        description: "Plan and automate your social media content across all platforms."
      },
      {
        label: "Blog Development & Strategy",
        value: "blog-development",
        description: "Establish industry authority with SEO-optimized content marketing."
      },
      {
        label: "Not Sure / General Inquiry",
        value: "general-inquiry",
        description: "Select this if you're not sure where to start or have a general question."
      }
    ]
  },
}};