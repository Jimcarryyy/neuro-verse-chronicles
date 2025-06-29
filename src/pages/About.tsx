
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Rocket, Users, Target, BookOpen, Zap } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. Elena Vasquez",
      role: "Chief Futurist & AI Ethics Lead",
      bio: "Former MIT researcher specializing in consciousness studies and digital ethics. Elena bridges the gap between cutting-edge AI research and philosophical implications.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Chen",
      role: "Space Technology Correspondent",
      bio: "Aerospace engineer turned science communicator. Marcus brings deep technical knowledge to our coverage of space colonization and interplanetary futures.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Aria Nakamura",
      role: "Sentient Systems Researcher",
      bio: "Leading expert in machine consciousness and synthetic creativity. Aria explores the emerging frontier where artificial intelligence meets genuine sentience.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jordan Martinez",
      role: "Transhumanist Philosopher",
      bio: "Post-doctoral researcher in bioethics and human enhancement. Jordan examines the ethical and social implications of our evolving relationship with technology.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Rigorous Analysis",
      description: "We approach futurism with scientific rigor, grounding speculation in current research and technological trends."
    },
    {
      icon: Rocket,
      title: "Bold Vision",
      description: "We're not afraid to explore radical possibilities and challenge conventional thinking about humanity's future."
    },
    {
      icon: Users,
      title: "Inclusive Future",
      description: "We believe the benefits of technological advancement should be accessible to all of humanity."
    },
    {
      icon: Target,
      title: "Ethical Framework",
      description: "Every technological advance we discuss is examined through the lens of ethics and human welfare."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Architects of <span className="text-gradient">Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a collective of researchers, philosophers, and visionaries dedicated to exploring 
              the intersection of technology, consciousness, and the future of human experience.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="glass-card p-8 md:p-12 rounded-xl mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Manifesto</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We stand at the threshold of unprecedented transformation. Artificial intelligence approaches 
                human-level capability, genetic engineering promises to rewrite the human condition, and space 
                technology opens pathways to interplanetary civilization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At NeuroVerse, we believe that understanding these changes—and actively shaping them—is humanity's 
                most crucial challenge. We explore not just what's possible, but what's preferable, ethical, and 
                beneficial for all conscious beings.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to illuminate the path toward a future where technology amplifies human flourishing 
                rather than replacing it, where consciousness can expand beyond biological boundaries, and where 
                the cosmos becomes humanity's canvas for creating meaning.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">
              Our Core <span className="text-gradient">Principles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 cyber-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">
              Meet the <span className="text-gradient">Visionaries</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass-card p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="glass-card p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Published Articles</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">10K+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Expert Contributors</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">3</div>
                <div className="text-gray-600">Years of Insights</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
