import React from "react";
import Script from "next/script";

export default function page() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/projects/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/projects/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/projects/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/projects/images/safari-pinned-tab.svg"
        color="#fdb927"
      />

      <Script src="/static/js/app.432b92c.js"></Script>
      <Script src="/static/js/f75f609c86.js"></Script>
      <Script src="/static/js/gtm.js"></Script>

      <meta name="msapplication-TileColor" content="#fdb927" />
      <meta name="theme-color" content="#ffffff" />
      {/* Global site tag (gtag.js) - Google Analytics */}

      <meta
        name="facebook-domain-verification"
        content="93cgmjicq8ajmeatdew6khsm7uoise"
      />
      <title>
        Our Projects by a General Contractor in Springfield, Missouri
      </title>
      <meta name="generator" content="SEOmatic" />
      <meta name="keywords" content="The Snyder Construction Group logo" />
      <meta
        name="description"
        content="See the projects of Snyder Construction Group, a prominent commercial contractor and general contractor in Springfield, Missouri."
      />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="robots" content="all" />
      <meta content="LarrySnyderandCompany" property="fb:profile_id" />
      <meta content="en_US" property="og:locale" />
      <meta content="Snyder Construction Group" property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content="/projects" property="og:url" />
      <meta
        content="Our Projects by a General Contractor in Springfield, Missouri"
        property="og:title"
      />
      <meta
        content="See the projects of Snyder Construction Group, a prominent commercial contractor and general contractor in Springfield, Missouri."
        property="og:description"
      />
      <meta content="/projects/images/og.jpg" property="og:image" />
      <meta content={1200} property="og:image:width" />
      <meta content={630} property="og:image:height" />
      <meta
        content="The Snyder Construction Group logo"
        property="og:image:alt"
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .filter-general-container {\n            display: flex;\n            align-items: flex-start;\n            justify-content: flex-start;\n            flex-direction: column;\n            padding: 0px 40px 0px 40px;\n        }\n\n        select#categoryFilter {\n            border: 3px solid #000;\n            outline: none;\n        }\n    ",
        }}
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
                  src="/projects/images/yildiz-logo.png"
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
        <div className="header header--sm header--image" style={{}}>
          <div className="header__content" data-aos="fade-left">
            <div className="container container--lg u-color-text-white padding-v--lg">
              <h1 className="header__heading text-display-1">
                Our <strong>Projects</strong>
              </h1>
              <div className="button-group padding-v--sm-top">
                <a className="btn " href="/contact">
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="chevron " data-aos="fade-down" data-aos-delay="500"></div> */}
        {/* <div data-projects=""></div>


  <div style="padding:0px 40px 0px 40px;" class="tile-set padding-v--md"> */}
        <div className="filter-general-container">
          <div style={{ margin: "40px 0px 40px 0px" }}>
            <select id="categoryFilter">
              <option value="all">Filter by Industry</option>
              <option value="Multi Family & Mixed Use">
                Multi Family &amp; Mixed Use
              </option>
              <option value="Civic & Community">Civic &amp; Community</option>
              <option value="General Commercial">General Commercial</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail">Retail</option>
              <option value="Hospitality & Entertainment">
                Hospitality &amp; Entertainment
              </option>
              <option value="Education">Education</option>
              <option value="Senior Living">Senior Living</option>
              <option value="Corporate">Corporate</option>
            </select>
          </div>
          <div className="tile-set__tiles-wrapper" style={{}}>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/meridian-apartments"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Meridian Apartments"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">
                    Multi Family &amp; Mixed Use
                  </span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Meridian Apartments
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/north-point-church"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="North Point Church"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Civic &amp; Community</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    North Point Church
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/keystone-family-home"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Keystone Family Homes"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">
                    Multi Family &amp; Mixed Use
                  </span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Keystone Family Homes
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/preserves-at-ardmore"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Preserves at Ardmore"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">
                    Multi Family &amp; Mixed Use
                  </span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Preserves at Ardmore
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/hill-city-church"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Hill City Church"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Civic &amp; Community</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Hill City Church
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/u-haul-storage-colombia-mo"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="U-Haul Climate Controlled Storage - Columbia, MO"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">General Commercial</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    U-Haul Climate Controlled Storage - Columbia, MO
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/mazda-springfield"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Mazda - Springfield"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">General Commercial</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Mazda - Springfield
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/moon-city-lofts"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Moon City Lofts"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">
                    Multi Family &amp; Mixed Use
                  </span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Moon City Lofts
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/innovative-dental"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Innovative Dental"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Healthcare</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Innovative Dental
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/dollar-general-battlefield"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Dollar General - Battlefield"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Retail</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Dollar General - Battlefield
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/big-shots-golf"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="BigShots Golf"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">
                    Hospitality &amp; Entertainment
                  </span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    BigShots Golf
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/darr-agacademy"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Darr AgAcademy"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Education</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Darr AgAcademy
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/turners-rock"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Turner's Rock"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Senior Living</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Turner's Rock
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/hollister-police-station"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Hollister Police Department & Public Works"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Civic &amp; Community</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Hollister Police Department &amp; Public Works
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/thrive-medical-cannabis-dispensary"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Thrive Medical Cannabis Dispensary"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Retail</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Thrive Medical Cannabis Dispensary
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
            <article className="tile" style={{}}>
              <a
                href="https://snydercg.com/projects/russell-cellular"
                className="tile__wrapper tile__wrapper--bg-image-hover"
                style={{}}
                title="Russell Cellular Corporate Headquarters"
              >
                <div className="tile__content-wrapper">
                  <span className="tile__meta">Corporate</span>
                  <h2 className="tile__heading text-lg u-color-text-white">
                    Russell Cellular Corporate Headquarters
                  </h2>
                </div>{" "}
                <span className="tile__btn" />
              </a>
            </article>
          </div>
        </div>
        <section className="u-overflow-hidden padding-v--xl">
          <div className="container container--lg" data-aos="fade">
            <h2
              className="text-display-1 u-text-uppercase u-text-outline"
              data-parallax
              data-parallax-amount={40}
            >
              In Progress
            </h2>
          </div>
          <div>
            <div className="glider-count-13" data-glider>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={100}
              >
                <a
                  href="/projects/parkline-towers"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/20240826-Parkline-Towers-Flight_Photos-2.jpg"
                    alt="Parkline Towers"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Parkline Towers
                </h3>
                <p>Kalispell, Montana | Multi Family &amp; Mixed Use</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <a
                  href="/projects/republic-refrigeration"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/Republic-Refrigeration-9-9-24-Aerial-1.jpg"
                    alt="Republic Refrigeration"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Republic Refrigeration
                </h3>
                <p>Ozark, Missouri | Industrial &amp; Manufacturing</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={300}
              >
                <a
                  href="/projects/oreilly-distribution-center"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/OReilly-Distribution-Center-8-26-24-Aerial-1.jpg"
                    alt="O'Reilly Automotive Distribution Center"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  O'Reilly Automotive Distribution Center
                </h3>
                <p>Springfield, Missouri | Industrial &amp; Manufacturing</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={400}
              >
                <a
                  href="/projects/u-haul-self-storage-ozark-missouri"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/U-Haul-Ozark-5-15-24-Aerial-1.jpg"
                    alt="U-Haul Self Storage - Ozark, Missouri"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  U-Haul Self Storage - Ozark, Missouri
                </h3>
                <p>Ozark, Missouri | General Commercial</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={500}
              >
                <a
                  href="/projects/the-reserves-at-magnolia"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/6_2024-09-16-143323.png"
                    alt="The Reserves at Magnolia"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  The Reserves at Magnolia
                </h3>
                <p>Denton, Texas | Multi Family &amp; Mixed Use</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={600}
              >
                <a
                  href="/projects/wellington-family-homes"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/1.jpeg"
                    alt="Wellington Family Homes"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Wellington Family Homes
                </h3>
                <p>Wellston, Missouri | Multi Family &amp; Mixed Use</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={700}
              >
                <a
                  href="/projects/forvis-springfield"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/3_2024-09-16-135817.png"
                    alt="FORVIS- Office Renovation"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  FORVIS- Office Renovation
                </h3>
                <p>Springfield, Missouri | Corporate</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={800}
              >
                <a
                  href="/projects/salina-rad-homes"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/IMG_6975.jpg"
                    alt="Salina RAD Homes"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Salina RAD Homes
                </h3>
                <p>Salina, Kansas | Multi Family &amp; Mixed Use</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={900}
              >
                <a
                  href="/projects/fairfield-inn-towneplace-suites"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/5_2024-09-16-142704.png"
                    alt="Fairfield Inn & Towneplace Suites"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Fairfield Inn &amp; Towneplace Suites
                </h3>
                <p>Sikeston, Missouri | Hospitality &amp; Entertainment</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={1000}
              >
                <a
                  href="/projects/mission-ridge-at-quail-creek"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/Mission-Ridge-Aerial-1_2023-05-25-140328.jpg"
                    alt="Mission Ridge at Quail Creek"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Mission Ridge at Quail Creek
                </h3>
                <p>Springfield, Mo | Senior Living</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={1100}
              >
                <a
                  href="/projects/southern-hills-shopping-center"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/Southern-Hills-Shopping-Center-9-5-24-Aerial-1.jpg"
                    alt="Southern Hills Shopping Center"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Southern Hills Shopping Center
                </h3>
                <p>Springfield, Missouri | Retail</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={1200}
              >
                <a
                  href="/projects/mh-strategies-family-rad"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/2_2022-09-16-151256.jpg"
                    alt="Home Renovation Outside View 4"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  MH Strategies Family RAD I &amp; II
                </h3>
                <p>Memphis, Tennessee | Multi Family &amp; Mixed Use</p>
              </div>
              <div
                className="u-mx-auto padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={1300}
              >
                <a
                  href="/projects/canterbury-village"
                  className="u-block u-relative"
                >
                  <img
                    className="u-block margin-v--sm-bottom"
                    src="/projects/images/2_2024-09-16-141058.png"
                    alt="Canterbury Village"
                  />
                  <span className="tile__btn btn--icon btn--icon-lg" />
                </a>
                <h3 className="text-display-4 margin-v--xs-bottom">
                  Canterbury Village
                </h3>
                <p>Winfield, KS | Multi Family &amp; Mixed Use</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-light-grey bg-image bg-image--overlay padding-v--xl"
          style={{}}
          data-parallax-background
        >
          <div className="container bg-image__content">
            <div className="u-text-align-center u-color-text-white">
              <div className="text-content" data-aos="fade-up">
                <blockquote className="text-content__branding">
                  <div className="font-heading text-display-5 margin-v--sm-bottom">
                    <p>
                      "We need a partner that our team can work with who is
                      transparent, resourceful, and shares in our urgency in{" "}
                      <strong>delivering what was promised </strong>to our
                      clients—and on time. Snyder is 100% at{" "}
                      <strong>coming in under budget</strong> on all of our
                      buildings, which speaks to the attention to detail and
                      thought that goes into understanding the complexity of our
                      projects."
                      <br />
                    </p>
                  </div>
                  <cite>Doug Pitt, Pitt Development Group</cite>
                </blockquote>
              </div>
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
                      href="/projects"
                    >
                      Projects
                    </a>
                  </span>
                  <span className="footer__nav-item">
                    <a className="footer__nav-link" href="/who-we-are">
                      Who We Are
                    </a>
                  </span>
                  <span className="footer__nav-item">
                    <a className="footer__nav-link" href="/capabilities">
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
