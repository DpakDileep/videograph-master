import Navbar from "@/components/common/Navbar"
import Breadcrumb from "@/components/blog/breadcrumb";
import BlogSection from "@/components/blog/blogsection";
import Footer from "@/components/common/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <BlogSection />
      <Footer />
    </>
  );
}
