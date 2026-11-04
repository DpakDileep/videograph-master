
"use client";

import React, { useEffect } from "react";

export default function TestimonialSection() {
  useEffect(() => {
    const $ = window.jQuery;

    if (!$ || !$.fn.owlCarousel) return;

    const slider = $(".testimonial__slider");

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
          992: {
            items: 3,
          },
          768: {
            items: 2,
          },
          320: {
            items: 1,
          },
        },
      });
    }

    // Destroy carousel when component unmounts
    return () => {
      if (slider.hasClass("owl-loaded")) {
        slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  return (
    <section
      className="testimonial spad"
      style={{
        backgroundImage: "url('/assets/img/testimonial-bg.jpg')",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title center-title">
              <span>Loved By Clients</span>
              <h2>What clients say?</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="testimonial__slider owl-carousel">

            <div className="col-lg-4">
              <div className="testimonial__item">
                <div className="testimonial__text">
                  <p>
                    Delivers such a great service that it can benefit all kinds
                    of people from any number of industries.
                  </p>
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__author__pic">
                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                  </div>
                  <div className="testimonial__author__text">
                    <h5>Krista Attorn</h5>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial__item">
                <div className="testimonial__text">
                  <p>
                    Videographer delivers such a great service that it can
                    benefit all kinds of people from any number.
                  </p>
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__author__pic">
                    <img src="/assets/img/testimonial/ta-2.jpg" alt="" />
                  </div>
                  <div className="testimonial__author__text">
                    <h5>Krista Attorn</h5>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial__item">
                <div className="testimonial__text">
                  <p>
                    Videographer delivers such a great service that it can
                    benefit all kinds of people from any number.
                  </p>
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__author__pic">
                    <img src="/assets/img/testimonial/ta-3.jpg" alt="" />
                  </div>
                  <div className="testimonial__author__text">
                    <h5>Krista Attorn</h5>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial__item">
                <div className="testimonial__text">
                  <p>
                    Delivers such a great service that it can benefit all kinds
                    of people from any number of industries.
                  </p>
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__author__pic">
                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                  </div>
                  <div className="testimonial__author__text">
                    <h5>Krista Attorn</h5>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial__item">
                <div className="testimonial__text">
                  <p>
                    Videographer delivers such a great service that it can
                    benefit all kinds of people from any number.
                  </p>
                </div>
                <div className="testimonial__author">
                  <div className="testimonial__author__pic">
                    <img src="/assets/img/testimonial/ta-2.jpg" alt="" />
                  </div>
                  <div className="testimonial__author__text">
                    <h5>Krista Attorn</h5>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
