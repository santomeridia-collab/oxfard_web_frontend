import { courses } from "@/lib/courses";
import Breadcrumbs from "@/components/breadCrumbs";
import EnquiryForm from "@/components/enquiryForm";
import { notFound } from "next/navigation";

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug);

  if (!course) return notFound();

  return (
    <section className="max-w-7xl mx-auto p-8">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="my-4 text-gray-600">{course.description}</p>
      <EnquiryForm />
    </section>
  );
}
