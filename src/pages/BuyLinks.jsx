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
            BUY-ON
            <img src="/blueroseone.webp" alt="blueroseone" />
          </a>




          {/* Amazon buy link with branding */}
          <a
            href="https://www.amazon.in/"
            className="buy-buttons amazon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coming-Soon
            <img src="/amazon-logo.svg" alt="Amazon" />
          </a>

          {/* Flipkart buy link with branding */}
          <a
            href="https://www.flipkart.com/"
            className="buy-buttons flipkart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coming-Soon
            <img src="/flipkart-logo.svg" alt="Flipkart" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyLinks;
