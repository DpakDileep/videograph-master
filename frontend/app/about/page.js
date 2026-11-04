import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AboutBreadcrumb from "@/components/about/AboutBreadcrumb";
import AboutSection from "@/components/about/AboutSection";
import TestimonialSection from "@/components/about/TestimonialSection";
import CounterSection from "@/components/home/CounterSection";
import TeamSection from "@/components/home/TeamSection";

export default function page() {
  return (
    <>
      <Navbar />
      <AboutBreadcrumb />
      <AboutSection />
      <TestimonialSection />
      <CounterSection />
      <TeamSection />
      <Footer />
    </>
  );
}
