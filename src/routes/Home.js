import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import HeroSpecialties from "../components/HeroSpecialties";
import HomeAbout from "../components/HomeAbout";
import Footer from "../components/Footer";
import HomeProjects from "../components/HomeProjects";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";
import HomeSkills from "../components/HomeSkills";

const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroImg />
            <HeroSpecialties />
            <HomeProjects />
            <FeaturedCaseStudy />
            <HomeAbout />
            <HomeSkills />
            <Footer />
        </div>
    );
};

export default Home;