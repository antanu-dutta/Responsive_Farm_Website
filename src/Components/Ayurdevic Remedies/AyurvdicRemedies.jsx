import React from "react";
import "./AyurvedicRemedies.css";
function AyurvdicRemedies() {
  return (
    <div>
      <div id="ayurvedic-remedie" className=" py-8 bg-primary">
        <div className="container">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="lg:order-2 lg:w-1/2">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/mobile.png?v=1698732234"
                alt=""
                className="object-cover w-full lg:hidden"
              />
              <img
                src="https://farmnaturelle.com/cdn/shop/files/desk.png?v=1698732439"
                alt=""
                className="hidden lg:block"
              />
            </div>
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="text-white lg:text-4xl font-bold text-2xl mb-2">
                Not Sure What to Buy?
              </h2>
              <span className="text-gray-300 text-sm">
                Consult our Experts and make your Daily Life Healthy
              </span>

              {/* Ayurvedic Remedies card starts here */}

              <div className="ayurvedic_remedie_card_wrapper flex flex-col gap-4 mt-5  xl:grid xl:grid-cols-2">
                <div className="ayurvedic_remedie_card">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group.svg?v=1696442650"
                    alt="ayurvedic_products"
                  />
                  <span>Ayurvedic Products</span>
                </div>
                <div className="ayurvedic_remedie_card">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_1.svg?v=1696443200"
                    alt="Lifestyle Recommendation"
                  />
                  <span>Lifestyle Recommendation</span>
                </div>
                <div className="ayurvedic_remedie_card">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_2.svg?v=1696443200"
                    alt="Custom Diet Plan"
                  />
                  <span>Custom Diet Plan</span>
                </div>
                <div className="ayurvedic_remedie_card">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_3.svg?v=1696443198"
                    alt="Doctor’s Advice"
                    className="w-[40px]"
                  />
                  <span>Doctor’s Advice</span>
                </div>
              </div>

              {/* Ayurvedic Remedies card starts here */}

              <button className="mt-5 border w-full p-3 text-white uppercase font-semibold rounded-lg hover:bg-primary hover:text-white transition-all">
                book consultation @ rs 99
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AyurvdicRemedies;
