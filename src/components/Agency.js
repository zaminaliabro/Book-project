function Anger() {
  return (
    <>
      <div className="Anger-wrapper">
        <div className="Anger-text">
          <h4 className="sp">A Trusted Agency</h4>
          <h2 className="text-2xl md:text-4xl font-bold mt-3 sfpro">
            We Won’tClaim <span className="sp"> What’s Yours</span>
          </h2>
          <p className="pr1">
            At The Penguin Book Publisher, we believe in empowering authors, not
            owning them. Your creative vision and hard work are yours alone, and
            we respect that. That’s why, when you partner with us, you retain
            100% of your publishing rights and royalties. You’ll have full
            control over your author accounts and all earnings from your book
            sales.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p className="pr1">
            We see ourselves as your trusted ally, providing the expertise and
            support you need to achieve your publishing dreams. From editing and
            formatting to marketing and distribution, we're here to guide you
            every step of the way. But we’ll never claim ownership of your work
            – your book is your legacy, and we’re simply here to help you share
            it with the world.
          </p>
        </div>

        <div className="form-box">
          <h3 className="sfpro font-bold text-xl mb-4">
            Fill Your Registration
          </h3>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
            <label>Email</label>
            <input type="email" placeholder="Email adress" required />
            <label>Phone</label>
            <input type="number" placeholder="Phone" required />
            <label>Comments</label>
            <textarea placeholder="Comments.." rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Anger;
