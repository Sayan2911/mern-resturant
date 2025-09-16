import React from "react";
// import { google } from '../utils/Api'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousal from "../components/Carousal";

const Home = () => {
  return (
    <div  className="flex flex-col content-end justify-between min-h-[100dvh] min-w-[100dvh]">
      <Header />
      <Carousal/>
      <Footer/>
    </div>
  );
};

export default Home;
