import React from "react";
import HeroSection from "../../components/HeroSection";
import { homePageObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <HeroSection {...homePageObjOne} />
    </>
  );
};

export default Home;