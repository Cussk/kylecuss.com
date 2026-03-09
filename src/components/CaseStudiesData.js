import bbArchImg from '../assets/BedroomBrawlArchitecture.png';
import progressionImg from '../assets/BedroomBrawlProgression.png';
import aiGoalsImg from '../assets/BedroomBrawlAI.png';
import towerDefenseImg from '../assets/BedroomBrawlTowerDefense.png';
import waffleAssetImg from '../assets/WaffleSmashAddressables.jpg';
import unrealLogo from '../assets/unreal-logo.png';
import unityLogo from '../assets/unity-logo.png';
import bbArchDiagram from '../assets/BedroomBrawlArchitectureDiagram.png';

const CaseStudiesData = [
  {
    id: 1,
    slug: 'bedroom-brawl-multiplayer-architecture',
    navLabel: 'Architecture',
    featured: true,
    tag: 'Unreal Engine',
    logo: unrealLogo,
    logoType: 'icon',
    image: bbArchImg,
    title: 'Multiplayer Gameplay Architecture in Unreal Engine',
    subtitle:
      "Designing modular multiplayer gameplay architecture with Unreal subsystems, replication-safe state flow, and data-driven support for multiple game modes.",
    caption:
      "Live multiplayer match running subsystem-driven gameplay systems including objectives, scoring, and replicated player progression.",
      homeRole: 'Gameplay Systems & Multiplayer Architecture',
    diagram: bbArchDiagram,
    diagramAlt: 'Bedroom Brawl gameplay architecture diagram showing GameMode, GameState, PlayerState, and modular subsystems.',
    showDiagramOnHome: true,
    showDiagramOnCaseStudy: true,
    metrics: [
      { value: 'C++', label: 'Gameplay Systems' },
      { value: 'Multiplayer', label: 'Dedicated & Listen Servers' },
      { value: 'Subsystems', label: 'Modular Architecture' },
      { value: 'Replication', label: 'Authoritative State Flow' },
    ],
    overview:
      'Bedroom Brawl is a multiplayer Unreal Engine project featuring multiple gameplay modes with shared progression systems, AI behaviors, and dynamic objectives. The architecture was built so new game modes could be implemented without duplicating core gameplay logic.',
    myRoleTitle: 'Gameplay / Systems Engineer',
    myRoleBullets: [
      'Designed subsystem-driven multiplayer gameplay architecture',
      'Implemented C++ systems across GameMode, GameState, and PlayerState layers',
      'Built replication-safe systems for objectives, scoring, and player progression',
      'Structured gameplay features as modular Unreal subsystems',
      'Collaborated with designers to support data-driven configuration of game modes',
    ],
    problem:
      'Traditional Unreal gameplay logic often becomes tightly coupled to GameMode classes. As additional gameplay modes were introduced, this risked creating large monolithic GameMode implementations that would be difficult to maintain, extend, and reason about in multiplayer. At the same time, multiplayer systems required careful separation of server authority, client state, and persistent player data.',
    goals: [
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
    logoType: 'icon',
    image: progressionImg,
    caption:
      "Gameplay progression pipeline connecting objectives, rewards, currency systems, and persistent player profile data.",
    title: 'Data-Driven Gameplay Systems',
    subtitle:
      "Building reusable progression, reward, and persistence systems through modular Unreal subsystems and data-driven configuration.",
    diagram: bbArchDiagram,
    diagramAlt: '',
    showDiagramOnHome: false,
    showDiagramOnCaseStudy: false,
    metrics: [
      { value: 'Progression', label: 'Shared Gameplay Framework' },
      { value: 'Rewards', label: 'Reusable Reward Pipeline' },
      { value: 'Persistence', label: 'Profile & Save Data' },
      { value: 'Data-Driven', label: 'Designer-Friendly Tuning' },
    ],
    overview:
      'To support progression systems and player rewards across multiple gameplay modes, I implemented a series of modular gameplay subsystems responsible for player currency, progression, and persistent profile data.',
    myRoleTitle: 'Gameplay / Systems Engineer',
    myRoleBullets: [
      'Designed modular progression, currency, and reward systems',
      'Implemented reusable Unreal subsystems for rewards and persistence',
      'Built player profile persistence and progression tracking',
      'Structured objective completion pipelines to generate gameplay rewards',
      'Enabled designers to tune progression values through data-driven configuration',
    ],
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
    logoType: 'icon',
    image: aiGoalsImg,
    caption:
      "AI enemies selecting strategic targets through behavior-tree services and dynamic goal scoring.",
    title: 'AI Strategic Goal System',
    subtitle:
      "Implementing dynamic AI goal evaluation using Behavior Trees, perception input, and scoring systems for adaptive enemy behavior.",
    diagram: bbArchDiagram,
    diagramAlt: '',
    showDiagramOnHome: false,
    showDiagramOnCaseStudy: false,
    metrics: [
      { value: 'AI', label: 'Decision Architecture' },
      { value: 'Behavior Trees', label: 'Runtime Control Layer' },
      { value: 'Perception', label: 'World Awareness Input' },
      { value: 'Goal Scoring', label: 'Dynamic Priority Selection' },
    ],
    overview:
      'AI characters in Bedroom Brawl needed to respond dynamically to changing gameplay situations such as attacking players, defending objectives, or pursuing strategic targets. To support this, I implemented a goal evaluation system integrated with Unreal’s Behavior Tree framework.',
    myRoleTitle: 'Gameplay / AI Systems Engineer',
    myRoleBullets: [
      'Designed dynamic AI goal evaluation architecture',
      'Implemented Behavior Tree services for runtime goal scoring',
      'Integrated AI Perception data into decision-making systems',
      'Built Blackboard-driven goal selection for movement and combat behaviors',
      'Tuned evaluation frequency to balance responsiveness and performance',
    ],
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
    logoType: 'icon',
    image: towerDefenseImg,
    caption:
      "Tower defense gameplay driven by grid-based trap placement, modular wave spawning, and objective tracking systems.",
    title: 'Tower Defense Gameplay Systems',
    subtitle:
      "Designing modular placement, wave, and objective systems for scalable tower-defense gameplay and high enemy counts.",
    diagram: bbArchDiagram,
    diagramAlt: '',
    showDiagramOnHome: false,
    showDiagramOnCaseStudy: false,
    metrics: [
      { value: 'Grid Placement', label: 'Trap Validation & Snapping' },
      { value: 'Wave Logic', label: 'Encounter Spawning Flow' },
      { value: 'Goal Tracking', label: 'Objective Damage Systems' },
      { value: 'Scalability', label: 'Performance-Driven Design' },
    ],
    overview:
      'Bedroom Brawl includes gameplay inspired by tower defense mechanics, requiring systems for trap placement, enemy waves, and pathing. I implemented modular gameplay systems to support these mechanics while keeping them maintainable and performant.',
    myRoleTitle: 'Gameplay / Systems Engineer',
    myRoleBullets: [
      'Designed modular tower-defense gameplay systems',
      'Implemented grid-based trap placement and validation logic',
      'Built wave management systems for enemy spawning and encounter flow',
      'Implemented goal tracking and objective damage systems',
      'Structured gameplay systems to support high enemy counts and scalable encounters',
    ],
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
    logoType: 'icon',
    image: waffleAssetImg,
    caption:
      "Waffle Smash performance tracker using Unity Addressables and on-demand asset delivery to support scalable mobile content.",
    title: 'Scalable Mobile Asset Delivery in Unity',
    subtitle: "Building a scalable mobile content pipeline using Unity Addressables, Play Asset Delivery, and runtime memory-aware asset management.",
    diagram: bbArchDiagram,
    diagramAlt: '',
    showDiagramOnHome: false,
    showDiagramOnCaseStudy: false,
    metrics: [
      { value: 'Unity', label: 'Mobile Gameplay Pipeline' },
      { value: 'Addressables', label: 'Runtime Asset Loading' },
      { value: 'PAD', label: 'On-Demand Content Delivery' },
      { value: 'Memory', label: 'Load / Release Optimization' },
    ],
    overview:
      'For Waffle Smash: Diner Rush, a mobile match-3 and diner-building game released on Android and iOS, I worked on gameplay systems, UI, scene flow, and technical infrastructure with a strong focus on asset delivery, memory efficiency, and scalable content management. A major challenge was supporting growing game content without inflating install size or causing unnecessary runtime memory pressure.',
    myRoleTitle: 'Game Engineer (Unity)',
    myRoleBullets: [
      'Integrated Unity Addressables into gameplay and UI feature flows',
      'Implemented runtime asset loading and release strategies to reduce memory usage',
      'Supported Play Asset Delivery (PAD) for on-demand mobile content distribution',
      'Developed data-driven scene and tutorial systems using Scriptable Objects',
      'Contributed gameplay systems, UI implementation, and mobile build pipeline support',
    ],
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