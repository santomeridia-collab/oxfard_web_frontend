
"use client";
import { useState } from 'react';
import { User, Phone, Mail, BookOpen, Send, Sparkles } from 'lucide-react';

const courses = [
  "Fashion Designing",
  "Web Development",
  "Data Science & AI",
  "Digital Marketing",
  "UI/UX Design",
  "Garment Technology",
  "Cybersecurity",
  "Cloud Computing"
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });

  const [focused, setFocused] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Form submitted:', formData);
  setIsSubmitting(false);

  // Reset form
  setFormData({ name: '', phone: '', email: '', course: '' });
};


  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/30">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-semibold">Start Your Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get Free Consultation</h2>
            <p className="text-white/90 text-lg">Fill in your details and we'll get back to you within 24 hours</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 md:p-10">
          <div className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  focused === 'name' ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  placeholder="Enter your full name"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 outline-none transition-all ${
                    focused === 'name'
                      ? 'border-blue-500 bg-blue-50/50'
                      : 'border-gray-200 bg-gray-50'
                  } hover:border-gray-300 focus:bg-white`}
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  focused === 'phone' ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused('')}
                  placeholder="+91 98765 43210"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 outline-none transition-all ${
                    focused === 'phone'
                      ? 'border-blue-500 bg-blue-50/50'
                      : 'border-gray-200 bg-gray-50'
                  } hover:border-gray-300 focus:bg-white`}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  focused === 'email' ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  placeholder="you@example.com"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 outline-none transition-all ${
                    focused === 'email'
                      ? 'border-blue-500 bg-blue-50/50'
                      : 'border-gray-200 bg-gray-50'
                  } hover:border-gray-300 focus:bg-white`}
                />
              </div>
            </div>

            {/* Course Select */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Interested In
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors pointer-events-none ${
                  focused === 'course' ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  onFocus={() => setFocused('course')}
                  onBlur={() => setFocused('')}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 outline-none transition-all appearance-none cursor-pointer ${
                    focused === 'course'
                      ? 'border-blue-500 bg-blue-50/50'
                      : 'border-gray-200 bg-gray-50'
                  } hover:border-gray-300 focus:bg-white`}
                >
                  <option value="">Select a course</option>
                  {courses.map((course, idx) => (
                    <option key={idx} value={course}>{course}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`group w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Get Free Consultation</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          By submitting this form, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</a>
          {' '}and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Terms of Service</a>
        </p>
      </div>
    </div>
  );
}