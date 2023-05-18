import pro1 from '../assets/Videos/Turn-Based-Strategy-System.mp4';
import pro2 from '../assets/Videos/SoulslikeCombat.mp4';
import pro3 from '../assets/Videos/ARPG-Unity.mp4';


//array with data for project cards
const ProjectCardDataShowcase = [
    {
        vidsrc: pro2,
        title: 'Soulslike ARPG Combat System (Blueprints)',
        text: "With this project I learned how to create a complete Action RPG Combat System from scratch including multiple combat styles, directional dodging, blocking, Gameplay Tags, Hit detection with Raycasts, State management, Stats system (Health, Stamina, Damage, Armor, Fury), Targeting system, Equipment system, enemy AI (Behavior Trees, Blackboard), Different types of enemies and attacks (mobs, heavy mobs, bosses), IK Retargetting and changing animations to new skeletons.",
        play: "https://www.dropbox.com/s/28tqaw554bm94wq/SoulslikeCombatSystem.zip?dl=0",
        source: 'https://github.com/Cussk/Soulslike-Combat-System'
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
    },
];

export default ProjectCardDataShowcase;