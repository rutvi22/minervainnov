import React, { useState } from 'react';
import { Search, Telescope, Lightbulb, Radio, ChevronDown, ChevronUp } from 'lucide-react';

const AboutServices = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Search,
      title: 'IP/Tech Landscape',
      subtitle: 'Know exactly what has been claimed - and what is still open.',
      description:
        'Comprehensive patent analysis that reveals white space opportunities and competitor strategies. We map the competitive IP landscape so you can innovate with confidence and avoid costly conflicts.',
      color: '#BE2026',
    },
    {
      id: 2,
      icon: Telescope,
      title: 'Horizon Scanning',
      subtitle: 'See what is coming before your competitors do.',
      description:
        'Early warning system for emerging trends, technologies, and market shifts. We monitor signals from research papers, startups, patent filings, and consumer behavior to give you a 12-18 month advantage.',
      color: '#EF5350',
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'Capability Scouting',
      subtitle: 'Find the partners and tech you need to win.',
      description:
        'Strategic matchmaking between your needs and available solutions. We identify suppliers, technologies, and partnership opportunities that can accelerate your roadmap and reduce time-to-market.',
      color: '#FFB74D',
    },
    {
      id: 4,
      icon: Radio,
      title: 'Market Signal Monitoring',
      subtitle: 'Real-time intelligence on what consumers actually want.',
      description:
        'Continuous tracking of consumer preferences, competitor moves, and market dynamics. We turn social listening, review analysis, and trend data into actionable product and marketing strategies.',
      color: '#B71C1C',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Speed without Compromise',
      description: 'Days, not months. Without sacrificing depth or accuracy.',
      color: '#BE2026',
    },
    {
      title: 'Decision-Ready, Not Data Dumps',
      description: 'Insights you can act on immediately, not 500-page reports.',
      color: '#EF5350',
    },
    {
      title: 'We Speak Your Language',
      description: 'No jargon. No fluff. Just clear answers to your real questions.',
      color: '#FFB74D',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF9F5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Positioning Statement */}
        <div className="text-center mb-20">
          <blockquote
            className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
            style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
          >
            "We don't do market research. We help FMCG leaders make faster, smarter decisions in a world that{' '}
            <span style={{ color: '#BE2026' }}>will not wait</span>."
          </blockquote>
        </div>

        {/* Why Choose Us */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
        >
          Why teams <span style={{ color: '#BE2026' }}>choose us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              style={{ border: `3px solid ${item.color}` }}
            >
              <div 
                className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: item.color }} />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
              >
                {item.title}
              </h3>
              <p className="text-lg" style={{ color: '#636E72' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
        >
          What we <span style={{ color: '#BE2026' }}>do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden cursor-pointer transition-all hover:shadow-xl"
                onClick={() => setExpandedService(isExpanded ? null : service.id)}
                style={{
                  border: isExpanded ? `3px solid ${service.color}` : '2px solid #E8E8E8',
                }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className="p-3 rounded-2xl"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <Icon size={28} style={{ color: service.color }} />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: service.color, fontFamily: 'Space Grotesk' }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-base" style={{ color: '#636E72' }}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {isExpanded ? (
                        <ChevronUp size={24} style={{ color: service.color }} />
                      ) : (
                        <ChevronDown size={24} style={{ color: '#636E72' }} />
                      )}
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t-2" style={{ borderColor: `${service.color}30` }}>
                      <p className="text-lg leading-relaxed" style={{ color: '#2D3436' }}>
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
