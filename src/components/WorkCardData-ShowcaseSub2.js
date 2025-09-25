import pro1 from '../assets/Videos/SoulslikeCombatStyles.mp4';
import pro2 from '../assets/Videos/Soulslike-AI.mp4';


//array with data for project cards
const ProjectCardDataShowcaseSub2 = [

    {
        vidsrc: pro1,
        title: 'Combat System',
        text: "Combat system created with Blueprints. Equipment component to bind new weapons to the Player on pickup. Collision component to handle sphere traces to determine attack hits and apply damage. Attributes Component to handle stats such as health, stamina, and Fury. Animations and Anim Notifies call for collisions to be activated at designated points, continue combos, and reset the attacking state. Gameplay Tags and Enums to determine character states with the State Manager Component. Targeting component to set/lose focus targets.",
    },

    {
        vidsrc: pro2,
        title: 'AI',
        text: "AI was created with a combination of Blueprints, Behaviour Trees, and Blackboards. Blueprint tasks and services are applied in the behaviour tree. Behaviour Tree and Blackboard are used to transition between states, including roaming, patrolling, and attacking. Use of animation montages and Anim Notifies to determine damage, effects, and sounds. Different attacks based on range, as well as rare attacks with a percentage chance to activate. Also, Enemies with entire logic in Blueprints controlling states and attack decisions.",
    },
];

export default ProjectCardDataShowcaseSub2;