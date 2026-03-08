import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import HomeProjects from "../components/HomeProjects";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";
import HomeSkills from "../components/HomeSkills";

const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroImg />
            <HomeProjects />
            <FeaturedCaseStudy />
            <HomeSkills />
            <Footer />
        </div>
    );
};

export default Home;