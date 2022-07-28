import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedPropertyList from "../../components/featuredPropertyList/FeaturedPropertyList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured></Featured>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedPropertyList></FeaturedPropertyList>
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
