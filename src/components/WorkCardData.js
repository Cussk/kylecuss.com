import pro1 from '../assets/skills-project.png';
import pro2 from '../assets/hair-day.png';
import pro3 from '../assets/Lyriks.png';
import pro4 from '../assets/bmi-calc.png';
import pro5 from '../assets/kanban.png';
import pro6 from '../assets/mern-social.png';

//array with data for project cards
const ProjectCardData = [
    {
        imgsrc: pro1,
        title: 'Skills for Hire Project',
        text: 'Full Stack website developed for the Skills for Hire bootcamp.  Responsive website created from provided proof with own stylings added. Part 1: Responsive static website.  Part 2: Booking form created and using PHP and GET display input form information onto Thank you page. Part 3: Connected to mySQL database via PHP. Take form information and upload to database to created trips based on a 5 field table. Import data from table and dynamically display on HTML webpage with PHP',
        view: 'https://github.com/Cussk/skills-for-hire-project',
        source: 'https://github.com/Cussk/skills-for-hire-project'
    },

    {
       imgsrc: pro6,
       title: 'Reflections',
       text: 'This project was created to showcase my Full Stack development abilities with the MERN stack. Using the React.js framework, Redux.js, express.js, Mongo DB, and Material CSS to create a dynamic social media web app where you can create, update delete, and like posts. This project reinforced the use of the MERN stack to link a Mongo DB database to a React front-end app with epxress.js and mongoose.',
       view: 'https://mern-soical.netlify.app/',
       source: 'https://github.com/Cussk/MERN-social',
    },

    {
        imgsrc: pro5,
        title: 'Kanban',
        text: 'Kanban to do list created with React, Node.js, Express, and Web Sockets (Socket.io). This kanban board allows the creation of of new tasks, comments on tasks and drag and drop functionality with React Beautiful DND.',
        view: 'https://github.com/Cussk/kanban',
        source: 'https://github.com/Cussk/kanban'
    },

    {
       imgsrc: pro3,
       title: 'Spotify Clone (Lyriks)',
       text: 'Spotify clone with React 18, Tailwind, and Redux. Using Shazam Core from Rapid API to render songs in the app as well as IP Geolocation API to render top songs by current location.',
       view: 'https://spotify-clone-lyriks.netlify.app/',
       source: 'https://github.com/Cussk/spotify-clone',
    },

    {
       imgsrc: pro4,
       title: 'BMI Calculator',
       text: 'Simple BMI calculator using Flutter to create Android app.',
       view: 'https://github.com/Cussk/bmi-calc-flutter',
       source: 'https://github.com/Cussk/bmi-calc-flutter',
    },

    {
        imgsrc: pro2,
        title: 'Hair Day Website',
        text: 'Responsive landing page for mock Salon company "Hair Day."  Website designed based off logo and short description of companies values.',
        view: 'https://cussk.github.io/META-HTML-CSS-Project/',
        source: 'https://github.com/Cussk/skills-for-hire-project'
    },

];

export default ProjectCardData;