function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://360-project1.vercel.app/assets/home/logo1.png"
            alt="Logo"
            className="logo-img"
          />
        </div>

        <ul className="nav-links">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
          <li>Home</li>
          <li>About</li>
          <li>
            Writing Services <span className="arrow">▼</span>
          </li>
          <li>Genre</li>
          <li>Marketing</li>
          <li>Publication</li>
          <li>Printing</li>
          <li>Cover Design</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <div className="call-btn">
          <a href="tel:+18722829790">
            <button>
              <span className="phone"> +1 (872) 282-9790</span>
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Home;
