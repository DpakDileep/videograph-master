import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="header__logo">
                        <Link href="/"><img src="/assets/img/logo.png" alt="" /></Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="header__nav__option">
                        <nav className="header__nav__menu mobile-menu">
                            <ul>
                                <li className="active"><a href="./index.html">Home</a></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="header__nav__social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </section>
  )
}
