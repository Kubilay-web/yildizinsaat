"use client";

import React, { useState } from "react";
import Script from "next/script";

export default function page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="preconnect" href="https://asset.snydercg.com" />
      <link rel="preconnect" href="https://kit.fontawesome.com" />
      <link rel="preconnect" href="https://use.typekit.net" />
      <link rel="preconnect" href="https://p.typekit.net" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/videos/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/videos/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/videos/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/videos/images/safari-pinned-tab.svg"
        color="#fdb927"
      />
      <meta name="msapplication-TileColor" content="#fdb927" />
      <meta name="theme-color" content="#ffffff" />
      {/* Global site tag (gtag.js) - Google Analytics */}
      <link
        href="/public/Index-Ger/videos/css/app.4d2d73d.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/public/Index-Ger/videos/css/wic4jic.css" />

      <Script src="/static/js/app.432b92c.js"></Script>
      <Script src="/static/js/f75f609c86.js"></Script>
      <Script src="/static/js/gtm.js"></Script>

      <meta
        name="facebook-domain-verification"
        content="93cgmjicq8ajmeatdew6khsm7uoise"
      />
      <title>Videos</title>
      <meta name="generator" content="SEOmatic" />
      <meta
        name="keywords"
        content="snyder construction group, larry snyder and company"
      />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="robots" content="all" />
      <meta content="LarrySnyderandCompany" property="fb:profile_id" />
      <meta content="en_US" property="og:locale" />
      <meta content="Snyder Construction Group" property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content="/videos" property="og:url" />
      <meta content="Videos" property="og:title" />
      <meta content="/videos/images/og.jpg" property="og:image" />
      <meta content={1200} property="og:image:width" />
      <meta content={630} property="og:image:height" />
      <meta
        content="The Snyder Construction Group logo"
        property="og:image:alt"
      />
      <link href="/videos" rel="canonical" />
      <link href="https://snydercg.com" rel="home" />
      <link
        type="text/plain"
        href="https://snydercg.com/humans.txt"
        rel="author"
      />

      <header className="navigation">
        <div className="navigation-secondary">
          <div className="container container--lg">
            <nav className="navigation-secondary__wrapper">
              <strong className="navigation-secondary__nav-item">
                <a className="skip-to-main" href="#main">
                  Skip to Main Content
                </a>
              </strong>
              <span className="navigation-secondary__nav-item ">
                <a href="/trade-partners">Trade Partners</a>
              </span>
              <span className="navigation-secondary__nav-item ">
                <a href="/careers">Careers</a>
              </span>
              <span className="navigation-secondary__nav-item ">
                <a href="/plan-room">Plan Room</a>
              </span>
            </nav>
          </div>
        </div>

        <div className="navigation-main">
          <div className="navigation-main__wrapper container container--lg">
            <a
              className="navigation-main__logo"
              href="/"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
            >
              <h1>
                <img
                  src="/home/images/yildiz-logo.png"
                  style={{ width: "196px", height: "62px" }}
                  alt="Snyder Contruction Group"
                />
              </h1>
            </a>
            <div className="navigation-main__group-wrapper">
              <nav id="main-menu" className="navigation-main__nav-group">
                <span
                  className="navigation-main__nav-item "
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={100}
                >
                  <a href="/projects">Projekte</a>
                </span>
                <span
                  className="navigation-main__nav-item "
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={200}
                >
                  <a href="/who-we-are">Über uns</a>
                </span>
                <span
                  className="navigation-main__nav-item navigation-main__nav-item--has-dropdown"
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={300}
                >
                  <a href="/capabilities">Leistungen</a>
                  <div className="navigation-dropdown">
                    <a href="/">Haussanierung </a>
                    <a href="/">Wohnungssanierung </a>
                    <a href="/">Umbau von Büroflachen</a>
                    <a href="/">Renovierumg Gastronomieflachen</a>
                    <a href="/">Energetische Fassadensanierung</a>
                  </div>
                </span>
                <span
                  className="navigation-main__nav-item "
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={400}
                >
                  <a href="/news">Prozess</a>
                </span>
                <span
                  className="navigation-main__nav-item "
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={500}
                >
                  <a href="/videos">Kontakt</a>
                </span>
                <span
                  className="navigation-main__nav-item navigation-main__nav-item--primary"
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={600}
                >
                  <a href="/contact">Angebot Anfragen</a>
                </span>
                <div className="navigation-main__nav-item navigation-main__nav-item--secondary">
                  <a href="/trade-partners">Trade Partners</a>
                  <a href="/careers">Careers</a>
                  <a href="/plan-room">Plan Room</a>
                </div>
              </nav>
              <button
                type="button"
                className="navigation-main__toggle"
                data-aos="fade"
                aria-controls="main-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-toggle-menu
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main id="main">
        <div className="w-screen">
          <div className="container">
            <h2 className="text-display-1 u-text-uppercase u-text-outline video-header">
              Videos
            </h2>
          </div>
          <div className="grid-video">
            <div className="video-wrapper">
              {/* Thumbnail */}
              <div
                className="thumbnail"
                onClick={() => setOpen(true)}
                style={{
                  backgroundImage: `url('/videos/images/1-HillCity-Exterior-01_2023-11-17-180017.jpg')`,
                  backgroundSize: "cover",
                }}
              >
                <svg
                  width="81"
                  height="82"
                  viewBox="0 0 81 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="40.1515"
                    cy="40.8788"
                    r="38.1833"
                    fill="#FDB927"
                    stroke="black"
                    strokeWidth="3.93642"
                  ></circle>
                  <path
                    d="M60.6211 41.2708L30.5075 58.6569L30.5075 23.8847L60.6211 41.2708Z"
                    fill="black"
                  ></path>
                </svg>
              </div>

              {/* Title and Description */}
              <h3 className="heading-h3">
                Hill City Church: A Testament to a Strong Team
              </h3>
              <p className="paragraph"></p>

              {/* Video Modal */}
              {open && (
                <div
                  className="modal"
                  style={{ display: open ? "block" : "none" }}
                  onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-title"
                >
                  {/* Overlay */}
                  <div
                    className="overlay"
                    onClick={() => {
                      setOpen(false);
                      document.getElementById("video-playing").pause();
                    }}
                  />

                  {/* Panel */}
                  <div className="panel" onClick={() => setOpen(false)}>
                    <div
                      className="panel-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex space-x-2 close-button">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="bg-white px-2"
                        >
                          <strong>x</strong>
                        </button>
                      </div>
                      <br />
                      {/* Title */}
                      <h2
                        className="text-3xl font-bold popup-heading"
                        id="modal-title"
                      >
                        Hill City Church: A Testament to a Strong Team
                      </h2>
                      {/* Video Content */}
                      <iframe
                        id="video-playing"
                        className="video-iframe"
                        src="https://www.youtube.com/watch?v=IxbWDiv63YY"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                      <p className="mt-2 popup-paragraph"></p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="video-wrapper">
              {/* Thumbnail */}
              <div
                className="thumbnail"
                onClick={() => setOpen(true)}
                style={{
                  backgroundImage: `url('/videos/images/1-HillCity-Exterior-01_2023-11-17-180017.jpg')`,
                  backgroundSize: "cover",
                }}
              >
                <svg
                  width="81"
                  height="82"
                  viewBox="0 0 81 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="40.1515"
                    cy="40.8788"
                    r="38.1833"
                    fill="#FDB927"
                    stroke="black"
                    strokeWidth="3.93642"
                  ></circle>
                  <path
                    d="M60.6211 41.2708L30.5075 58.6569L30.5075 23.8847L60.6211 41.2708Z"
                    fill="black"
                  ></path>
                </svg>
              </div>

              {/* Title and Description */}
              <h3 className="heading-h3">
                Hill City Church: A Testament to a Strong Team
              </h3>
              <p className="paragraph"></p>

              {/* Video Modal */}
              {open && (
                <div
                  className="modal"
                  style={{ display: open ? "block" : "none" }}
                  onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-title"
                >
                  {/* Overlay */}
                  <div
                    className="overlay"
                    onClick={() => {
                      setOpen(false);
                      document.getElementById("video-playing").pause();
                    }}
                  />

                  {/* Panel */}
                  <div className="panel" onClick={() => setOpen(false)}>
                    <div
                      className="panel-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex space-x-2 close-button">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="bg-white px-2"
                        >
                          <strong>x</strong>
                        </button>
                      </div>
                      <br />
                      {/* Title */}
                      <h2
                        className="text-3xl font-bold popup-heading"
                        id="modal-title"
                      >
                        Hill City Church: A Testament to a Strong Team
                      </h2>
                      {/* Video Content */}
                      <iframe
                        id="video-playing"
                        className="video-iframe"
                        src="https://www.youtube.com/watch?v=IxbWDiv63YY"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                      <p className="mt-2 popup-paragraph"></p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <section className="bg-primary">
        <div
          className="container padding-v--xl chevron chevron--center chevron--dark cta"
          data-aos="fade-down"
        >
          <div
            className="u-text-align-center u-color-text-white"
            data-aos="fade-up"
          >
            <h2 className="text-display-1 text-grey u-text-uppercase u-text-outline">
              Ready to Start Your <strong>Project</strong>?
            </h2>
            <div className="button-group padding-v--md-top">
              <a className="btn btn--outline" href="/contact">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__inner padding-v--lg">
          <div className="container">
            <div className="footer__columns">
              <div className="footer__column">
                <p className="footer__prompt">Reach Out</p>
                <div className="text-content padding-v--sm-top">
                  <p className="text-xl">
                    Call us at{" "}
                    <strong>
                      <a href="tel:+14178876897">417.887.6897</a>
                    </strong>{" "}
                    <br />
                    or email us at{" "}
                    <strong>
                      <a href="mailto:info@snydercg.com">info@snydercg.com</a>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="footer__column">
                <nav className="footer__nav">
                  <span className="footer__nav-item">
                    <a
                      className="footer__nav-link footer__nav-link--primary"
                      href="https://snydercg.com/projects"
                    >
                      Projects
                    </a>
                  </span>
                  <span className="footer__nav-item">
                    <a
                      className="footer__nav-link"
                      href="https://snydercg.com/who-we-are"
                    >
                      Who We Are
                    </a>
                  </span>
                  <span className="footer__nav-item">
                    <a
                      className="footer__nav-link"
                      href="https://snydercg.com/capabilities"
                    >
                      Capabilities
                    </a>
                  </span>
                  <span className="footer__nav-item">
                    <a className="footer__nav-link" href="/trade-partners">
                      Trade Partners
                    </a>
                  </span>
                  <span className="footer__nav-item">
                    <a className="footer__nav-link" href="/careers">
                      Careers
                    </a>
                  </span>
                  <span className="footer__nav-item">
                    <a className="footer__nav-link" href="/plan-room">
                      Plan Room
                    </a>
                  </span>
                </nav>
                <a className="btn" href="/contact">
                  Work With Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__secondary">
          <span>©2024 Snyder Construction Group</span>
          <nav>
            <span className="footer__secondary-link">
              <a href="https://snydercg.com/privacy-policy">Privacy Policy</a>
            </span>
            <span className="footer__secondary-link">
              <a href="https://snydercg.com/terms-conditions">
                Terms &amp; Conditions
              </a>
            </span>
            <span className="footer__secondary-link">
              Site by <a href="https://www.mostlyserious.io">Mostly Serious</a>
            </span>
          </nav>
          <nav className="social-nav social-nav--footer">
            <a
              className="social-nav__item"
              href="https://www.facebook.com/SnyderConstructionGroup/"
              rel="noopener noreferrer"
              target="_blank"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg
                className="social-nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a
              className="social-nav__item"
              href="https://www.linkedin.com/company/larry-snyder-&-company/"
              rel="noopener noreferrer"
              target="_blank"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg
                className="social-nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
