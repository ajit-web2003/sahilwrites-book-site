import React from "react";
import "./BuyLinks.css"; // Import styles specific to the Buy Links page

// Functional component for the "Buy Links" page
const BuyLinks = () => {
  return (
    <div className="full-page-wrapper">
      <div className="buy-bg">
        <div className="buy-section">
          {/* Page heading */}
          <h2>Order Your Copy</h2>
          <p>Available from these platforms:</p>
          <a
            href="https://blueroseone.com/store/product/the-rain-i-love"
            className="buy-buttons bluerose"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
            <img src="/blueroseone.webp" alt="blueroseone" />
          </a>




          {/* Amazon buy link with branding */}
          <a
            href="https://www.amazon.in/dp/9371392983"
            className="buy-buttons amazon"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
            <img src="/amazon-logo.svg" alt="Amazon" />
          </a>

          {/* Flipkart buy link with branding */}
          <a
            href="https://www.flipkart.com/product/p/itme?pid=9789371392983"
            className="buy-buttons flipkart"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
            <img src="/flipkart-logo.svg" alt="Flipkart" />
          </a>

             <a
            href="https://play.google.com/store/books/details?id=yA5pEQAAQBAJ"
            className="buy-buttons googleplay"
            target="_blank"
            rel="noopener noreferrer"
          >
            EBOOK
            <img src="/Google Play Books.svg" alt="google play" />
          </a>

            <a
            href="https://blueroseone.com/store/product/the-rain-i-love-gBMSc"
            className="buy-buttons googleplay"
            target="_blank"
            rel="noopener noreferrer"
          >
            EBOOK
            <img src="/blueroseone.webp" alt="google play" />
          </a>  



        </div>
      </div>
    </div>
  );
};

export default BuyLinks;
