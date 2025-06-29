
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Zap, Brain, Rocket, CheckCircle } from 'lucide-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('explorer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const plans = [
    {
      id: 'explorer',
      name: 'Neural Explorer',
      price: 'Free',
      description: 'Perfect for curious minds beginning their journey into the future',
      features: [
        'Weekly newsletter with 3 featured articles',
        'Access to public discussions',
        'Basic future timeline updates',
        'Community forum access'
      ],
      icon: Brain,
      popular: false
    },
    {
      id: 'visionary',
      name: 'Digital Visionary',
      price: '$9/month',
      description: 'For dedicated futurists who want deeper insights',
      features: [
        'Everything in Neural Explorer',
        'Daily deep-dive articles',
        'Exclusive AI-generated content',
        'Priority access to virtual events',
        'Advanced search and archives',
        'Early access to new features'
      ],
      icon: Zap,
      popular: true
    },
    {
      id: 'pioneer',
      name: 'Cosmic Pioneer',
      price: '$19/month',
      description: 'Ultimate access for thought leaders and researchers',
      features: [
        'Everything in Digital Visionary',
        'Direct access to our research team',
        'Monthly video calls with experts',
        'Custom research requests',
        'Exclusive white papers',
        'Beta access to AI tools',
        'Personal future scenario planning'
      ],
      icon: Rocket,
      popular: false
    }
  ];

  if (isSubscribed) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="glass-card p-12 rounded-xl">
                <div className="w-20 h-20 cyber-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  Welcome, <span className="text-gradient">Thought Pioneer</span>!
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Your journey into tomorrow begins now. Check your email for your first transmission from the future.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Next?</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Your welcome email will arrive within minutes</li>
                    <li>• First newsletter drops every Monday at 9 AM</li>
                    <li>• Join our community discussions in the member portal</li>
                    <li>• Follow us on social media for daily insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Join the <span className="text-gradient">Neural Network</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Subscribe to receive cutting-edge insights, exclusive content, and early access to the 
              technologies that will reshape our world.
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-accent' : ''}`}
              >
                {plan.popular && (
                  <div className="cyber-gradient text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'cyber-gradient text-white shadow-lg'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {plan.price === 'Free' ? 'Get Started' : 'Subscribe Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-gray-600 mb-8">
                Enter your email to begin receiving our weekly newsletter and join thousands of 
                forward-thinking individuals exploring tomorrow's possibilities.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@future.com"
                    required
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 cyber-gradient text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  >
                    Join the Network
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  No spam, ever. Unsubscribe anytime. Your data is protected and never shared.
                </p>
              </form>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights</h3>
              <p className="text-gray-600">Get analysis from leading researchers and futurists</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Access</h3>
              <p className="text-gray-600">Be first to learn about breakthrough technologies</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Connect with like-minded visionaries and innovators</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscribe;
