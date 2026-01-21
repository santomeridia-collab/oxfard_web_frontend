import { Monitor, Code, GraduationCap, TrendingUp, Clock, Award, CheckCircle, Sparkles, ArrowRight, BookOpen, Users, Briefcase, Star, Zap } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "PGDCA",
    subtitle: "Post Graduate Diploma in Computer Applications",
    duration: "1 Year",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
    description: "Professional Computer Applications program teaching computer science and applications. Master operating systems, database management, and web programming.",
    highlights: [
      "Operating Systems mastery",
      "Database Management Systems",
      "Web Programming & Development",
      "Software Development & Applications",
      "Professional certification"
    ],
    badge: "Professional Program"
  },
  {
    id: 2,
    title: "DCA",
    subtitle: "Diploma in Computer Applications",
    duration: "6 Months",
    icon: "🖥️",
    gradient: "from-purple-500 to-pink-500",
    description: "Comprehensive course with balanced academic curriculum and industrial training. Gain scientific, practical, and technical understanding of computer tools used in daily life.",
    highlights: [
      "Modern academic curriculum",
      "Industry-focused training",
      "Practical computer skills",
      "Essential software tools",
      "Quick 6-month completion"
    ],
    badge: "Fast Track"
  },
  {
    id: 3,
    title: "Computer Teacher Training",
    subtitle: "Teaching Certification Program",
    duration: "1 Year",
    icon: "👨‍🏫",
    gradient: "from-green-500 to-emerald-500",
    description: "One-year certification to familiarize teaching professionals with educational theory and practice. Includes learning theories, teaching methods, and classroom management.",
    highlights: [
      "Educational theory & practice",
      "Learning theories & methods",
      "Assessment techniques",
      "Classroom management",
      "21st century teaching skills"
    ],
    badge: "Teaching Certificate"
  },
  {
    id: 4,
    title: "Financial Management",
    subtitle: "Diploma in Financial Management",
    duration: "3 Months",
    icon: "💼",
    gradient: "from-orange-500 to-red-500",
    description: "Fundamental management education covering functional topics with quantitative inputs. Provides integrated view of managerial activities and prepares for managerial roles.",
    highlights: [
      "Financial management basics",
      "Managerial activities overview",
      "Quantitative & theoretical inputs",
      "Quick 3-month program",
      "Career advancement ready"
    ],
    badge: "Short Course"
  }
];

const generalFeatures = [
  { icon: Award, title: "Certified Programs", desc: "Government recognized certifications" },
  { icon: Users, title: "Expert Faculty", desc: "Learn from industry professionals" },
  { icon: Briefcase, title: "Job Ready", desc: "Industry-relevant curriculum" },
  { icon: Zap, title: "Practical Training", desc: "Hands-on learning approach" }
];

export default function ComputerCoursesPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAgTSAyMCAwIEwgMjAgNjAgTSAwIDIwIEwgNjAgMjAgTSAzMCAwIEwgMzAgNjAgTSAwIDMwIEwgNjAgMzAgTSA0MCAwIEwgNDAgNjAgTSAwIDQwIEwgNjAgNDAgTSA1MCAwIEwgNTAgNjAgTSAwIDUwIEwgNjAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-white text-sm font-semibold">Professional Certification Programs</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Best Computer <span className="text-yellow-300">Courses</span><br />
            in Kerala
          </h1>

          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Master today's digital technologies with our comprehensive computer courses. From applications to teaching, we offer programs designed for your career success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl">
              Explore Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30">
              <BookOpen className="w-5 h-5" />
              Download Brochure
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">4</div>
              <div className="text-white/70 text-sm">Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">3-12</div>
              <div className="text-white/70 text-sm">Months Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-white/70 text-sm">Job Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">Certified</div>
              <div className="text-white/70 text-sm">Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold mb-3">Oxford Computer Courses</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Perfect Program</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional certifications designed for your career advancement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Course Header */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-between p-8">
                    <div className="text-7xl group-hover:scale-125 transition-transform duration-500">
                      {course.icon}
                    </div>
                    
                    <div className="text-right">
                      <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-700" />
                          <span className="text-sm font-bold text-gray-900">{course.duration}</span>
                        </div>
                      </div>
                      <div className="inline-block bg-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-xs font-semibold text-white">{course.badge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                {/* Course Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium mb-4">
                    {course.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group-hover:from-indigo-600 group-hover:to-purple-600">
                    <span>Enroll Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OXFORD PROMISE SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Content */}
              <div className="p-10 lg:p-12">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">The Oxford Difference</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Oxford Community College?
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our courses are designed with a balanced content of the most recent academic curriculum mixed with relevant industrial training geared for optimal growth.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Modern Curriculum</h4>
                      <p className="text-sm text-gray-600">Latest academic content with industry relevance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Guidance</h4>
                      <p className="text-sm text-gray-600">Learn from experienced professionals</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Career Support</h4>
                      <p className="text-sm text-gray-600">100% job assistance and placement support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-10 lg:p-12 flex items-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                
                <div className="relative text-white">
                  <h4 className="text-2xl font-bold mb-6">Ready to Start Your Journey?</h4>
                  <p className="text-white/90 mb-8 text-lg">
                    Join thousands of successful students who have transformed their careers with our computer courses.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300" />
                      <span className="text-lg">Flexible learning schedules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300" />
                      <span className="text-lg">Affordable fee structure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-yellow-300" />
                      <span className="text-lg">Government recognized</span>
                    </div>
                  </div>

                  <button className="w-full bg-white text-blue-600 py-4 px-8 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}