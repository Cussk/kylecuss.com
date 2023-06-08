import pro1 from '../assets/Videos/SoulslikeCombatStyles.mp4';
import pro2 from '../assets/Videos/Soulslike-AI.mp4';


//array with data for project cards
const ProjectCardDataShowcaseSub2 = [

    {
        vidsrc: pro1,
        title: 'Combat System',
        text: "Combat system created with Blueprints. Equipment component to bind new weapons to player on pickup. Collision component to handle sphere straces to determine attack hits and apply damage. Attributes Component to handle stats such as health, stamina, Fury. Animations and anim notifies call for collisions to be activated a designated points, continue combos, and reset attacking state. Gameplay Tags and Enums to determine character states with State Manager Component. Targetng compenent to set/lose focus targets.",
    },

    {
        vidsrc: pro2,
        title: 'AI',
        text: "AI created with combination of Blueprints, Behaviour Trees, and Blackboards. Blueprint tasks and services applied in behaviour tree. Behaviour Tree and Blackboard used to transition states roaming, patrolling, attacking. Use of animation montages and anim notifies to determine damage, effects, sounds. Different attackcs based on range and rare attacks with percent chance to activate. Also, Enemies with entire logic in Blueprints controlling states and attack decisions.",
    },
];

export default ProjectCardDataShowcaseSub2;