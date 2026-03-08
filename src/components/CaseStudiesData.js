import bbArchImg from '../assets/BedroomBrawlArchitecture.png';
import progressionImg from '../assets/BedroomBrawlProgression.png';
import aiGoalsImg from '../assets/BedroomBrawlAI.png';
import towerDefenseImg from '../assets/BedroomBrawlTowerDefense.png';
import waffleAssetImg from '../assets/WaffleSmashAddressables.jpg';
import unrealLogo from '../assets/unreal-logo.png';
import unityLogo from '../assets/unity-logo.png';

const CaseStudiesData = [
  {
    id: 1,
    slug: 'bedroom-brawl-multiplayer-architecture',
    featured: true,
    tag: 'Unreal Engine',
    logo: unrealLogo,
    image: bbArchImg,
    caption:
      "Multiplayer match showcasing subsystem-driven gameplay systems including objectives, scoring, and player progression.",
    title: 'Multiplayer Gameplay Architecture in Unreal Engine',
    subtitle:
      'Designing modular, data-driven gameplay systems for multiple game modes, shared progression, AI behaviors, and multiplayer state management.',
    metrics: [
      { value: 'C++', label: 'Core Tech' },
      { value: 'MP', label: 'Multiplayer' },
      { value: 'Subsystems', label: 'Architecture' },
      { value: 'Replication', label: 'Focus' },
    ],
    overview:
      'Bedroom Brawl is a multiplayer Unreal Engine project featuring multiple gameplay modes with shared progression systems, AI behaviors, and dynamic objectives. The architecture was built so new game modes could be implemented without duplicating core gameplay logic.',
    problem:
      'Traditional Unreal gameplay logic often becomes tightly coupled to GameMode classes. As additional gameplay modes were introduced, this risked creating large monolithic GameMode implementations that would be difficult to maintain, extend, and reason about in multiplayer. At the same time, multiplayer systems required careful separation of server authority, client state, and persistent player data.',
    designGoals: [
      'Support multiple gameplay modes without duplicating code',
      'Maintain strict server authority for multiplayer gameplay',
      'Allow systems to be reused across different game modes',
      'Minimize actor tick overhead',
      'Enable designers to configure gameplay without modifying code',
    ],
    approach:
      'I designed the architecture around modular Unreal subsystems and data-driven configuration. The goal was to support multiple gameplay modes without duplicating code, maintain strict server authority, minimize actor tick overhead, and allow systems to be reused across different modes while still being accessible to designers through configuration rather than code changes.',
    solution:
      'Gameplay responsibilities were separated across GameMode, GameState, PlayerState, and dedicated gameplay subsystems. GameMode handled match lifecycle and authoritative rules, GameState replicated global match state, and PlayerState stored replicated player-specific progression and statistics. Subsystems encapsulated individual gameplay features such as objective management, progression, scoring, and event broadcasting, while communicating through events and gameplay tags. This kept systems independent and reusable while preserving predictable multiplayer behavior.',
    challenges: [
      'Defining replication boundaries between server-only, shared, and client-only systems',
      'Managing initialization order so gameplay systems were ready before player spawn',
      'Keeping modular systems loosely coupled while still sharing match context',
    ],
    results: [
      'New gameplay systems can be implemented without modifying core match logic',
      'Multiplayer replication remains more predictable and maintainable',
      'Designers can extend gameplay through configuration instead of code changes',
      'GameMode classes stay significantly cleaner and less monolithic',
    ],
    technologies: [
      'Unreal Engine 5',
      'C++',
      'Multiplayer Replication',
      'Gameplay Tags',
      'Unreal Subsystems',
    ],
  },
  {
  id: 2,
  slug: 'data-driven-gameplay-systems',
  featured: false,
  tag: 'Unreal Engine',
  logo: unrealLogo,
  image: progressionImg,
  caption:
    "Gameplay flow integrating progression systems, player rewards, and persistent profile data across match outcomes.",
  title: 'Data-Driven Gameplay Systems',
  subtitle:
    'Building modular progression, rewards, and persistent profile systems that work consistently across multiple gameplay modes.',
  metrics: [
    { value: 'Progression', label: 'System Type' },
    { value: 'Rewards', label: 'Pipeline' },
    { value: 'JSON', label: 'Persistence' },
    { value: 'Data-Driven', label: 'Design' },
  ],
  overview:
    'To support progression systems and player rewards across multiple gameplay modes, I implemented a series of modular gameplay subsystems responsible for player currency, progression, and persistent profile data.',
  problem:
    'Gameplay progression systems were initially scattered across multiple gameplay classes, making it difficult to maintain consistency between modes. Adding new currencies or reward systems required modifying multiple parts of the codebase, increasing maintenance cost and the likelihood of implementation drift.',
  goals: [
    'Centralize player progression logic',
    'Support multiple reward types',
    'Enable persistent player data',
    'Allow designers to adjust progression values without code changes',
  ],
  approach:
    'I moved progression-related logic into dedicated gameplay subsystems so currencies, rewards, and persistence could be managed in one consistent framework rather than spread across mode-specific classes. This made systems easier to reuse and extend while keeping game mode code cleaner.',
  solution:
    'Several subsystems were introduced. A Currency Subsystem handled earning rewards, spending currency, and balance tracking. A Profile Subsystem managed persistent player data such as level progression, unlocked characters, and currency balances. An Objective Subsystem tracked match objectives and generated rewards when objectives were completed. Together, these systems formed a modular reward pipeline where objectives could generate rewards, currency systems could apply them, and profile systems could persist the updated player state.',
  challenges: [
    'Keeping progression logic consistent across multiple gameplay modes',
    'Supporting multiple reward and currency types without duplicating logic',
    'Persisting player data cleanly while keeping systems modular',
  ],
  results: [
    'Progression logic reused across multiple gameplay modes',
    'Simplified reward implementation',
    'Centralized player data management',
    'Improved maintainability and scalability',
  ],
  technologies: [
    'Unreal Engine C++',
    'Subsystems',
    'Data-Driven Design',
    'JSON Profile Persistence',
  ],
},
{
  id: 3,
  slug: 'ai-strategic-goal-system',
  featured: false,
  tag: 'Unreal Engine',
  logo: unrealLogo,
  image: aiGoalsImg,
  caption:
    "AI enemies dynamically selecting strategic targets using behavior-tree driven goal evaluation.",
  title: 'AI Strategic Goal System',
  subtitle:
    'Designing dynamic AI goal evaluation so characters can react to players, objectives, and changing match conditions.',
  metrics: [
    { value: 'AI', label: 'System Type' },
    { value: 'Behavior Trees', label: 'Framework' },
    { value: 'Perception', label: 'Awareness' },
    { value: 'Dynamic Goals', label: 'Decision Model' },
  ],
  overview:
    'AI characters in Bedroom Brawl needed to respond dynamically to changing gameplay situations such as attacking players, defending objectives, or pursuing strategic targets. To support this, I implemented a goal evaluation system integrated with Unreal’s Behavior Tree framework.',
  problem:
    'Static behavior trees produced predictable and repetitive AI behavior. AI needed to evaluate multiple possible goals and choose the most relevant one based on the current game state, rather than following rigid, pre-selected flows.',
  goals: [
    'Enable AI to dynamically evaluate objectives',
    'Allow goals to change as gameplay evolves',
    'Avoid expensive decision-making logic every frame',
  ],
  approach:
    'I structured decision making around periodic evaluation rather than continuous heavy logic. By combining Behavior Tree services, Blackboard values, and perception data, AI could regularly reassess priorities without incurring unnecessary per-frame cost.',
  solution:
    'The system uses Behavior Tree services to periodically score potential goals based on factors such as distance to target, objective importance, and the AI’s current state. The highest-scoring goal is written to the Blackboard, where movement and attack tasks can act on it. This allowed AI to shift between attacking, defending, and pursuing objectives in a way that felt responsive to live gameplay.',
  challenges: [
    'Balancing responsiveness with performance so AI did not re-evaluate too frequently',
    'Scoring different goal types in a way that produced believable priorities',
    'Keeping the system flexible enough to work across multiple gameplay modes',
  ],
  results: [
    'AI adapts to changing gameplay situations',
    'Supports multiple gameplay modes without separate AI implementations',
    'Improved perceived intelligence and variety of enemy behavior',
  ],
  technologies: [
    'Unreal Engine C++',
    'Behavior Trees',
    'AI Perception',
    'Blackboard Systems',
  ],
},
{
  id: 4,
  slug: 'tower-defense-gameplay-systems',
  featured: false,
  tag: 'Unreal Engine',
  logo: unrealLogo,
  image: towerDefenseImg,
  caption:
    "Tower defense gameplay with grid-based trap placement and wave-based enemy spawning systems.",
  title: 'Tower Defense Gameplay Systems',
  subtitle:
    'Building modular placement, wave, and goal systems for tower-defense-inspired gameplay while keeping performance scalable.',
  metrics: [
    { value: 'Grid', label: 'Placement' },
    { value: 'Waves', label: 'Spawning' },
    { value: 'Goals', label: 'Tracking' },
    { value: 'Performance', label: 'Priority' },
  ],
  overview:
    'Bedroom Brawl includes gameplay inspired by tower defense mechanics, requiring systems for trap placement, enemy waves, and pathing. I implemented modular gameplay systems to support these mechanics while keeping them maintainable and performant.',
  problem:
    'Traditional tower defense implementations often rely on large numbers of actor ticks and tightly coupled logic between traps, enemies, and wave managers. That approach becomes harder to scale and maintain as the number of enemies, traps, and encounter variations increases.',
  goals: [
    'Maintain high performance with large numbers of enemies',
    'Support flexible trap placement',
    'Allow designers to configure enemy waves easily',
  ],
  approach:
    'I separated the core tower defense responsibilities into dedicated systems so placement, spawning, and goal tracking could evolve independently. This kept the architecture modular while reducing the need for tightly coupled actor-driven logic.',
  solution:
    'A Grid Placement System was used to snap traps to a grid and prevent overlapping placements. A Wave Management System handled enemy spawning and tracked remaining enemies in each wave. A Goal Tracking System detected when enemies reached their objective and applied damage accordingly. Together, these systems created a clean gameplay loop for tower defense style encounters without forcing large amounts of logic into individual actors.',
  challenges: [
    'Maintaining performance with many active enemies and gameplay objects',
    'Keeping placement logic flexible while preventing invalid trap overlap',
    'Making wave configuration easy to extend for designers',
  ],
  results: [
    'Supports large numbers of enemies efficiently',
    'Simplified trap placement logic',
    'Modular systems easily reused across maps and encounters',
  ],
  technologies: [
    'Unreal Engine C++',
    'Subsystems',
    'Grid Placement Systems',
    'Wave Management',
    'Goal Tracking',
  ],
},
{
  id: 5,
  slug: 'scalable-mobile-asset-delivery-unity',
  featured: false,
  tag: 'Unity',
  logo: unityLogo,
  image: waffleAssetImg,
  caption:
    "Waffle Smash gameplay featuring dynamically loaded assets and UI flows supported by Unity Addressables.",
  title: 'Scalable Mobile Asset Delivery in Unity',
  subtitle: 'Building a data-driven mobile content pipeline using Addressables, Play Asset Delivery, and runtime memory-aware asset management.',
  metrics: [
    { value: 'Unity', label: 'Engine' },
    { value: 'Addressables', label: 'Delivery Layer' },
    { value: 'PAD', label: 'On-Demand Content' },
    { value: 'Memory', label: 'Optimization Focus' },
  ],
  overview:
    'For Waffle Smash: Diner Rush, a mobile match-3 and diner-building game released on Android and iOS, I worked on gameplay systems, UI, scene flow, and technical infrastructure with a strong focus on asset delivery, memory efficiency, and scalable content management. A major challenge was supporting growing game content without inflating install size or causing unnecessary runtime memory pressure.',
  problem:
    'Mobile games face several constraints that become more pronounced as content grows: install size can become too large, loading too many assets up front increases memory usage, rarely used assets waste resources when kept resident, and scene or feature entry points can become tightly coupled to hard references. In Waffle Smash, these issues mattered because the game combined match-3 gameplay, diner systems, UI flows, tutorials, and scene transitions across a content-heavy mobile project.',
  goals: [
    'Reduce initial install footprint through on-demand asset delivery',
    'Load assets only when required by the current gameplay flow',
    'Release assets cleanly when no longer needed',
    'Support scalable content growth without repeated restructuring',
    'Avoid tightly coupling scene logic to hard asset references',
    'Improve maintainability for designers and future feature expansion',
    'Support mobile-friendly runtime performance across content-heavy flows',
  ],
  approach:
    'I helped move asset access toward a more scalable, data-driven workflow built around Unity Addressables and structured scene or feature configuration. Rather than assuming all content should be available up front, systems were designed to request assets when a feature or scene became active and release them when that flow ended. On Android, this was extended with Play Asset Delivery so content could be distributed more intentionally and aligned with actual player usage.',
  solution:
    'Addressables were integrated into key gameplay and content flows including scene loading, tutorials, inventory-related content, feature-specific asset groups, and dynamically needed gameplay assets. Requested content was tracked so systems could avoid retaining unnecessary references, and assets could be unloaded when scenes or gameplay flows no longer required them. I also worked on data-driven scene management and tutorial systems using Scriptable Objects and structured configuration, which helped decouple gameplay flow from hardcoded scene dependencies and made content dependencies more explicit.',
  challenges: [
    'Balancing convenient direct references against long-term memory safety and scalability',
    'Ensuring dynamically loaded assets were also released reliably when no longer needed',
    'Grouping content intelligently so installs stayed lean while required gameplay content remained accessible',
    'Designing the strategy to support future game growth rather than only solving short-term optimization needs',
  ],
  results: [
    'Reduced initial application size through on-demand content delivery',
    'Improved runtime memory efficiency by loading and releasing assets only when needed',
    'Created a more scalable asset pipeline for a growing mobile game',
    'Improved maintainability by reducing hard scene and content coupling',
    'Supported smoother integration of tutorials, scenes, and gameplay flows through data-driven configuration',
    'Strengthened mobile production stability through better content organization and loading discipline',
  ],
  technologies: [
    'Unity',
    'C#',
    'Unity Addressables',
    'Play Asset Delivery (PAD)',
    'Scriptable Objects',
    'Async Asset Loading',
    'Data-Driven Scene Management',
    'Mobile Memory Optimization',
  ],
}
];

export default CaseStudiesData;