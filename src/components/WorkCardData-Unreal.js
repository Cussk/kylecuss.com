import pro1 from '../assets/Videos/ActionFramework.mp4';
import pro2 from '../assets/Videos/FPS.mp4';
import pro3 from '../assets/Videos/SoulslikeCombat.mp4';

//array with data for project cards
const ProjectCardDataUnreal = [

    {
        vidsrc: pro1,
        title: 'Action Gameplay Framework',
        text: "This project is an Action project that features building a C++ Game Framework, Combining C++ and Blueprint for flexible game logic, Unreal’s Gameplay Systems, Event-based Programming Principles, AI Programming (Behavior Trees, Blackboard, EQS, Custom C++ Nodes), Multiplayer Networking (Replication architecture, low-bandwidth, best practices), Saving Game State to Disk (Saving/loading player progression and world state), Performance Profiling Tools (Unreal Insights & in-editor tools), User Interfaces with UMG (using Event-based Principles), Async Asset Loading & Soft References.",
        play: "https://cussk.itch.io/action-gameplay-framework",
        source: 'https://github.com/Cussk/ARPG-Unreal-Cpp'
    },

    {
        vidsrc: pro3,
        title: 'Soulslike ARPG Combat System (Blueprints)',
        text: "With this project I learned how to create a complete Action RPG Combat System from scratch including multiple combat styles, directional dodging, blocking, Gameplay Tags, Hit detection with Raycasts, State management, Stats system (Health, Stamina, Damage, Armor, Fury), Targeting system, Equipment system, enemy AI (Behavior Trees, Blackboard), Different types of enemies and attacks (mobs, heavy mobs, bosses), IK Retargetting and changing animations to new skeletons.",
        play: "https://www.dropbox.com/s/28tqaw554bm94wq/SoulslikeCombatSystem.zip?dl=0",
        source: 'https://github.com/Cussk/Soulslike-Combat-System'
    },

    {
        vidsrc: pro2,
        title: 'FPS (Blueprints)',
        text: "FPS project I worked through to expand my knowledge of Unreal's Blueprints. Created using UE 5.1 and completely scripted with Blueprints. Character movement, mouse look and jump. Character animation blueprints and state machines. Attaching weapon to charcter mesh, attaching animations, sounds and vfx to shooting. Create line trace and hit results with weapon to denote hitting targets. Created drone enemy class that will chase player when in aggro range and explode on contact with overlap collisions. Created custom game mode with enum states using UI and blueprints to change between states and denote to player game goals.",
        play: "https://cussk.itch.io/fps-ue51-blueprints",
        source: 'https://github.com/Cussk/FPS-Blueprints'
    },    
];

export default ProjectCardDataUnreal;