import { zonalEvents } from "./events";

export const REDIRECTS: Record<string, string> = Object.values(zonalEvents)
  .flat()
  .reduce<Record<string, string>>((acc, event) => {
    if (event.shortname && event.link) {
      acc[event.shortname] = event.link;
    }
    return acc;
  }, {});
