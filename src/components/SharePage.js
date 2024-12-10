import React from "react";
import "./SharePage.css";

const SharePage = () => {
  return (
    <div className="share-page-container">
      <h1>Welcome to Cillage</h1>
      <p>Explore our classical website and share it with your friends!</p>

      <div className="share-buttons">
        <a href="http://bit.ly/4faYOU9" target="_blank" rel="noopener noreferrer" className="share-button">
          Visit & Share Cillage!
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http://bit.ly/4faYOU9"
          target="_blank"
          rel="noopener noreferrer"
          className="share-button facebook-button"
        >
          Share on Facebook
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=http://bit.ly/4faYOU9&text=Discover%20Cillage!"
          target="_blank"
          rel="noopener noreferrer"
          className="share-button twitter-button"
        >
          Share on Twitter
        </a>
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=http://bit.ly/4faYOU9&title=Cillage&summary=Discover%20Cillage!"
          target="_blank"
          rel="noopener noreferrer"
          className="share-button linkedin-button"
        >
          Share on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default SharePage;
