import React, { useState, useRef, useEffect } from "react";
import PricingQuoteModal from "./PricingQuoteModal";

const tabs = [
  { name: "Websites", key: "websites" },
  { name: "Blogs", key: "blogs" },
  { name: "Marketing Services", key: "marketing" },
  { name: "Terms Glossary", key: "glossary" },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("websites");
  const contentRef = useRef(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeTab]);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  return (
    <>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 text-white py-1 px-4 sm:px-6 lg:px-20">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 text-white drop-shadow-sm">
              Transparent Pricing for Real Results
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our customizable pricing options tailored to your business
              goals.
            </p>
          </div>
        </div>
      </div>
      {/* Sticky Tab Navigation */}
      <div className="relative sticky top-[72px] z-40 w-full overflow-x-auto bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="flex justify-start sm:justify-center gap-2 px-4 py-3 w-full whitespace-nowrap min-w-full relative z-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-300 shadow-md backdrop-blur-sm border
              ${
                activeTab === tab.key
                  ? "bg-yellow-400 text-black border-yellow-300"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30 hover:text-yellow-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Area */}
      <div
        ref={contentRef}
        className="relative min-h-[60vh] bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 text-white py-10 px-4 sm:px-6 lg:px-20"
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-white to-gray-100 text-gray-900 p-6 md:p-10 rounded-3xl shadow-xl backdrop-blur-md">
            {activeTab === "websites" && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2 text-center">
                  Website Design Packages
                </h2>
                <p className="italic text-sm mb-4 text-gray-700 text-center">
                  By First and Last Marketing — Refer to the Terms Glossary for
                  explanations of marketing terms.
                </p>

                {/* Centered Intro */}
                <div className="mb-10">
                  <p className="font-semibold text-lg md:text-xl text-purple-900 text-center max-w-4xl mx-auto">
                    All packages are crafted to convert visitors into leads and
                    give you full ownership of a modern, high-performing
                    website.
                  </p>
                </div>

                {/* Competitive Comparison Table */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 text-center">
                    Competitive Price Comparison
                  </h3>
                  <div className="overflow-x-auto rounded-xl shadow-sm">
                    <table className="w-full text-left border-collapse text-sm md:text-base">
                      <thead className="bg-gray-200 text-gray-700">
                        <tr>
                          <th className="p-3 font-semibold">Tier</th>
                          <th className="p-3 font-semibold">Your Price</th>
                          <th className="p-3 font-semibold">Market Range</th>
                          <th className="p-3 font-semibold">Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3">Basic Website</td>
                          <td className="p-3">$350</td>
                          <td className="p-3">$800 – $2,000</td>
                          <td className="p-3">Up to 80% Less</td>
                        </tr>
                        <tr className="border-t bg-gray-50">
                          <td className="p-3">Growth Website</td>
                          <td className="p-3">$650</td>
                          <td className="p-3">$2,000 – $5,000</td>
                          <td className="p-3">Up to 70% Less</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">Premium Website</td>
                          <td className="p-3">$1200</td>
                          <td className="p-3">$5,000 – $10,000+</td>
                          <td className="p-3">Up to 75% Less</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pricing Tables */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      title: "Basic Package",
                      price: "$350",
                      features: [
                        "Up to 4 custom-designed pages (Home, About, Services, Contact)",
                        "Full on-page SEO (keywords, meta tags, speed optimizations)",
                        "Manual Indexing submission to Google & Bing",
                        "Domain connection (you provide the domain; we connect it)",
                        "Fully mobile-responsive design",
                        "Built-in lead capture form (Name, Email, Phone)",
                      ],
                      note: "Launch fast with a clean, professional site — optimized for search and conversions.",
                    },
                    {
                      title: "Growth Package",
                      price: "$650",
                      features: [
                        "Everything in Basic, plus:",
                        "Up to 7 pages (extra service or landing pages)",
                        "Enhanced SEO strategy including keyword expansion & structure",
                        "Basic analytics integration",
                        "Content and layout optimized for lead generation",
                        "Social media buttons and widget placement",
                      ],
                      note: "More space, better SEO, stronger conversions.",
                    },
                    {
                      title: "Premium Package",
                      price: "$1200",
                      features: [
                        "Everything in Growth, plus:",
                        "Up to 12 fully customized pages",
                        "Google Analytics setup & tracking",
                        "Priority support during build and after launch",
                        "Performance tuning (image optimization, lazy loading)",
                        "Extra lead capture (multi-step forms, sticky CTAs)",
                        "Design aligned with your brand goals",
                      ],
                      note: "A scalable presence that’s polished, optimized, and ready to grow.",
                    },
                  ].map((pkg, idx) => (
                    <div
                      key={idx}
                      className="border-t-4 border-yellow-400 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-purple-800 mb-2">
                          {pkg.title}
                        </h4>
                        <p className="text-lg font-semibold text-yellow-600 mb-4">
                          {pkg.price}
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                          {pkg.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-600 italic">
                        {pkg.note}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedPackage(pkg.title);
                          setShowQuoteModal(true);
                          setActiveTab("websites");
                        }}
                        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-2 px-5 rounded-full shadow transition-all duration-200 border-2 border-yellow-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                      >
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>

                {/* Included / Sold Separately */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-purple-800">
                      What’s Included Free (All Tiers)
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-gray-800 space-y-1">
                      <li>Manual indexing (Google & Bing)</li>
                      <li>Domain connection (you provide the domain)</li>
                      <li>Mobile-responsive design</li>
                      <li>SSL configuration assistance</li>
                      <li>Lead-optimized page layouts</li>
                      <li>Integrated lead capture forms</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-purple-800">
                      Sold Separately
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-gray-800 space-y-1">
                      <li>Blog Integration</li>
                      <li>Hosting</li>
                      <li>Reputation Management</li>
                      <li>Reactivation Campaigns</li>
                      <li>Email & SMS Marketing</li>
                      <li>Live Chat / AI Chatbots</li>
                      <li>Social Media Tools</li>
                    </ul>
                  </div>
                </div>

                {/* FAQ Section */}
                <h3 className="text-xl font-semibold mb-4 text-purple-800 text-center">
                  Website Package FAQs
                </h3>
                <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6 text-sm md:text-base list-disc pl-5 text-gray-800">
                  <li>
                    <strong>Do I own my website?</strong> Yes. 100% ownership.
                  </li>
                  <li>
                    <strong>Are prices monthly?</strong> No. These are one-time
                    project fees.
                  </li>
                  <li>
                    <strong>Can I upgrade later?</strong> Absolutely. Packages
                    are designed to scale.
                  </li>
                  <li>
                    <strong>Is hosting included?</strong> No, but we’ll help you
                    set it up.
                  </li>
                  <li>
                    <strong>What counts as a page?</strong> Any unique page like
                    Home, About, Services, etc.
                  </li>
                  <li>
                    <strong>Timeline?</strong> 7–14 business days depending on
                    tier & content readiness.
                  </li>
                  <li>
                    <strong>Can you write the content?</strong> Yes, available
                    as an add-on.
                  </li>
                  <li>
                    <strong>Need more than 12 pages?</strong> We’ll quote
                    add-ons fairly.
                  </li>
                  <li>
                    <strong>Template-based?</strong> No, every site is
                    custom-designed.
                  </li>
                  <li>
                    <strong>Platform?</strong> React (Vite) + TailwindCSS for
                    speed and flexibility.
                  </li>
                  <li>
                    <strong>Security?</strong> SSL setup and form security are
                    included.
                  </li>
                  <li>
                    <strong>Revisions?</strong> Reasonable revisions are
                    included.
                  </li>
                  <li>
                    <strong>E-commerce?</strong> Not included, but available by
                    quote.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "blogs" && (
              <div>
                {/* Blog Pricing Packages */}
                <div className="mb-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2">
                    Blog Packages
                  </h2>
                  <p className="italic text-sm text-gray-700 mb-3">
                    By First and Last Marketing — Refer to the Terms Glossary
                    for explanations of marketing terms.
                  </p>
                  <p className="font-semibold text-lg md:text-xl text-purple-800 max-w-4xl mx-auto">
                    All packages are crafted to build authority, generate
                    organic traffic, and turn readers into customers.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold mb-6 text-purple-900">
                  Blog Pricing Packages
                </h2>
                <div className="overflow-x-auto mb-6 rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse text-sm md:text-base">
                    <thead className="bg-gray-200 text-gray-700">
                      <tr>
                        <th className="p-3 font-semibold">Blog Tier</th>
                        <th className="p-3 font-semibold">Your Price</th>
                        <th className="p-3 font-semibold">Market Price</th>
                        <th className="p-3 font-semibold">What’s Included</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">Basic</td>
                        <td className="p-3">$350</td>
                        <td className="p-3">$500 – $2,000</td>
                        <td className="p-3">Setup + 3 SEO-optimized posts</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-3">Standard</td>
                        <td className="p-3">$650</td>
                        <td className="p-3">$2,001 – $5,000</td>
                        <td className="p-3">
                          Setup + 6 posts + SEO integration
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3">Premium</td>
                        <td className="p-3">$1200+</td>
                        <td className="p-3">$5,001 – $20,000+</td>
                        <td className="p-3">
                          Full blog + 10+ posts + SEO strategy
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Blog Tiers */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      name: "Basic Tier",
                      price: "$350",
                      items: [
                        "Full blog setup tailored to your brand and goals.",
                        "3 SEO-optimized blog posts targeting relevant keywords.",
                        "Each post is crafted to engage your audience and encourage sharing.",
                        "Designed to improve search visibility and build early authority.",
                        "Budget-friendly option for new businesses entering content marketing.",
                      ],
                      note: "Perfect for startups taking their first steps into blogging.",
                    },
                    {
                      name: "Standard Tier",
                      price: "$650",
                      items: [
                        "Everything in Basic, plus:",
                        "6 SEO-optimized blog posts for a stronger content foundation.",
                        "Keyword research, meta tag optimization, and internal linking.",
                        "Improved on-page SEO to help boost rankings and engagement.",
                        "Ideal for businesses starting to generate consistent leads through content.",
                      ],
                      note: "Great for growing brands ready to level up their content strategy.",
                    },
                    {
                      name: "Premium Tier",
                      price: "$1200+",
                      items: [
                        "Full blog setup customized to your industry and audience.",
                        "10+ expert-written, SEO-optimized posts published regularly.",
                        "Includes keyword planning, content calendar, and analytics setup.",
                        "Supports thought leadership and long-term SEO growth.",
                        "Content strategy consultation included.",
                      ],
                      note: "Ideal for established businesses aiming for content-driven leadership.",
                    },
                  ].map((tier, idx) => (
                    <div
                      key={idx}
                      className="border-t-4 border-yellow-400 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div>
                        <h4 className="text-xl font-bold mb-1">
                          <span className="text-purple-800">{tier.name}</span>{" "}
                          <span className="text-yellow-600">{tier.price}</span>
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mt-2">
                          {tier.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-600 italic">
                        {tier.note}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedPackage(tier.name);
                          setShowQuoteModal(true);
                          setActiveTab("blogs");
                        }}
                        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-2 px-5 rounded-full shadow transition-all duration-200 border-2 border-yellow-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                      >
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>

                {/* Additional Benefits */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 text-center">
                    Additional Benefits Across All Tiers
                  </h3>
                  <ul className="list-disc list-inside text-sm md:text-base text-gray-800 space-y-2 max-w-4xl mx-auto">
                    <li>
                      Each blog post is optimized for readability, keyword
                      relevance, and engagement.
                    </li>
                    <li>
                      Posts include compelling calls to action to convert
                      readers into leads or customers.
                    </li>
                    <li>
                      All content is original, plagiarism-free, and tailored to
                      your brand voice.
                    </li>
                    <li>
                      Support for social media sharing and integration to extend
                      reach.
                    </li>
                    <li>
                      Technical SEO best practices applied (fast load times,
                      mobile optimization, schema markup).
                    </li>
                  </ul>
                </div>

                {/* Blog Pricing FAQs */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    Blog Pricing FAQs
                  </h3>
                </div>

                <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6 text-sm md:text-base list-disc pl-5 text-gray-800">
                  <li>
                    <strong>
                      How long does it take to set up the blog and publish the
                      posts?
                    </strong>{" "}
                    Setup typically takes 3–5 business days. Posts are delivered
                    in 1–2 weeks depending on tier and scope.
                  </li>
                  <li>
                    <strong>Can I request specific topics or keywords?</strong>{" "}
                    Yes! We align content with your business goals and preferred
                    topics.
                  </li>
                  <li>
                    <strong>What if I need more posts than the package?</strong>{" "}
                    Additional posts can be added at competitive rates.
                  </li>
                  <li>
                    <strong>Do you optimize existing blogs?</strong> We focus on
                    new content but offer audits and SEO improvements as
                    add-ons.
                  </li>
                  <li>
                    <strong>Are the posts optimized for SEO?</strong> Absolutely
                    — including keyword research, structure, meta tags, and
                    readability.
                  </li>
                  <li>
                    <strong>Do you handle publishing?</strong> Yes. We publish
                    directly or guide you based on your platform.
                  </li>
                  <li>
                    <strong>How often should I post?</strong> At least 1–2
                    times/month. Our plans support regular publishing.
                  </li>
                  <li>
                    <strong>Can you integrate with my social media?</strong>{" "}
                    Yes. We can add sharing buttons or auto-post integrations.
                  </li>
                  <li>
                    <strong>Do you offer ongoing content creation?</strong> Yes.
                    Monthly blog retainers are available. Contact us to learn
                    more.
                  </li>
                  <li>
                    <strong>How is success measured?</strong> Through Google
                    Analytics reports: traffic, engagement, conversions, and SEO
                    impact.
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "marketing" && (
              <div>
                {/* Marketing Services Header */}
                <div className="mb-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2">
                    Individually Sold Services & Pricing
                  </h2>
                  <p className="italic text-sm text-gray-700 mb-3">
                    These services can be added anytime to enhance your business
                    performance.
                  </p>
                  <p className="font-semibold text-lg md:text-xl text-purple-800 max-w-4xl mx-auto">
                    Go beyond websites with tools that increase visibility,
                    automate workflows, and drive growth — all with transparent
                    pricing.
                  </p>
                </div>
                {/* Competitive Service Pricing Comparison */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800 text-center">
                    Transparent Pricing vs Market Rates
                  </h3>
                  <div className="overflow-x-auto rounded-xl shadow-sm">
                    <table className="w-full text-left border-collapse text-sm md:text-base">
                      <thead className="bg-gray-200 text-gray-700">
                        <tr>
                          <th className="p-3 font-semibold">Service</th>
                          <th className="p-3 font-semibold">Our Price</th>
                          <th className="p-3 font-semibold">Market Price</th>
                          <th className="p-3 font-semibold">What You Get</th>
                          <th className="p-3 font-semibold">Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3 text-purple-800 font-medium">
                            Fast & Secure Web Hosting
                          </td>
                          <td className="p-3 text-yellow-600">$120/year</td>
                          <td className="p-3 text-gray-600">
                            $180 – $400/year
                          </td>
                          <td className="p-3">
                            High-speed hosting with 99.9% uptime and full
                            security management.
                          </td>
                          <td className="p-3 text-green-700 font-semibold">
                            Up to 70% Less
                          </td>
                        </tr>
                        <tr className="border-t bg-gray-50">
                          <td className="p-3 text-purple-800 font-medium">
                            Online Reputation Management
                          </td>
                          <td className="p-3 text-yellow-600">$300/month</td>
                          <td className="p-3 text-gray-600">
                            $500 – $1,500/month
                          </td>
                          <td className="p-3">
                            Review monitoring, response strategy, and feedback
                            request system.
                          </td>
                          <td className="p-3 text-green-700 font-semibold">
                            Up to 80% Less
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 text-purple-800 font-medium">
                            Database Reactivation Campaigns
                          </td>
                          <td className="p-3 text-yellow-600">
                            $450 (one-time)
                          </td>
                          <td className="p-3 text-gray-600">$750 – $2,000+</td>
                          <td className="p-3">
                            Targeted email/SMS to revive old leads—no extra ad
                            spend needed.
                          </td>
                          <td className="p-3 text-green-700 font-semibold">
                            Up to 78% Less
                          </td>
                        </tr>
                        <tr className="border-t bg-gray-50">
                          <td className="p-3 text-purple-800 font-medium">
                            Email & SMS Automation
                          </td>
                          <td className="p-3 text-yellow-600">
                            $250 setup + $100/mo
                          </td>
                          <td className="p-3 text-gray-600">
                            $400 – $1,200/month
                          </td>
                          <td className="p-3">
                            Drip sequences, reminders, promotions—all fully
                            automated.
                          </td>
                          <td className="p-3 text-green-700 font-semibold">
                            Up to 75% Less
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 text-purple-800 font-medium">
                            Live Chat & AI Chatbots
                          </td>
                          <td className="p-3 text-yellow-600">
                            $350 setup + $30/mo
                          </td>
                          <td className="p-3 text-gray-600">
                            $500 – $1,500+ setup
                          </td>
                          <td className="p-3">
                            Engage visitors 24/7 with live agents or smart AI
                            bots.
                          </td>
                          <td className="p-3 text-green-700 font-semibold">
                            Up to 77% Less
                          </td>
                        </tr>
                        <tr className="border-t bg-gray-50">
                          <td className="p-3 text-purple-800 font-medium">
                            Social Media Schedulers
                          </td>
                          <td className="p-3 text-yellow-600">
                            $200 setup + $50/mo
                          </td>
                          <td className="p-3 text-gray-600">
                            $300 – $1,000/month
                          </td>
                          <td className="p-3">
                            Plan and automate posts across all major platforms.
                          </td>
                          <td className="p-3 text-green-700 font-semibold">
                            Up to 83% Less
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      name: "Fast & Secure Web Hosting",
                      price: "$120/year",
                      market: "$180 – $400/year",
                      features: [
                        "High-speed hosting with 99.9% uptime and free SSL.",
                        "Setup and monitoring included — we handle everything.",
                        "Premium performance at a lower annual cost.",
                      ],
                      note: "Blazing performance without breaking the bank.",
                    },
                    {
                      name: "Online Reputation Management",
                      price: "$300/month",
                      market: "$500 – $1,500/month",
                      features: [
                        "Monitor and respond to reviews across major platforms.",
                        "Automated review requests for happy customers.",
                        "Support for flagging or managing negative feedback.",
                      ],
                      note: "Protect and elevate your brand image online.",
                    },
                    {
                      name: "Database Reactivation Campaigns",
                      price: "$450 (one-time)",
                      market: "$750 – $2,000+",
                      features: [
                        "Re-engage dormant leads with personalized outreach.",
                        "Email and SMS sequences crafted for conversions.",
                        "Quick-turnaround strategy to revive past prospects.",
                      ],
                      note: "A smart way to reignite leads without more ad spend.",
                    },
                    {
                      name: "Email & SMS Automation",
                      price: "$250 setup + $100/month",
                      market: "$400 – $1,200/month",
                      features: [
                        "Automate lead follow-ups and promotions.",
                        "Includes 1–3 custom workflows with support.",
                        "Efficient, ongoing engagement for your leads.",
                      ],
                      note: "Keep leads warm without lifting a finger.",
                    },
                    {
                      name: "Live Chat & AI Chatbots",
                      price: "$350 setup + $30/month",
                      market: "$500 – $1,500+ setup",
                      features: [
                        "Live chat or AI bots for 24/7 website engagement.",
                        "Mobile-optimized with smart response logic.",
                        "Convert curious visitors into leads automatically.",
                      ],
                      note: "Real-time answers that turn interest into action.",
                    },
                    {
                      name: "Social Media Schedulers",
                      price: "$200 setup + $50/month",
                      market: "$300 – $1,000/month",
                      features: [
                        "Schedule content across all platforms in one place.",
                        "Analytics for post performance and engagement.",
                        "Save hours of time with automation.",
                      ],
                      note: "Stay consistent and visible without the daily grind.",
                    },
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="border-t-4 border-yellow-400 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div>
                        <h4 className="text-xl font-bold mb-1">
                          <span className="text-purple-800">
                            {service.name}
                          </span>
                          <div className="text-sm text-yellow-600 font-semibold">
                            {service.price}
                          </div>
                          <div className="text-xs text-gray-500 mb-2">
                            Market: {service.market}
                          </div>
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mt-2">
                          {service.features.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-600 italic">
                        {service.note}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedPackage(service.name);
                          setShowQuoteModal(true);
                          setActiveTab("marketing");
                        }}
                        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-2 px-5 rounded-full shadow transition-all duration-200 border-2 border-yellow-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                      >
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {/* Monthly Fees Explanation */}
                  <div className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-3 text-purple-800 text-center">
                      Monthly Fees Explained
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-gray-800 space-y-2">
                      <li>
                        <strong>Setup Fee:</strong> Covers configuration,
                        integration, strategy, and tailored launch.
                      </li>
                      <li>
                        <strong>Monthly Fee:</strong> Covers tool access,
                        monitoring, updates, support, and optimizations.
                      </li>
                      <li>
                        This model ensures reliable operation and scalability
                        for your business tools.
                      </li>
                    </ul>
                  </div>

                  {/* Additional Notes */}
                  <div className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-3 text-purple-800 text-center">
                      Additional Notes
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-gray-800 space-y-2">
                      <li>
                        <strong>Bundle & Save:</strong> Combine services with
                        your Website Package for discounts.
                      </li>
                      <li>
                        <strong>Flexible Plans:</strong> Pause or cancel with 14
                        days’ notice — no long-term contracts.
                      </li>
                      <li>
                        <strong>Scalable Solutions:</strong> Services grow with
                        your business, traffic, and team needs.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Marketing Services FAQ */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-purple-800">
                    Add-on Services FAQ
                  </h3>
                </div>

                <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6 text-sm md:text-base list-disc pl-5 text-gray-800">
                  <li>
                    <strong>Are these services required for my website?</strong>{" "}
                    No — but they enhance performance, automation, and growth.
                  </li>
                  <li>
                    <strong>Why setup and monthly fees?</strong> Setup launches
                    your service; monthly keeps it running and optimized.
                  </li>
                  <li>
                    <strong>Can I cancel anytime?</strong> Yes, with just 14
                    days’ notice — no penalty.
                  </li>
                  <li>
                    <strong>What support is included?</strong> Monthly plans
                    include email support, monitoring, edits, and tweaks.
                  </li>
                  <li>
                    <strong>Can I upgrade services later?</strong> Absolutely.
                    We’ll scale your automations or integrations as needed.
                  </li>
                  <li>
                    <strong>Is there a discount for bundling?</strong> Yes — ask
                    us for a custom quote for multiple services.
                  </li>
                  <li>
                    <strong>Will I be trained on the tools?</strong> We provide
                    tutorials and screen-share walkthroughs — or manage it for
                    you.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "glossary" && (
              <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
                  Glossary of Terms
                </h2>

                {/* Website Packages */}
                <section className="mb-10">
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4 border-b border-yellow-400 pb-2">
                    Website Packages
                  </h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-gray-800 text-sm md:text-base">
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Analytics Integration
                      </dt>
                      <dd>
                        Connecting your website to platforms like Google
                        Analytics to track visitor behavior, traffic sources,
                        and conversions.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Content Management System (CMS)
                      </dt>
                      <dd>
                        Software allowing you to create, edit, and manage
                        website content without coding.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Domain Connection
                      </dt>
                      <dd>
                        Linking your custom domain (e.g., yourbusiness.com) to
                        your website hosting service.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Fully Mobile-Responsive Design
                      </dt>
                      <dd>
                        Website design that adapts seamlessly to all devices
                        including smartphones and tablets.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Lead Capture Form
                      </dt>
                      <dd>
                        Forms collecting visitor info (name, email, phone) to
                        generate and nurture leads.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Manual Indexing Submission
                      </dt>
                      <dd>
                        Directly submitting your website URL to search engines
                        to speed up indexing.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Meta Tags
                      </dt>
                      <dd>
                        HTML elements that describe your webpage content for
                        search engines.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        On-page SEO
                      </dt>
                      <dd>
                        Optimizing website pages (keywords, meta tags, headers,
                        speed) to improve search rankings.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Page Speed Optimization
                      </dt>
                      <dd>
                        Techniques to make your website load faster, enhancing
                        SEO and user experience.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Priority Support
                      </dt>
                      <dd>
                        Expedited technical assistance during and after website
                        launch.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Schema Markup
                      </dt>
                      <dd>
                        Code that helps search engines better understand your
                        content, improving rich search results.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        SEO (Search Engine Optimization)
                      </dt>
                      <dd>
                        Strategies to improve your website’s organic search
                        visibility and rankings.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Social Media Buttons and Widgets
                      </dt>
                      <dd>
                        Interactive website elements linking to social profiles
                        or enabling content sharing.
                      </dd>
                    </div>
                  </dl>
                </section>

                {/* Blog Services */}
                <section className="mb-10">
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4 border-b border-yellow-400 pb-2">
                    Blog Services
                  </h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-gray-800 text-sm md:text-base">
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Call to Action (CTA)
                      </dt>
                      <dd>
                        Text or buttons encouraging readers to take a desired
                        action like subscribing or contacting.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Content Calendar
                      </dt>
                      <dd>
                        A schedule for planning and publishing blog posts
                        consistently and strategically.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Engagement
                      </dt>
                      <dd>
                        Reader interactions such as comments, shares, and likes.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Keyword Research
                      </dt>
                      <dd>
                        Finding popular search terms to target within blog
                        content for better SEO.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Meta Tag Optimization
                      </dt>
                      <dd>
                        Crafting page titles and descriptions to improve search
                        engine results.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Plagiarism-Free Content
                      </dt>
                      <dd>
                        Unique, original blog content created specifically for
                        your brand.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Readability Optimization
                      </dt>
                      <dd>
                        Formatting content to make it clear, engaging, and easy
                        to read.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        SEO-Optimized Blog Posts
                      </dt>
                      <dd>
                        Blog articles designed to rank well in search engines
                        through keyword usage and structure.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Social Media Integration
                      </dt>
                      <dd>
                        Adding sharing buttons or auto-posting to extend blog
                        reach on social platforms.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Thought Leadership
                      </dt>
                      <dd>
                        Content aimed at establishing your brand as an expert
                        authority in your industry.
                      </dd>
                    </div>
                  </dl>
                </section>

                {/* Marketing Services */}
                <section>
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4 border-b border-yellow-400 pb-2">
                    Marketing Services
                  </h3>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-gray-800 text-sm md:text-base">
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Automated Sequences
                      </dt>
                      <dd>
                        Pre-built automated email or SMS workflows to nurture
                        leads and engage customers.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Chatbots (AI Chatbots)
                      </dt>
                      <dd>
                        Automated conversational tools that respond instantly to
                        visitor questions on your website.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Conversion Rate
                      </dt>
                      <dd>
                        The percentage of website visitors who take a desired
                        action (e.g., fill out a form).
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Database Reactivation Campaigns
                      </dt>
                      <dd>
                        Marketing campaigns aimed at re-engaging inactive or
                        dormant leads through email and SMS.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Email & SMS Automation
                      </dt>
                      <dd>
                        Systems to automatically send timely follow-ups,
                        reminders, and promotions.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Lead Follow-Ups
                      </dt>
                      <dd>
                        Messages sent after initial contact to encourage further
                        engagement or sales.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Live Chat
                      </dt>
                      <dd>
                        Real-time messaging on your website to interact with
                        visitors and convert leads.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Monitoring and Updates
                      </dt>
                      <dd>
                        Ongoing checks and improvements to marketing tools and
                        campaigns for optimal performance.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Online Reputation Management
                      </dt>
                      <dd>
                        Monitoring and improving your online reviews and brand
                        image across platforms.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Performance Monitoring
                      </dt>
                      <dd>
                        Tracking key metrics to evaluate and optimize marketing
                        efforts.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Setup Fee
                      </dt>
                      <dd>
                        One-time cost covering initial setup, configuration, and
                        launch of a service.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Social Media Scheduling
                      </dt>
                      <dd>
                        Planning and automating posts across social platforms to
                        maintain consistent presence.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-purple-800">
                        Tool Access
                      </dt>
                      <dd>
                        Permission and credentials for using marketing platforms
                        and dashboards.
                      </dd>
                    </div>
                  </dl>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
      <PricingQuoteModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        preselectedPackage={selectedPackage}
        activeTab={activeTab}
      />
    </>
  );
}