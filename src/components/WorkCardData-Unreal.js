import pro1 from '../assets/Videos/Obstacle-Assault.mp4';
import pro2 from '../assets/Videos/FPS.mp4';

//array with data for project cards
const ProjectCardDataUnreal = [

    {
        vidsrc: pro2,
        title: 'FPS (Blueprints)',
        text: "FPS project I worked through to expand my knowledge of Unreal's Blueprints. Created using UE 5.1 and completely scripted with Blueprints. Character movement, mouse look and jump. Character animation blueprints and state machines. Attaching weapon to charcter mesh, attaching animations, sounds and vfx to shooting. Create line trace and hit results with weapon to denote hitting targets. Created drone enemy class that will chase player when in aggro range and explode on contact with overlap collisions. Created custom game mode with enum states using UI and blueprints to change between states and denote to player game goals.",
        play: "https://cussk.itch.io/fps-ue51-blueprints",
        source: 'https://github.com/Cussk/FPS-Blueprints'
    },
    
    {
        vidsrc: pro1,
        title: 'Obstacle Assault',
        text: "This project is a Platformer learning C++ for Unreal. Used C++ to create custom class for moving and rotating platforms. Created blueprints from this class to have different obstacles that move horizontally, vertically and rotate. Repurposed assets from Epics Learn to Code project and Stylized Character Kit from the Marketplace to create a fun colourful obstacle course.",
        play: "https://github.com/Cussk/Obstacle-Assault",
        source: 'https://github.com/Cussk/Obstacle-Assault'
    },

    
];

export default ProjectCardDataUnreal;