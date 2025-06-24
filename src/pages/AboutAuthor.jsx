import './AboutAuthor.css'; // Importing styles for this specific page

// Functional component for the "About the Author" page
function AboutAuthor() {
  return (
    <div className="container about-author-page">
      <div className="author-section">

        {/* Author image on the left side */}
        <div className="author-image">
          <img src="/author.jpg" alt="Author Sahil Jeet Singh" />
        </div>

        {/* Author biography and description on the right side */}
        <div className="author-bio">
          <h1>About the Author</h1>

          {/* Short biography */}
          <p>
            Sahil Jeet Singh hails from the culturally rich city of Cuttack, Odisha.
            He began writing poems and short stories as a hobby, but his passion
            deepened while writing this story — his first novel.
          </p>

          {/* More personal context */}
          <p>
            Inspired by old-school romantic films and backed by his academic background
            in Sociology, Sahil brings a unique depth to themes like love, family,
            and emotion. This novel is his tribute to all those who love wholeheartedly
            and selflessly.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutAuthor;
