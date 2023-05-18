import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import UnityCerts from '../components/UnityCerts';
import Footer from "../components/Footer";
import WorkShowcase from "../components/Work-Showcase";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HeroImg/>
            <WorkShowcase />
            <UnityCerts />
            <Footer/>
        </div>
    )
}

export default Home;