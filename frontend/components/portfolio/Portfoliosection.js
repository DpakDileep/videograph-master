
"use client";

import { useState } from "react";

export default function Portfoliosection() {

  const [activeFilter, setActiveFilter] = useState("*");

  const filters = [
    { label: "All", value: "*" },
    { label: "Branding", value: ".branding" },
    { label: "Digital marketing", value: ".digital-marketing" },
    { label: "Web", value: ".web" },
    { label: "Photography", value: ".photography" },
    { label: "eCommerce", value: ".ecommerce" },
  ];

  const portfolioItems = [
    { id: 1, category: "branding", image: "portfolio-1.jpg", type: "list" },
    { id: 2, category: "digital-marketing", image: "portfolio-2.jpg", type: "single" },
    { id: 3, category: "web", image: "portfolio-3.jpg", type: "list" },
    { id: 4, category: "photography", image: "portfolio-4.jpg", type: "list" },
    { id: 5, category: "ecommerce", image: "portfolio-5.jpg", type: "single" },
    { id: 6, category: "branding", image: "portfolio-6.jpg", type: "list" },
    { id: 7, category: "web", image: "portfolio-7.jpg", type: "list" },
    { id: 8, category: "photography", image: "portfolio-8.jpg", type: "single" },
    { id: 9, category: "ecommerce", image: "portfolio-9.jpg", type: "list" },
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => "." + item.category === activeFilter
        );

  return (
    <>
      <section className="portfolio spad">
        <div className="container">

          {/* Portfolio Filters */}
          <div className="row">
            <div className="col-lg-12">
              <ul className="portfolio__filter">
                {filters.map((filter) => (
                  <li
                    key={filter.value}
                    className={activeFilter === filter.value ? "active" : ""}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portfolio Gallery */}
          <div className="row portfolio__gallery">

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 col-sm-6 mix ${item.category}`}
              >
                <div className="portfolio__item">

                  <div
                    className="portfolio__item__video"
                    style={{
                      backgroundImage: `url('/assets/img/portfolio/${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-btn video-popup"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  <div className="portfolio__item__text">
                    <h4>VIP Auto Tires &amp; Service</h4>

                    {item.type === "list" ? (
                      <ul>
                        <li>eCommerce</li>
                        <li>Magento</li>
                      </ul>
                    ) : (
                      <span>Photography</span>
                    )}
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination__option">
                <a href="#" className="arrow__pagination left__arrow"
                  onClick={(e) => e.preventDefault()}>
                  <span className="arrow_left"></span> Prev
                </a>

                <a href="#" className="number__pagination"
                  onClick={(e) => e.preventDefault()}>
                  1
                </a>

                <a href="#" className="number__pagination"
                  onClick={(e) => e.preventDefault()}>
                  2
                </a>

                <a href="#" className="arrow__pagination right__arrow"
                  onClick={(e) => e.preventDefault()}>
                  Next <span className="arrow_right"></span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
