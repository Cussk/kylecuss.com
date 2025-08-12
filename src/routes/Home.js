import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import UnityCerts from '../components/UnityCerts';
import Footer from "../components/Footer";
import WorkShowcase from "../components/Work-Showcase";
import WorkShowcase2 from "../components/Work-Showcase2";
import ProfessionalProjects from "../components/ProfessionalProjects";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HeroImg/>
            <ProfessionalProjects />
            <WorkShowcase />
            <WorkShowcase2 />
            <UnityCerts />
            <Footer/>
        </div>
    )
}

export default Home;