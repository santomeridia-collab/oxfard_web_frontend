"use client";
type Course = {
  id: number;
  name: string;
  duration: string;
  level: string;
  color: string;
  icon: React.ReactNode;
  features: string[];
};


import React, { useState } from 'react';
import { Sparkles, Clock, Award, TrendingUp, Scissors, Palette, Users, CheckCircle } from 'lucide-react';

export default function FashionDesignCourse() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses = [
    {
      id: 1,
      name: "Poly Diploma in Fashion Designing",
      duration: "2 Years",
      level: "Advanced",
      color: "from-purple-500 to-pink-500",
      icon: <Award className="w-8 h-8" />,
      features: [
        "KGTE Recognised Certification",
        "Industry Expert Mentorship",
        "Advanced Design Techniques",
        "Portfolio Development",
        "Industry Internship Opportunities"
      ]
    },
    {
      id: 2,
      name: "Diploma in Fashion Designing",
      duration: "1 Year",
      level: "Intermediate",
      color: "from-indigo-500 to-purple-500",
      icon: <Palette className="w-8 h-8" />,
      features: [
        "Comprehensive Curriculum",
        "Hands-on Training",
        "Pattern Making & Draping",
        "Fashion Illustration",
        "Garment Construction"
      ]
    },
    {
      id: 3,
      name: "Certificate in Fashion Designing",
      duration: "6 Months",
      level: "Foundation",
      color: "from-blue-500 to-indigo-500",
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        "Fashion Basics",
        "Color Theory & Styling",
        "Fabric Knowledge",
        "Design Fundamentals",
        "Quick Career Entry"
      ]
    },
    {
      id: 4,
      name: "Stitching & Cutting",
      duration: "3 Months",
      level: "Skill-Based",
      color: "from-teal-500 to-blue-500",
      icon: <Scissors className="w-8 h-8" />,
      features: [
        "Practical Stitching Techniques",
        "Precision Cutting Methods",
        "Measurement & Fitting",
        "Quick Skill Development",
        "Self-Employment Ready"
      ]
    }
  ];

  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "KGTE Recognised",
      description: "Official certification by Kerala Government"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Strategic industry preparation"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Modern Curriculum",
      description: "Cutting-edge design techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 py-24 px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Best Fashion Designing Course in Kerala</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Creative Vision
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Master the art of fashion design with Kerala's premier KGTE-recognised course. 
            Learn from industry experts and transform your passion into a thriving career.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 mb-16">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Oxford Fashion Design?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            Our two-year advanced Fashion Design course, recognised by the KGTE, equips students to take on leading roles in design trends. 
            We prepare you to adapt to changes in the garment industry and make strategic decisions that lead to success. 
            Explore your creativity in a secure atmosphere with guidance from industry professionals and a well-curated curriculum.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white mb-4 shadow-lg">
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Course Programs
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect program to launch your fashion career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
             onClick={() => {
  if (selectedCourse?.id === course.id) {
    setSelectedCourse(null);
  } else {
    setSelectedCourse(course);
  }
}}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${course.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                      {course.icon}
                    </div>
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                  
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-medium">Duration: {course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="p-8">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  Course Highlights
                </h4>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full mt-6 bg-gradient-to-r ${course.color} text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Enroll Now
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-4 border-transparent rounded-3xl group-hover:border-purple-300 transition-all duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Fashion Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of successful designers who started their career at Oxford Community College
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Apply Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}