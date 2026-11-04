// export default function Logo(){
//     return(
//         <>
//             <div className="logo spad">
//         <div className="container">
//             <div className="logo__carousel owl-carousel">
//                 <a href="#" className="logo__item"><img src="/assets/img/logo/logo-1.png" alt=""/></a>
//                 <a href="#" className="logo__item"><img src="/assets/img/logo/logo-2.png" alt=""/></a>
//                 <a href="#" className="logo__item"><img src="/assets/img/logo/logo-3.png" alt=""/></a>
//                 <a href="#" className="logo__item"><img src="/assets/img/logo/logo-4.png" alt=""/></a>
//                 <a href="#" className="logo__item"><img src="/assets/img/logo/logo-5.png" alt=""/></a>
//                 <a href="#" className="logo__item"><img src="/assets/img/logo/logo-6.png" alt=""/></a>
//             </div>
//         </div>
//     </div>
        
//         </>
//     );
// }


"use client";

import { useEffect } from "react";

export default function Logo() {
    useEffect(() => {
        const initializeCarousel = () => {
            if (window.jQuery && window.jQuery.fn.owlCarousel) {
                const $ = window.jQuery;
                const carousel = $(".logo__carousel");

                if (carousel.length && !carousel.hasClass("owl-loaded")) {
                    carousel.owlCarousel({
                        loop: true,
                        margin: 100,
                        items: 6,
                        dots: false,
                        smartSpeed: 1200,
                        autoHeight: false,
                        autoplay: true,
                        responsive: {
                            992: { items: 5 },
                            768: { items: 4 },
                            480: { items: 3 },
                            320: { items: 2 }
                        }
                    });
                }
            }
        };

        initializeCarousel();

        return () => {
            const $ = window.jQuery;

            if ($ && $.fn.owlCarousel) {
                const carousel = $(".logo__carousel");

                if (carousel.hasClass("owl-loaded")) {
                    carousel.trigger("destroy.owl.carousel");
                }
            }
        };
    }, []);

    return (
        <div className="logo spad">
            <div className="container">
                <div className="logo__carousel owl-carousel">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <a href="#" className="logo__item" key={item}>
                            <img
                                src={`/assets/img/logo/logo-${item}.png`}
                                alt={`Client logo ${item}`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
