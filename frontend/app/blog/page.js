
import Navbar from "@/components/common/Navbar";
import Breadcrumb from "@/components/blog/breadcrumb";
import BlogSection from "@/components/blog/blogsection";
import Footer from "@/components/common/Footer";

const API_URL =
  process.env.DJANGO_API_URL ||
  "http://127.0.0.1:8000/api/blogs/";

async function getBlogs() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Blog API Error:", response.status);
      return [];
    }

    const data = await response.json();

    return Array.isArray(data) ? data : data.results || [];

  } catch (error) {
    console.error("Blog Fetch Error:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <BlogSection blogs={blogs} />
      <Footer />
    </>
  );
}
