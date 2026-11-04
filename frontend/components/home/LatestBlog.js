"use client";

import { useEffect } from "react";

export default function LatestBlog() {
  useEffect(() => {
    const $ = window.jQuery;

    if (!$ || !$.fn.owlCarousel) return;

    const slider = $(".latest__slider");

    if (slider.length && !slider.hasClass("owl-loaded")) {
      slider.owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
          992: { items: 3 },
          768: { items: 2 },
          320: { items: 1 },
        },
      });
    }

    return () => {
      if (slider.hasClass("owl-loaded")) {
        slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  return (
    <section className="latest spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-title">
              <span>Our Blog</span>
              <h2>Blog Update</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="latest__slider owl-carousel">
            <div className="col-lg-4">
              <div className="blog__item latest__item">
                <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                <ul>
                  <li>Jan 03, 2020</li>
                  <li>05 Comment</li>
                </ul>
                <p>
                  We recently launched a new website for a Vital client and
                  wanted to share some of the cool features we were able...
                </p>
                <a href="#">
                  Read more <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog__item latest__item">
                <h4>Bumper Ads: How to Tell a Story in 6 Seconds</h4>
                <ul>
                  <li>Jan 03, 2020</li>
                  <li>05 Comment</li>
                </ul>
                <p>
                  We recently launched a new website for a Vital client and
                  wanted to share some of the cool features we were able...
                </p>
                <a href="#">
                  Read more <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog__item latest__item">
                <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                <ul>
                  <li>Jan 03, 2020</li>
                  <li>05 Comment</li>
                </ul>
                <p>
                  We recently launched a new website for a Vital client and
                  wanted to share some of the cool features we were able...
                </p>
                <a href="#">
                  Read more <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog__item latest__item">
                <h4>Bumper Ads: How to Tell a Story in 6 Seconds</h4>
                <ul>
                  <li>Jan 03, 2020</li>
                  <li>05 Comment</li>
                </ul>
                <p>
                  We recently launched a new website for a Vital client and
                  wanted to share some of the cool features we were able...
                </p>
                <a href="#">
                  Read more <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog__item latest__item">
                <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                <ul>
                  <li>Jan 03, 2020</li>
                  <li>05 Comment</li>
                </ul>
                <p>
                  We recently launched a new website for a Vital client and
                  wanted to share some of the cool features we were able...
                </p>
                <a href="#">
                  Read more <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog__item latest__item">
                <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                <ul>
                  <li>Jan 03, 2020</li>
                  <li>05 Comment</li>
                </ul>
                <p>
                  We recently launched a new website for a Vital client and
                  wanted to share some of the cool features we were able...
                </p>
                <a href="#">
                  Read more <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog__item latest__item">
                <h4>What Makes Users Want to Share a Video on Social Media?</h4>
                <ul>
                  <li>Jan 03, 2020</li>
                  <li>05 Comment</li>
                </ul>
                <p>
                  We recently launched a new website for a Vital client and
                  wanted to share some of the cool features we were able...
                </p>
                <a href="#">
                  Read more <span className="arrow_right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
