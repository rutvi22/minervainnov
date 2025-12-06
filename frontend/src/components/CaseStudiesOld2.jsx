import React, { useState } from 'react';
import { X, Share2, Linkedin, Twitter, Mail, Link as LinkIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'What happens when a No-nonsense Global Director needs to protect her turf (with speed)?',
      color: '#BE2026',
      collageBg: '#FFB74D',
      rotation: -8,
      slides: [
        {
          title: 'The Problem',
          content: 'A Global R&D Director was facing competitive threats from three emerging players. She needed to understand their patent strategies - fast. Traditional research would take months.',
        },
        {
          title: 'Our Approach',
          content: 'We deployed focused IP landscape analysis, identifying white space opportunities and competitor vulnerabilities within 10 days.',
        },
        {
          title: 'The Results',
          content: 'She secured 3 strategic patent filings before competitors moved. Saved the company from potential IP conflicts worth $2M+.',
        },
        {
          title: 'What Changed',
          content: 'The R&D team now runs quarterly intelligence sprints with us. They are no longer reactive - they are ahead of the curve.',
        },
      ],
    },
    {
      id: 2,
      title: 'How a Marketing VP turned \"maybe\" into \"must-have\" in 6 weeks',
      color: '#EF5350',
      collageBg: '#FFB74D',
      rotation: 5,
      slides: [
        {
          title: 'The Problem',
          content: 'A Marketing VP had a product concept but needed proof it would resonate. Leadership wanted consumer validation before greenlighting $5M investment.',
        },
        {
          title: 'Our Approach',
          content: 'We conducted rapid market signal monitoring, analyzing consumer trends, social sentiment, and competitor gaps in just 6 weeks.',
        },
        {
          title: 'The Results',
          content: 'Delivered a compelling business case backed by data. Product was approved and became a $50M product line within 18 months.',
        },
        {
          title: 'What Changed',
          content: 'Marketing now launches with confidence, not guesswork. They have cut concept-to-launch time by 40%.',
        },
      ],
    },
    {
      id: 3,
      title: 'When speed is survival: How we helped a CEO move from insight to action in 72 hours',
      color: '#B71C1C',
      collageBg: '#FFB74D',
      rotation: -6,
      slides: [
        {
          title: 'The Problem',
          content: 'A CEO learned a major competitor was launching a disruptive product in their core market. He had 72 hours to decide: respond or pivot.',
        },
        {
          title: 'Our Approach',
          content: 'Emergency tech landscape + capability scouting. We identified partnership opportunities and alternative tech solutions overnight.',
        },
        {
          title: 'The Results',
          content: 'CEO pivoted strategy, partnered with an innovative supplier, and launched a counter-product 4 weeks ahead of the competitor.',
        },
        {
          title: 'What Changed',
          content: 'The company now treats intelligence as a strategic weapon, not an afterthought. They have avoided 2 major market disruptions since.',
        },
      ],
    },
  ];

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = selectedCase ? selectedCase.title : '';

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank');
    }
  };

  const nextSlide = () => {
    if (selectedCase && currentSlide < selectedCase.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Background collage elements */}
      <div
        className="collage-block"
        style={{
          width: '250px',
          height: '200px',
          backgroundColor: '#FFF3E0',
          top: '10%',
          right: '5%',
          transform: 'rotate(15deg)',
          opacity: 0.4,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
        >
          Stories that <span style={{ color: '#BE2026' }}>matter</span>
        </h2>

        {/* Innocent-style collage grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`relative ${
                index === 1 ? 'md:col-span-5 md:row-span-2' : 'md:col-span-7'
              }`}
              style={{
                transform: `rotate(${study.rotation}deg)`,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${study.rotation}deg)`)}
            >
              <div
                className="card-interactive bg-white rounded-3xl p-8 overflow-hidden cursor-pointer relative"
                onClick={() => {
                  setSelectedCase(study);
                  setCurrentSlide(0);
                }}
                style={{ 
                  minHeight: index === 1 ? '420px' : '320px',
                  border: `4px solid ${study.collageBg}`,
                }}
              >
                {/* Collage background blocks - Innocent style */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full"
                  style={{ backgroundColor: study.collageBg, opacity: 0.3 }}
                />
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 rounded-tr-full"
                  style={{ backgroundColor: study.color, opacity: 0.1 }}
                />

                {/* Playful text blocks */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: study.collageBg, color: '#2D3436' }}
                >
                  CASE STUDY
                </div>

                <h3
                  className="text-xl font-bold mb-4 leading-tight relative z-10"
                  style={{ color: study.color, fontFamily: 'Space Grotesk' }}
                >
                  {study.title}
                </h3>

                {/* Fun arrow indicator */}
                <div className="mt-6 relative z-10">
                  <div
                    className="inline-flex items-center gap-2 font-semibold group"
                    style={{ color: study.color }}
                  >
                    <span>Click to read the full story</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  className="absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-20"
                  style={{ backgroundColor: study.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-3xl">
            <div className="relative" style={{ backgroundColor: selectedCase.color }}>
              {/* Close button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full hover:scale-110 transition-transform"
              >
                <X size={24} style={{ color: selectedCase.color }} />
              </button>

              {/* Slides */}
              <div className="p-12 text-white min-h-[400px] flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                  {selectedCase.slides[currentSlide].title}
                </h3>
                <p className="text-lg leading-relaxed">{selectedCase.slides[currentSlide].content}</p>

                {/* Slide indicators */}
                <div className="flex gap-2 mt-8">
                  {selectedCase.slides.map((_, idx) => (
                    <div
                      key={idx}
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: idx === currentSlide ? '32px' : '8px',
                        backgroundColor: idx === currentSlide ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="p-3 bg-white rounded-full hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={24} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === selectedCase.slides.length - 1}
                  className="p-3 bg-white rounded-full hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={24} style={{ color: selectedCase.color }} />
                </button>
              </div>

              {/* Share buttons */}
              <div className="absolute top-4 left-4 flex gap-2">
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                >
                  <Twitter size={20} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                >
                  <Mail size={20} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                >
                  <LinkIcon size={20} style={{ color: selectedCase.color }} />
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default CaseStudies;
