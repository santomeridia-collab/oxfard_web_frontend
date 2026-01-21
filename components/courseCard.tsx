import Link from "next/link";

export default function CourseCard({ course }: any) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{course.title}</h3>
      <p>{course.description}</p>
      <Link href={`/courses/${course.slug}`} className="text-blue-600">
        View Details
      </Link>
    </div>
  );
}
