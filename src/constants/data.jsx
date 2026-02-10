// Character Data
import { Icons } from '../components/ui/Icons';
import WarriorIcon from '../assets/warrior.webp';
import SlayerIcon from '../assets/slayer.webp';
import DeployIcon from '../assets/deploy.webp';
import SeekerIcon from '../assets/seeker.webp';

export const CHARACTER_DATA = {
  name: 'Youssef Tarek',
  level: 25,
  xp: 8500,
  maxXp: 10000,
  class: 'Full Stack Developer',
  color: "from-purple-500 via-pink-500 to-gold"
}

// Skills Data
export const SKILLS = [
  {
    name: 'HTML',
    level: 95,
    icon: <Icons.Html5 />,
    iconColor: 'text-orange-600',
    color: 'from-orange-500 to-red-500',
    rank: 'Master',
  },
  {
    name: 'CSS',
    level: 90,
    icon: <Icons.Css3 />,
    iconColor: 'text-blue-600',
    color: 'from-blue-500 to-purple-500',
    rank: 'Master',
  },
  {
    name: 'Tailwind',
    level: 85,
    icon: <Icons.Tailwind />,
    iconColor: 'text-cyan-500',
    color: 'from-cyan-500 to-blue-600',
    rank: 'Expert',
  },
  {
    name: 'JavaScript',
    level: 92,
    icon: <Icons.Js />,
    iconColor: 'text-yellow-400',
    color: 'from-yellow-400 to-orange-500',
    rank: 'Master',
  },
  {
    name: 'React',
    level: 88,
    icon: <Icons.React />,
    iconColor: 'text-cyan-400',
    color: 'from-cyan-400 to-blue-500',
    rank: 'Expert',
  },
  {
    name: 'Redux',
    level: 80,
    icon: <Icons.Redux />,
    iconColor: 'text-purple-600',
    color: 'from-purple-500 to-pink-500',
    rank: 'Advanced',
  },
  {
    name: 'TanStack Query',
    level: 82,
    icon: <Icons.ReactQuery />,
    iconColor: 'text-red-500',
    color: 'from-red-500 to-pink-500',
    rank: 'Advanced',
  },
]

// Potions Data
export const POTIONS = [
  {
    emoji: <Icons.HealthPotion size={32} />,
    name: 'Coffee Potion',
    color: 'bg-gradient-to-br from-amber-700 to-yellow-900',
  },
  {
    emoji: <Icons.MagicPotion size={32} />,
    name: 'Energy Drink',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
  },
  {
    emoji: <Icons.PotionBall size={32} />,
    name: 'Focus Elixir',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
  {
    emoji: <Icons.ScrollUnfurled size={32} />,
    name: 'Debug Scroll',
    color: 'bg-gradient-to-br from-yellow-600 to-orange-700',
  },
]

// Achievements Data
export const ACHIEVEMENTS = [
  {
    icon: <img src={WarriorIcon} alt="Warrior" className="w-28 h-28 object-contain drop-shadow-md" loading="lazy" decoding="async" />,
    name: 'Code Warrior',
    iconColor: 'text-blue-400',
  },
  {
    icon: <img src={SlayerIcon} alt="Bug Slayer" className="w-28 h-28 object-contain drop-shadow-md" loading="lazy" decoding="async" />,
    name: 'Bug Slayer',
    iconColor: 'text-green-500',
  },
  {
    icon: <img src={DeployIcon} alt="Deploy Master" className="w-28 h-28 object-contain drop-shadow-md" loading="lazy" decoding="async" />,
    name: 'Deploy Master',
    iconColor: 'text-orange-500',
  },
  {
    icon: <img src={SeekerIcon} alt="Knowledge Seeker" className="w-28 h-28 object-contain drop-shadow-md" loading="lazy" decoding="async" />,
    name: 'Knowledge Seeker',
    iconColor: 'text-purple-400',
  },
]

// Resources Data
export const RESOURCES = [
  {
    icon: <Icons.Hearts />,
    label: 'Health',
    value: 98,
    max: 100,
    color: 'bg-health',
    bgColor: 'bg-red-900',
    iconColor: 'text-red-500',
  },
  {
    icon: <Icons.WaterDrop />,
    label: 'Mana',
    value: 90,
    max: 100,
    color: 'bg-mana',
    bgColor: 'bg-blue-900',
    iconColor: 'text-blue-400',
  },
  {
    icon: <Icons.LightningHelix />,
    label: 'Stamina',
    value: 86,
    max: 100,
    color: 'bg-stamina',
    bgColor: 'bg-green-900',
    iconColor: 'text-green-500',
  },
]
