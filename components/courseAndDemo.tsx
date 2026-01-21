import { ArrowRight, Star, Clock, Users, Award, Sparkles, Play, CheckCircle, BookOpen } from 'lucide-react';

// Mock course data - replace with your actual data
const courses = [
  {
    slug: "fashion-designing",
    title: "Fashion Designing",
    description: "Master design, styling, and garment construction",
    duration: "2 years",
    students: "500+",
    rating: 4.9,
    icon: "👗",
    color: "from-pink-500 to-rose-500",
    features: ["KGTE Recognized", "100% Placement"]
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Full-stack development with modern frameworks",
    duration: "6 months",
    students: "450+",
    rating: 4.8,
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    features: ["Live Projects", "Job Ready"]
  },
  {
    slug: "data-science",
    title: "Data Science & AI",
    description: "Machine learning and data analytics",
    duration: "8 months",
    students: "350+",
    rating: 4.9,
    icon: "🤖",
    color: "from-purple-500 to-indigo-500",
    features: ["Industry Tools", "Expert Faculty"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, social media & content strategy",
    duration: "4 months",
    students: "600+",
    rating: 4.7,
    icon: "📱",
    color: "from-orange-500 to-red-500",
    features: ["Certification", "Hands-on"]
  },
];

export default function CoursesAndDemo() {
  return (
    <div className="bg-white">
      {/* COURSES SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">Popular Programs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premium Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from industry-leading programs designed to make you job-ready
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Card Header */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-125 transition-transform duration-500">
                      {course.icon}
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button - Hidden, appears on hover */}
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-105 group">
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

     {/* FREE DEMO & ENQUIRY SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Get Started Today</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Begin Your <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Learning Journey?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a free demo class or send us your enquiry
            </p>
          </div>

          {/* Two Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* FREE DEMO CARD */}
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Play className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Free Demo Class</h3>
                    <p className="text-green-100 text-sm">Experience our teaching</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>No cost, no commitment required</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Interactive 60-minute session</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Meet our expert instructors</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Ask questions & get guidance</span>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <select className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option className="text-gray-900">Select Course</option>
                    <option className="text-gray-900">Fashion Designing</option>
                    <option className="text-gray-900">Web Development</option>
                    <option className="text-gray-900">Data Science & AI</option>
                    <option className="text-gray-900">Digital Marketing</option>
                  </select>
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl group">
                    <span>Book Free Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-white/90 text-sm">
                  <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  <span>5000+ students trained successfully</span>
                </div>
              </div>
            </div>

            {/* ENQUIRY CARD */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Send Enquiry</h3>
                    <p className="text-gray-600 text-sm">We'll get back to you soon</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Quick response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Detailed course information</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Personalized guidance</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>Career counseling available</span>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Course Interest</option>
                    <option>Fashion Designing</option>
                    <option>Web Development</option>
                    <option>Data Science & AI</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    placeholder="Your Message (Optional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all group">
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 text-center text-sm text-gray-600">
                  Or call us: <span className="font-bold text-blue-600">+91 1234567890</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Trust Indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  +5K
                </div>
              </div>
              <span className="font-medium">Trusted by 5000+ students across India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}