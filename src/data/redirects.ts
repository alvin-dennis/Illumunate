import { northEvents } from "@/data/events/north";
import { centralEvents } from "@/data/events/central";
import { southEvents } from "@/data/events/south";

const zonalEvents = {
  north: northEvents,
  central: centralEvents,
  south: southEvents,
} as const;

export const REDIRECTS: Record<string, string> = Object.values(zonalEvents)
  .flat()
  .reduce<Record<string, string>>((acc, event) => {
    if (event.shortname && event.link) {
      acc[event.shortname] = event.link;
    }
    return acc;
  }, {});
