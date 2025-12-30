"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner"
import { northEvents } from "@/data/events/north";
import { centralEvents } from "@/data/events/central";
import { southEvents } from "@/data/events/south";
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
    
    const zonalEvents = {
        north: northEvents,
        central: centralEvents,
        south: southEvents,
    } as const;

    const activeStyles = zoneStyles[activeZone];

    const handleZoneChange = (value: string) => {
        const zone = value as "north" | "central" | "south";
        router.replace(`/events?zone=${zone}`);
    };

    return (
        <div className="min-h-screen">
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
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
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {zonalEvents[activeZone].map((event) => (
                            <div key={event.id}>
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
                                            </div>

                                            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line line-clamp-2">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between">
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
                                                        </DialogHeader>

                                                        <DialogDescription className="mt-4 text-sm leading-relaxed whitespace-pre-line max-h-[60vh] overflow-y-auto pr-2">
                                                            {event.description}
                                                        </DialogDescription>


                                                        {event.link && (
                                                            <Button asChild className="w-full mt-6 gap-2">
                                                                <Link
                                                                    href={event.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Register/Submit your work
                                                                    <ArrowRight className="w-4 h-4" />
                                                                </Link>
                                                            </Button>
                                                        )}
                                                        {event.shortname && (
                                                            <div className="flex flex-col sm:flex-row gap-2 mt-2">
                                                                <Button
                                                                    onClick={() => {
                                                                        navigator.clipboard.writeText(`https://illumunate.mulearn.org/r/${event.shortname}`);
                                                                        toast.success("Link copied to clipboard!");
                                                                    }}
                                                                    className="flex-1 gap-2"
                                                                    variant="outline"
                                                                >
                                                                    Copy Registration/Submission Link
                                                                </Button>

                                                                <Button
                                                                    asChild
                                                                    className="flex-1 gap-2"
                                                                    variant="outline"
                                                                >
                                                                    <Link
                                                                        href={`https://wa.me/?text=${encodeURIComponent(
                                                                            `Check out this event: ${event.name} https://illumunate.mulearn.org/r/${event.shortname}`
                                                                        )}`}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        Share via WhatsApp
                                                                    </Link>
                                                                </Button>
                                                            </div>
                                                        )}

                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>
                                </MotionDiv>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
