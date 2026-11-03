import Navbar from "@/components/common/Navbar"
import BlogHeader from "@/components/innerblog/blogheader";
import BlogDetails from "@/components/innerblog/blogdetails";
import Footer from "@/components/common/Footer";

export default function Innerblog() {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <BlogDetails />
      <Footer />
    </>
  );
}
