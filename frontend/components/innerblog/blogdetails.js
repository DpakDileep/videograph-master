"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogDetails({ blog }) {

    const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/blogs/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recent blogs");
        }

        const data = await response.json();

        const blogs = Array.isArray(data) ? data : data.results || [];

        // Current blog ഒഴിവാക്കി latest 3 blogs എടുക്കുന്നു
        const filteredBlogs = blogs
          .filter((item) => item.slug !== blog.slug)
          .slice(0, 3);

        setRecentBlogs(filteredBlogs);
      } catch (error) {
        console.error("Recent Blogs API Error:", error);
      }
    };

    fetchRecentBlogs();
  }, [blog.slug]);

  const paragraphs = (blog.content || "")
    .split(/\n+/)
    .filter((paragraph) => paragraph.trim());

  return (
    <div className="blog-details spad">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="blog__details__content">

              <div className="blog__details__text">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="blog__details__quote">
                <p>
                  {blog.quote ||
                    "Create engaging content that connects with your audience."}
                </p>
                <h6>{blog.quote_author || "Videograph"}</h6>
                <i className="fa fa-quote-right"></i>
              </div>

              <div className="blog__details__desc">
                <p>{blog.meta_description}</p>
              </div>

              <div className="blog__details__tags">
                <span><i className="fa fa-tag"></i> Tag:</span>
                <a href="#">Blog</a>
                <a href="#">Videograph</a>
              </div>

              <div className="blog__details__option">
                <div className="row">

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    {blog.previous_blog && (
                      <Link
                        href={`/blog/${blog.previous_blog.slug}`}
                        className="blog__details__option__item"
                      >
                        <h5>
                          <i className="fa fa-angle-left"></i> Previous posts
                        </h5>

                        <div className="blog__details__option__item__img">
                          <img
                            src={blog.previous_blog.image || "/assets/img/blog/prev.jpg"}
                            alt={blog.previous_blog.heading}
                          />
                        </div>

                        <div className="blog__details__option__item__text">
                          <h6>{blog.previous_blog.heading}</h6>
                          <span>{blog.previous_blog.published_date}</span>
                        </div>
                      </Link>
                    )}
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    {blog.next_blog && (
                      <Link
                        href={`/blog/${blog.next_blog.slug}`}
                        className="blog__details__option__item blog__details__option__item--right"
                      >
                        <h5>
                          Next posts <i className="fa fa-angle-right"></i>
                        </h5>

                        <div className="blog__details__option__item__img">
                          <img
                            src={blog.next_blog.image || "/assets/img/blog/next.jpg"}
                            alt={blog.next_blog.heading}
                          />
                        </div>

                        <div className="blog__details__option__item__text">
                          <h6>{blog.next_blog.heading}</h6>
                          <span>{blog.next_blog.published_date}</span>
                        </div>
                      </Link>
                    )}
                  </div>

                </div>
              </div>

             {/* <div className="blog__details__recent">
  <h4>Recent Posts</h4>

  <div className="row">
    {recentBlogs.map((item) => (
      <div
        className="col-lg-4 col-md-6 col-sm-6"
        key={item.id}
      >
        <Link
          href={`/blog/${item.slug}`}
          className="blog__details__recent__item"
        >
          {item.image && (
 <img
  src={item.image}
  alt={item.heading}
  onError={(e) => {
    console.log("Image not loading:", item.heading, item.image);
  }}
/>
)}

          <h5>{item.heading}</h5>
          <span>{item.published_date}</span>
        </Link>
      </div>
    ))}
  </div>
</div> */}

              {/* <div className="blog__details__comment">
                <h4>Leave a comment</h4>

                <form action="#">
                  <div className="input__list">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Website" />
                  </div>

                  <textarea placeholder="Comment"></textarea>

                  <button type="submit" className="site-btn">
                    Send Message
                  </button>
                </form>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
