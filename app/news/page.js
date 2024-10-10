import React from "react";
import Script from "next/script";

export default function page() {
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
        href="/news/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/news/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/news/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/news/images/safari-pinned-tab.svg"
        color="#fdb927"
      />
      <meta name="msapplication-TileColor" content="#fdb927" />
      <meta name="theme-color" content="#ffffff" />
      {/* Global site tag (gtag.js) - Google Analytics */}

      <meta
        name="facebook-domain-verification"
        content="93cgmjicq8ajmeatdew6khsm7uoise"
      />
      <title>Blog Archive</title>
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
      <meta content="/news" property="og:url" />
      <meta content="Blog Archive" property="og:title" />
      <meta content="/news/images/og.jpg" property="og:image" />
      <meta content={1200} property="og:image:width" />
      <meta content={630} property="og:image:height" />
      <meta
        content="The Snyder Construction Group logo"
        property="og:image:alt"
      />
      <link href="/news" rel="canonical" />
      <link href="https://snydercg.com" rel="home" />
      <link
        type="text/plain"
        href="https://snydercg.com/humans.txt"
        rel="author"
      />

      <Script src="/static/js/app.432b92c.js"></Script>
      <Script src="/static/js/f75f609c86.js"></Script>
      <Script src="/static/js/gtm.js"></Script>

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
        <section className="u-overflow-hidden">
          <div className="container container--lg padding-v--xl">
            <div className="grid grid-cols-12 gap-8">
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-group-building-the-future-of-communities"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/Wellington-1.png" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Jul 18, 2024
                  </div>
                  <a
                    href="/news/snyder-construction-group-building-the-future-of-communities"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group: Building the Future of
                    Communities
                  </a>
                  At Snyder Construction Group, a significant portion of our
                  work is dedicated to affordable housing through the
                  Low-Incom...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-group-attends-midwest-manufacturers-trade-show-conference"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/MAM-Header-Image.jpeg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Jul 11, 2024
                  </div>
                  <a
                    href="/news/snyder-construction-group-attends-midwest-manufacturers-trade-show-conference"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group Attends Midwest Manufacturers
                    Trade Show &amp; Conference
                  </a>
                  Snyder Construction Group builds partnerships that last and
                  creates value for communities across Southwest Missouri and
                  ...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/q1-2024-project-update-what-weve-been-up-to"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/Forvis-Rendering.png" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Mar 25, 2024
                  </div>
                  <a
                    href="/news/q1-2024-project-update-what-weve-been-up-to"
                    className="font-bold text-xl block"
                  >
                    Q1 2024 Project Update: What We've Been Up To
                  </a>
                  Snyder Construction Group builds partnerships that last. We
                  are driven by a profound sense of humility and gratitude
                  for...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/four-major-projects-were-working-on-in-q3-2023"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/OReilly-Distribution-Center-Parking-Lot.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Sep 11, 2023
                  </div>
                  <a
                    href="/news/four-major-projects-were-working-on-in-q3-2023"
                    className="font-bold text-xl block"
                  >
                    Four Major Projects We’re Working on in Q3 2023
                  </a>
                  Snyder Construction Group builds partnerships that last all
                  over the country. We’re based in the heart of the Midwest,
                  b...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-group-completes-hill-city-churchs-new-worship-home"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/1-HillCity-Exterior-01.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Sep 05, 2023
                  </div>
                  <a
                    href="/news/snyder-construction-group-completes-hill-city-churchs-new-worship-home"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group Completes Hill City Church's New
                    Worship Home
                  </a>
                  Hill City Church recently opened the doors for its new and
                  permanent home in central Springfield. This modern church
                  fea...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-group-attends-annual-novogradac-affordable-housing-conference"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/NOVOGRADAC-Conference-2023.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Jul 13, 2023
                  </div>
                  <a
                    href="/news/snyder-construction-group-attends-annual-novogradac-affordable-housing-conference"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group Attends Annual Novogradac
                    Affordable Housing Conference
                  </a>
                  Snyder Construction Group builds partnerships that last and
                  creates value for communities around Southwest Missouri and
                  ...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/supporting-regional-economic-growth-in-southwest-missouri"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/Springfield-Branson-on-a-Map.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    May 24, 2023
                  </div>
                  <a
                    href="/news/supporting-regional-economic-growth-in-southwest-missouri"
                    className="font-bold text-xl block"
                  >
                    Supporting Regional Economic Growth in Southwest Missouri
                  </a>
                  Snyder Construction Group has been building projects all over
                  Southwest Missouri for 45 years. Our team knows that the e...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-group-partners-with-developers-on-new-dual-branded-marriott-hotel"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/Fairfield-Groundbreaking-2.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    May 10, 2023
                  </div>
                  <a
                    href="/news/snyder-construction-group-partners-with-developers-on-new-dual-branded-marriott-hotel"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group Partners with Developers on New
                    Dual-Branded Marriott Hotel
                  </a>
                  Snyder Construction Group has been collaborating with the
                  hospitality industry all over the Midwest as several brands
                  ha...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/were-proud-of-our-multifamily-projects-at-snyder-construction-group"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/Moon-City-Lofts-8.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Feb 16, 2023
                  </div>
                  <a
                    href="/news/were-proud-of-our-multifamily-projects-at-snyder-construction-group"
                    className="font-bold text-xl block"
                  >
                    Decades of Building Multifamily Projects at Snyder
                    Construction Group
                  </a>
                  Snyder Construction Group prides itself on building strong
                  relationships and stronger communities. We’ve completed
                  dozen...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-group-celebrates-45-years-serving-the-ozarks-beyond"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/Snyder-Construction-Group-Logo.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Feb 02, 2023
                  </div>
                  <a
                    href="/news/snyder-construction-group-celebrates-45-years-serving-the-ozarks-beyond"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group Celebrates 45 Years Serving the
                    Ozarks &amp; Beyond
                  </a>
                  In early 1978, Larry Snyder founded a construction company
                  after decades of learning the industry through hard work and
                  ...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-groups-clay-alexander-named-aia-superintendent-of-the-year-award"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/Photo-Nov-10-2022-8-39-24-PM.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Dec 20, 2022
                  </div>
                  <a
                    href="/news/snyder-construction-groups-clay-alexander-named-aia-superintendent-of-the-year-award"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group’s Clay Alexander Named AIA
                    Superintendent of the Year Award
                  </a>
                  Snyder Construction Group is proud to announce the Springfield
                  chapter of the American Institute of Architects (AIA) awa...
                </div>
              </article>
              <article className="col-span-12 md:col-span-6 lg:col-span-4 mb-12 flex md:grid justify-center">
                <div className="md:max-w-none max-w-xl">
                  <div className="flex justify-center">
                    <a
                      href="/news/snyder-construction-group-president-dusty-emmert-recognized-as-one-of-the-areas-most-influential-leaders"
                      className="inline-block border-brand-yellow border-b-8"
                    >
                      <img src="/news/images/biz-100-cover.jpg" />
                    </a>
                  </div>
                  <div className="mt-10 mb-2 font-bold text-sm uppercase">
                    Nov 11, 2022
                  </div>
                  <a
                    href="/news/snyder-construction-group-president-dusty-emmert-recognized-as-one-of-the-areas-most-influential-leaders"
                    className="font-bold text-xl block"
                  >
                    Snyder Construction Group President, Dusty Emmert,
                    recognized as one of the area's most influential leaders.
                  </a>
                  Please help us congratulate our President, Dusty Emmert, for
                  being named one of 417-Land's most influential leaders by B...
                </div>
              </article>
            </div>
            <div className="flex justify-center">
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px bg-white"
                aria-label="Pagination"
              >
                <a
                  href
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  {/* Heroicon name: solid/chevron-left */}
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="/news"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-maroon text-sm font-medium text-brand-yellow font-bold"
                >
                  1
                </a>
                <a
                  href="/news?page=2"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="/news?page=3"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="/news?page=4"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  4
                </a>
                <a
                  href="/news?page=2"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  {/* Heroicon name: solid/chevron-right */}
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </section>
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
