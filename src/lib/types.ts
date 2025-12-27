export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Event = {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  points: number;
  deadline: string;
  poster: string;
  link: string;
};

export type Leaderboard = {
  rank: number;
  name: string;
  college: string;
  zone: "north" | "central" | "south";
  points: number;
};
