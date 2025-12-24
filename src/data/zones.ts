import { Palette, Zap, Heart } from "lucide-react";

export const zoneData = [
  {
    id: "aurora",
    name: "Zone Aurora",
    tagline: "Creativity & Design",
    description:
      "Unleash your artistic vision through design challenges, creative showcases, and visual storytelling events. Aurora is where imagination meets skill.",
    icon: Palette,
    gradient: "from-purple-600 via-pink-500 to-purple-600",
    color: "text-muted",
    bgColor: "bg-muted/10",
    borderColor: "border-muted/30",
    events: 5,
    participants: 450,
    totalPoints: 2500,
  },
  {
    id: "spark",
    name: "Zone Spark",
    tagline: "Technical & Innovation",
    description:
      "Push the boundaries of technology with coding challenges, hackathons, and innovative problem-solving. Spark is where logic meets creativity.",
    icon: Zap,
    gradient: "from-amber-500 via-yellow-400 to-amber-500",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    events: 6,
    participants: 520,
    totalPoints: 3000,
  },
  {
    id: "noel",
    name: "Zone Noel",
    tagline: "Fun, Community & Culture",
    description:
      "Celebrate the festive spirit with cultural performances, community activities, and joyful gatherings. Noel is where hearts come together.",
    icon: Heart,
    gradient: "from-emerald-500 via-green-400 to-emerald-500",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    events: 4,
    participants: 380,
    totalPoints: 2000,
  },
];

export const zoneIcons = [
  {
    id: "aurora",
    name: "Zone Aurora",
    icon: Palette,
    color: "purple" as const,
  },
  { id: "spark", name: "Zone Spark", icon: Zap, color: "gold" as const },
  { id: "noel", name: "Zone Noel", icon: Heart, color: "green" as const },
];

export const zoneStyles = {
  aurora: {
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    color: "text-purple-400",
    glowColor: "purple" as const,
  },
  spark: {
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    color: "text-accent",
    glowColor: "gold" as const,
  },
  noel: {
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    color: "text-secondary",
    glowColor: "green" as const,
  },
};