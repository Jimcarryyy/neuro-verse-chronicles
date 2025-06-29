
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag } from 'lucide-react';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "The Consciousness Upload Paradox: Are We Ready for Digital Immortality?",
      excerpt: "As we stand on the precipice of mind uploading technology, we must confront the fundamental question: would a digital copy of your consciousness truly be you?",
      author: "Dr. Elena Vasquez",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Ethics",
      tags: ["consciousness", "digital immortality", "philosophy"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Mars Colony 2045: Building Humanity's First Interplanetary Society",
      excerpt: "The technical challenges of Mars colonization pale in comparison to the social and psychological hurdles we'll face in establishing a truly sustainable civilization.",
      author: "Marcus Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Space Colonization",
      tags: ["mars", "colonization", "society"],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "When AI Dreams: The Emergence of Machine Creativity",
      excerpt: "Recent breakthroughs in AI creativity challenge our understanding of what it means to be creative. Are we witnessing the birth of truly sentient machines?",
      author: "Dr. Aria Nakamura",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Sentient Machines",
      tags: ["AI", "creativity", "consciousness"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "The Post-Human Condition: Evolution Beyond Biology",
      excerpt: "As genetic engineering and cybernetic enhancement become mainstream, we approach a future where humanity itself may become obsolete.",
      author: "Jordan Martinez",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Post-Humanity",
      tags: ["evolution", "enhancement", "transhumanism"],
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Neural Networks and the Human Brain: A Convergence Theory",
      excerpt: "New research suggests that artificial neural networks may be closer to biological cognition than we ever imagined.",
      author: "Dr. Elena Vasquez",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "AI Ethics",
      tags: ["neural networks", "brain", "cognition"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "The Quantum Internet: Instantaneous Communication Across the Cosmos",
      excerpt: "Quantum entanglement could revolutionize how we communicate across vast distances, connecting Earth with its future colonies.",
      author: "Marcus Chen",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Space Colonization",
      tags: ["quantum", "communication", "technology"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop"
    }
  ];

  const categories = ['all', 'AI Ethics', 'Space Colonization', 'Sentient Machines', 'Post-Humanity'];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Exploring Tomorrow's <span className="text-gradient">Realities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deep dives into the technologies, philosophies, and possibilities that will shape our future.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'cyber-gradient text-white shadow-lg'
                    : 'glass-card hover:shadow-md text-gray-700'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                    Read Article
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
