import React from "react";
import {
  FaAward,
  FaHeart,
  FaGlobe,
  FaServer,
  FaChartLine,
  FaComments,
  FaRobot,
  FaBolt,
} from "react-icons/fa";
import aboutImage from "../../assets/aboutImage.png";
import ExplorePricingCTA from '../marketing/ExplorePricingCTA.jsx';

const About = () => {

const stats = [
  {
    value: "100+",
    label: "Automation Features",
    icon: <FaRobot className="text-purple-600" />,
  },
  {
    value: "24/7",
    label: "Lead Capture",
    icon: <FaBolt className="text-purple-600" />,
  },
  {
    value: "10+",
    label: "Years Combined Exp.",
    icon: <FaAward className="text-purple-600" />,
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    icon: <FaServer className="text-purple-600" />,
  },
];


  const keyServices = [
    {
      icon: <FaChartLine className="text-purple-600" />,
      text: "Advanced SEO, PPC, and conversion-focused web design to drive traffic and sales.",
    },
    {
      icon: <FaServer className="text-purple-600" />,
      text: "Secure, high-performance hosting optimized for speed and 99.9% uptime.",
    },
    {
      icon: <FaHeart className="text-purple-600" />,
      text: "Full-suite Reputation Management Software that monitors, requests, and manages online reviews.",
    },
    {
      icon: <FaBolt className="text-purple-600" />,
      text: "Database Reactivation Campaigns to re-engage past customers with automated outreach.",
    },
    {
      icon: <FaChartLine className="text-purple-600" />,
      text: "Email & SMS Marketing Automation built for conversion, onboarding, and nurture flows.",
    },
    {
      icon: <FaRobot className="text-purple-600" />,
      text: "Live Chat & AI Chatbot integration that turns visitors into leads 24/7.",
    },
    {
      icon: <FaComments className="text-purple-600" />,
      text: "Social Media Post Scheduler tools to maintain consistency and visibility across all platforms.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-100"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4">
        <article className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <figure className="lg:w-5/12 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img
                src={aboutImage}
                alt="Our expert digital team working on conversion-optimized websites and marketing automation"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                aria-hidden="true"
              />
            </div>
            <span
              className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-purple-600 opacity-20"
              aria-hidden="true"
            />
            <aside className="absolute -bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20">
              <strong className="text-2xl font-bold text-purple-600">
                10+
              </strong>
              <small className="block text-xs font-medium text-gray-600">
                Years Experience
              </small>
            </aside>
          </figure>

          {/* Text Content */}
          <div className="lg:w-7/12">
            <header className="mb-6">
              <h2
                id="about-title"
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                About{" "}
                <span className="text-purple-600">
                  First and Last Marketing
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                We're a full-service digital agency helping local and national
                businesses generate leads, boost conversions, and dominate their
                niche online. Our expert team blends{" "}
                <strong>web design, automation, AI tools, and SEO</strong> to
                deliver consistent results that matter.
              </p>
            </header>

            {/* Key Services */}
            <section aria-label="What We Offer" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {keyServices.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-purple-100 p-2 rounded-full mr-3">
                      {item.icon}
                    </span>
                    <p className="text-gray-600">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Stats Section */}
            <section
              className="grid grid-cols-2 gap-4 mb-8"
              aria-label="Company Stats"
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center"
                >
                  <span className="mr-3">{item.icon}</span>
                  <div>
                    <strong className="text-xl font-bold text-gray-800">
                      {item.value}
                    </strong>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* CTA */}
            <nav aria-label="Explore services">
              <ExplorePricingCTA
                label="Explore Pricing & Packages"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition shadow-md focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
              />
            </nav>
          </div>
        </article>

        {/* Mission Section */}
        <aside
          aria-labelledby="mission-heading"
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden"
        >
          <span
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500 opacity-30"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h3
              id="mission-heading"
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Our Mission
            </h3>
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              "At First and Last Marketing, our mission is to give every
              business—big or small—the power to compete and win online. We
              don't just build websites; we build visibility, trust, and growth
              systems powered by smart automation and personalized strategies."
            </blockquote>
            <figcaption className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <FaGlobe className="text-purple-600" />
              </div>
              <div>
                <cite className="font-semibold text-gray-800 not-italic">
                  Enoch A. Twumasi
                </cite>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
            </figcaption>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
