
import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Consciousness Upload Paradox",
      excerpt: "Exploring the philosophical implications of mind-machine transfer and what it means to be truly human in a digital age.",
      author: "Dr. Elena Vasquez",
      readTime: "8 min read",
      date: "2024-03-15",
      category: "AI Ethics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Mars Colony 2080: Social Engineering",
      excerpt: "How artificial intelligence will reshape human society on Mars, from governance to genetic adaptation.",
      author: "Marcus Chen",
      readTime: "12 min read",
      date: "2024-03-12",
      category: "Space Colonization",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Synthetic Empathy: When AI Learns to Love",
      excerpt: "The emergence of emotional AI and its profound impact on human relationships and social structures.",
      author: "Dr. Aria Nakamura",
      readTime: "6 min read",
      date: "2024-03-10",
      category: "Sentient Machines",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "The Post-Human Workplace",
      excerpt: "Career evolution in an age where humans and AI collaborate as equals in creative and strategic thinking.",
      author: "Jordan Martinez",
      readTime: "10 min read",
      date: "2024-03-08",
      category: "Post-Humanity",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
    }
  ];

  const categories = ["All", "AI Ethics", "Space Colonization", "Sentient Machines", "Post-Humanity"];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Chronicles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into our latest explorations of tomorrow's possibilities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full glass-card text-gray-700 hover:text-primary hover:shadow-md transition-all duration-200 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm rounded-full text-primary">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 glass-card text-gray-700 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
