import pro1 from '../assets/Videos/ActionFramework-Actions.mp4';
import pro2 from '../assets/Videos/ActionFramework-AI.mp4';
import pro3 from '../assets/Videos/ActionFramework-Multiplayer.mp4';


//array with data for project cards
const ProjectCardDataShowcaseSub = [

    {
        vidsrc: pro1,
        title: 'Action System',
        text: "GAS-like action system created with C++. Actions can be assigned and removed from player or enemies. Use of Gameplay Tags to change states and grant or limit actions. Effects(Buffs/Debuff) Actions to be applied to player or enemy with durations and periodic activation. pickups can be used to grant new actions. Actions linked to Attribute component and can cost stat to use, heal/damage. Fully replicated for multiplayer.",
    },

    {
        vidsrc: pro2,
        title: 'AI',
        text: "AI created with combination of C++, Behaviour Trees, and EQS. C++ tasks and services applied in behaviour tree. Behaviour Tree and Blackboard used to transition states, searching, attacking, finding cover. Use of EQS to query best positions for attacking and finding cover. After several attacks enemy reposition and find new attack point. If damaged enough, will try to find cover and heal. Enemies spawn based on EQS around the player. Difficulty curve used to limit amount of bots spawned and increases max bots over time.",
    },

    {
        vidsrc: pro3,
        title: 'Multiplayer',
        text: "Framework replicated for multiplayer. Uses Unreal's server authority model. Use RPCs and Rep Notifies to combine server controled actions with client required inputs for gameplay. Action system completely replicated attacks and effects fire for both server and clients. Interaction interface replicated and any actions performed by a player are reflected to other players such as opening chests, picking up powerups. Can host games and join other players with IP address.",
    },
];

export default ProjectCardDataShowcaseSub;