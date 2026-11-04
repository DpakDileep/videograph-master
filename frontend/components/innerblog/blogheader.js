
export default function BlogHeader({ blog }) {
  return (
    <section
      className="blog-hero spad"
      style={{
        backgroundImage: "url('/assets/img/blog/blog-hero.jpg')",
      }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="blog__hero__text">

              <h2>{blog.heading}</h2>

              <ul>
                <li>
                  by <span>{blog.author || "Admin"}</span>
                </li>

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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
