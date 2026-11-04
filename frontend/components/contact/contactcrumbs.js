import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div
      className="breadcrumb-option spad"
      style={{
        backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <h2>Contact us</h2>
              <div className="breadcrumb__links">
                <Link href="/">Home</Link>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
