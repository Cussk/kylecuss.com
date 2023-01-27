import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import WorkUnity from '../components/Work-Unity';
import WorkUnreal from '../components/Work-Unreal';
import UnityCerts from '../components/UnityCerts';
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HeroImg/>
            <WorkUnity />
            <WorkUnreal />
            <UnityCerts />
            <Footer/>
        </div>
    )
}

export default Home;