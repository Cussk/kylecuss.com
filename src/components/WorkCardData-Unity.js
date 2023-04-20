import pro1 from '../assets/Videos/Turn-Based-Strategy-System.mp4';
import pro2 from '../assets/Videos/The-Lighthouse.mp4';
import pro3 from '../assets/Videos/ARPG-Unity.mp4';


//array with data for project cards
const ProjectCardDataUnity = [
    {
        vidsrc: pro3,
        title: 'ARPG: Core Combat System',
        text: "This project is a Diablo/Torchwood style ARPG with topdown view and point and click controls. Created core combat mechanics for melee, ranged and special attacks, using scriptable objects for for moddable and scaleable weapon types. Used C# techniques such as interfaces, delegates, and co-routines.",
        play: 'https://play.unity.com/mg/other/point-and-click-arpg',
        source: 'https://github.com/Cussk/ARPG-Core-Combat'
    },

    {
        vidsrc: pro1,
        title: 'Turn-based Strategy System',
        text: "This project is a Turn-based strategy system similar to FF Tactics. It is grid based and has destructible object, different player skills, interactable objects, A* pathfinding and basic Enemy AI. This project taught me the use of C# Singletons, Generics, Custom Structs and Events.",
        play: 'https://play.unity.com/mg/other/turn-based-strategy-prototype',
        source: 'https://github.com/Cussk/turnbased-strategy-system'
    },

    {
        vidsrc: pro2,
        title: 'The Lighthouse',
        text: "This project takes all the principles taught in both the Junior Programmer and Creative Core learning pathways through Unity. It is a first-person puzzle/walking simulator level built from the ground up using art assets from Unity's Asset Store and assets provided in learning path courses. Initially graybox porotype taken to complete level. All the scripts were written with C#.",
        play: 'https://play.unity.com/mg/other/the-lighthouse-4',
        source: 'https://github.com/Cussk/The-Lighthouse'
    },
    
];

export default ProjectCardDataUnity;