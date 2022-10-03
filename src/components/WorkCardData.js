import pro1 from '../assets/skills-project.png';
import pro2 from '../assets/hair-day.png';
import pro3 from '../assets/Lyriks.png';

//array with data for project cards
const ProjectCardData = [
    {
        imgsrc: pro1,
        title: 'Skills for Hire Project (In Progress)',
        text: 'Full Stack website developed for the Skills for Hire bootcamp.  Responsive website created from provided proof with own stylings added.  Part 1 completed: Responsive static website.  Part 2 & 3 to follow.',
        view: 'https://cussk.github.io/skills-for-hire-project/',
        source: 'https://github.com/Cussk/skills-for-hire-project'
    },

    {
        imgsrc: pro2,
        title: 'Hair Day Website',
        text: 'Responsive landing page for fake Salon company "Hair Day."  Website designed based off logo and short description of companies values.',
        view: 'https://cussk.github.io/META-HTML-CSS-Project/',
        source: 'https://github.com/Cussk/skills-for-hire-project'
    },

    {
       imgsrc: pro3,
       title: 'Spotify Clone (Lyriks)',
       text: 'Spotify clone with React 18, Tailwind, and Redux. Using Shazam Core from Rapid API to render songs in the app as well as IP Geolocation API to render top songs by current location.',
       view: 'https://spotify-clone-lyriks.netlify.app/',
       source: 'https://github.com/Cussk/spotify-clone',
    },

];

export default ProjectCardData;