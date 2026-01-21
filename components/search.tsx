"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { courses } from "@/lib/courses";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-3 py-1 rounded w-48"
      />

      {query && (
        <ul className="absolute bg-white shadow w-full mt-1 z-50">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <li
                key={course.slug}
                onClick={() => {
                  setQuery("");
                  router.push(`/courses/${course.slug}`);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {course.title}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-400">
              No courses found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
