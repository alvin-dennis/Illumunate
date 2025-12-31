export const zoneData = [
  {
    id: "north",
    name: "µgly",
    tagline: "Mischief served daily",
    description:
      "Discover playful challenges and curiosity-driven learning where rules bend, creativity leads, and skills grow through joyful experimentation.",
    mascot: "/mascots/mugly.webp",
    district: [
      "Kasaragod",
      "Kannur",
      "Wayanad",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
    ],
    gradient: "from-red-600 via-black to-red-600",
    color: "text-muted-foreground",
    bgColor: "bg-primary",
    borderColor: "border-muted/30",
  },
  {
    id: "central",
    name: "Vasco De µsic",
    tagline: "µsic with Body Muscles",
    description:
      "Flex your muscles with creative electronics, coding, and AI storytelling. Festive spirit meets innovative logic to illµnate your journey.",
    mascot: "/mascots/ponji.webp",
    district: ["Thrissur", "Ernakulam", "Idukki", "Kottayam"],
    gradient: "from-amber-500 via-yellow-400 to-amber-500",
    color: "text-accent",
    bgColor: "bg-accent",
    borderColor: "border-accent/30",
  },
  {
    id: "south",
    name: "μember",
    tagline: "Certified hope dealer",
    description:
      "Celebrate the festive spirit with cultural performances, community activities, and joyful gatherings. south is where hearts come together.",
    mascot: "/mascots/emby.webp",
    district: ["Alappuzha", "Kollam", "Thiruvananthapuram", "Pathanamthitta"],
    gradient: "from-emerald-500 via-green-400 to-emerald-500",
    color: "text-secondary",
    bgColor: "bg-secondary",
    borderColor: "border-secondary/30",
  },
];

export const zones = [
  {
    id: "north",
    name: "North Zone",
  },
  { id: "central", name: "Central Zone" },
  { id: "south", name: "South Zone" },
];

export const zoneStyles = {
  north: {
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    color: "text-purple-400",
    glowColor: "purple" as const,
  },
  central: {
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    color: "text-accent",
    glowColor: "gold" as const,
  },
  south: {
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    color: "text-secondary",
    glowColor: "green" as const,
  },
};
