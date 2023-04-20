import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
import WorkUnity from  '../components/Work-Unity';
import WorkUnreal from '../components/Work-Unreal';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading='PROJECTS' text='Some of my most recent works'/>
      <WorkUnreal />
      <WorkUnity />
      <Work />
      <Footer />
    </div>
  )
}

export default Projects;