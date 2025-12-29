export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Event = {
  id: number;
  name: string;
  description: string;
  deadline: string;
  poster: string | null;
  link: string;
  shortname: string;
};

export type Zone = "north" | "central" | "south";

export type ZonalEvents = Record<Zone, Event[]>;

export type Leaderboard = {
  rank: number;
  name: string;
  college: string;
  zone: "north" | "central" | "south";
  tier: number;
};
