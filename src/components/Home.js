// Home.js
import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaSmile,
  FaCertificate,
} from "react-icons/fa";
import Categories from "./shared/Categories";
import Hero from "./shared/Hero";
import HowItWorks from "./shared/HowItWorks";
import UserReview from "./shared/UserReview";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <UserReview />
    </>
  );
};

export default Home;

// Home.css
