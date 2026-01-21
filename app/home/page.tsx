import HeroSlider from "@/components/heroSlider";
import EnquiryForm from "@/components/enquiryForm";
import AboutHome from "../aboutHome/page";
import CourseDemo from "@/components/courseAndDemo";

const Home = () => {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="p-8 bg-white">
        <AboutHome />
      </section>

      {/* Enquiry Form */}
      {/* <section className="p-8 bg-orange-600">
        <EnquiryForm />
      </section> */}

      {/* Course Demo Section */}
      <section className="p-8 bg-white">
        <CourseDemo />
      </section>
    </>
  );
};

export default Home;
