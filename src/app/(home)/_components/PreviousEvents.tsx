import Image from "next/image";
import { Award } from "lucide-react";

type Winner = {
    title: string;
    team: string;
    category: string;
    image: string;
};

const winners2024: Winner[] = [
    {
        title: "Overall Champion",
        team: "Team Luminary",
        category: "Grand Winner – Illuminate 2024",
        image: "/illuminate/overall-winner.jpg",
    },
    {
        title: "Creativity & Design",
        team: "north Collective",
        category: "Design Excellence Award",
        image: "/illuminate/design-winner.jpg",
    },
    {
        title: "Technology & Innovation",
        team: "NeoForge",
        category: "Innovation Champion",
        image: "/illuminate/tech-winner.jpg",
    },
    {
        title: "Strategy & Communication",
        team: "EchoSphere",
        category: "Strategic Excellence",
        image: "/illuminate/strategy-winner.jpg",
    },
    {
        title: "Special Jury Recognition",
        team: "Project Zenith",
        category: "Jury’s Choice",
        image: "/illuminate/jury-recognition.jpg",
    },
];

export default function PreviousEvents() {
    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-14 text-center">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                        Previous Events
                    </p>
                    <h2 className="mt-3 text-4xl font-bold tracking-tight">
                        Illuminate 2024 Winners
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Celebrating the teams that defined innovation, creativity, and
                        excellence at Illuminate 2024.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {winners2024.map((winner) => (
                        <div
                            key={winner.team}
                            className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm transition hover:shadow-lg"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={winner.image}
                                    alt={winner.team}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>

                            <div className="relative p-6">
                                <div className="mb-3 flex items-center gap-2 text-sm text-primary">
                                    <Award className="h-4 w-4" />
                                    {winner.title}
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {winner.team}
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    {winner.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
