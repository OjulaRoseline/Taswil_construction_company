import Image from "next/image";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function InsightsPage() {
  const featuredPost = {
    id: 1,
    title: "The Future of Sustainable Architecture: Trends Shaping 2024",
    excerpt: "Exploring the latest innovations in green building and how they're transforming the industry landscape",
    author: "Sarah Anderson",
    date: "October 15, 2023",
    readTime: "8 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070"
  };

  const posts = [
    {
      id: 2,
      title: "Biophilic Design: Bringing Nature Indoors",
      excerpt: "How incorporating natural elements can enhance wellness and productivity in commercial spaces",
      author: "Michael Chen",
      date: "October 10, 2023",
      readTime: "6 min read",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069"
    },
    {
      id: 3,
      title: "Smart Buildings: IoT Integration in Modern Architecture",
      excerpt: "The role of technology in creating responsive, efficient, and user-centric buildings",
      author: "Emma Williams",
      date: "October 5, 2023",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      id: 4,
      title: "Maximizing Small Spaces: Design Strategies That Work",
      excerpt: "Proven techniques for making compact residential and commercial spaces feel larger",
      author: "David Martinez",
      date: "September 28, 2023",
      readTime: "5 min read",
      category: "Design Tips",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
    },
    {
      id: 5,
      title: "Adaptive Reuse: Breathing New Life into Historic Buildings",
      excerpt: "Case studies of successful transformations that preserve heritage while meeting modern needs",
      author: "Sarah Anderson",
      date: "September 20, 2023",
      readTime: "9 min read",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070"
    },
    {
      id: 6,
      title: "Color Psychology in Commercial Interior Design",
      excerpt: "Understanding how color choices influence mood, behavior, and brand perception",
      author: "Michael Chen",
      date: "September 15, 2023",
      readTime: "6 min read",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6">Insights & Ideas</h1>
            <p className="text-xl text-neutral-600">
              Explore our latest thoughts on architecture, design, and the built environment
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-sm overflow-hidden group">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-sm font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="heading-3 mb-4 hover:text-primary-700 transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Link href={`/insights/${featuredPost.id}`} className="btn-primary inline-flex items-center gap-2">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-2 mb-4">Latest Articles</h2>
            <p className="text-lg text-neutral-600">
              Stay updated with our latest insights and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white text-primary-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary-700 transition-colors">
                    <Link href={`/insights/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div className="text-sm text-neutral-500">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/insights/${post.id}`}
                      className="text-primary-700 font-medium hover:gap-2 inline-flex items-center gap-1 transition-all"
                    >
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 text-neutral-100">
              Get the latest insights, trends, and project updates delivered to your inbox
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
                required
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-accent-500 text-white rounded-sm hover:bg-accent-600 transition-colors font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-neutral-300 mt-4">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
