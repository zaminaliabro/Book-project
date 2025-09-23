function Bookmanu() {
  return (
    <>
      <div className="manu">
        <h2 class="text-2xl md:text-4xl heading font-bold text-black sfpro">
          Helping You Achieve Success
        </h2>
        <p class="text-black mt-3 text-base md:text-lg font-medium sfpro">
          A dedicated agency fulfilling all the book-related needs.
        </p>

        <div className="manu1">
          <div class="flex flex-col md:flex-row justify-center gap-6">
            <a href="/contact">
              <button class="btn2">Connect with Us!</button>
            </a>
            <a href="tel:+18722829790">
              <button class="btn1">Call us NOW!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bookmanu;
