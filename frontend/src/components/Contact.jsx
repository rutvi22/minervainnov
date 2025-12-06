import React, { useState } from 'react';
import { Send, CheckCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
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
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #BE2026 0%, #EF5350 50%, #FFB74D 100%)',
          opacity: 0.08,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
          style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
        >
          Let's talk about your <span style={{ color: '#BE2026' }}>2026 roadmap</span>.
        </h2>
        <p className="text-center text-xl mb-16" style={{ color: '#636E72' }}>
          No sales pitch. Just a conversation about what's keeping you up at night.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Send Message Form */}
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
            >
              Send us a message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3436' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none transition-colors"
                    style={{ borderColor: '#E8E8E8' }}
                    onFocus={(e) => (e.target.style.borderColor = '#BE2026')}
                    onBlur={(e) => (e.target.style.borderColor = '#E8E8E8')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3436' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none transition-colors"
                    style={{ borderColor: '#E8E8E8' }}
                    onFocus={(e) => (e.target.style.borderColor = '#BE2026')}
                    onBlur={(e) => (e.target.style.borderColor = '#E8E8E8')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3436' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 bg-white focus:outline-none transition-colors resize-none"
                    style={{ borderColor: '#E8E8E8' }}
                    onFocus={(e) => (e.target.style.borderColor = '#BE2026')}
                    onBlur={(e) => (e.target.style.borderColor = '#E8E8E8')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                  style={{ backgroundColor: '#BE2026', color: '#FFFFFF' }}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
                <CheckCircle size={48} style={{ color: '#BE2026' }} className="mx-auto mb-4" />
                <h4
                  className="text-2xl font-bold mb-2"
                  style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
                >
                  Message sent!
                </h4>
                <p style={{ color: '#636E72' }}>We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>

          {/* Book a Call */}
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
            >
              Or book 20 minutes
            </h3>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex justify-center mb-6">
                <Calendar size={64} style={{ color: '#BE2026' }} />
              </div>

              <p className="text-lg mb-6 text-center" style={{ color: '#636E72' }}>
                Let's have a quick chat about your challenges and see if we're a good fit.
              </p>

              <button
                onClick={() => alert('Calendar integration placeholder - user will add Calendly/Cal.com')}
                className="w-full py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
                style={{
                  backgroundColor: '#BE2026',
                  color: '#FFFFFF',
                }}
              >
                Schedule a Call
              </button>

              <div className="mt-8 pt-8 border-t-2" style={{ borderColor: '#E8E8E8' }}>
                <p className="text-sm text-center" style={{ color: '#636E72' }}>
                  <strong>What to expect:</strong>
                </p>
                <ul className="mt-3 space-y-2 text-sm" style={{ color: '#636E72' }}>
                  <li>✓ 20-minute focused conversation</li>
                  <li>✓ No hard sell, just honest advice</li>
                  <li>✓ Clear next steps (if it makes sense)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
