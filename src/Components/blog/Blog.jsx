import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData.js';
import BlogNavBar from './BlogNavBar.jsx';
import PromoBanner from '../layout/PromoBanner.jsx';
import { Helmet } from 'react-helmet-async';

const useQuery = () => new URLSearchParams(useLocation().search);

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const topRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const [searchQuery, setSearchQuery] = useState(query.get('search') || '');
  const [selectedTag, setSelectedTag] = useState(query.get('tag') || null);

  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];
  const featuredTags = ['SEO', 'SaaS', 'Marketing Automation'];

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedTag) params.set('tag', selectedTag);
    if (currentPage !== 1) params.set('page', currentPage);
    navigate({ pathname: '/blog', search: params.toString() }, { replace: true });
  }, [searchQuery, selectedTag, currentPage]);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.join(' ').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  const Pagination = () => (
    <div className="mt-10 flex justify-center gap-2" aria-label="Pagination Navigation">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-200 ${
            currentPage === i + 1
              ? 'bg-yellow-300 text-gray-900 border-yellow-400 shadow'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700'
          }`}
          aria-current={currentPage === i + 1 ? 'page' : false}
          aria-label={`Go to page ${i + 1}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Helmet>
        <title>Digital Marketing Blog | SEO, SaaS & Automation Insights</title>
        <meta
          name="description"
          content="Explore digital marketing tips, SEO strategies, SaaS growth hacks, and automation guides to scale your business fast."
        />
        <link rel="canonical" href="https://www.firstandlastmarketing.com/blog" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Marketing Blog | SEO, SaaS & Automation Insights" />
        <meta property="og:description" content="Explore digital marketing tips, SEO strategies, SaaS growth hacks, and automation guides to scale your business fast." />
        <meta property="og:url" content="https://www.firstandlastmarketing.com/blog" />
        <meta property="og:image" content="https://www.firstandlastmarketing.com/og-images/blog-preview.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Blog | SEO, SaaS & Automation Insights" />
        <meta name="twitter:description" content="Explore digital marketing tips, SEO strategies, SaaS growth hacks, and automation guides to scale your business fast." />
        <meta name="twitter:image" content="https://www.firstandlastmarketing.com/og-images/blog-preview.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "url": "https://www.firstandlastmarketing.com/blog",
            "name": "First and Last Marketing Blog",
            "description": "Explore digital marketing tips, SEO strategies, SaaS growth hacks, and automation guides to scale your business fast.",
            "publisher": {
              "@type": "Organization",
              "name": "First and Last Marketing",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.firstandlastmarketing.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <BlogNavBar />

      <section ref={topRef} className="max-w-7xl mx-auto px-6 pt-[90px] pb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-3 leading-snug tracking-tight">
          First and Last Marketing Blog
        </h1>
        <p className="text-center text-base md:text-lg max-w-2xl mx-auto mb-6 text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">Turning Clicks Into Clients</span> — Explore expert digital marketing insights, SaaS growth hacks, and SEO strategies to scale your business with confidence.
        </p>

        {/* Search */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full md:w-1/2 px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            aria-label="Search blog posts"
          />
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 px-1 sm:px-2 max-h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <button
            onClick={() => {
              setSelectedTag(null);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded-full text-xs md:text-sm border font-medium transition ${
              selectedTag === null
                ? 'bg-yellow-300 text-gray-900 border-yellow-400 shadow-sm'
                : 'text-gray-700 hover:text-indigo-700 hover:border-indigo-500 hover:shadow-sm'
            }`}
            aria-pressed={selectedTag === null}
          >
            All Topics
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded-full text-xs md:text-sm border font-medium transition ${
                selectedTag === tag
                  ? 'bg-yellow-300 text-gray-900 border-yellow-400 shadow-sm'
                  : 'text-gray-700 hover:text-indigo-700 hover:border-indigo-500 hover:shadow-sm'
              }`}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-8 text-xs sm:text-sm px-1 sm:px-2">
          {featuredTags.map((tag) => (
            <Link
              key={tag}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              className="text-indigo-600 hover:underline"
            >
              <span className="font-medium">Explore:</span> <strong>{tag}</strong>
            </Link>
          ))}
        </div>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" aria-label="Blog Post Grid">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              role="article"
              className="group relative bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01]"
            >
              <Link to={`/blog/${post.slug}`} aria-label={`Read more: ${post.title}`}>
                <img
                  src={post.image}
                  alt={post.imageCaption || post.title}
                  loading="lazy"
                  className="w-full h-44 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="px-4 py-3">
                  <h2 className="text-md font-semibold text-gray-800 group-hover:text-indigo-700 transition line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-3">{post.summary}</p>
                  <div className="mt-3 flex justify-between text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="text-yellow-500 font-semibold">
                      {post.tags[0] || ''}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>

        {/* Pagination */}
        {totalPages > 1 && <Pagination />}

        {/* Clear Filters */}
        {(selectedTag || searchQuery) && (
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
                setCurrentPage(1);
              }}
              className="text-sm text-indigo-700 underline hover:text-indigo-500"
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <PromoBanner />
    </div>
  );
};

export default Blog;
