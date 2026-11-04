"use client";

import { useEffect } from "react";

export default function WorkSection() {
  useEffect(() => {
    const $ = window.jQuery;

    if (!$ || !$.fn.masonry) return;

    const gallery = $(".work__gallery");

    if (gallery.length) {
      gallery.masonry({
        itemSelector: ".work__item",
        columnWidth: ".grid-sizer",
        gutter: 10,
      });

      gallery.masonry("layout");
    }

    return () => {
      if (gallery.length && gallery.data("masonry")) {
        gallery.masonry("destroy");
      }
    };
  }, []);

  return (
    <section className="work">
      <div className="work__gallery">
        <div className="grid-sizer"></div>
        <div
          className="work__item wide__item"
          style={{
            backgroundImage: "url('/assets/img/work/work-1.jpg')",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="play-btn video-popup"
          >
            <i className="fa fa-play"></i>
          </a>
          <div className="work__item__hover">
            <h4>VIP Auto Tires & Service</h4>
            <ul>
              <li>eCommerce</li>
              <li>Magento</li>
            </ul>
          </div>
        </div>
        <div
          className="work__item small__item"
          style={{
            backgroundImage: "url('/assets/img/work/work-2.jpg')",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="play-btn video-popup"
          >
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div
          className="work__item small__item"
          style={{
            backgroundImage: "url('/assets/img/work/work-3.jpg')",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="play-btn video-popup"
          >
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div
          className="work__item large__item"
          style={{
            backgroundImage: "url('/assets/img/work/work-4.jpg')",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="play-btn video-popup"
          >
            <i className="fa fa-play"></i>
          </a>
          <div className="work__item__hover">
            <h4>VIP Auto Tires & Service</h4>
            <ul>
              <li>eCommerce</li>
              <li>Magento</li>
            </ul>
          </div>
        </div>
        <div
          className="work__item small__item"
          style={{
            backgroundImage: "url('/assets/img/work/work-5.jpg')",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="play-btn video-popup"
          >
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div
          className="work__item small__item"
          style={{
            backgroundImage: "url('/assets/img/work/work-6.jpg')",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="play-btn video-popup"
          >
            <i className="fa fa-play"></i>
          </a>
        </div>
        <div
          className="work__item wide__item"
          style={{
            backgroundImage: "url('/assets/img/work/work-7.jpg')",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="play-btn video-popup"
          >
            <i className="fa fa-play"></i>
          </a>
          <div className="work__item__hover">
            <h4>VIP Auto Tires & Service</h4>
            <ul>
              <li>eCommerce</li>
              <li>Magento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
