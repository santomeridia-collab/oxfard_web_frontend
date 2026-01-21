
"use client";

type Moment = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  attendees: string;
};

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users } from 'lucide-react';

export default function MomentsGallery() {
 const [selectedImage, setSelectedImage] = useState<Moment | null>(null);
const [currentIndex, setCurrentIndex] = useState<number>(0);


  // Sample moments data - replace with actual images
  const moments = [
    {
      id: 1,
      title: "Annual Day Celebration 2024",
      category: "Events",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      attendees: "500+"
    },
    {
      id: 2,
      title: "Science Exhibition",
      category: "Academic",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      attendees: "300+"
    },
    {
      id: 3,
      title: "Sports Day Championship",
      category: "Sports",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop",
      attendees: "450+"
    },
    {
      id: 4,
      title: "Cultural Fest 2024",
      category: "Events",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      attendees: "600+"
    },
    {
      id: 5,
      title: "Graduation Ceremony",
      category: "Academic",
      date: "August 2024",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      attendees: "400+"
    },
    {
      id: 6,
      title: "Art & Craft Workshop",
      category: "Workshop",
      date: "July 2024",
      image: "https://images.unsplash.com/photo-1544717684-7d8fa04cbb22?w=800&h=600&fit=crop",
      attendees: "150+"
    },
    {
      id: 7,
      title: "Tech Symposium 2024",
      category: "Academic",
      date: "June 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      attendees: "350+"
    },
    {
      id: 8,
      title: "Community Outreach Program",
      category: "Social",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      attendees: "200+"
    },
    {
      id: 9,
      title: "Music Concert",
      category: "Events",
      date: "April 2024",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      attendees: "550+"
    }
  ];

  const categories = ["All", "Events", "Academic", "Sports", "Workshop", "Social"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMoments = activeCategory === "All" 
    ? moments 
    : moments.filter(m => m.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(filteredMoments[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
  const newIndex =
    direction === 'next'
      ? (currentIndex + 1) % filteredMoments.length
      : (currentIndex - 1 + filteredMoments.length) % filteredMoments.length;

  setCurrentIndex(newIndex);
  setSelectedImage(filteredMoments[newIndex]);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Our Moments
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Capturing the vibrant spirit and memorable experiences at Oxford Community College
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-indigo-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMoments.map((moment, index) => (
            <div
              key={moment.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                    {moment.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{moment.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-white/90">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{moment.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{moment.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image and Info */}
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl mb-6"
            />
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
                    {selectedImage.category}
                  </span>
                  <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{selectedImage.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{selectedImage.attendees} Attendees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}