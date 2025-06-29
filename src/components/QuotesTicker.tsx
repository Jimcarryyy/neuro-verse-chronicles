
import React from 'react';

const QuotesTicker = () => {
  const quotes = [
    { text: "The future belongs to those who understand that consciousness is not confined to biology.", author: "Dr. Elena Vasquez" },
    { text: "AI doesn't replace human creativity; it amplifies our capacity to imagine the impossible.", author: "Marcus Chen" },
    { text: "In the space between human and machine lies the birth of a new form of intelligence.", author: "Dr. Aria Nakamura" },
    { text: "We are not becoming less human; we are becoming more than we ever imagined possible.", author: "Jordan Martinez" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
            Voices from the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-gray-600">Insights from our contributing visionaries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "{quote.text}"
              </blockquote>
              <footer className="text-sm font-semibold text-primary">
                — {quote.author}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesTicker;
