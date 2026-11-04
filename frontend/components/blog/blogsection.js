"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/blogs/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : data.results || []);

      } catch (error) {
        console.error("Blog API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog spad">
      <div className="container">
        <div className="row">

          {loading ? (
            <div className="col-lg-12">
              <p>Loading blogs...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="col-lg-12">
              <p>No blogs available.</p>
            </div>
          ) : (
            blogs.map((blog) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                key={blog.id}
              >
                <div className="blog__item">
                  <h4>{blog.heading}</h4>

                  <ul>
                    <li>
                      {new Date(
                        `${blog.published_date}T00:00:00`
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </li>
                    <li>
                      {String(blog.comments_count).padStart(2, "0")} Comment
                    </li>
                  </ul>

                  <p>
                    {blog.content?.length > 150
                      ? `${blog.content.slice(0, 150)}...`
                      : blog.content}
                  </p>

                  <Link href={`/blog/${blog.slug}`}>
                    Read more <span className="arrow_right"></span>
                  </Link>
                </div>
              </div>
            ))
          )}

        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="pagination__option blog__pagi">
              <a href="#" className="arrow__pagination left__arrow">
                <span className="arrow_left"></span> Prev
              </a>
              <a href="#" className="number__pagination">1</a>
              <a href="#" className="number__pagination">2</a>
              <a href="#" className="arrow__pagination right__arrow">
                Next <span className="arrow_right"></span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}