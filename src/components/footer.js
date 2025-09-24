function Footer() {
  return (
    <>
      <footer className="footer-root">
        <div className="footer-left">
          <img
            className="ft"
            src="https://360-project1.vercel.app/assets/home/logo1.png"
            alt="Logo"
          />

          <div className="footer-text">
            <p className="pr">
              We see ourselves as your trusted ally, providing the expertise and
              support you need to achieve your publishing dreams. For every
              author, we try to deliver the best only as we don’t want to waste
              your hard-earned money.
            </p>

            <p className="pr">
              We will guarantee that your project is finished within the
              designated timeframe and to the highest quality. Your investment
              is in safe hands with our experienced team.
            </p>
          </div>

          {/* Social Icons */}
          <div className="ic">
            <div className="flex space-x-3">
              <a
                className="ic1"
                aria-label="Facebook"
                href="http://localhost:3000/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>

              <a
                className="ic2"
                href="http://localhost:3000/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  stroke-width="0"
                  viewBox="0 0 384 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                </svg>
              </a>

              <a
                className="ic3"
                aria-label="Instagram"
                href="http://localhost:3000/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div>
            <h4 className="text-base sfpro font-medium text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="hr3">
              <li>
                <a className="hr" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hr" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hr" href="/blogs">
                  Blogs
                </a>
              </li>
              <li>
                <a className="hr" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sfpro font-medium text-gray-900 mb-4">
              Our Services
            </h4>
            <ul className="hr3">
              <li>
                <a className="hr" href="/services-seo">
                  Seo Writing
                </a>
              </li>
              <li>
                <a className="hr" href="/article-writing">
                  Article Writing
                </a>
              </li>
              <li>
                <a className="hr" href="/magazine-writing">
                  Magazine Writing
                </a>
              </li>
              <li>
                <a className="hr" href="/book-editing">
                  Book Editing
                </a>
              </li>
              <li>
                <a className="hr" href="/web-copywriting">
                  Web Copy Writing
                </a>
              </li>
              <li>
                <a className="hr" href="/press-release">
                  Press Release
                </a>
              </li>
              <li>
                <a className="hr" href="/script-writing">
                  Script Writing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="https://360-project1.vercel.app/assets/home/payment1.png"
              alt="DMCA Protected"
              class="dmc"
            ></img>
            <h4 className="text-base sfpro font-medium text-gray-900 mb-4">
              Contact Us
            </h4>

            <ul className="hr3">
              <li>
                <a
                  className="hr"
                  href="mailto:info@thepenguinbookpublisher.com"
                >
                  <img
                    alt="email"
                    src="https://www.nicepng.com/png/detail/90-903587_email-icon-icon-email-orange-png.png"
                    class="email"
                  ></img>{" "}
                  info@thepenguinbookpublisher.com
                </a>
              </li>
              <li>
                <a className="hr" href="tel:+18722829790">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-orange-primary text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                  +1 (872) 282-9790
                </a>
              </li>
              <li>
                <span className="hr">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-orange-primary text-[18px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                  North Milwaukee Avenue, Chicago IL, 60641
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
