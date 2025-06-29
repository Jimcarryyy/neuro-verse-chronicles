
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-8 sm:p-12 rounded-3xl">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 cyber-gradient rounded-2xl flex items-center justify-center">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Join the <span className="text-gradient">Neural Network</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get weekly insights into the future of AI, consciousness, and human potential. 
              No spam, just pure futuristic thinking delivered to your inbox.
            </p>
          </div>

          {isSubscribed ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyber-green rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome, Thought Pioneer!</h3>
              <p className="text-gray-600">You've successfully joined our neural network.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                By subscribing, you agree to receive updates about the future of human consciousness.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
