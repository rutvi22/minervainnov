import React, { useState } from 'react';
import { X, Share2, Linkedin, Twitter, Mail, Link as LinkIcon, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Watch- How this Landscape uncovered a goldmine for the R&D team (45 sec short video)',
      //color: '#BE2026',
      //bgColor: '#FFEBEE',
      image: '/images/CaseStudy1_OralCare.webp',
      //rotation: -4,
      slides: [
        {
          //title: 'The Problem',
          //content: 'A Global R&D Director was facing competitive threats from three emerging players. She needed to understand their patent strategies - fast. Traditional research would take months.',
          image: '/images/CaseStudy1_Video_Thumbnail.webp',
          hasVideo: true,
          videoUrl: '/images/CaseStudy1_Video_Thumbnail.webp', // Placeholder
        },
        {
          image: '/images/CaseStudy1_Slide2.webp',
        },
        {
          image: '/images/CaseStudy1_Slide3.webp',
        }
      ],
    },
    {
      id: 2,
      title: 'What happens when a No-nonsense Global Director needs to protect her turf (with speed)?',
      //color: '#00897B',
      //bgColor: '#E0F2F1',
      image: '/images/CaseStudy2_Hygiene.webp',
      //rotation: 3,
      slides: [
        {
          title: 'The Problem',
          content: 'A Marketing VP had a product concept but needed proof it would resonate. Leadership wanted consumer validation before greenlighting $5M investment.',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
        },
        {
          title: 'Our Approach',
          content: 'We conducted rapid market signal monitoring, analyzing consumer trends, social sentiment, and competitor gaps in just 6 weeks.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        },
        {
          title: 'The Results',
          content: 'Delivered a compelling business case backed by data. Product was approved and became a $50M product line within 18 months.',
          image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80',
        },
        {
          title: 'What Changed',
          content: 'Marketing now launches with confidence, not guesswork. They have cut concept-to-launch time by 40%.',
          image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
        },
      ],
    },
    {
      id: 3,
      title: '',
      //color: '#F57C00',
      //bgColor: '#FFF3E0',
      image: '/images/CaseStudy3_Licensing Feasibility.webp',
      //rotation: -3,
      slides: [
        {
          title: 'The Problem',
          content: 'A CEO learned a major competitor was launching a disruptive product in their core market. He had 72 hours to decide: respond or pivot.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
        },
        {
          title: 'Our Approach',
          content: 'Emergency tech landscape + capability scouting. We identified partnership opportunities and alternative tech solutions overnight.',
          image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
        },
        {
          title: 'The Results',
          content: 'CEO pivoted strategy, partnered with an innovative supplier, and launched a counter-product 4 weeks ahead of the competitor.',
          image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=80',
        },
        {
          title: 'What Changed',
          content: 'The company now treats intelligence as a strategic weapon, not an afterthought. They have avoided 2 major market disruptions since.',
          image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
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
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FFF9F5' }}>
      {/* Background collage elements */}
      <div
        className="collage-block"
        style={{
          width: '250px',
          height: '200px',
          backgroundColor: '#FFE0B2',
          top: '10%',
          right: '5%',
          transform: 'rotate(15deg)',
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <h2
          className="text-4xl sm:text-5xl text-black font-bold text-center mb-16"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Stories that <span className='bg-gradient-to-r from-[#EE2524] via-[#BE2026] to-black bg-clip-text text-transparent'>matter</span>
        </h2>

        {/* Innocent-style collage grid with photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`relative ${
                index === 1 ? 'md:col-span-5' : 'md:col-span-7'
              }`}>
              <div
                className="card-interactive rounded-3xl overflow-hidden cursor-pointer relative shadow-lg"
                onClick={() => {
                  setSelectedCase(study);
                  setCurrentSlide(0);
                }}
                style={{ 
                  minHeight: index === 1 ? '500px' : '420px',
                  backgroundColor: study.bgColor,
                  border: `4px solid ${study.color}`,
                }}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  {/* <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 0%, ${study.bgColor} 100%)`,
                    }}
                  /> */}
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Badge */}
                  {/* <div
                    className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4"
                    style={{ backgroundColor: study.color, color: '#FFFFFF' }}
                  >
                    CASE STUDY
                  </div> */}

                  <h3
                    className="text-xl font-bold mb-4 leading-tight"
                    style={{ color: study.color, fontFamily: 'Space Grotesk' }}
                  >
                    {study.title}
                  </h3>

                  {/* CTA */}
                  <div className="mt-2 flex items-center gap-2" style={{ color: study.color }}>
                    <span className="font-semibold">Read the full story</span>
                    <span className="text-2xl">→</span>
                  </div>

                  {/* Decorative circle */}
                  <div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                    style={{ backgroundColor: study.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal with Photos */}
      {selectedCase && (
        <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-3xl">
            <div className="relative" style={{ backgroundColor: selectedCase.color }}>
              {/* Close button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full hover:scale-110 transition-transform"
              >
                <X size={24} style={{ color: selectedCase.color }} />
              </button>

              {/* Slides with images */}
              <div className="relative">
                {/* Image/Video */}
                <div className="relative h-80 lg:h-[500px] overflow-hidden">
                  {selectedCase.slides[currentSlide].hasVideo ? (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <iframe
                        src={selectedCase.slides[currentSlide].videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Case Study Video"
                      />
                    </div>
                  ) : (
                    <img
                      src={selectedCase.slides[currentSlide].image}
                      alt={selectedCase.slides[currentSlide].title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-0 px-12 text-white">
                  {/* Slide indicators */}
                  <div className="flex gap-2 mt-0">
                    {selectedCase.slides.map((_, idx) => (
                      <div
                        key={idx}
                        className="h-2 rounded-full transition-all cursor-pointer"
                        style={{
                          width: idx === currentSlide ? '32px' : '8px',
                          backgroundColor: idx === currentSlide ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
                        }}
                        onClick={() => setCurrentSlide(idx)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center transform -translate-y-1/2 z-10">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="p-2.5 bg-white rounded-full hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                >
                  <ChevronLeft size={20} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === selectedCase.slides.length - 1}
                  className="p-2.5 bg-white rounded-full hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                >
                  <ChevronRight size={20} style={{ color: selectedCase.color }} />
                </button>
              </div>

              {/* Share buttons */}
              <div className="absolute top-4 left-4 flex gap-2 z-20">
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2.5 bg-white rounded-full hover:scale-110 transition-transform shadow-lg"
                >
                  <Linkedin size={16} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2.5 bg-white rounded-full hover:scale-110 transition-transform shadow-lg"
                >
                  <Twitter size={16} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="p-2.5 bg-white rounded-full hover:scale-110 transition-transform shadow-lg"
                >
                  <Mail size={16} style={{ color: selectedCase.color }} />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-2.5 bg-white rounded-full hover:scale-110 transition-transform shadow-lg"
                >
                  <LinkIcon size={16} style={{ color: selectedCase.color }} />
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
