import React from 'react';
import { GraduationCap, Scissors, Sparkles, Gem, Palette } from 'lucide-react';

export default function ShortTermCoursesPage ()  {
  const courses = [
    {
      id: 1,
      title: "Aari Works",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Aari work is a short-term embroidery course in which the cloth is stretched firmly over a wooden frame. A pen-like needle, similar to a crochet needle, is used to do intricate Aari work. Aari art is well-known for its beautiful and delicate thread work.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Stitching and Cutting",
      icon: <Scissors className="w-8 h-8" />,
      description: "This is a highly useful short-term course for anyone who wants to learn different stitching and cutting patterns for making clothing. All of the required and crucial clothes for daily use are explained here. Following this course will let a person to grasp the many components of stitching, cutting, and tailoring in a shorter amount of time.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Hand Embroidery",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "A short-term course for beginners hoping to master the fundamentals of embroidery, or whether you're experienced wishing to extend your talents with a hoop, needle, and thread. You may create stunning designs such as embroidered quotations, pet photos, monograms, and florals. Sessions are divided into short lessons and hands-on projects.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Jewellery Making",
      icon: <Gem className="w-8 h-8" />,
      description: "This short-term course is intended to refine both you and your creating talents. The training is suggested for anybody who wants to improve their abilities or who wants to work in the jewellery industry. This sector is rapidly expanding in both India and the worldwide market.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Art and Crafts Work",
      icon: <Palette className="w-8 h-8" />,
      description: "Our short-term art and craft work courses include glass painting, woodworking, pot painting, flower creation, and many more. These are incredibly useful courses that may be used to generate some income.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Short-term Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oxford Community College
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Short-term courses at Oxford Community College can be attended part-time or on a regular basis. 
              It can also be taken as a supplement to your normal academic course. Oxford Community College 
              offers a variety of short-term courses that will help students in the long run.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Short-term courses might therefore help students develop numerous profiles in the employment sector. 
              The training will emphasise practical knowledge over academic understanding. As the name implies, 
              the main advantage of a short-term course is that it can be finished in a short period of time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              People with multi-skills are in high demand in today's workplace. A job seeker can improve their 
              abilities and skills by taking a short-term course. Oxford Community College offers a selection of 
              short-term courses that will allow you to get experience in your chosen industry.
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Available Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${course.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      {course.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">Duration</span>
                    <button className={`bg-gradient-to-r ${course.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300`}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join Oxford Community College and enhance your skills with our expertly designed short-term courses.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Oxford Community College</h3>
            <p className="text-gray-400">Empowering skills, Building futures</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

