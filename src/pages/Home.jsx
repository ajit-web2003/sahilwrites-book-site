// Import the CSS specific to the Home page
import './Home.css';

function Home() {
  return (
    <div className="container home-page">
      {/* ----------- Hero Section (Top of the page) ----------- */}
      <section className="hero">
        <div className="hero-text">
          {/* Book Title */}
          <h1 className="book-title">The Rain I Love</h1>

          {/* Book Description */}
          <p>
            In "The Rain I Love", love falls like rain, soaking every heart in a mesmerizing tale of passion, sacrifice, and destiny.
            Set against the vibrant backdrop of an Indian city, this young adult romantic drama follows Aarav’s unyielding devotion to the girl who holds his heart, Aasna, despite a rival’s claim — Yash — and tangled family ties.
            As emotions cascade like a monsoon, hidden secrets and unexpected twists reshape their paths, testing the power of selfless love.
            Inspired by Bollywood’s timeless romances, Sahil Jeet Singh weaves a dialogue-driven saga where rain becomes a metaphor for love’s joys and sorrows.
            With every heartfelt exchange, the story explores whether fate can unite two souls against all odds, leaving readers breathless in a whirlwind of hope and heartbreak.
          </p>

          {/* Call-to-action button to buy the book */}
          <a href="/buy-links" className="buy-button">Buy Now</a>
        </div>

        {/* Book Cover Image */}
        <div className="hero-image">
          <img src="/book-cover.jpg" alt="Book Cover" />
        </div>
      </section>

      {/* ----------- Reader Quote Section ----------- */}
      <section className="quote">
        <blockquote>
          "A heartfelt saga of love and fate that captivates the soul." — Reader's Circle
        </blockquote>
      </section>
    </div>
  );
}

export default Home;
