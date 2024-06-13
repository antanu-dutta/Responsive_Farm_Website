import React from "react";
import "./AmazonReview.css";

function AmazonReview() {
  return (
    <div className="amazon-review py-10 md:py-40">
      <div className="container">
        <div className="amazon-review-content-wrapper text-center md:relative">
          <div className="md:w-1/2 mx-auto">
            <h2 className="text-3xl md:text-5xl text-primary mb-8 font-medium leading-snug">
              Over 30,000 reviews <br />
              On Amazon
            </h2>
            <p className="text-base md:text-xl text-primary mb-8 leading-snug md:px-20">
              We’ve received a lot of love and are thrilled to share some of the
              experiences of our happy customers.
            </p>
          </div>
          <img
            src="https://farmnaturelle.com/cdn/shop/files/Frame_14857573.png?v=1697165399"
            alt="amazon-review-image"
            className="md:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default AmazonReview;
