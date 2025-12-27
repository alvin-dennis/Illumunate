"use server";

export async function getEvents() {
  const res = await fetch("https://opensheet.elk.sh/", {
  });

  const data = await res.json();

  return data.map((item: any) => ({
    name: item["Event Name"],
    date: item["Date"],
    deadline: item["Deadline"],
    karma: item["Total Karma"],
    description: item["Description"],
    fullDescription: item["Full Description"],
    formLink: item["Form Link"],
    poster: item["Poster"],
  }));
}
