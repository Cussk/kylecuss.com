import pro1 from '../assets/Videos/Turn-Based-Strategy-System.mp4';
import pro2 from '../assets/Videos/SoulslikeCombat.mp4';
import pro3 from '../assets/Videos/ActionFramework-Actions.mp4';


//array with data for project cards
const ProjectCardDataShowcase = [

    {
        vidsrc: pro3,
        title: 'Action Gameplay Framework',
        text: "This project is an Action project that features building C++ Game Framework, Combining C++ and Blueprint for flexible game logic, Unreal’s Gameplay Systems, Event-based Programming Principles, AI Programming (Behavior Trees, Blackboard, EQS, Custom C++ Nodes), Multiplayer Networking (Replication architecture, low-bandwidth, best practices), Saving Game State to Disk (Saving/loading player progression and world state), Performance Profiling Tools (Unreal Insights & in-editor tools), User Interfaces with UMG (using Event-based Principles), Async Asset Loading & Soft References",
        play: "https://cussk.itch.io/action-gameplay-framework",
        source: 'https://github.com/Cussk/ARPG-Unreal-Cpp'
    },

    {
        vidsrc: pro2,
        title: 'Soulslike ARPG Combat System (Blueprints)',
        text: "With this project I learned how to create a complete Action RPG Combat System from scratch including multiple combat styles, directional dodging, blocking, Gameplay Tags, Hit detection with Raycasts, State management, Stats system (Health, Stamina, Damage, Armor, Fury), Targeting system, Equipment system, enemy AI (Behavior Trees, Blackboard), Different types of enemies and attacks (mobs, heavy mobs, bosses), IK Retargetting and changing animations to new skeletons.",
        play: "https://www.dropbox.com/s/28tqaw554bm94wq/SoulslikeCombatSystem.zip?dl=0",
        source: 'https://github.com/Cussk/Soulslike-Combat-System'
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