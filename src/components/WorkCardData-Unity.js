import pro1 from '../assets/Videos/Turn-Based-Strategy-System.mp4';
import pro2 from '../assets/WaffleSmash.png';
import pro3 from '../assets/Videos/ARPG-Unity.mp4';


//array with data for project cards
const ProjectCardDataUnity = [
    {
        imgsrc: pro2,
        title: 'Waffle Smash: Diner Rush',
        text: "Game Engineer on Waffle Smash: Diner Rush (Android/iOS). Contributed to core gameplay, UI, and tools development for a match-3 game with diner-building features. Integrated Unity Addressables for on-demand asset delivery, cutting download size and optimizing memory. Developed data-driven scene and tutorial systems with Scriptable Objects and dependency injection. Supported Android builds and publishing, while collaborating closely with design and art teams.",
        website: 'https://www.wafflesmash.com/',
    },

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
    }   
];

export default ProjectCardDataUnity;