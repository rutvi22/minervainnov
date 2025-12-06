import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Users, TrendingUp, Award } from 'lucide-react';

const StakeholderTabs = () => {
  const [activeTab, setActiveTab] = useState('rd');

  const stakeholders = [
    {
      id: 'rd',
      label: "If you're an R&D Head",
      icon: Users,
      pain: '"I am supposed to innovate AND protect our IP AND keep up with what competitors are doing. With the same team. And half the budget."',
      solution:
        'We become your extended intelligence team. You tell us what keeps you up at night, and we deliver focused, actionable intelligence in days, not months. No 200-page reports. Just clear answers.\n\nYou walk into leadership meetings armed with confidence, not anxiety.',
      color: '#BE2026',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    },
    {
      id: 'marketing',
      label: "If you're in Marketing",
      icon: TrendingUp,
      pain: '"I need to prove this product will work before we spend millions. But market research takes forever and costs a fortune."',
      solution:
        'We give you the consumer insights and competitive intelligence you need to build an unbeatable business case. Fast. Affordable. Actionable.\n\nYou will walk into that budget meeting with data that says "yes" loud and clear.',
      color: '#EF5350',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    },
    {
      id: 'ceo',
      label: "If you're the CEO",
      icon: Award,
      pain: '"I do not have time for 100-slide decks. I need to know: What is the threat? What is the opportunity? What do we do next?"',
      solution:
        'We cut through the noise and give you decision-ready intelligence. The kind that helps you move fast when your competitors are still reading reports.\n\nYou lead with clarity. Your team executes with confidence.',
      color: '#B71C1C',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
          style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
        >
          We get it. You are under <span style={{ color: '#BE2026' }}>pressure</span>.
        </h2>
        <p className="text-center text-xl mb-16" style={{ color: '#636E72' }}>
          Different roles, different nightmares. Here is how we help.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mb-12 bg-transparent h-auto">
            {stakeholders.map((stakeholder) => {
              const Icon = stakeholder.icon;
              return (
                <TabsTrigger
                  key={stakeholder.id}
                  value={stakeholder.id}
                  className="data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-2xl p-6 transition-all hover:scale-105"
                  style={{
                    backgroundColor: activeTab === stakeholder.id ? '#FFFFFF' : '#FFF9F5',
                    border: activeTab === stakeholder.id ? `3px solid ${stakeholder.color}` : '3px solid transparent',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={24} style={{ color: stakeholder.color }} />
                    <span className="font-semibold text-base" style={{ color: '#2D3436' }}>
                      {stakeholder.label}
                    </span>
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {stakeholders.map((stakeholder) => (
            <TabsContent key={stakeholder.id} value={stakeholder.id} className="mt-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="order-2 md:order-1 relative">
                  <div
                    className="absolute -top-6 -left-6 w-full h-full rounded-3xl opacity-20"
                    style={{ backgroundColor: stakeholder.color }}
                  />
                  <img
                    src={stakeholder.image}
                    alt={stakeholder.label}
                    className="relative rounded-3xl w-full h-80 object-cover shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="order-1 md:order-2 space-y-6">
                  <div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: stakeholder.color, fontFamily: 'Space Grotesk' }}
                    >
                      The Pain:
                    </h3>
                    <p className="text-lg italic leading-relaxed" style={{ color: '#636E72' }}>
                      {stakeholder.pain}
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: stakeholder.color, fontFamily: 'Space Grotesk' }}
                    >
                      How We Help:
                    </h3>
                    <p className="text-lg leading-relaxed whitespace-pre-line" style={{ color: '#2D3436' }}>
                      {stakeholder.solution}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default StakeholderTabs;
