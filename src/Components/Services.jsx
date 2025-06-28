// src/components/Services.jsx
import React, { useState } from "react";
import {
  FaGlobe,
  FaServer,
  FaStar,
  FaDatabase,
  FaEnvelopeOpenText,
  FaComments,
  FaClock,
} from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ExplorePricingCTA from "./ExplorePricingCTA";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "web-design",
      icon: (
        <FaGlobe
          className="text-4xl text-yellow-500 drop-shadow"
          aria-hidden="true"
        />
      ),
      title: "Web Design & Development",
      desc: "Modern, responsive websites that convert visitors and grow your brand.",
      content: (
        <>
          <p>
            At First & Last Marketing, we believe your website is the
            cornerstone of your digital presence and the engine that drives your
            business growth. Our approach to web design and development is
            holistic, blending strategy, creativity, and technology to deliver
            sites that don’t just look great—they perform, convert, and scale
            with your business.
          </p>
          <h4 className="font-bold mt-4 mb-1">
            Comprehensive Discovery & Strategy
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Brand Deep Dive:</strong> We conduct in-depth interviews
              and workshops to understand your brand, audience, and competitive
              landscape. This ensures every design element is intentional and
              aligned with your business goals.
            </li>
            <li>
              <strong>Persona Development:</strong> We create detailed user
              personas and map customer journeys to inform site structure,
              content, and calls-to-action.
            </li>
            <li>
              <strong>SEO & Content Strategy:</strong> Our team researches
              keywords, analyzes competitors, and plans content architecture to
              maximize organic visibility from day one.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Design Excellence & User Experience
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Custom Visual Design:</strong> Every pixel is crafted to
              reflect your unique identity. We use mood boards, style tiles, and
              interactive prototypes to ensure your vision is realized.
            </li>
            <li>
              <strong>Conversion-Driven Layouts:</strong> Strategic placement of
              CTAs, trust signals, and lead forms to maximize engagement and
              conversions.
            </li>
            <li>
              <strong>Accessibility First:</strong> We rigorously test for WCAG
              2.1 compliance, ensuring your site is usable by everyone,
              including those with disabilities.
            </li>
            <li>
              <strong>Microinteractions & Animations:</strong> Subtle animations
              and feedback cues enhance user delight and guide visitors through
              your site.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Modern Development & Performance
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Latest Technologies:</strong> We build with React,
              Next.js, WordPress, or headless CMS—choosing the stack that best
              fits your needs for speed, security, and scalability.
            </li>
            <li>
              <strong>Mobile-First & Responsive:</strong> Every site is designed
              for flawless performance on all devices, with touch-friendly
              navigation and adaptive layouts.
            </li>
            <li>
              <strong>Lightning-Fast Load Times:</strong> We optimize images,
              code, and server configurations to achieve top scores on Google
              PageSpeed and Core Web Vitals.
            </li>
            <li>
              <strong>SEO Technical Best Practices:</strong> Semantic HTML,
              structured data, XML sitemaps, and clean URLs are standard in
              every build.
            </li>
            <li>
              <strong>Security & Compliance:</strong> SSL, firewalls, GDPR-ready
              privacy features, and regular security audits protect your site
              and your users.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Content Management & Integrations
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Flexible CMS Solutions:</strong> We tailor the content
              management experience to your team—whether you prefer WordPress,
              Webflow, or a custom headless CMS.
            </li>
            <li>
              <strong>Third-Party Integrations:</strong> Seamless connections to
              CRMs, marketing automation, analytics, booking systems, and
              eCommerce platforms.
            </li>
            <li>
              <strong>Multilingual & Localization:</strong> Expand your reach
              with multi-language support and region-specific content.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Advanced Features & Add-Ons</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Progressive Web Apps (PWAs):</strong> Deliver app-like
              experiences with offline support, push notifications, and
              installability.
            </li>
            <li>
              <strong>Custom Dashboards:</strong> Empower your team with
              real-time analytics, lead tracking, and content insights.
            </li>
            <li>
              <strong>Interactive Elements:</strong> Calculators, quizzes, and
              dynamic forms to engage visitors and capture qualified leads.
            </li>
            <li>
              <strong>eCommerce & Membership:</strong> Robust online stores,
              gated content, and subscription models to monetize your audience.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Real-World Results</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>B2B SaaS:</strong> Redesigned site led to a 60% increase
              in demo requests and a 35% reduction in bounce rate.
            </li>
            <li>
              <strong>Local Service Business:</strong> Improved mobile UX and
              local SEO, resulting in a 3x increase in inbound calls.
            </li>
            <li>
              <strong>eCommerce Brand:</strong> Custom Shopify build with
              advanced filtering and one-click checkout boosted conversion rates
              by 42%.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Our Process</h4>
          <ol className="list-decimal ml-5 mb-3 space-y-1">
            <li>
              <strong>Discovery & Strategy:</strong> Deep research, goal
              alignment, and project planning.
            </li>
            <li>
              <strong>Wireframing & Prototyping:</strong> Interactive blueprints
              for feedback and iteration.
            </li>
            <li>
              <strong>Design & Branding:</strong> High-fidelity mockups and
              style guides.
            </li>
            <li>
              <strong>Development:</strong> Agile, test-driven coding with
              regular demos.
            </li>
            <li>
              <strong>Quality Assurance:</strong> Comprehensive testing for
              performance, accessibility, and security.
            </li>
            <li>
              <strong>Launch & Training:</strong> Seamless go-live, team
              onboarding, and documentation.
            </li>
            <li>
              <strong>Ongoing Support:</strong> Proactive maintenance,
              analytics, and optimization.
            </li>
          </ol>
          <h4 className="font-bold mt-4 mb-1">Frequently Asked Questions</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>How quickly can you launch my site?</strong> We move
              fast—our streamlined process and agile team deliver results with
              impressive speed, without sacrificing quality.
            </li>
            <li>
              <strong>Can you migrate my existing content?</strong> Yes, we
              handle full content migrations, including blogs, images, and SEO
              metadata, with zero downtime.
            </li>
            <li>
              <strong>Do you offer ongoing support?</strong> Absolutely. We
              provide maintenance, updates, analytics, and optimization to keep
              your site performing at its best.
            </li>
            <li>
              <strong>Will my site be easy to update?</strong> Yes, we provide
              custom training and intuitive CMS setups so your team can manage
              content effortlessly.
            </li>
            <li>
              <strong>Can you integrate with my CRM or marketing tools?</strong>{" "}
              We specialize in seamless integrations with HubSpot, Salesforce,
              Mailchimp, Zapier, and more.
            </li>
            <li>
              <strong>What makes your sites different?</strong> Our focus on
              strategy, conversion, and long-term scalability sets us apart.
              Every site is built to grow with your business.
            </li>
          </ul>
          <p>
            <strong>Ready to transform your online presence?</strong> Book a
            free strategy session and discover how a high-performance website
            can accelerate your growth.
          </p>
        </>
      ),
    },
    {
      id: "web-hosting",
      icon: (
        <FaServer
          className="text-4xl text-purple-700 drop-shadow"
          aria-hidden="true"
        />
      ),
      title: "Fast & Secure Web Hosting",
      desc: "Blazing-fast managed hosting with 99.9% uptime and top-tier security.",
      content: (
        <>
          <p>
            Your website’s speed, security, and reliability are critical to your
            success. Our managed hosting solutions are engineered for peak
            performance, robust protection, and effortless scalability—so you
            can focus on your business, not your servers. We handle everything
            from infrastructure to ongoing optimization, delivering a worry-free
            experience for you and your visitors.
          </p>
          <h4 className="font-bold mt-4 mb-1">
            Enterprise-Grade Infrastructure
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Global Data Centers:</strong> Choose from multiple regions
              for optimal latency and compliance. Our network is built on AWS,
              Google Cloud, and DigitalOcean for unmatched reliability.
            </li>
            <li>
              <strong>SSD & NVMe Storage:</strong> Ultra-fast storage ensures
              rapid data access and page loads, even for media-rich sites.
            </li>
            <li>
              <strong>Auto-Scaling Resources:</strong> Instantly scale CPU, RAM,
              and bandwidth to handle traffic spikes—no manual intervention
              required.
            </li>
            <li>
              <strong>Redundant Architecture:</strong> Multiple failover systems
              and real-time backups guarantee your site stays online, even
              during hardware failures.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Advanced Security Suite</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Web Application Firewall (WAF):</strong> Blocks malicious
              traffic, SQL injection, XSS, and zero-day exploits before they
              reach your site.
            </li>
            <li>
              <strong>Daily Malware Scanning:</strong> Automated scans and
              instant remediation keep your site clean and safe.
            </li>
            <li>
              <strong>DDoS Protection:</strong> Enterprise-grade mitigation
              absorbs and neutralizes attacks, ensuring uninterrupted service.
            </li>
            <li>
              <strong>SSL & Encryption:</strong> Free SSL certificates,
              automatic renewals, and end-to-end encryption for all data in
              transit.
            </li>
            <li>
              <strong>Role-Based Access Control:</strong> Fine-grained
              permissions for your team and partners, with audit logs for every
              action.
            </li>
            <li>
              <strong>Compliance Ready:</strong> GDPR, HIPAA, and PCI DSS
              support for regulated industries.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Performance Optimization</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Global CDN:</strong> Content is cached and delivered from
              edge locations worldwide, reducing latency and boosting SEO.
            </li>
            <li>
              <strong>Advanced Caching:</strong> Server-side, object, and
              browser caching for instant load times and reduced server load.
            </li>
            <li>
              <strong>Image & Asset Optimization:</strong> Automatic
              compression, next-gen formats (WebP/AVIF), and lazy loading for
              blazing-fast visuals.
            </li>
            <li>
              <strong>Database Tuning:</strong> Regular optimization, indexing,
              and query analysis keep your site responsive as it grows.
            </li>
            <li>
              <strong>Real-Time Monitoring:</strong> 24/7 uptime checks,
              performance alerts, and instant incident response.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Hassle-Free Management</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>One-Click Staging:</strong> Test updates and new features
              in a safe environment before going live.
            </li>
            <li>
              <strong>Automated Backups:</strong> Hourly, daily, and weekly
              backups with instant restore—never lose data again.
            </li>
            <li>
              <strong>Zero-Downtime Deployments:</strong> Push updates without
              interrupting your visitors.
            </li>
            <li>
              <strong>Easy DNS & Email Management:</strong> Full control over
              domains, records, and professional email setup.
            </li>
            <li>
              <strong>Intuitive Dashboard:</strong> Manage everything from a
              single, user-friendly interface.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Expert Support & Migration</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Free White-Glove Migration:</strong> We handle the entire
              process, including DNS, SSL, and database transfers, with zero
              downtime.
            </li>
            <li>
              <strong>24/7 Human Support:</strong> Get help from real experts
              via chat, email, or phone—no bots, no scripts, just solutions.
            </li>
            <li>
              <strong>Proactive Monitoring:</strong> We fix issues before you
              even notice them, keeping your business running smoothly.
            </li>
            <li>
              <strong>Custom Onboarding:</strong> Personalized training and
              documentation for your team.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Real-World Results</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>eCommerce:</strong> After migrating to our platform, a
              retailer cut load times by 80% and saw a 25% increase in
              conversion rates.
            </li>
            <li>
              <strong>Nonprofit:</strong> Maintained 100% uptime during a major
              fundraising event, processing thousands of donations without a
              hitch.
            </li>
            <li>
              <strong>Professional Services:</strong> Reduced spam and phishing
              by 90% with advanced email security and DNS management.
            </li>
            <li>
              <strong>Startup:</strong> Seamlessly scaled to handle viral
              traffic, with instant resource upgrades and zero downtime.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Frequently Asked Questions</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Can you migrate my existing site?</strong> Yes, our team
              handles migrations for WordPress, Shopify, custom sites, and
              more—no downtime, no data loss.
            </li>
            <li>
              <strong>What if my site gets hacked?</strong> We provide instant
              cleanup, restoration, and a full security audit at no extra cost.
            </li>
            <li>
              <strong>Do you support eCommerce and high-traffic sites?</strong>{" "}
              Absolutely. Our infrastructure is optimized for WooCommerce,
              Shopify, Magento, and custom platforms.
            </li>
            <li>
              <strong>How do I access my backups?</strong> Backups are available
              in your dashboard, with one-click restore for any version.
            </li>
            <li>
              <strong>Is email hosting included?</strong> Yes, we offer
              integrated email or connect your domain to Google
              Workspace/Microsoft 365.
            </li>
            <li>
              <strong>Can I scale my hosting as my business grows?</strong>{" "}
              Instantly—upgrade resources on demand with no downtime.
            </li>
            <li>
              <strong>What support channels are available?</strong> 24/7 expert
              support via chat, email, and phone. We pride ourselves on rapid,
              personal responses.
            </li>
          </ul>
          <p>
            <strong>
              Stable hosting = happier visitors, better SEO, and more
              conversions.
            </strong>{" "}
            Let us handle the tech, so you can focus on what you do best.
            Contact us for a free hosting assessment and see how we can improve
            your site’s speed, security, and reliability.
          </p>
        </>
      ),
    },
    {
      id: "reputation",
      icon: (
        <FaStar
          className="text-4xl text-blue-600 drop-shadow"
          aria-hidden="true"
        />
      ),
      title: "Online Reputation Management",
      desc: "Take control of your brand image and turn reviews into lasting trust and credibility.",
      content: (
        <>
          <p>
            Your reputation is your most valuable asset. In today’s digital
            world, a single review or social mention can influence hundreds of
            potential customers. Our reputation management service is a
            proactive, multi-layered approach to building, protecting, and
            amplifying your brand’s credibility across every major platform.
          </p>
          <h4 className="font-bold mt-4 mb-1">
            Comprehensive Review Generation
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Automated Review Requests:</strong> Integrated with your
              CRM or POS, we trigger review requests after every transaction or
              service, maximizing positive feedback.
            </li>
            <li>
              <strong>Multi-Channel Outreach:</strong> Solicit reviews via
              email, SMS, and QR codes—meeting customers where they’re most
              responsive.
            </li>
            <li>
              <strong>Incentive Programs:</strong> Ethically encourage feedback
              with loyalty points, discounts, or giveaways (compliant with
              platform policies).
            </li>
            <li>
              <strong>Review Funnel Pages:</strong> Custom landing pages guide
              happy clients to leave reviews on Google, Facebook, Yelp, and
              industry-specific sites.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Active Monitoring & Rapid Response
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Real-Time Alerts:</strong> Get notified instantly when new
              reviews or mentions appear, so you can respond before issues
              escalate.
            </li>
            <li>
              <strong>Professional Response Templates:</strong> We craft
              empathetic, brand-aligned replies to both positive and negative
              feedback.
            </li>
            <li>
              <strong>Escalation Protocols:</strong> Negative reviews are
              flagged for management attention, with step-by-step guidance for
              resolution.
            </li>
            <li>
              <strong>Reputation Recovery:</strong> We help you address unfair
              or fraudulent reviews, working with platforms to remove
              violations.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Brand Consistency & Local SEO</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Directory Management:</strong> Ensure your business info
              is accurate and consistent across 70+ directories, boosting local
              search rankings.
            </li>
            <li>
              <strong>Google Business Profile Optimization:</strong> Enhance
              your profile with photos, posts, Q&A, and service lists for
              maximum visibility.
            </li>
            <li>
              <strong>Reputation Widgets:</strong> Showcase your best reviews on
              your website and landing pages to build instant trust.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Advanced Analytics & Reporting
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Sentiment Analysis:</strong> AI-powered tools track trends
              in customer sentiment and flag emerging issues.
            </li>
            <li>
              <strong>Competitor Benchmarking:</strong> See how your reputation
              stacks up against local and national competitors.
            </li>
            <li>
              <strong>ROI Tracking:</strong> Correlate reputation improvements
              with increases in leads, calls, and revenue.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Crisis Management & PR Support
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Negative Press Mitigation:</strong> We help you respond to
              media coverage, coordinate public statements, and manage social
              fallout.
            </li>
            <li>
              <strong>Search Suppression:</strong> Push down negative content in
              search results with strategic content creation and SEO.
            </li>
            <li>
              <strong>Legal Guidance:</strong> Access to legal partners for
              defamation, copyright, or privacy issues.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Real-World Results</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Medical Practice:</strong> Increased average rating from
              3.2 to 4.8 stars, resulting in a 50% increase in new patient
              bookings.
            </li>
            <li>
              <strong>Home Services:</strong> Reduced negative reviews by 70%
              and doubled positive mentions on Google and Facebook.
            </li>
            <li>
              <strong>Restaurant Group:</strong> Improved local search rankings,
              leading to a 40% increase in reservations.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Frequently Asked Questions</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>How quickly can I see results?</strong> Our automated
              systems start generating new reviews and improving your reputation
              almost immediately.
            </li>
            <li>
              <strong>Can you remove negative reviews?</strong> We work with
              platforms to remove violations and help you respond professionally
              to minimize impact.
            </li>
            <li>
              <strong>Do you monitor all review sites?</strong> Yes, we cover
              Google, Facebook, Yelp, industry-specific sites, and social media
              mentions.
            </li>
            <li>
              <strong>Will this help my local SEO?</strong> Absolutely. More
              positive reviews and accurate listings directly boost your search
              rankings.
            </li>
            <li>
              <strong>Can you help with crisis management?</strong> Yes, we
              provide rapid response, PR support, and legal guidance for
              reputation emergencies.
            </li>
          </ul>
          <p>
            <strong>
              Take control of your reputation and let your best work speak for
              itself.
            </strong>{" "}
            Book a free audit and discover how we can help you build trust and
            win more business.
          </p>
        </>
      ),
    },
    {
      id: "database-reactivation",
      icon: (
        <FaDatabase
          className="text-4xl text-green-700 drop-shadow"
          aria-hidden="true"
        />
      ),
      title: "Database Reactivation Campaigns",
      desc: "Wake up dormant leads using automated campaigns that re-engage and convert.",
      content: (
        <>
          <p>
            Your existing database is a goldmine of untapped revenue. Our
            database reactivation campaigns are designed to re-engage dormant
            leads and past customers using personalized, multi-channel outreach.
            We leverage automation, behavioral triggers, and compelling
            messaging to turn forgotten contacts into active, high-value
            clients.
          </p>
          <h4 className="font-bold mt-4 mb-1">
            Strategic Segmentation & Personalization
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Data Cleansing:</strong> We clean and enrich your
              database, removing duplicates and updating contact info for
              maximum deliverability.
            </li>
            <li>
              <strong>Behavioral Segmentation:</strong> Group contacts by last
              activity, purchase history, or engagement level for hyper-targeted
              messaging.
            </li>
            <li>
              <strong>Personalized Content:</strong> Dynamic fields and
              conditional logic ensure every message feels relevant and timely.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Multi-Channel Automated Outreach
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Email Campaigns:</strong> Sequenced emails with
              personalized offers, reminders, and value-driven content.
            </li>
            <li>
              <strong>SMS & MMS:</strong> Text messages with exclusive deals,
              event invites, or quick surveys for instant engagement.
            </li>
            <li>
              <strong>Ringless Voicemail Drops:</strong> Leave a personal
              message without ringing their phone—perfect for high-touch
              industries.
            </li>
            <li>
              <strong>Retargeting Ads:</strong> Sync your database with
              Facebook, Google, and LinkedIn for targeted ad campaigns.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Behavior-Triggered Flows & Automation
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Automated Follow-Ups:</strong> Triggered by opens, clicks,
              or replies—no lead slips through the cracks.
            </li>
            <li>
              <strong>Win-Back Offers:</strong> Special incentives for lapsed
              customers, such as discounts, free trials, or loyalty rewards.
            </li>
            <li>
              <strong>Survey & Feedback Loops:</strong> Gather insights on why
              leads went cold and use data to refine future campaigns.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">CRM Integration & Analytics</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Seamless CRM Sync:</strong> Integrate with Salesforce,
              HubSpot, Zoho, and more for real-time tracking and reporting.
            </li>
            <li>
              <strong>Lead Scoring:</strong> Automatically prioritize re-engaged
              contacts based on activity and intent signals.
            </li>
            <li>
              <strong>ROI Dashboards:</strong> Track opens, clicks, replies,
              conversions, and revenue generated from each campaign.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Compliance & Deliverability</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>CAN-SPAM & GDPR Compliance:</strong> Automated opt-outs,
              consent management, and data privacy best practices.
            </li>
            <li>
              <strong>Deliverability Optimization:</strong> Warm-up sequences,
              sender reputation management, and spam filter testing.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Real-World Results</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Fitness Studio:</strong> Reactivated 18% of lapsed
              members, generating $42,000 in new revenue in one month.
            </li>
            <li>
              <strong>B2B Services:</strong> Converted 12% of dormant leads into
              booked sales calls with a single campaign.
            </li>
            <li>
              <strong>eCommerce:</strong> Win-back emails recovered 9% of
              abandoned carts and increased repeat purchases by 22%.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Frequently Asked Questions</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>How quickly can I see results?</strong> Our campaigns are
              designed for rapid deployment—most clients see re-engagement
              within days.
            </li>
            <li>
              <strong>Will this annoy my contacts?</strong> We use smart
              frequency capping and value-driven messaging to maximize
              engagement and minimize unsubscribes.
            </li>
            <li>
              <strong>Can you integrate with my CRM?</strong> Yes, we support
              all major CRMs and marketing platforms.
            </li>
            <li>
              <strong>Is this compliant with privacy laws?</strong> 100%. We
              follow all best practices for consent, opt-outs, and data
              protection.
            </li>
            <li>
              <strong>What if my data is outdated?</strong> We offer data
              enrichment and validation to maximize deliverability and results.
            </li>
          </ul>
          <p>
            <strong>Unlock hidden revenue in your database.</strong> Book a free
            assessment and see how we can turn dormant leads into active
            customers—fast.
          </p>
        </>
      ),
    },
    {
      id: "email-sms-automation",
      icon: (
        <FaEnvelopeOpenText
          className="text-4xl text-red-500 drop-shadow"
          aria-hidden="true"
        />
      ),
      title: "Email & SMS Marketing Automation",
      desc: "Automate your marketing with targeted messages that nurture and convert.",
      content: (
        <>
          <p>
            Marketing automation is the secret to scaling your outreach,
            nurturing leads, and driving conversions—without manual effort. Our
            email and SMS automation solutions combine advanced segmentation,
            behavioral triggers, and personalized content to deliver the right
            message at the right time, every time.
          </p>
          <h4 className="font-bold mt-4 mb-1">
            Advanced Segmentation & Personalization
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Dynamic Segments:</strong> Group contacts by behavior,
              demographics, purchase history, and engagement for laser-focused
              campaigns.
            </li>
            <li>
              <strong>Personalized Content:</strong> Use merge tags, conditional
              blocks, and dynamic images to make every message feel one-to-one.
            </li>
            <li>
              <strong>Predictive Analytics:</strong> AI-powered recommendations
              for send times, subject lines, and offers based on past behavior.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Multi-Channel Automation Flows
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Drip Campaigns:</strong> Nurture leads with sequenced
              emails and texts that guide them through your sales funnel.
            </li>
            <li>
              <strong>Event-Based Triggers:</strong> Send messages based on
              website visits, form submissions, purchases, or abandoned carts.
            </li>
            <li>
              <strong>2-Way SMS:</strong> Enable real conversations, appointment
              confirmations, and customer support via text.
            </li>
            <li>
              <strong>Omni-Channel Journeys:</strong> Combine email, SMS, push
              notifications, and retargeting ads for a seamless customer
              experience.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Conversion Optimization & Analytics
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>A/B Testing:</strong> Test subject lines, content, and
              send times to maximize open and click rates.
            </li>
            <li>
              <strong>Smart Send Times:</strong> Deliver messages when each
              contact is most likely to engage.
            </li>
            <li>
              <strong>Detailed Reporting:</strong> Track opens, clicks, replies,
              conversions, and revenue attribution in real time.
            </li>
            <li>
              <strong>Deliverability Monitoring:</strong> Ensure your messages
              land in the inbox, not the spam folder.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Compliance & Best Practices</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Opt-In Management:</strong> Automated consent tracking,
              double opt-in, and easy unsubscribe options.
            </li>
            <li>
              <strong>CAN-SPAM & GDPR Compliance:</strong> Built-in safeguards
              for privacy and data protection.
            </li>
            <li>
              <strong>Preference Centers:</strong> Let subscribers choose their
              topics, frequency, and channels.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Real-World Results</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>eCommerce:</strong> Automated cart recovery emails
              increased sales by 28% in the first month.
            </li>
            <li>
              <strong>Professional Services:</strong> Nurture sequences doubled
              lead-to-client conversion rates.
            </li>
            <li>
              <strong>Healthcare:</strong> Appointment reminders via SMS reduced
              no-shows by 45%.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Frequently Asked Questions</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>How quickly can you set up automation?</strong> Our team
              can launch your first campaigns in record time, with minimal input
              required.
            </li>
            <li>
              <strong>Will this work with my CRM or eCommerce platform?</strong>{" "}
              Yes, we integrate with all major tools, including Shopify,
              HubSpot, Salesforce, and more.
            </li>
            <li>
              <strong>Is SMS marketing compliant?</strong> 100%. We follow all
              regulations for consent, opt-outs, and message frequency.
            </li>
            <li>
              <strong>Can I see which messages drive revenue?</strong>{" "}
              Absolutely. Our dashboards show attribution for every campaign and
              touchpoint.
            </li>
            <li>
              <strong>What if I don’t have a list?</strong> We help you build
              and segment your audience from scratch, using lead magnets and
              landing pages.
            </li>
          </ul>
          <p>
            <strong>
              Convert more leads while saving time—let us build your automated
              marketing engine.
            </strong>{" "}
            Book a free demo and see how automation can transform your results.
          </p>
        </>
      ),
    },
    {
      id: "ai-chatbots",
      icon: (
        <FaComments
          className="text-4xl text-teal-600 drop-shadow"
          aria-hidden="true"
        />
      ),
      title: "Live Chat & AI Chatbot Platforms",
      desc: "Engage visitors instantly and qualify leads with human-like chatbots or live support.",
      content: (
        <>
          <p>
            Instant communication is the new standard for customer experience.
            Our live chat and AI chatbot solutions help you engage visitors,
            answer questions, and qualify leads 24/7—boosting conversions and
            delighting your audience. We combine advanced AI with seamless human
            handoff for the best of both worlds.
          </p>
          <h4 className="font-bold mt-4 mb-1">
            AI Chatbots: Always-On Engagement
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Natural Language Processing:</strong> Our bots understand
              and respond to complex queries, providing human-like
              conversations.
            </li>
            <li>
              <strong>Lead Qualification:</strong> Automatically capture contact
              info, segment leads, and route hot prospects to your sales team.
            </li>
            <li>
              <strong>Knowledge Base Integration:</strong> Instantly answer
              FAQs, product questions, and support requests using your existing
              resources.
            </li>
            <li>
              <strong>Appointment Booking:</strong> Let visitors schedule calls,
              demos, or services directly from the chat window.
            </li>
            <li>
              <strong>Multi-Language Support:</strong> Engage a global audience
              with real-time translation and localization.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Live Chat: Real-Time Human Support
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Instant Notifications:</strong> Get alerted to new chats
              on desktop, mobile, or via integrations with Slack and Teams.
            </li>
            <li>
              <strong>Team Collaboration:</strong> Assign chats, transfer
              conversations, and collaborate behind the scenes for seamless
              support.
            </li>
            <li>
              <strong>File & Media Sharing:</strong> Exchange documents, images,
              and videos directly in the chat.
            </li>
            <li>
              <strong>Visitor Insights:</strong> See browsing history, location,
              and engagement data to personalize every interaction.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Custom Branding & Integration</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Fully Branded Widgets:</strong> Match your chat interface
              to your website’s look and feel.
            </li>
            <li>
              <strong>CRM & Marketing Automation:</strong> Sync chat data with
              HubSpot, Salesforce, Mailchimp, and more.
            </li>
            <li>
              <strong>Analytics & Reporting:</strong> Track chat volume,
              response times, satisfaction scores, and conversion rates.
            </li>
            <li>
              <strong>Mobile-Optimized:</strong> Responsive design ensures a
              flawless experience on any device.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Advanced Features</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Proactive Chat Triggers:</strong> Automatically invite
              visitors to chat based on behavior, time on page, or exit intent.
            </li>
            <li>
              <strong>Conversational Forms:</strong> Collect lead info in a
              friendly, interactive way—no more boring forms.
            </li>
            <li>
              <strong>AI-Powered Suggestions:</strong> Recommend products,
              services, or content based on visitor interests.
            </li>
            <li>
              <strong>Security & Privacy:</strong> End-to-end encryption, GDPR
              compliance, and role-based access controls.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Real-World Results</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>eCommerce:</strong> AI chatbot increased lead capture by
              3x and reduced support tickets by 40%.
            </li>
            <li>
              <strong>B2B SaaS:</strong> Live chat doubled demo bookings and
              improved customer satisfaction scores.
            </li>
            <li>
              <strong>Healthcare:</strong> Automated appointment scheduling via
              chat reduced admin workload by 60%.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Frequently Asked Questions</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>How quickly can I launch a chatbot?</strong> Our solutions
              are ready to deploy rapidly, with customizations for your brand
              and workflows.
            </li>
            <li>
              <strong>Can I switch between bot and human?</strong> Yes, seamless
              handoff ensures visitors always get the right level of support.
            </li>
            <li>
              <strong>Will this work on mobile?</strong> Absolutely. Our chat
              widgets are fully responsive and mobile-friendly.
            </li>
            <li>
              <strong>Can I integrate with my CRM?</strong> Yes, we support all
              major CRMs and marketing platforms.
            </li>
            <li>
              <strong>Is chat secure and compliant?</strong> 100%. We use
              encryption, access controls, and comply with all privacy
              regulations.
            </li>
          </ul>
          <p>
            <strong>
              Keep visitors engaged and make sure no question goes
              unanswered—even after hours.
            </strong>{" "}
            Book a free demo and see how chat can boost your conversions and
            customer satisfaction.
          </p>
        </>
      ),
    },
    {
      id: "social-schedulers",
      icon: (
        <FaClock
          className="text-4xl text-orange-500 drop-shadow"
          aria-hidden="true"
        />
      ),
      title: "Social Media Post Schedulers",
      desc: "Stay consistent online with automated post scheduling and analytics.",
      content: (
        <>
          <p>
            Consistency is the key to social media success. Our post scheduling
            tools empower you to plan, publish, and analyze your content across
            every major platform—saving time, boosting engagement, and growing
            your audience with data-driven strategies.
          </p>
          <h4 className="font-bold mt-4 mb-1">
            All-in-One Scheduling & Publishing
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Cross-Platform Posting:</strong> Schedule and publish to
              Instagram, Facebook, LinkedIn, Twitter, TikTok, Pinterest, and
              more from a single dashboard.
            </li>
            <li>
              <strong>Bulk Uploads:</strong> Import and schedule dozens of posts
              at once, saving hours every week.
            </li>
            <li>
              <strong>Drag-and-Drop Calendar:</strong> Visualize your content
              strategy, fill gaps, and reschedule with ease.
            </li>
            <li>
              <strong>Recurring Posts:</strong> Automate evergreen content to
              repeat on your chosen schedule.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Content Creation & Optimization
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>AI-Powered Captions & Hashtags:</strong> Generate engaging
              copy and discover trending hashtags tailored to your audience.
            </li>
            <li>
              <strong>Image & Video Editing:</strong> Crop, resize, and enhance
              visuals directly in the platform.
            </li>
            <li>
              <strong>Content Library:</strong> Store, organize, and reuse your
              best-performing posts, images, and videos.
            </li>
            <li>
              <strong>Approval Workflows:</strong> Collaborate with your team,
              assign roles, and streamline content reviews.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">
            Analytics & Performance Tracking
          </h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Real-Time Insights:</strong> Track likes, shares,
              comments, clicks, and follower growth across all channels.
            </li>
            <li>
              <strong>Best Time to Post:</strong> AI analyzes your audience to
              recommend optimal posting times for maximum reach.
            </li>
            <li>
              <strong>Competitor Benchmarking:</strong> See how your content
              stacks up against industry leaders.
            </li>
            <li>
              <strong>Custom Reports:</strong> Export branded analytics for
              clients or stakeholders.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Advanced Features</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>First Comment Scheduling:</strong> Add hashtags or links
              in the first comment for Instagram and Facebook.
            </li>
            <li>
              <strong>Story & Reel Scheduling:</strong> Plan and publish
              Instagram Stories and Reels in advance.
            </li>
            <li>
              <strong>Social Inbox:</strong> Manage comments, messages, and
              mentions from all platforms in one place.
            </li>
            <li>
              <strong>Link in Bio Tools:</strong> Drive traffic from Instagram
              with customizable landing pages.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Real-World Results</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>Agency:</strong> Doubled posting frequency and increased
              client engagement by 60% in two months.
            </li>
            <li>
              <strong>Retail Brand:</strong> Used analytics to refine content
              strategy, resulting in a 40% increase in website traffic from
              social.
            </li>
            <li>
              <strong>Nonprofit:</strong> Streamlined team collaboration and
              boosted event attendance through scheduled campaigns.
            </li>
          </ul>
          <h4 className="font-bold mt-4 mb-1">Frequently Asked Questions</h4>
          <ul className="list-disc ml-5 mb-3 space-y-1">
            <li>
              <strong>How quickly can I start scheduling posts?</strong> Our
              platform is intuitive—most users are up and running in minutes.
            </li>
            <li>
              <strong>Can I collaborate with my team?</strong> Yes, assign
              roles, set approvals, and manage workflows with ease.
            </li>
            <li>
              <strong>Does this support all major social networks?</strong> We
              support Instagram, Facebook, LinkedIn, Twitter, TikTok, Pinterest,
              and more.
            </li>
            <li>
              <strong>Can I track ROI from social posts?</strong> Absolutely.
              Our analytics show traffic, conversions, and revenue from every
              campaign.
            </li>
            <li>
              <strong>Is there a mobile app?</strong> Yes, schedule and manage
              posts on the go from any device.
            </li>
          </ul>
          <p>
            <strong>
              Spend less time posting and more time growing your business with
              data-backed consistency.
            </strong>{" "}
            Book a free trial and see how easy social media management can be.
          </p>
        </>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="relative pt-4 pb-30 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700"
    >
      <div className="absolute inset-0 bg-black/36 z-0" />
      <div className="container mx-auto px-2 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-tight drop-shadow-lg">
            Our{" "}
            <span className="font-extrabold text-white">
              Marketing Services
            </span>
          </h2>
          <p className="text-sm md:text-base text-white [text-shadow:1px_1px_2px_black] max-w-lg mx-auto mt-1 font-medium">
            Digital solutions designed to help you scale, connect, and
            convert—delivered with the expertise and care your brand deserves.
          </p>
        </header>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <li key={service.id}>
              <article
                className={`
    group
    relative
    rounded-2xl
    p-4
    shadow-xl
    border border-white/20
    bg-white/10
    backdrop-blur-xl
    overflow-hidden
    flex flex-col
    min-h-[140px]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-yellow-400/40
    hover:border-yellow-400
    hover:bg-white/20
    cursor-pointer
    [animation:fade-in-up_0.7s_cubic-bezier(.39,.575,.565,1)_both]
  `}
                style={{
                  animationDelay: `${idx * 0.08 + 0.1}s`,
                  boxShadow:
                    "0 4px 16px 0 rgba(31, 38, 135, 0.12), 0 1px 3px 0 rgba(255,221,51,0.08)",
                }}
                onClick={() => setSelectedService(service)}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${service.title}`}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setSelectedService(service);
                }}
              >
                {/* Modern glassmorphism overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-white/0 opacity-80" />
                <figure className="mb-2 relative z-10 flex items-center justify-center">
                  {service.icon}
                </figure>
                <h3 className="text-lg font-bold mb-1 text-yellow-400 [text-shadow:1px_1px_2px_black] drop-shadow relative z-10">
                  {service.title}
                </h3>
                <p className="text-white mb-2 text-sm relative z-10 flex-1 [text-shadow:1px_1px_2px_black]">
                  {service.desc}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="text-yellow-400 hover:text-yellow-600 font-semibold flex items-center text-xs mt-1 relative z-10 transition"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </article>
            </li>
          ))}
        </ul>

        {/* Modal */}
        <Dialog
          open={!!selectedService}
          onClose={() => setSelectedService(null)}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-1 sm:p-4">
            <Dialog.Panel
              className="
                bg-white
                w-full
                mx-2
                max-w-xs
                sm:max-w-md
                md:max-w-lg
                lg:max-w-2xl
                xl:max-w-3xl
                max-h-[90vh]
                p-0
                rounded-xl
                shadow-xl
                relative
                flex
                flex-col
                border-2
                border-yellow-500
                transition-all
                overflow-y-auto
              "
            >
              {/* Sticky Header */}
              <div className="sticky top-0 z-10 bg-white px-4 pt-4 pb-1 rounded-t-xl border-b border-yellow-100">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-red-500"
                  aria-label="Close service details"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
                <Dialog.Title className="text-lg font-extrabold text-yellow-600 mb-0 pr-6">
                  {selectedService?.title}
                </Dialog.Title>
              </div>
              {/* Scrollable Content */}
              <div
                className="flex-1 overflow-y-auto px-4 py-1 text-gray-700 space-y-1 text-sm"
                id="modal-scroll-content"
              >
                {selectedService?.content}
              </div>
              {/* Sticky Footer */}
              <div className="sticky bottom-0 z-10 bg-white px-4 pb-4 pt-1 border-t flex justify-between items-center rounded-b-xl">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setTimeout(() => {
                      const contact = document.querySelector("#contact");
                      const header = document.querySelector("header");
                      if (contact) {
                        const rect = contact.getBoundingClientRect();
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const headerHeight = header ? header.offsetHeight : 72; // fallback if header not found
                        const top = rect.top + scrollTop - headerHeight - 8; // -8 for a little breathing room
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }, 350); // 350ms to allow modal transition to finish
                  }}
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1.5 rounded-full transition text-xs font-semibold"
                >
                  Get Started
                </button>
                <button
                  onClick={() => {
                    // Scroll the modal content to top
                    const modalContent = document.getElementById(
                      "modal-scroll-content"
                    );
                    if (modalContent) {
                      modalContent.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="ml-1 text-gray-500 hover:text-yellow-600 underline text-xs"
                >
                  Scroll to Top
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* CTA */}
        <footer className="mt-6 text-center">
          <h3 className="text-lg md:text-xl font-extrabold text-yellow-600 mb-2">
            Ready to grow your business with{" "}
            <span className="text-white">First & Last Marketing?</span>
          </h3>
          <ExplorePricingCTA
            label="Discover Pricing & Packages"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-full inline-block transition text-sm md:text-base font-semibold"
          />
        </footer>
      </div>
    </section>
  );
};

export default Services;
