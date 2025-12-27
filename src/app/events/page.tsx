"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Award,
    Clock,
    ArrowRight,
    Calendar,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { zonalEvents } from "@/data/events";
import { zoneStyles, zones } from "@/data/zones";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { MotionDiv } from "@/components/Framer";
import Image from "next/image";
import Link from "next/link";

export default function Events() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const activeZone =
        (searchParams.get("zone") as "north" | "central" | "south") || "central";
    const activeStyles = zoneStyles[activeZone];

    const handleZoneChange = (value: string) => {
        const zone = value as "north" | "central" | "south";
        router.replace(`/events?zone=${zone}`);
    };

    return (
        <div className="min-h-screen">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <ScrollReveal className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                            Participate & Win
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                            Zone-wise <span className="text-primary">Events</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Explore events across all three zones. Each event offers unique
                            challenges and rewards.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-3 mb-12">
                        {zones.map((zone) => (
                            <Button
                                key={zone.id}
                                variant={activeZone === zone.id ? "default" : "ghost"}
                                onClick={() => handleZoneChange(zone.id)}
                                className="gap-2"
                            >
                                {zone.name}
                            </Button>
                        ))}
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {zonalEvents[activeZone].map((event, index) => (
                            <ScrollReveal key={event.id} delay={index * 100}>
                                <MotionDiv
                                    className={`group relative bg-mulearn-whitish rounded-2xl overflow-hidden
                    shadow-sm hover:shadow-xl transition-all duration-300
                    border ${activeStyles.borderColor}
                    flex flex-col`}
                                >
                                    <div className="h-40 w-full overflow-hidden">
                                        {event.poster ? (
                                            <Image
                                                src={event.poster}
                                                alt={event.name}
                                                width={800}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-red-700 via-red-800 to-black" />
                                        )}
                                    </div>

                                    <div className="p-5 flex flex-col justify-between flex-1">
                                        <div>
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold text-foreground pr-4">
                                                    {event.name}
                                                </h3>
                                                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                                                    <Award className="w-4 h-4 text-accent" />
                                                    <span className="text-sm font-bold text-accent">
                                                        {event.points} pts
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4" />
                                                Deadline: {event.deadline}
                                            </div>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button size="sm" className="gap-2">
                                                        View Details
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Button>
                                                </DialogTrigger>

                                                <DialogContent className="max-w-lg rounded-2xl p-0 overflow-hidden">
                                                    <div className="p-6">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-xl">
                                                                {event.name}
                                                            </DialogTitle>
                                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                                                <Calendar className="w-4 h-4" />
                                                                Deadline: {event.deadline}
                                                            </div>
                                                        </DialogHeader>

                                                        <DialogDescription className="mt-4 text-sm leading-relaxed">
                                                            {event.description}
                                                        </DialogDescription>

                                                        {event.link && (
                                                            <Button asChild className="w-full mt-6 gap-2">
                                                                <Link
                                                                    href={event.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Participate Now
                                                                    <ArrowRight className="w-4 h-4" />
                                                                </Link>
                                                            </Button>
                                                        )}
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                </MotionDiv>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
