function Topclass() {
  return (
    <section className="topclass">
      {/* Left Side Content */}
      <div className="topclass-content">
        <h2>A Top-Class Agency For Books</h2>
        <h1>When It Comes To Publishing, We Are Unmatched</h1>
        <p>
          The Penguin Book Publisher stands tall as a leading publishing
          powerhouse, renowned for its expansive expertise across diverse
          genres, formats, and distribution channels. We've proudly helped
          hundreds of aspiring writers transform into published authors,
          solidifying our reputation in the industry. When you choose The
          Penguin Book Publisher, you receive a comprehensive suite of services.
        </p>
        <h3 className="provide">We Provide:</h3>
        <div className="services">
          <ul>
            <li>Expert manuscript formatting</li>
            <li>Eye-catching cover design</li>
            <li>Global distribution through major retailers</li>
            <li>eBook conversion and optimization</li>
            <li>Author website development</li>
          </ul>
          <ul>
            <li>Proofreading and editing</li>
            <li>Strategic marketing and promotion</li>
            <li>Print-on-demand services</li>
            <li>Audiobook production and distribution</li>
            <li>Ongoing support and consultation</li>
          </ul>
        </div>
        <a href="tel:+18722829790">
          <button className="bt1">Connect with Us!</button>
          <button className="bt2">Call us NOW!</button>
        </a>
      </div>

      <div className="topclass-image">
        <img
          src="https://360bookpublishers.com/images/broader.png"
          alt="Bookstore"
        />
      </div>
    </section>
  );
}

export default Topclass;
