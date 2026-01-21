import { Award, Users, BookOpen, Lightbulb, Target, Heart, CheckCircle, Sparkles, ArrowRight, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const features = [
  { icon: Users, title: "Student Focused", desc: "Personalized attention for every learner" },
  { icon: Award, title: "Experienced Staff", desc: "Industry experts with years of experience" },
  { icon: Target, title: "Practical Oriented", desc: "Hands-on learning with real projects" },
  { icon: Lightbulb, title: "Interactive Sessions", desc: "Engaging and collaborative classes" },
  { icon: BookOpen, title: "Live Projects", desc: "Real-world assignments and work" },
  { icon: Heart, title: "Honesty & Integrity", desc: "Ethical and transparent education" },
];

const highlights = [
  "Expert garment construction training at no extra charge",
  "Studio tours and fashion shows for talent enhancement",
  "24+ years of industry excellence",
  "PSC approved courses with placement support",
  "Government recognized certifications"
];

const programCards = [
  {
    icon: GraduationCap,
    title: "Kerala Government Certificate",
    description: "Govt. Approved Courses ",
    gradient: "from-pink-500 to-rose-500",
    features: ["Fine Arts & Animation"]
  },
  {
    icon: Briefcase,
    title: "Centre for Development of Imaging Technology",
    description: "Central Govt. Approved courses",
    gradient: "from-blue-500 to-cyan-500",
    features: ["PGDCA","DCA","DATA ENTRY"]
  },
  {
    icon: TrendingUp,
    title: "Kerala Government Technical Examination",
    description: "PSC/UPSC Approved Degree & Master Degree",
    gradient: "from-purple-500 to-indigo-500",
    features: ["Bachelor of Arts","Bachelor of Science","Bachelor of Social Work","Master of Arts","Master of Science","Master of Social Work","Master of Business Administration"]

  }
];

const AboutHome=()=> {
  return (
    <div className="bg-white">
      {/* WELCOME SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Est. 24+ Years of Excellence</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Oxford College</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Oxford College is a one-stop solution for all kinds of career-oriented skills. The institute provides a wide range of professional courses that help students develop practical and functional skills in engineering, technology, fashion, and design—helping them easily find employment after graduation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Oxford College is a focused and driven institution with a vision to continually develop skills and provide the best education for students. We urge students to investigate the past and challenge the present through our open and inclusive teaching philosophy.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BEST INSTITUTE SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🏆 Award Winning Institute
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Best Fashion Designing Institute in Kerala
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Oxford Community College is the premier fashion designing institute in Malappuram, offering courses in fashion design, fine arts, animation, and garment technology. We are here to design your dream career.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                For over 24 years, we have been developing creative potential. We combine design, science, engineering, and technology to reinvent fashion. Our student entrepreneurship programs and industry partnerships create a dynamic network to help ambitious alumni launch and grow their careers.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Placement Support</div>
                </div>
              </div>

              <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Oxford?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">PSC Approved Courses</h4>
                      <p className="text-sm text-gray-600">Government recognized certifications</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Faculty</h4>
                      <p className="text-sm text-gray-600">Industry professionals as coaches</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl">
                    <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Practical Training</h4>
                      <p className="text-sm text-gray-600">Hands-on learning with live projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-xl">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Affordable Fees</h4>
                      <p className="text-sm text-gray-600">Low, moderate, and reasonable fee structure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold mb-3">Our Programs</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              OXFORD Provides Various State <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Government Approved Job-Related Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of industry-focused programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <button
                  key={idx}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-left"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white group-hover:text-blue-600 transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 transition-colors">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {card.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 group-hover:text-white transition-colors" />
                          <span className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold transition-colors">
                      <span>Explore Program</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutHome;