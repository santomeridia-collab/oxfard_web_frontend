import { Award, Palette, Monitor, Clock, CheckCircle, Sparkles, ArrowRight, BookOpen, GraduationCap, Briefcase, Star } from 'lucide-react';

const specializations = [
  { name: "Visual Art Fundamentals", icon: "🎨" },
  { name: "Indian Art History", icon: "📚" },
  { name: "Nature & Object Study", icon: "🌿" },
  { name: "Form Life Drawing", icon: "✏️" },
  { name: "Creative Drawing", icon: "🖌️" },
  { name: "Computer Graphics", icon: "💻" },
  { name: "Corel Draw", icon: "🎯" },
  { name: "Adobe Photoshop", icon: "🖼️" },
  { name: "Adobe Illustrator", icon: "✨" },
  { name: "Page Maker", icon: "📄" },
  { name: "Visual Communications", icon: "📱" },
  { name: "2D Painting", icon: "🎭" },
  { name: "Computer Animation", icon: "🎬" }
];

const highlights = [
  { icon: Award, title: "KGCE Certified", desc: "Recognized by Government of Kerala" },
  { icon: GraduationCap, title: "Teaching Qualification", desc: "Eligible for Drawing Teacher position" },
  { icon: Monitor, title: "Digital Mastery", desc: "Learn industry-standard software" },
  { icon: Briefcase, title: "Career Ready", desc: "Government school placement eligibility" }
];

const courseFeatures = [
  "2-Year comprehensive program",
  "Traditional & digital art techniques",
  "Government recognized certification",
  "Qualified for teaching positions",
  "Industry-standard software training",
  "Portfolio development support"
];

export default function FineArtsAnimationPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMTAgNjAgTSAwIDEwIEwgNjAgMTAgTSAyMCAwIEwgMjAgNjAgTSAwIDIwIEwgNjAgMjAgTSAzMCAwIEwgMzAgNjAgTSAwIDMwIEwgNjAgMzAgTSA0MCAwIEwgNDAgNjAgTSAwIDQwIEwgNjAgNDAgTSA1MCAwIEwgNTAgNjAgTSAwIDUwIEwgNjAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-semibold">KGCE Certified Program</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best Fine Arts &<br />
                <span className="text-yellow-300">Animation Course</span><br />
                in Kerala
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Master traditional and digital art techniques with our comprehensive 2-year program. Become qualified for Drawing Teacher positions in Government Schools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="group flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30">
                  <BookOpen className="w-5 h-5" />
                  Course Details
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">2 Years</div>
                  <div className="text-white/70 text-sm">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">13+</div>
                  <div className="text-white/70 text-sm">Specializations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">KGCE</div>
                  <div className="text-white/70 text-sm">Certified</div>
                </div>
              </div>
            </div>

            {/* Right Content - Quick Info Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Course Highlights</h3>
                  <p className="text-gray-600">What you'll achieve</p>
                </div>
              </div>

              <div className="space-y-4">
                {courseFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-600">Course Duration</span>
                  <div className="flex items-center gap-2 text-purple-600 font-bold">
                    <Clock className="w-5 h-5" />
                    <span>2 Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-purple-600 font-semibold mb-3">Why Choose This Course</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Art Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fine arts and animation courses are KGCE certified, qualifying graduates for Drawing Teacher positions in Government Schools while mastering today's digital technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Comprehensive Curriculum</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Areas of <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Specialization</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your primary focus from 13+ specialized areas covering traditional art to cutting-edge digital techniques
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specializations.map((spec, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-purple-600 transition-colors">
                  {spec.name}
                </h4>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-start gap-4 text-left max-w-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Standard Software Training</h3>
                  <p className="text-gray-600">
                    Master professional tools including Adobe Photoshop, Illustrator, Corel Draw, and advanced computer animation software used by industry leaders worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Admissions Open</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Start Your Creative Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join Kerala's premier fine arts and animation program. Limited seats available for the upcoming batch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-2 bg-white text-purple-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30">
              Download Brochure
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>KGCE Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Government Recognized</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>2-Year Program</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}