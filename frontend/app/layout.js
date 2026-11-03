import "./globals.css";
import Script from "next/script";


export const metadata = {
  title: "Videograph | Template",
  description: "Videographer Portfolio",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/elegant-icons.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/slicknav.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body>
        {children}

        {/* JavaScript */}
        <Script
          src="/assets/js/jquery-3.3.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/mixitup.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/masonry.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.slicknav.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}