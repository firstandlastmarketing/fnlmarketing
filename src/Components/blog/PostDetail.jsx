import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import BlogNavBar from './BlogNavBar';
import PromoBanner from '../PromoBanner.jsx';

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleInternalLinkClick = (e) => {
      const anchor = e.target.closest('a[href^="/#"]');
      if (anchor) {
        e.preventDefault();
        const sectionId = anchor.getAttribute('href').split('#')[1];
        if (sectionId) {
          sessionStorage.setItem('scrollTo', `#${sectionId}`);
          navigate('/');
        }
      }
    };

    const contentContainer = document.querySelector('.prose');
    contentContainer?.addEventListener('click', handleInternalLinkClick);

    return () => {
      contentContainer?.removeEventListener('click', handleInternalLinkClick);
    };
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold">404 - Blog Post Not Found</h2>
          <p className="mt-2 text-sm">Sorry, we couldn't find that post.</p>
          <Link to="/blog" className="text-indigo-600 hover:underline mt-4 block">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = blogPosts[postIndex - 1];
  const nextPost = blogPosts[postIndex + 1];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const shareUrl = `https://www.firstandlastmarketing.com/blog/${post.slug}`;
  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <>
      <Helmet>
        <title>{post.title} | First and Last Marketing</title>
        <link rel="canonical" href={shareUrl} />
        <meta name="description" content={post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:image" content={`https://www.firstandlastmarketing.com/og-images/post-${post.slug}.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={`https://www.firstandlastmarketing.com/og-images/post-${post.slug}.png`} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": `https://www.firstandlastmarketing.com/og-images/post-${post.slug}.png`,
            "author": {
              "@type": "Organization",
              "name": "First and Last Marketing"
            },
            "publisher": {
              "@type": "Organization",
              "name": "First and Last Marketing",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.firstandlastmarketing.com/logo.png"
              }
            },
            "datePublished": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": shareUrl
            }
          })}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen text-gray-900">
        <BlogNavBar />

        {/* Sticky Navigation */}
        <div className="sticky top-[64px] z-20 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center text-sm text-indigo-700 font-medium">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="flex items-center gap-2 hover:text-indigo-900 transition">
                ← <span className="hidden sm:inline truncate max-w-[140px]">{prevPost.title}</span>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="flex items-center gap-2 hover:text-indigo-900 transition ml-auto">
                <span className="hidden sm:inline truncate max-w-[140px]">{nextPost.title}</span> →
              </Link>
            ) : <div />}
          </div>
        </div>

        <main className="max-w-4xl mx-auto px-6 pt-24 sm:pt-28 pb-12" role="main">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <Link to="/blog" className="hover:underline">Blog</Link> &rsaquo;{' '}
            <span className="text-gray-700">{post.title}</span>
          </nav>

          <figure className="w-full rounded-xl overflow-hidden mb-8 shadow-sm">
            <div className="aspect-[21/9]">
              <img
                src={post.image}
                alt={post.imageCaption || post.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {post.imageCaption && (
              <figcaption className="text-sm text-gray-500 italic mt-2 text-center">{post.imageCaption}</figcaption>
            )}
          </figure>

          <header className="text-center space-y-2 sm:space-y-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-800">{post.title}</h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">{post.summary}</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              {post.tags.map((tag) => (
                <span key={tag} className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          </header>

          <article
            className="prose prose-lg max-w-none prose-indigo"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${encodeURIComponent(tag)}`}
                className="bg-yellow-300 text-gray-900 text-sm px-3 py-1 rounded-full font-medium hover:bg-yellow-400 transition"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Social Sharing */}
          <div className="mt-10 border-t pt-6">
            <h3 className="text-lg font-semibold mb-3">Share this post:</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
              <a href={`https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Prev/Next */}
          <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between gap-4 text-sm">
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`} className="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 transition font-medium">
                ← <span className="line-clamp-1">{prevPost.title}</span>
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="flex items-center justify-end gap-2 text-indigo-700 hover:text-indigo-900 transition font-medium ml-auto">
                <span className="line-clamp-1">{nextPost.title}</span> →
              </Link>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 border-t pt-10" aria-label="Related Posts">
              <h3 className="text-xl font-semibold mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="block bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.01] transition"
                  >
                    <h4 className="font-bold text-indigo-700 mb-2">{rp.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-3">{rp.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>

        <PromoBanner />
      </div>
    </>
  );
};

export default PostDetail;
