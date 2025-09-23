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
