import bbLogo from '../assets/BedroomBrawlLogo.png';
import waffleLogo from '../assets/WaffleSmash.png';
import redFrameworkLogo from '../assets/REDFramework.png';
import unrealLogo from '../assets/unreal-logo.png';
import unityLogo from '../assets/unity-logo.png';

const HomeProjectsData = [
  {
    id: 1,
    title: 'Bedroom Brawl',
    logoImage: bbLogo,
    engineLogo: unrealLogo,
    engineLogoType: 'icon',
    subtitle:
      'Multiplayer action game featuring modular gameplay systems, AI, shared progression, and competitive online play.',
    tags: ['Unreal Engine', 'Multiplayer', 'Gameplay Systems', 'AI'],
    website: 'https://www.bedroombrawl.com/bb-home',
    store: 'https://store.steampowered.com/app/4235730/BEDROOM_BRAWL/',
    storeLabel: 'Steam',
  },
  {
    id: 2,
    title: 'Waffle Smash: Diner Rush',
    logoImage: waffleLogo,
    engineLogo: unityLogo,
    engineLogoType: 'icon',
    subtitle:
      'Mobile match-3 and diner-building game with scalable content systems, tutorial flow, and on-demand asset delivery.',
    tags: ['Unity', 'Mobile', 'Addressables', 'UI / Systems'],
    website: 'https://www.wafflesmash.com/',
    store: 'https://play.google.com/store/apps/details?id=com.wamballc.wafflesmashtwo',
    storeLabel: 'App Store',
  },
  {
    id: 3,
    title: 'RED Gaming Framework',
    logoImage: redFrameworkLogo,
    engineLogo: unrealLogo,
    engineLogoType: 'icon',
    subtitle:
      'A modular multiplayer framework with data-driven animation systems, AI state trees, factions system, and reusable gameplay architecture for multiple prototypes.',
    tags: ['Framework', 'Unreal Engine', 'Data-Driven', 'Animation Blueprints', 'AI State Trees'],
  },
];

export default HomeProjectsData;