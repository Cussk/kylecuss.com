import './HomeProjects.css';
import React from 'react';
import HomeProjectsData from './HomeProjectsData';

const HomeProjects = () => {
  return (
    <section className='home-projects'>
      <div className='home-projects__shell'>
        <div className='home-projects__intro'>
          <span className='home-projects__eyebrow'>FEATURED PROJECTS</span>
          <h2 className='home-projects__title'>Selected production work and technical foundations.</h2>
          <p className='home-projects__copy'>
            A quick look at the projects and systems that best represent my gameplay engineering work.
          </p>
        </div>

        <div className='home-projects__grid'>
          {HomeProjectsData.map((project) => (
            <article key={project.id} className='home-project-card'>
              <div className='home-project-card__media'>
                <img
                  src={project.logoImage}
                  alt={project.title}
                  className='home-project-card__logo-image'
                />

                {project.engineLogo && (
                  <span
                    className={`home-project-card__engine ${
                      project.engineLogoType === 'wordmark'
                        ? 'home-project-card__engine--wordmark'
                        : 'home-project-card__engine--icon'
                    }`}
                  >
                    <img src={project.engineLogo} alt='' />
                  </span>
                )}
              </div>

              <div className='home-project-card__body'>
                <h3 className='home-project-card__title'>{project.title}</h3>
                <p className='home-project-card__subtitle'>{project.subtitle}</p>

                <div className='home-project-card__tags'>
                  {project.tags.map((tag) => (
                    <span key={tag} className='home-project-card__tag'>
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.website || project.store) && (
                  <div className='home-project-card__actions'>
                    {project.website && (
                      <a href={project.website} target='_blank' rel='noreferrer' className='btn btn-light'>
                        Website
                      </a>
                    )}

                    {project.store && (
                      <a href={project.store} target='_blank' rel='noreferrer' className='btn'>
                        {project.storeLabel}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;