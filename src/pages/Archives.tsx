
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Search, Tag, BookOpen, Clock } from 'lucide-react';

const Archives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2024');

  const archiveData = {
    '2024': [
      {
        month: 'January',
        articles: [
          { title: "The Consciousness Upload Paradox", date: "Jan 15", category: "AI Ethics", readTime: "8 min" },
          { title: "Mars Colony 2045: Building Humanity's First Interplanetary Society", date: "Jan 12", category: "Space Colonization", readTime: "12 min" },
          { title: "When AI Dreams: The Emergence of Machine Creativity", date: "Jan 10", category: "Sentient Machines", readTime: "6 min" },
          { title: "The Post-Human Condition: Evolution Beyond Biology", date: "Jan 8", category: "Post-Humanity", readTime: "10 min" },
          { title: "Neural Networks and the Human Brain: A Convergence Theory", date: "Jan 5", category: "AI Ethics", readTime: "7 min" },
          { title: "The Quantum Internet: Instantaneous Communication Across the Cosmos", date: "Jan 3", category: "Space Colonization", readTime: "9 min" }
        ]
      }
    ],
    '2023': [
      {
        month: 'December',
        articles: [
          { title: "Digital Souls: The Philosophy of Uploaded Consciousness", date: "Dec 28", category: "AI Ethics", readTime: "11 min" },
          { title: "Space Elevators and the Future of Orbital Commerce", date: "Dec 25", category: "Space Colonization", readTime: "8 min" },
          { title: "The Last Human: A Transhumanist's Farewell", date: "Dec 20", category: "Post-Humanity", readTime: "15 min" }
        ]
      },
      {
        month: 'November',
        articles: [
          { title: "Synthetic Emotions: When Machines Learn to Feel", date: "Nov 30", category: "Sentient Machines", readTime: "9 min" },
          { title: "Terraforming Ethics: Our Responsibility to Other Worlds", date: "Nov 25", category: "Space Colonization", readTime: "7 min" },
          { title: "The Singularity Delayed: Why AI Progress May Plateau", date: "Nov 20", category: "AI Ethics", readTime: "12 min" }
        ]
      }
    ]
  };

  const popularTags = [
    { name: 'Neural Utopia', count: 23 },
    { name: 'Synthetic Love', count: 18 },
    { name: 'Time Loops', count: 15 },
    { name: 'Digital Consciousness', count: 31 },
    { name: 'Space Ethics', count: 12 },
    { name: 'Quantum Reality', count: 19 },
    { name: 'Bio-Enhancement', count: 14 },
    { name: 'AI Philosophy', count: 27 }
  ];

  const years = Object.keys(archiveData).sort((a, b) => b.localeCompare(a));

  const filteredArchive = archiveData[selectedYear] || [];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Chronicle <span className="text-gradient">Archives</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our complete collection of futuristic insights and technological prophecies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="glass-card p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-primary" />
                  Search Archives
                </h3>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Year Filter */}
              <div className="glass-card p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  By Year
                </h3>
                <div className="space-y-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedYear === year
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-primary" />
                  Popular Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span
                      key={tag.name}
                      className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-gray-700 text-sm rounded-full hover:from-primary/20 hover:to-accent/20 transition-all duration-200 cursor-pointer"
                    >
                      {tag.name}
                      <span className="ml-1 text-xs text-gray-500">({tag.count})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {filteredArchive.map((monthData, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-12 h-12 cyber-gradient rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-2xl font-heading font-bold text-gray-900">
                        {monthData.month} {selectedYear}
                      </h2>
                      <p className="text-gray-600">{monthData.articles.length} articles published</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {monthData.articles
                      .filter(article => 
                        searchTerm === '' || 
                        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        article.category.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors duration-200 cursor-pointer">
                                {article.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {article.date}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {article.readTime}
                                </span>
                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                                  {article.category}
                                </span>
                              </div>
                            </div>
                            <button className="ml-4 px-4 py-2 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-200 text-sm font-medium">
                              Read
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Archives;
