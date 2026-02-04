// Character Data
import {
  GiHealthPotion,
  GiMagicPotion,
  GiPotionBall,
  GiScrollUnfurled,
  GiTrophy,
  GiSwordsPower,
  GiRocket,
  GiBookCover,
  GiHearts,
  GiWaterDrop,
  GiLightningHelix
} from 'react-icons/gi';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiReactquery } from 'react-icons/si';

export const CHARACTER_DATA = {
  name: 'Youssef Tarek',
  level: 25,
  xp: 8500,
  maxXp: 10000,
  class: 'Full Stack Developer',
}

// Skills Data
export const SKILLS = [
  {
    name: 'HTML',
    level: 95,
    icon: <FaHtml5 />,
    iconColor: 'text-orange-600',
    color: 'from-orange-500 to-red-500',
    rank: 'Master',
  },
  {
    name: 'CSS',
    level: 90,
    icon: <FaCss3Alt />,
    iconColor: 'text-blue-600',
    color: 'from-blue-500 to-purple-500',
    rank: 'Master',
  },
  {
    name: 'Tailwind',
    level: 85,
    icon: <SiTailwindcss />,
    iconColor: 'text-cyan-500',
    color: 'from-cyan-500 to-blue-600',
    rank: 'Expert',
  },
  {
    name: 'JavaScript',
    level: 92,
    icon: <FaJs />,
    iconColor: 'text-yellow-400',
    color: 'from-yellow-400 to-orange-500',
    rank: 'Master',
  },
  {
    name: 'React',
    level: 88,
    icon: <FaReact />,
    iconColor: 'text-cyan-400',
    color: 'from-cyan-400 to-blue-500',
    rank: 'Expert',
  },
  {
    name: 'Redux',
    level: 80,
    icon: <SiRedux />,
    iconColor: 'text-purple-600',
    color: 'from-purple-500 to-pink-500',
    rank: 'Advanced',
  },
  {
    name: 'TanStack Query',
    level: 82,
    icon: <SiReactquery />,
    iconColor: 'text-red-500',
    color: 'from-red-500 to-pink-500',
    rank: 'Advanced',
  },
]

// Potions Data
export const POTIONS = [
  {
    emoji: <GiHealthPotion size={32} />,
    name: 'Coffee Potion',
    color: 'bg-gradient-to-br from-amber-700 to-yellow-900',
  },
  {
    emoji: <GiMagicPotion size={32} />,
    name: 'Energy Drink',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
  },
  {
    emoji: <GiPotionBall size={32} />,
    name: 'Focus Elixir',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
  {
    emoji: <GiScrollUnfurled size={32} />,
    name: 'Debug Scroll',
    color: 'bg-gradient-to-br from-yellow-600 to-orange-700',
  },
]

// Achievements Data
export const ACHIEVEMENTS = [
  {
    icon: <GiTrophy />,
    name: 'Code Warrior',
    iconColor: 'text-blue-400',
  },
  {
    icon: <GiSwordsPower />,
    name: 'Bug Slayer',
    iconColor: 'text-green-500',
  },
  {
    icon: <GiRocket />,
    name: 'Deploy Master',
    iconColor: 'text-orange-500',
  },
  {
    icon: <GiBookCover />,
    name: 'Knowledge Seeker',
    iconColor: 'text-purple-400',
  },
]

// Resources Data
export const RESOURCES = [
  {
    icon: <GiHearts />,
    label: 'Health',
    value: 100,
    max: 100,
    color: 'bg-health',
    bgColor: 'bg-red-900',
  },
  {
    icon: <GiWaterDrop />,
    label: 'Mana',
    value: 95,
    max: 100,
    color: 'bg-mana',
    bgColor: 'bg-blue-900',
  },
  {
    icon: <GiLightningHelix />,
    label: 'Stamina',
    value: 88,
    max: 100,
    color: 'bg-stamina',
    bgColor: 'bg-green-900',
  },
]
