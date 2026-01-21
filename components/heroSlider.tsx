"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Award, Users, ArrowRight, Play } from 'lucide-react';

const slides = [
  {
    src: "/banner1.jpg",
    title: "Best Education Institute",
    subtitle: "Transform Your Future",
    description: "Join Kerala's leading training institute with 5000+ successful graduates",
    badge: "🏆 Top Rated",
    cta: "Explore Courses",
    gradient: "from-blue-600/90 to-purple-600/90"
  },
  {
    src: "/banner2.jpg",
    title: "Industry Focused Courses",
    subtitle: "Real-World Training",
    description: "Learn cutting-edge technologies with hands-on projects and expert mentorship",
    badge: "💼 Career Ready",
    cta: "View Programs",
    gradient: "from-indigo-600/90 to-pink-600/90"
  },
  {
    src: "/banner3.jpg",
    title: "Expert Faculty",
    subtitle: "Learn From The Best",
    description: "Industry professionals with 10+ years experience guide you every step",
    badge: "👨‍🏫 Expert Mentors",
    cta: "Meet Our Team",
    gradient: "from-purple-600/90 to-blue-600/90"
  },
  {
    src: "/banner4.jpg",
    title: "Free Demo Class",
    subtitle: "Experience Our Teaching",
    description: "Book a free trial and discover our interactive learning methodology",
    badge: "🎓 No Cost Trial",
    cta: "Book Now",
    gradient: "from-cyan-600/90 to-indigo-600/90"
  },
];

export default function HeroSlider () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, 5000); // 2 seconds

  return () => clearInterval(interval);
}, []); // <- empty dependency array


  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out"
              style={{
                backgroundImage: `url(${slide.src})`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAgTSAyMCAwIEwgMjAgNjAgTSAwIDIwIEwgNjAgMjAgTSAzMCAwIEwgMzAgNjAgTSAwIDMwIEwgNjAgMzAgTSA0MCAwIEwgNDAgNjAgTSAwIDQwIEwgNjAgNDAgTSA1MCAwIEwgNTAgNjAgTSAwIDUwIEwgNjAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30 transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm font-semibold">{slide.badge}</span>
              </div>

              {/* Subtitle */}
              <div
                className={`text-yellow-300 font-semibold text-lg md:text-xl mb-4 transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
              >
                {slide.subtitle}
              </div>

              {/* Title */}
              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className={`text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: index === currentSlide ? '600ms' : '0ms' }}
              >
                {slide.description}
              </p>

              {/* CTAs */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: index === currentSlide ? '700ms' : '0ms' }}
              >
                <button className="group flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
                  {slide.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30">
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: index === currentSlide ? '800ms' : '0ms' }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">5000+</div>
                  <div className="text-white/70 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">95%</div>
                  <div className="text-white/70 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">25+</div>
                  <div className="text-white/70 text-sm">Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
        <div className="flex items-center gap-3 text-white/70 text-sm">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce"></div>
          </div>
          <span className="font-medium">Scroll to explore</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
