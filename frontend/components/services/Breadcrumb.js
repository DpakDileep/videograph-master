
export default function Breadcrumb() {
  return (
    <>
      <div
        className="breadcrumb-option spad"
        style={{
          backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Our Services</h2>
                <div className="breadcrumb__links">
                  <a href="/">Home</a>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
