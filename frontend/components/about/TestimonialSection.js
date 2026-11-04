
// "use client";

// import React, { useEffect } from "react";

// export default function TestimonialSection() {
//   useEffect(() => {
//     const $ = window.jQuery;

//     if (!$ || !$.fn.owlCarousel) return;

//     const slider = $(".testimonial__slider");

//     if (slider.length && !slider.hasClass("owl-loaded")) {
//       slider.owlCarousel({
//         loop: true,
//         margin: 0,
//         items: 3,
//         dots: true,
//         dotsEach: 2,
//         smartSpeed: 1200,
//         autoHeight: false,
//         autoplay: true,
//         responsive: {
//           992: {
//             items: 3,
//           },
//           768: {
//             items: 2,
//           },
//           320: {
//             items: 1,
//           },
//         },
//       });
//     }

//     // Destroy carousel when component unmounts
//     return () => {
//       if (slider.hasClass("owl-loaded")) {
//         slider.trigger("destroy.owl.carousel");
//       }
//     };
//   }, []);

//   return (
//     <section
//       className="testimonial spad"
//       style={{
//         backgroundImage: "url('/assets/img/testimonial-bg.jpg')",
//       }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="section-title center-title">
//               <span>Loved By Clients</span>
//               <h2>What clients say?</h2>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="testimonial__slider owl-carousel">

//             <div className="col-lg-4">
//               <div className="testimonial__item">
//                 <div className="testimonial__text">
//                   <p>
//                     Delivers such a great service that it can benefit all kinds
//                     of people from any number of industries.
//                   </p>
//                 </div>
//                 <div className="testimonial__author">
//                   <div className="testimonial__author__pic">
//                     <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
//                   </div>
//                   <div className="testimonial__author__text">
//                     <h5>Krista Attorn</h5>
//                     <span>Web Designer</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="testimonial__item">
//                 <div className="testimonial__text">
//                   <p>
//                     Videographer delivers such a great service that it can
//                     benefit all kinds of people from any number.
//                   </p>
//                 </div>
//                 <div className="testimonial__author">
//                   <div className="testimonial__author__pic">
//                     <img src="/assets/img/testimonial/ta-2.jpg" alt="" />
//                   </div>
//                   <div className="testimonial__author__text">
//                     <h5>Krista Attorn</h5>
//                     <span>Web Designer</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="testimonial__item">
//                 <div className="testimonial__text">
//                   <p>
//                     Videographer delivers such a great service that it can
//                     benefit all kinds of people from any number.
//                   </p>
//                 </div>
//                 <div className="testimonial__author">
//                   <div className="testimonial__author__pic">
//                     <img src="/assets/img/testimonial/ta-3.jpg" alt="" />
//                   </div>
//                   <div className="testimonial__author__text">
//                     <h5>Krista Attorn</h5>
//                     <span>Web Designer</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="testimonial__item">
//                 <div className="testimonial__text">
//                   <p>
//                     Delivers such a great service that it can benefit all kinds
//                     of people from any number of industries.
//                   </p>
//                 </div>
//                 <div className="testimonial__author">
//                   <div className="testimonial__author__pic">
//                     <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
//                   </div>
//                   <div className="testimonial__author__text">
//                     <h5>Krista Attorn</h5>
//                     <span>Web Designer</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               <div className="testimonial__item">
//                 <div className="testimonial__text">
//                   <p>
//                     Videographer delivers such a great service that it can
//                     benefit all kinds of people from any number.
//                   </p>
//                 </div>
//                 <div className="testimonial__author">
//                   <div className="testimonial__author__pic">
//                     <img src="/assets/img/testimonial/ta-2.jpg" alt="" />
//                   </div>
//                   <div className="testimonial__author__text">
//                     <h5>Krista Attorn</h5>
//                     <span>Web Designer</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useState, useRef } from "react";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const sliderRef = useRef(null);

  // Fetch testimonials from Django API
  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/testimonials/"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();

        if (isMounted) {
          setTestimonials(
            Array.isArray(data) ? data : data.results || []
          );
        }
      } catch (err) {
        console.error("Testimonials API Error:", err);

        if (isMounted) {
          setError("Unable to load testimonials.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  // Initialize Owl Carousel after testimonials are rendered
  useEffect(() => {
    const $ = window.jQuery;

    if (
      !$ ||
      !$.fn.owlCarousel ||
      testimonials.length === 0 ||
      !sliderRef.current
    ) {
      return;
    }

    const slider = $(sliderRef.current);

    if (!slider.hasClass("owl-loaded")) {
      slider.owlCarousel({
        loop: testimonials.length > 3,
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

    return () => {
      if (slider.hasClass("owl-loaded")) {
        slider.trigger("destroy.owl.carousel");
      }
    };
  }, [testimonials]);

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

        {loading && (
          <p className="text-center">Loading testimonials...</p>
        )}

        {error && (
          <p className="text-center">{error}</p>
        )}

        {!loading && !error && testimonials.length === 0 && (
          <p className="text-center">
            No testimonials available.
          </p>
        )}

        {!loading && testimonials.length > 0 && (
          <div className="row">
            <div
              className="testimonial__slider owl-carousel"
              ref={sliderRef}
            >
              {testimonials.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="testimonial__item">
                    <div className="testimonial__text">
                      <p>{item.review}</p>
                    </div>

                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img
                          src={`/assets/img/testimonial/${item.photo}`}
                          alt={item.client_name}
                        />
                      </div>

                      <div className="testimonial__author__text">
                        <h5>{item.client_name}</h5>
                        <span>{item.designation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
