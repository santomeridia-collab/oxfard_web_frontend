export const metadata = {
  title: "FAQs | Oxford Study Center",
  description: "Frequently asked questions about courses, admissions, fees, and support.",
};

const faqs = [
  {
    question: "What courses does Oxford Study Center offer?",
    answer:
      "We offer school-level, entrance exam, and professional courses with expert faculty and structured learning.",
  },
  {
    question: "Do you provide online and offline classes?",
    answer:
      "Yes, we provide both online live classes and offline classroom training.",
  },
  {
    question: "Is there a free demo class available?",
    answer:
      "Yes, students can apply for a free demo class before enrolling.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us via WhatsApp, chatbot, or the enquiry form on our website.",
  },
];

export default function FAQPage() {
  return (
    <section className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
