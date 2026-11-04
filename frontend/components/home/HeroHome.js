"use client";

import { useEffect } from "react";

export default function HeroHome() {
  useEffect(() => {
    let interval;
    let slider;
    let initialized = false;
    let attempts = 0;

    const initializeHero = () => {
      const $ = window.jQuery;

      if (!$ || !$.fn.owlCarousel) {
        attempts++;

        if (attempts >= 50) {
          clearInterval(interval);
          console.error("Owl Carousel failed to load.");
        }

        return;
      }

      slider = $(".hero__slider");

      if (!slider.length) return;

      if (!slider.hasClass("owl-loaded")) {
        slider.owlCarousel({
          loop: true,
          dots: true,
          mouseDrag: false,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          items: 1,
          margin: 0,
          smartSpeed: 1200,
          autoHeight: false,
          autoplay: true,
        });

        slider.find(".owl-dot").each(function () {
          const index = $(this).index() + 1;
          $(this).html(index < 10 ? "0" + index : index);
        });
      }

      initialized = true;
      clearInterval(interval);
    };

    initializeHero();

    if (!initialized) {
      interval = setInterval(initializeHero, 100);
    }

    return () => {
      clearInterval(interval);

      if (initialized && slider?.hasClass("owl-loaded")) {
        slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__slider owl-carousel">
        <div
          className="hero__item"
          style={{
            backgroundImage: "url('/assets/img/hero/hero-1.jpg')",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <span>For website and video editing</span>
                  <h2>Videographer’s Portfolio</h2>
                  <a href="#" className="primary-btn">
                    See more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero__item"
          style={{
            backgroundImage: "url('/assets/img/hero/hero-1.jpg')",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <span>For website and video editing</span>
                  <h2>Videographer’s Portfolio</h2>
                  <a href="#" className="primary-btn">
                    See more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero__item"
          style={{
            backgroundImage: "url('/assets/img/hero/hero-1.jpg')",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero__text">
                  <span>For website and video editing</span>
                  <h2>Videographer’s Portfolio</h2>
                  <a href="#" className="primary-btn">
                    See more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
