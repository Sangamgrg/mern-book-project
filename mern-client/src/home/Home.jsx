import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";
import FooterBar from "../components/FooterBar";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
      <FooterBar />
    </div>
  );
};

export default Home;
