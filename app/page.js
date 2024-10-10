import Script from "next/script";

export default function Home() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <base href="/" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/home/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/home/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/home/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/home/images/safari-pinned-tab.svg"
        color="#fdb927"
      />
      <meta name="msapplication-TileColor" content="#fdb927" />
      <meta name="theme-color" content="#ffffff" />

      <Script src="/home/scripts/app.432b92c.js" />
      <Script src="/home/scripts/f75f609c86.js" />
      <Script src="/home/scripts/glider.3a6232b.js" />
      <Script src="/home/scripts/gtm.js" />
      <Script src="/home/scripts/parallax.7a2e277.js" />
      <Script src="/home/scripts/polyfills.pro~gli.e3f7486.js" />
      <Script src="/home/scripts/vendors.pro~gli.fb47926.js" />

      <meta
        name="facebook-domain-verification"
        content="93cgmjicq8ajmeatdew6khsm7uoise"
      />
      <title>Welcome to Snyder Construction Group, A General Contractor</title>
      <meta name="generator" content="SEOmatic" />
      <meta name="keywords" content="snyder construction group" />
      <meta
        name="description"
        content="For more than 40 years, Snyder Construction Group has been a leader for commercial construction and general contracting in Springfield, Missouri."
      />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="robots" content="all" />
      <meta content="LarrySnyderandCompany" property="fb:profile_id" />
      <meta content="en_US" property="og:locale" />
      <meta content="Snyder Construction Group" property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content="/" property="og:url" />
      <meta
        content="Welcome to Snyder Construction Group, A General Contractor"
        property="og:title"
      />
      <meta
        content="For more than 40 years, Snyder Construction Group has been a leader for commercial construction and general contracting in Springfield, Missouri."
        property="og:description"
      />
      <meta content="/home/images/og.jpg" property="og:image" />
      <meta content={1200} property="og:image:width" />
      <meta content={630} property="og:image:height" />
      <meta
        content="The Snyder Construction Group logo"
        property="og:image:alt"
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
                email us at info@yildiz-construction.com
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
        <div className="header header--lg header--video">
          <video
            className="header__video"
            poster="https://asset.snydercg.com/snyder-construction-group-homepage-poster.jpg?mtime=20210318183617&focal=none"
            playsInline
            autoPlay
            loop
            muted
            aria-hidden="true"
          >
            <source src="/home/media/video.mp4" type="video/mp4" />
          </video>
          <div className="header__content" data-aos="fade-left">
            <div className="container container--lg u-color-text-white padding-v--lg">
              <div className="u-overflow-hidden u-flex margin-v--sm-bottom">
                <p className="header__tagline">Since 1978</p>
              </div>
              <h1 className="header__heading text-display-1">
                Complete <strong>Construction</strong> Services
              </h1>
              <div className="button-group padding-v--sm-top">
                <a className="btn " href="/projects">
                  See Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="chevron chevron--right"
          data-aos="fade-down"
          data-aos-delay={500}
        />
        <section className="u-overflow-hidden ">
          <div className="container container--lg padding-v--xl">
            <div className="split-content split-content--centered">
              <div className="split-content__item " data-aos="fade">
                <div className="split-content__item-body">
                  <div className="text-content margin-v--sm-bottom">
                    <h2 className="text-display-4">
                      Unsere Leistungen sind auf Sie ausgerichtet
                    </h2>
                    <p>
                      Yildiz-Construction GmbH als führendes
                      Generalbauunternehmen in Frankfurt hat das Ziel, die volle
                      Koordination und einwandfreie Realisierung Ihres
                      Bauvorhaben für das beste Preis-Leistungsverhältnis zu
                      gewährleisten. Ob Sie Ihr Haus, Wohnung, Bürogebäude oder
                      Gastronomiefläche komplett aus einer Hand sanieren oder
                      umbauen wünschen – die Zufriedenheit unserer Kunden
                      erreichen wir mit der Professionalität unserer
                      Spezialisten, die mit Leidenschaft und strukturierter
                      Arbeitsweise jedes Projekt zum Erfolg bringen. Profitieren
                      Sie ebenfalls von unseren zahlreichen Vorteilen und
                      saisonalen Aktionen.
                    </p>
                  </div>
                  <div className="button-group">
                    <a className="btn btn--secondary" href="/who-we-are">
                      Learn More About Our Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="u-overflow-hidden padding-v--xl bg-light-grey">
          <div className="container container--lg" data-aos="fade">
            <h2
              style={{ padding: "0px 0px 20px 0px" }}
              className="text-display-1 u-text-uppercase u-text-outline"
              data-parallax
              data-parallax-amount={40}
            >
              Featured <br />
              Projects
            </h2>
          </div>
          <div>
            <div className="glider-count-6" data-glider>
              {/* <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/first.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Häuser</h3>
                              <p class="desc">
                                  Sanierung & Renovierung & Modernisierung & Umbau & Erweiterung
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>


              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/second.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Wohnungen</h3>
                              <p class="desc">
                                  Sanierung & Renovierung & Modernisierung & Umbau
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>


              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/third.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Umbau Von Büroflächen</h3>
                              <p class="desc">
                                  Renovierung & Sanierung & Umbau
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>


              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/fourth.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Gastronomieflächen </h3>
                              <p class="desc">
                                  Aufbau & Renovierung & Neubau
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>


              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/fifth.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Photovoltaikanlagen </h3>
                              <p class="desc">
                                  Beratung & Planung & Installation
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>


              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/sixth.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Aussenanlagen </h3>
                              <p class="desc">
                                  Terrassenüberdachung & Carport & Wintergarten
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>


              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/seventh.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Fassaden</h3>
                              <p class="desc">
                                  Energetische Sanierung
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>

              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/eighth.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Überdachungen </h3>
                              <p class="desc">
                                  Terrasenüberdachung & Wintergaren & Carport
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>

              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/ninth.jpg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Gebäudemodernisierung</h3>
                              <p class="desc">
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div>


              <div class="tile-new-section">
                  <a href="/">

                      <div class="imgbox-new">
                          <img class="first" alt="first" height="360" loading="lazy"
                              src="/home/images/tenth.jpeg" width="640" />
                      </div>
                      <div class="overlay-new">
                          <div class="textbox-new">
                              <h3>Haustechnick </h3>
                              <p class="desc">
                                  Heizung & Klima & Lüftung & Sanitär
                              </p>
                          </div>
                          <div class="padding"></div>
                      </div>

                  </a>
              </div> */}
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/first.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Häuser</h3>
                        <p className="desc">
                          Sanierung &amp; Renovierung &amp; Modernisierung &amp;
                          Umbau &amp; Erweiterung
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/second.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Wohnungen </h3>
                        <p className="desc">
                          Sanierung &amp; Renovierung &amp; Modernisierung &amp;
                          Umbau
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/third.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Umbau Von Büroflächen </h3>
                        <p className="desc">
                          Renovierung &amp; Sanierung &amp; Umbau
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/fourth.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Gastronomieflächen </h3>
                        <p className="desc">
                          Aufbau &amp; Renovierung &amp; Neubau
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/fifth.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Photovoltaikanlagen </h3>
                        <p className="desc">
                          Beratung &amp; Planung &amp; Installation
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/sixth.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Aussenanlagen </h3>
                        <p className="desc">
                          Terrassenüberdachung &amp; Carport &amp; Wintergarten
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/seventh.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Fassaden </h3>
                        <p className="desc">Energetische Sanierung</p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/eighth.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Überdachungen </h3>
                        <p className="desc">
                          Terrasenüberdachung &amp; Wintergaren &amp; Carport
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/ninth.jpg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Gebäudemodernisierung </h3>
                        <p className="desc"></p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="padding-h--sm padding-v--xs-bottom"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="tile-new-section">
                  <a href="/">
                    <div className="imgbox-new">
                      <img
                        className="first"
                        alt="first"
                        loading="lazy"
                        src="/home/images/tenth.jpeg"
                      />
                    </div>
                    <div className="overlay-new">
                      <div className="textbox-new">
                        <h3>Haustechnick </h3>
                        <p className="desc">
                          Heizung &amp; Klima &amp; Lüftung &amp; Sanitär
                        </p>
                      </div>
                      <div className="padding" />
                    </div>
                  </a>
                </div>
              </div>
              {/* <div class="padding-h--sm padding-v--xs-bottom" data-aos="fade" data-aos-delay="300">
                  <a href="/projects/oreilly-auto-parts-corporate-office" class="u-block u-relative">
                      <img class="u-block margin-v--sm-bottom"
                          src="/home/images/OReilly-Corporate-Office_Web-1.jpg"
                          alt="O'Reilly Corporate Office at Dusk">
                      <span class="tile__btn btn--icon btn--icon-lg"></span>
                  </a>
                  <h3 class="text-display-4 margin-v--xs-bottom">O'Reilly Auto Parts Corporate Office</h3>
                  <p>Springfield, MO | Corporate</p>
              </div> */}
              {/* <div class="padding-h--sm padding-v--xs-bottom" data-aos="fade" data-aos-delay="400">
                  <a href="/projects/innovative-dental" class="u-block u-relative">
                      <img class="u-block margin-v--sm-bottom"
                          src="/home/images/DSC_3539-HDR-Edit.jpg" alt="Innovative Dental">
                      <span class="tile__btn btn--icon btn--icon-lg"></span>
                  </a>
                  <h3 class="text-display-4 margin-v--xs-bottom">Innovative Dental</h3>
                  <p>Ozark, MO | Healthcare</p>
              </div> */}
              {/* <div class="padding-h--sm padding-v--xs-bottom" data-aos="fade" data-aos-delay="500">
                  <a href="/projects/hotel-vandivort" class="u-block u-relative">
                      <img class="u-block margin-v--sm-bottom" src="/home/images/hotel-v.jpg"
                          alt="Hotel Vandivort Exterior">
                      <span class="tile__btn btn--icon btn--icon-lg"></span>
                  </a>
                  <h3 class="text-display-4 margin-v--xs-bottom">Hotel Vandivort</h3>
                  <p>Springfield, MO | Historic Preservation</p>
              </div> */}
              {/* <div class="padding-h--sm padding-v--xs-bottom" data-aos="fade" data-aos-delay="600">
                  <a href="/projects/willard-fire-station" class="u-block u-relative">
                      <img class="u-block margin-v--sm-bottom"
                          src="/home/images/Willard-Fire-Station-1_Web-4.jpg"
                          alt="Willard Fire State Side View With Bays Open">
                      <span class="tile__btn btn--icon btn--icon-lg"></span>
                  </a>
                  <h3 class="text-display-4 margin-v--xs-bottom">Willard Fire Station</h3>
                  <p>Willard, MO | Civic &amp; Community</p>
              </div> */}
            </div>
          </div>
          <div className="container container--lg padding-v--lg-top">
            <p className="u-text-align-center">
              <a href="/projects" className="btn btn--secondary">
                View All
              </a>
            </p>
          </div>
        </section>
        <div className="padding-v--xl">
          <div className="marquee marquee--2">
            <div className="marquee__track">
              <ul className="marquee__list">
                <li className="marquee__item">
                  <a href="/capabilities">Pre-Construction</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">General Contracting</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">Design-Build</a>
                </li>
              </ul>
              <ul className="marquee__list" aria-hidden="true">
                <li className="marquee__item">
                  <a href="/capabilities">Pre-Construction</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">General Contracting</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">Design-Build</a>
                </li>
              </ul>
              <ul className="marquee__list" aria-hidden="true">
                <li className="marquee__item">
                  <a href="/capabilities">Pre-Construction</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">General Contracting</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">Design-Build</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="marquee marquee--2">
            <div className="marquee__track">
              <ul className="marquee__list">
                <li className="marquee__item">
                  <a href="/capabilities">Construction Management</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">Self Perform</a>
                </li>
              </ul>
              <ul className="marquee__list" aria-hidden="true">
                <li className="marquee__item">
                  <a href="/capabilities">Construction Management</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">Self Perform</a>
                </li>
              </ul>
              <ul className="marquee__list" aria-hidden="true">
                <li className="marquee__item">
                  <a href="/capabilities">Construction Management</a>
                </li>
                <li className="marquee__item">
                  <a href="/capabilities">Self Perform</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section
          className="bg-charcoal-grey bg-image bg-image--overlay padding-v--xl"
          style={{}}
          data-parallax-background
        >
          <div className="container bg-image__content">
            <div className="u-text-align-center u-color-text-white">
              <div className="text-display-icon">
                <img
                  src="/home/images/badge.d54d5c4.svg"
                  alt
                  data-aos="fade-down"
                />
              </div>
              <div className="text-content" data-aos="fade-up">
                <h2 className="text-display-4 text-content__branding">
                  WAS MACHT JEDES PROJEKT ERFOLGREICH
                </h2>
              </div>
              <div className="text-content" data-aos="fade-up">
                <h2 className="text-display-4 text-content__branding">
                  Unsere Stärke zur effizienten Projektdurchführung
                </h2>
                <div className="text-content__branding">
                  <p>
                    Alle Leistungen aus einer Hand: Als Generalbauunternehmen
                    bieten wir Ihnen alle Leistungen rund um Ihr Projekt aus
                    einer Hand an. Dazu gehören unter anderem die individuelle
                    Planung und persönliche Beratung, sowie die Koordination der
                    ausführenden Gewerke. Vom Innenausbau bis zur Installation
                    Ihrer Photovoltaikanlage – Wir sind für Sie da!
                    <br />
                    <br />
                    Fundiertes Fachwissen: In unserem Unternehmen bündeln wir
                    alle benötigten Kompetenzen für eine fachlich einwandfreie
                    Ausführung unserer Bauprojekte. Dadurch haben Sie
                    Gewissheit, dass alle Arbeiten mit höchster Qualität und zu
                    Ihrer vollsten Zufriedenheit durchgeführt werden.
                    <br />
                    <br />
                    Maximale Zuverlässigkeit &amp; Termintreue: Wir stellen
                    sicher, dass alle erforderlichen Maßnahmen absolut korrekt
                    und termingetreu umgesetzt werden. Über alle Fortschritte
                    halten wir Sie stets transparent auf dem Laufenden.
                    <br />
                    <br />
                    Moderne Lösungen &amp; Arbeitsweisen: Nicht nur bei der
                    Ausführung der Arbeiten setzen wir auf modernste Techniken –
                    wir nutzen die Möglichkeiten der Digitalisierung bereits in
                    der Planungsphase. Dank BIM Unterstützung und 3D Entwürfen
                    erhalten Sie von Anfang an eine realistische Vorstellung der
                    geplanten Maßnahmen.
                    <br />
                    <br />
                    Flexible Lösungen für jeden Anspruch: Für uns steht die
                    Realisierung Ihrer individuellen Wünsche im Mittelpunkt. Wir
                    prüfen auch kurzfristige Änderungswünsche auf Machbarkeit
                    und sind jederzeit als Ansprechpartner für Sie erreichbar.
                  </p>
                </div>
              </div>
              <div className="button-group padding-v--md-top" data-aos="fade">
                <a className="btn btn--primary" href="/careers">
                  Learn More About Career Opportunities
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="padding-v--xl">
          <div className="container container--lg">
            <div className="u-text-align-center" data-aos="fade-down">
              <div className="text-content u-mx-auto w-full-tablet-large w-3/4">
                <h2 className="text-display-4">Die Yildiz-Philosophie</h2>
                <p>
                  Als Baupartner glauben wir, dass ein sachkundiges, gesundes
                  und engagiertes Team unseren Kunden, die uns ihr Vertrauen
                  schenken, ein hervorragendes Endprodukt liefern wird.
                </p>
              </div>
              <div className="button-group padding-v--md-top">
                <a className="btn btn--secondary" href="/who-we-are">
                  Learn More About Our Team
                </a>
              </div>
            </div>
            <div className="icon-callout-set  padding-v--sm-top">
              <div className="icon-callout-set__callouts-wrapper">
                <div
                  className="icon-callout"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="icon-callout__inner">
                    <div className="icon-callout__icon-wrapper">
                      <img src="/home/images/Quality.svg" alt />
                    </div>
                    <div className="icon-callout__text-wrapper">
                      <div className="icon-callout__heading padding-v--xs-bottom">
                        Hohe Qualität
                      </div>
                      <p>
                        Wir haben hart gearbeitet, um unseren Ruf für qualitativ
                        hochwertige Arbeit zu verdienen und aufrechtzuerhalten,
                        und konnten uns daher über die anhaltenden Beziehungen
                        zu Stammkunden freuen. Mit unserem Team aus
                        qualifiziertem und erfahrenem Personal sowie unseren
                        vorab qualifizierten Handelspartnern und Lieferanten
                        wird jedes Projekt nach den höchsten Standards
                        durchgeführt.
                      </p>
                      <div className="button-group padding-v--md-top"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="icon-callout"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon-callout__inner">
                    <div className="icon-callout__icon-wrapper">
                      <img src="/home/images/Budget.svg" alt />
                    </div>
                    <div className="icon-callout__text-wrapper">
                      <div className="icon-callout__heading padding-v--xs-bottom">
                        Im Budget
                      </div>
                      <p>
                        Unsere unübertroffenen Vorbauleistungen, kombiniert mit
                        unserer langjährigen Erfahrung als Generalunternehmer
                        mit Sitz in Springfield, stellen sicher, dass jedes
                        Projekt mit einem genauen, umfassenden und vollständigen
                        Budget beginnt. Wir sind während des gesamten Entwurfs-
                        und Bauprozesses bestrebt, das Budget einzuhalten.
                      </p>
                      <div className="button-group padding-v--md-top"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="icon-callout"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon-callout__inner">
                    <div className="icon-callout__icon-wrapper">
                      <img src="/home/images/Calendar.svg" alt />
                    </div>
                    <div className="icon-callout__text-wrapper">
                      <div className="icon-callout__heading padding-v--xs-bottom">
                        Planmäßig
                      </div>
                      <p>
                        Projekte termingerecht oder vorzeitig abzuschließen ist
                        unser Standard. Wir können diesen Standard durch
                        Kommunikation und Klarheit in jeder Phase für alle
                        Beteiligten aufrechterhalten. Mit unseren wöchentlichen
                        Meetings und vorausschauenden Zeitplänen stellen wir als
                        Generalunternehmer in Frankfurt sicher, dass jedes
                        Projekt im Zeitplan bleibt.
                      </p>
                      <div className="button-group padding-v--md-top"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="icon-callout"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon-callout__inner">
                    <div className="icon-callout__icon-wrapper">
                      <img src="/home/images/Checklist.svg" alt />
                    </div>
                    <div className="icon-callout__text-wrapper">
                      <div className="icon-callout__heading padding-v--xs-bottom">
                        Der Sicherheit verpflichtet
                      </div>
                      <p>
                        Sicherheit hat für uns Priorität, denn sie ist gut fürs
                        Geschäft und außerdem richtig. Alle Mitarbeiter und
                        Handelspartner halten sich an einen umfassenden
                        Sicherheitsplan. Mit wöchentlichen Besprechungen und
                        dokumentierten täglichen Inspektionen als
                        Generalunternehmer in Frankfurt bleibt die Sicherheit
                        während des gesamten Projekts eine Priorität.
                      </p>
                      <div className="button-group padding-v--md-top"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="icon-callout"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="icon-callout__inner">
                    <div className="icon-callout__icon-wrapper">
                      <img src="/home/images/Handshake.svg" alt />
                    </div>
                    <div className="icon-callout__text-wrapper">
                      <div className="icon-callout__heading padding-v--xs-bottom">
                        Beziehungsorientiert
                      </div>
                      <p>
                        Beziehungen sind der Eckpfeiler unseres Geschäfts. Die
                        Qualität unserer Arbeit, die geringe Fluktuation und die
                        hohe Wiederkehrrate unserer Kunden sind Ausdruck der
                        Wertschätzung und des Respekts gegenüber unseren
                        Mitarbeitern, Handelspartnern, Designberatern und Kunden
                        als Generalunternehmer in Frankfurt.
                      </p>
                      <div className="button-group padding-v--md-top"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="u-overflow-hidden bg-light-grey">
      <div class="container container--lg padding-v--xl">
          <div class="split-content split-content--centered">
              <div class="split-content__item w-full-phone w-1/2" data-aos="fade">
                  <div class="split-content__item-body">
                      <div class="text-content margin-v--sm-bottom">
                          <h2 class="text-display-4">Larry Snyder &amp; Company is Now Snyder Construction Group
                          </h2>
                          <p>Founded in 1978, Larry Snyder &amp; Company has a history of strong partnerships and
                              consistent, reliable work. Larry learned the industry at an early age, growing up
                              with his family working construction, and he went on to build a well-respected,
                              financially strong company with a portfolio of recognizable projects throughout the
                              region.</p>
                          <p>Today, Snyder Construction Group continues a legacy of knowledge, relationships, and
                              expertise, using modern technology and old-fashioned relationships to grow
                              connections and capabilities.</p>
                      </div>
                      <div class="button-group">
                      </div>
                  </div>
              </div>
              <div class="split-content__item w-full-phone w-1/2 u-text-align-center" data-aos="fade">
                  <div class="wipe-in">
                      <img src="/home/images/SNY_PhotoCollage.png" alt="SNY Photo Collage">
                  </div>
              </div>
          </div>
      </div>
  </section> */}
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
              <a href="/privacy-policy">Privacy Policy</a>
            </span>
            <span className="footer__secondary-link">
              <a href="/terms-conditions">Terms &amp; Conditions</a>
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
