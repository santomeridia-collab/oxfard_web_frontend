"use client";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Sparkles,
  GraduationCap,
  Award,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* COURSES */
  const courses = [
    { name: "Fashion Designing", slug: "fashionDesign" ,},
    { name: "Fine Arts & Animation", slug: "fine-arts-animation" },
    { name: "Computer Courses", slug: "computer-courses" },
    { name: "Short Term Courses", slug: "short-term-course" },
  ];

  /* NAV LINKS (COURSES REMOVED – IT HAS MEGA MENU) */
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Verification", href: "/verification" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between text-sm">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@skillcraft.com</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-300" />
              <span>Top Rated Institute</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-300" />
              <span>5000+ Students</span>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">OWEOC</div>
                <div className="text-[10px] text-gray-500 uppercase">
                  Women Empowerment Program
                </div>
              </div>
            </a>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-1">
              {/* HOME + ABOUT */}
              {navLinks.slice(0, 2).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 font-medium text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* COURSES */}
              <li
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setOpen(true)}
              >
                <button className="flex items-center gap-1 px-4 py-2 font-medium text-gray-700 hover:text-blue-600">
                  Courses
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[600px] bg-white rounded-3xl shadow-xl border text-black">
                    <div className="p-8 grid grid-cols-2 gap-4">
                      {courses.map((course) => (
  <Link
    key={course.slug}
    href={`/courses/${course.slug}`}
    className="p-4 rounded-xl hover:bg-blue-50 font-medium"
    onClick={() => setOpen(false)}
  >
    {course.name}
  </Link>
))}

                    </div>
                  </div>
                )}
              </li>

              {/* REST MENU */}
              {navLinks.slice(2).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 font-medium text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2">
              {/* SEARCH */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-blue-50 rounded-xl"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              {/* ENROLL */}
              <a
                href="/contact"
                className="hidden sm:flex bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold"
              >
                Enroll Now →
              </a>

              {/* MOBILE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t">
                {courses.map((course) => (
  <Link
    key={course.slug}
    href={`/courses/${course.slug}`}
    className="block px-4 py-3 hover:bg-blue-50"
    onClick={() => setMobileMenuOpen(false)}
  >
    {course.name}
  </Link>
))}

              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
