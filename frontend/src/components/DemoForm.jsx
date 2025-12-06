import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    question: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Demo request submitted:', formData);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '', question: '' });
    }, 5000);
  };

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF9F5' }}>
      <div className="max-w-4xl mx-auto">
        {!isSubmitted ? (
          <>
            <h2
              className="text-4xl sm:text-5xl font-bold text-center mb-6"
              style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
            >
              Try us. <span style={{ color: '#BE2026' }}>No commitment</span>.
            </h2>
            <p className="text-center text-xl mb-12" style={{ color: '#636E72' }}>
              Drop your question + email, we'll send you the answer within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3436' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-current transition-colors"
                    style={{ borderColor: '#E8E8E8' }}
                    onFocus={(e) => (e.target.style.borderColor = '#BE2026')}
                    onBlur={(e) => (e.target.style.borderColor = '#E8E8E8')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3436' }}>
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                    style={{ borderColor: '#E8E8E8' }}
                    onFocus={(e) => (e.target.style.borderColor = '#BE2026')}
                    onBlur={(e) => (e.target.style.borderColor = '#E8E8E8')}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3436' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                  style={{ borderColor: '#E8E8E8' }}
                  onFocus={(e) => (e.target.style.borderColor = '#BE2026')}
                  onBlur={(e) => (e.target.style.borderColor = '#E8E8E8')}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3436' }}>
                  Your Question *
                </label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none"
                  style={{ borderColor: '#E8E8E8' }}
                  onFocus={(e) => (e.target.style.borderColor = '#BE2026')}
                  onBlur={(e) => (e.target.style.borderColor = '#E8E8E8')}
                  placeholder="What keeps you up at night? What do you need to know?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                style={{ backgroundColor: '#BE2026', color: '#FFFFFF' }}
              >
                <Send size={20} />
                Send My Question
              </button>

              <p className="text-center text-sm mt-4" style={{ color: '#636E72' }}>
                We'll respond within 24 hours. No sales pitch. Just a thoughtful answer.
              </p>
            </form>
          </>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} style={{ color: '#BE2026' }} />
            </div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
            >
              Got it! Check your inbox.
            </h3>
            <p className="text-lg mb-2" style={{ color: '#636E72' }}>
              We've sent you a confirmation email. Our team is already working on your answer.
            </p>
            <p className="text-lg font-semibold" style={{ color: '#BE2026' }}>
              Expect to hear from us within 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoForm;
