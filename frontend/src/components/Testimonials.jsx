import React, { useState, useEffect } from 'react';
import { Star, X } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      quote: "Minnerva does not do fluff. They give me exactly what I need to make decisions. Fast.",
      name: 'Sarah Chen',
      role: 'Global R&D Director',
      industry: 'Oral Care',
      initial: 'S',
      fullStory:
        "Before working with Minnerva, I was drowning in vendor pitches and 300-page reports. Now I get exactly what I need in days. They have become an extension of my team. I cannot imagine going back to the old way.",
    },
    {
      quote: "Finally, a research partner that gets that I do not have 3 months to wait for insights.",
      name: 'Michael Rodriguez',
      role: 'VP Innovation',
      industry: 'Personal Care',
      initial: 'M',
      fullStory:
        "Speed is everything in our industry. Minnerva delivers insights in the timeframe we actually need them. They have helped us beat competitors to market twice in the past year.",
    },
    {
      quote: "They turned my gut feeling into a $50M product line. That is the definition of ROI.",
      name: 'Emma Thompson',
      role: 'Chief Marketing Officer',
      industry: 'Laundry Care',
      initial: 'E',
      fullStory:
        "I had a hunch about a market opportunity, but leadership needed proof. Minnerva validated the concept with hard data in 6 weeks. The product launched and exceeded all projections. Best money we have ever spent.",
    },
    {
      quote: 'Speed + accuracy + zero BS. That\'s why we keep coming back.',
      name: 'David Kim',
      role: 'CEO',
      industry: 'Dishwash Products',
      initial: 'D',
      fullStory:
        "In 3 years of working with Minnerva, they have never missed a deadline or delivered subpar work. They're the only research partner I trust completely.",
    },
    {
      quote: "Best investment we have made. They have saved us from at least 2 costly mistakes.",
      name: 'Lisa Patel',
      role: 'R&D Manager',
      industry: 'Home Care',
      initial: 'L',
      fullStory:
        "Minnerva's horizon scanning caught two competitive threats before they materialized. We pivoted our strategy and avoided millions in wasted R&D investment.",
    },
    {
      quote: 'Minnerva feels like an extension of my team, not a vendor. Huge difference.',
      name: 'James Wilson',
      role: 'Innovation Director',
      industry: 'Personal Care',
      initial: 'J',
      fullStory:
        "They understand our business so well that I do not have to explain context every time. They anticipate our needs and deliver solutions before we even ask.",
    },
    {
      quote: 'They don\'t just give me data. They give me the story I need to sell my ideas internally.',
      name: 'Priya Sharma',
      role: 'Marketing VP',
      industry: 'Oral Care',
      initial: 'P',
      fullStory:
        "Getting budget approval used to be a nightmare. Now Minnerva gives me the narrative and data I need to make compelling cases. My success rate has tripled.",
    },
    {
      quote: "In 5 years, I have never had to ask them to redo work. First time, every time.",
      name: 'Robert Chang',
      role: 'Head of Strategy',
      industry: 'FMCG Conglomerate',
      initial: 'R',
      fullStory:
        "The quality consistency is remarkable. Whether it's a small project or a major strategic initiative, they nail it on the first pass. That is professionalism.",
    },
    {
      quote: 'They anticipated a competitive threat before we even knew it existed. That\'s foresight.',
      name: 'Sophia Martinez',
      role: 'R&D Director',
      industry: 'Laundry Care',
      initial: 'S',
      fullStory:
        "Minnerva's monitoring service alerted us to a patent filing from a competitor 18 months before their product launch. We had time to prepare a counter-strategy and protected our market share.",
    },
    {
      quote: 'No jargon, no filler, no wasted time. Just smart people solving real problems.',
      name: 'Tom Anderson',
      role: 'VP Product Development',
      industry: 'Dishwash',
      initial: 'T',
      fullStory:
        "I appreciate that they talk like humans, not consultants. Every conversation is focused and actionable. No unnecessary complexity.",
    },
    {
      quote: "Minnerva has become our secret weapon. Don't tell our competitors.",
      name: 'Nina Desai',
      role: 'Chief Innovation Officer',
      industry: 'Personal Care',
      initial: 'N',
      fullStory:
        "We have had a competitive advantage for 2 years now, and it's largely thanks to the intelligence Minnerva provides. They help us stay three steps ahead.",
    },
    {
      quote: "As a smaller player, we cannot afford mistakes. Minnerva helps us punch above our weight.",
      name: 'Carlos Mendez',
      role: 'CEO',
      industry: 'Home Care Startup',
      initial: 'C',
      fullStory:
        "With limited resources, every decision matters. Minnerva gives us enterprise-level intelligence at a price we can afford. It's leveled the playing field.",
    },
    {
      quote: 'They made our annual planning process 10x more confident and 3x faster.',
      name: 'Jennifer Lee',
      role: 'Global Marketing Director',
      industry: 'Oral Care',
      initial: 'J',
      fullStory:
        "Strategic planning used to take 4 months and still felt uncertain. With Minnerva's insights, we now plan in 6 weeks with complete confidence in our direction.",
    },
    {
      quote: "Minnerva delivered in 2 weeks what our previous agency couldn't do in 4 months.",
      name: 'Ahmed Hassan',
      role: 'R&D Manager',
      industry: 'Personal Care',
      initial: 'A',
      fullStory:
        "We wasted 4 months and significant budget with another firm. Minnerva came in, understood our needs immediately, and delivered exactly what we needed in 2 weeks. Never going back.",
    },
    {
      quote: 'They don\'t just answer questions. They help us ask better questions.',
      name: 'Rachel Green',
      role: 'VP Strategic Planning',
      industry: 'FMCG Group',
      initial: 'R',
      fullStory:
        "Minnerva has changed how we think about intelligence. They challenge our assumptions and help us frame problems better. That strategic partnership is invaluable.",
    },
    {
      quote: 'Every dollar spent with Minnerva has returned 10x in smarter decisions.',
      name: 'Marcus Johnson',
      role: 'Innovation Lead',
      industry: 'Laundry Care',
      initial: 'M',
      fullStory:
        "We track ROI religiously, and Minnerva consistently delivers the highest return of any vendor we work with. It's not even close.",
    },
    {
      quote: 'Finally found a partner who respects our time as much as we do.',
      name: 'Yuki Tanaka',
      role: 'Director of R&D',
      industry: 'Home Care',
      initial: 'Y',
      fullStory:
        "Every interaction is efficient and purposeful. No endless meetings, no scope creep, no delays. They deliver what they promise, when they promise it.",
    },
    {
      quote: 'Their horizon scanning caught a trend 18 months early. We launched first and owned it.',
      name: 'Olivia Brown',
      role: 'Head of Consumer Insights',
      industry: 'Personal Care',
      initial: 'O',
      fullStory:
        "Minnerva identified a sustainability trend before it hit mainstream. We had a product ready when demand exploded. That first-mover advantage made our year.",
    },
    {
      quote: "Minnerva does not do corporate speak. They talk like real humans with real answers.",
      name: 'Daniel Foster',
      role: 'CEO',
      industry: 'Oral Care Innovator',
      initial: 'D',
      fullStory:
        "I'm tired of consultants who hide behind jargon. Minnerva tells it straight. That honesty and clarity are refreshing and incredibly valuable.",
    },
    {
      quote: 'Working with them feels like having a PhD team in your back pocket. On speed dial.',
      name: 'Isabella Romano',
      role: 'VP Innovation',
      industry: 'Dishwash',
      initial: 'I',
      fullStory:
        "The depth of expertise is incredible, but what matters most is their accessibility. I can reach out anytime and get thoughtful, expert answers quickly.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2D3436' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
          style={{ color: '#FFFFFF', fontFamily: 'Space Grotesk' }}
        >
          What leaders are <span style={{ color: '#FFD93D' }}>saying</span>
        </h2>
        <p className="text-center text-xl mb-16" style={{ color: '#FFFFFF', opacity: 0.8 }}>
          (And yes, these are real people)
        </p>

        {/* Marquee */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6"
            style={{
              animation: isPaused ? 'none' : 'scroll 60s linear infinite',
              width: 'fit-content',
            }}
          >
            {/* Double the testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 bg-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD93D" style={{ color: '#FFD93D' }} />
                  ))}
                </div>
                <p className="text-base mb-4" style={{ color: '#2D3436' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: '#FF5722', color: '#FFFFFF' }}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#2D3436' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm" style={{ color: '#636E72' }}>
                      {testimonial.role} • {testimonial.industry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-8" style={{ color: '#FFFFFF', opacity: 0.7 }}>
          Hover to pause • Click for full testimonial
        </p>
      </div>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
          <DialogContent className="max-w-2xl rounded-3xl">
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 p-2 hover:scale-110 transition-transform"
            >
              <X size={24} style={{ color: '#636E72' }} />
            </button>

            <div className="p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFD93D" style={{ color: '#FFD93D' }} />
                ))}
              </div>

              <p className="text-2xl font-semibold mb-6 leading-relaxed" style={{ color: '#2D3436' }}>
                "{selectedTestimonial.quote}"
              </p>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#636E72' }}>
                {selectedTestimonial.fullStory}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t-2" style={{ borderColor: '#E8E8E8' }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl"
                  style={{ backgroundColor: '#FF5722', color: '#FFFFFF' }}
                >
                  {selectedTestimonial.initial}
                </div>
                <div>
                  <p className="font-bold text-xl" style={{ color: '#2D3436' }}>
                    {selectedTestimonial.name}
                  </p>
                  <p className="text-base" style={{ color: '#636E72' }}>
                    {selectedTestimonial.role}
                  </p>
                  <p className="text-sm" style={{ color: '#636E72' }}>
                    {selectedTestimonial.industry}
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
