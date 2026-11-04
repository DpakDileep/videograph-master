
import Navbar from "@/components/common/Navbar";
import BlogHeader from "@/components/innerblog/blogheader";
import BlogDetails from "@/components/innerblog/blogdetails";
import Footer from "@/components/common/Footer";
import { notFound } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api/blogs/";

async function getBlog(slug) {
  try {
    const response = await fetch(
      `${API_URL}${encodeURIComponent(slug)}/`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Blog API Error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return {
    title: blog?.meta_title || blog?.heading || "Videograph Blog",
    description: blog?.meta_description || "",
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <BlogHeader blog={blog} />
      <BlogDetails blog={blog} />
      <Footer />
    </>
  );
}
