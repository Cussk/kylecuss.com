import pro1 from '../assets/Videos/Obstacle-Assault.mp4';
import pro2 from '../assets/Videos/Warehouse-Wreckage.mp4';

//array with data for project cards
const ProjectCardDataUnreal = [
    {
        vidsrc: pro1,
        title: 'Obstacle Assault',
        text: "This project is a Platformer learning C++ for Unreal. Used C++ to create custom class for moving and rotating platforms. Created blueprints from this class to have different obstacles that move horizontally, vertically and rotate. Repurposed assets from Epics Learn to Code project and Stylized Character Kit from the Marketplace to create a fun colourful obstacle course.",
        source: 'https://github.com/Cussk/Obstacle-Assault'
    },

    {
        vidsrc: pro2,
        title: 'Warehouse Wreckage',
        text: "This project is a simple game where you fire cannonballs at objects in a warehouse.  Using Unreal Blueprints for the logic of of fring the cannonball, keeping count of amount of balls, score and resetting the game once out of ammo.",
        source: 'https://github.com/Cussk/Warehouse-Wreckage'
    },
];

export default ProjectCardDataUnreal;