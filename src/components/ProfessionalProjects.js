import './ProjectsCard.css';
import ProjectsCard from './ProjectsCard';
import ProjectsCardData from './ProjectsCardData';
import React from 'react';

const ProfessionalProjects = () => {
  return (
    <div className='work=container'>
        <h1 className='project-heading-showcase'>Professional Projects</h1>
        <div className='project-container-main'>
            {ProjectsCardData.map((val, ind) => {
                return (
                <ProjectsCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    website={val.website}
                />
            );  
        })}
        </div>
    </div>
  )
}

export default ProfessionalProjects;