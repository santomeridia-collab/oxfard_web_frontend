import { Award, Users, GraduationCap, MapPin, BookOpen, Heart, Sparkles, TrendingUp, Building2, CheckCircle2, Globe } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: "Graduates", value: "5000+", color: "from-blue-500 to-cyan-500" },
  { icon: Users, label: "Placement Rate", value: "80%", color: "from-purple-500 to-pink-500" },
  { icon: Globe, label: "Online Students", value: "6000+", color: "from-orange-500 to-red-500" },
  { icon: Building2, label: "Campuses", value: "2", color: "from-green-500 to-emerald-500" }
];

const accreditations = [
  { name: "APJ Abdul Kalam Technological University", short: "APJAKTU" },
  { name: "Kerala Govt. Technical Education (KGTE)", short: "KGTE" },
  { name: "Kerala Govt. Council of Education (KGCE)", short: "KGCE" },
  { name: "Centre for Development of IT (C-DIT)", short: "C-DIT" },
  { name: "Jain University", short: "Jain Univ" }
];

const offerings = [
  {
    title: "Fashion Designing",
    desc: "Only KGTE-accredited institution in Eranad taluk",
    icon: "👗",
    highlight: "100% Placement"
  },
  {
    title: "Fine Arts & Animation",
    desc: "KGCE-accredited creative courses",
    icon: "🎨",
    highlight: "Industry Ready"
  },
  {
    title: "Paramedical Courses",
    desc: "DMLT, MLT, Pharmacy Assistant programs",
    icon: "⚕️",
    highlight: "200-300 graduates/year"
  },
  {
    title: "Teacher Training",
    desc: "Pre-primary courses by Jain University",
    icon: "👩‍🏫",
    highlight: "Certified"
  }
];

const team = [
  { name: "Sujisha", qualification: "FDGT.TET" },
  { name: "Rafeeda", qualification: "FDGT.TET" },
  { name: "Shadiya", qualification: "FDGT.TET" },
  { name: "Jamsheena", qualification: "FDGT.TET" },
  { name: "Rinala", qualification: "FDGT.TET" },
  { name: "Sunju", qualification: "FDGT.TET" }
];

const campuses = [
  { name: "Wandoor Campus", location: "Wandoor, Malappuram", year: "Est. 1998" },
  { name: "Kalikavu Campus", location: "Kalikavu, Malappuram", year: "Expansion" }
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Since 1998</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Oxford Community College
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering career-minded students since 1998 with quality education, 
              expert faculty, and a commitment to excellence in technical and vocational training.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Over 25 Years of <span className="text-purple-600">Educational Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998 in Wandoor, Malappuram, Oxford Community College was established 
                  with a singular vision: to provide career-minded and ambitious students with the 
                  supervision and guidance they need to succeed.
                </p>
                <p>
                  From our inception, quality has been our obsession and our defining feature. We've 
                  consistently gone above and beyond to ensure students have access to competent, 
                  K-TET certified instructors and an ideal learning environment.
                </p>
                <p>
                  Our clean, modern campuses feature innovative teaching techniques and set the 
                  standard for educational quality in the region. Today, we operate two thriving 
                  campuses and continue to expand our impact.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">K-TET Certified</div>
                    <div className="text-sm text-gray-600">Expert faculty</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Modern Campus</div>
                    <div className="text-sm text-gray-600">Best facilities</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl rotate-3"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Locations</h3>
                <div className="space-y-4">
                  {campuses.map((campus, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold text-lg">{campus.name}</div>
                          <div className="text-white/80 text-sm">{campus.location}</div>
                          <div className="text-white/60 text-xs mt-1">{campus.year}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Recognized & Accredited</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trusted by Leading Educational Bodies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {accreditations.map((acc, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <span className="font-semibold text-gray-900">{acc.short}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS OFFERED */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-semibold">What We Offer</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Diverse Programs for <span className="text-orange-600">Every Ambition</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((program, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{program.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {program.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 bg-orange-100 text-orange-600 rounded-full whitespace-nowrap">
                        {program.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600">{program.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL IMPACT */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Social Commitment</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Empowering Women Through <span className="text-pink-600">Free Education</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are dedicated to social service and community empowerment. Our two-year free 
            fashion designing course for women helps them achieve financial stability and 
            support their livelihoods. Social responsibility is core to our institutional philosophy.
          </p>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg">
            <TrendingUp className="w-6 h-6 text-pink-600" />
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">Free Course</div>
              <div className="text-sm text-gray-600">For women empowerment</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Expert Faculty</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Certified Team</span>
            </h2>
            <p className="text-lg text-gray-600">K-TET certified professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl mb-3 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap">
                    Certified
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs text-gray-500">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONLINE LEARNING */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">
            Oxford School of Fashion Design
          </h2>
          <p className="text-xl text-blue-100 mb-6 leading-relaxed">
            Learn from anywhere in the world! Our online fashion design courses have reached 
            6000+ students globally through our dedicated learning app with live sessions 
            and recorded lessons.
          </p>
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
            <div className="text-left">
              <div className="text-3xl font-bold">6000+</div>
              <div className="text-sm text-blue-200">Global Students</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-left">
              <div className="text-3xl font-bold">Live</div>
              <div className="text-sm text-blue-200">Interactive Classes</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}