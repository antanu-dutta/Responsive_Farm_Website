import React from "react";
import BannerContainer from "../Components/Banner/BannerContainer";
import IconStrip from "../Components/Icon Strip/IconStrip";
import { firstStrip, secondStrip } from "../Data Assets/Iconstripdetails";
import ShopCategory from "../Components/Shop Category/ShopCategory";
import { ShopConcern, ConcernLogo } from "../Data Assets/ShopConcern";
import { ShopProduct, productLogo } from "../Data Assets/ShopProduct";
import AyurvdicRemedies from "../Components/Ayurdevic Remedies/AyurvdicRemedies";
import CollectionProducts from "../Components/Collection Products/CollectionProducts";
import { Honey } from "../Data Assets/Honey";
import { CookingOil } from "../Data Assets/CookingOil";
import { Ghee } from "../Data Assets/Ghee";
import { Juice } from "../Data Assets/Juice";
import WhyFarm from "../Components/Why Farm/WhyFarm";
import GiftSection from "../Components/Gift Section/GiftSection";
import Grettings from "../Components/Greetings/Grettings";
import AmazonReview from "../Components/Amazon Review Section/AmazonReview";

function Home() {
  return (
    <div>
      <BannerContainer />
      <IconStrip Strip={firstStrip} />
      <ShopCategory
        card={ShopConcern}
        name={"Shop by Concern"}
        logo={ConcernLogo}
      />
      <AyurvdicRemedies />
      <ShopCategory
        card={ShopProduct}
        name={"Shop by Product"}
        logo={productLogo}
      />
      <CollectionProducts
        product={Honey}
        title="Pure Honey"
        subtitle="Bee-produced, unprocessed honey from a farm, pure and natural."
      />
      <CollectionProducts
        product={CookingOil}
        title="Cold Pressed Cooking Oils"
        subtitle="Cold-pressed, natural cooking oils sourced from farm ingredients for healthier cuisine."
      />
      <CollectionProducts
        product={Ghee}
        title="Bilona A2 Ghee"
        subtitle="Pure, farm-sourced, made through traditional method."
      />
      <WhyFarm />
      <CollectionProducts
        product={Juice}
        title="Herbal Juice"
        subtitle="Pure, Organic herbal juices sourced from farm ingredients has no added sugar."
      />
      {/* Here will be Gift Section (it will be added later) */}

      {/* Here will be Customer love Section (it will be added later) */}

      <Grettings />
      <AmazonReview />
      <IconStrip Strip={secondStrip} />

      {/* Customer Review Section */}

      {/* Here will be Instagram Section for review  (It will be added here)*/}
    </div>
  );
}

export default Home;
