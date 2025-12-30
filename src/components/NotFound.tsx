import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Sparkles } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
            <div className="relative z-10 text-center px-6 max-w-lg">
                <h1 className="text-[10rem] sm:text-[12rem] font-bold leading-none mb-2 select-none">
                    404
                </h1>
                <div className="space-y-3 mb-10">
                    <h3 className="text-2xl sm:text-3xl text-foreground">
                        Page Not Found
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-sm mx-auto">
                        Looks like this page got lost in the snow. Let's get you back home for the holidays.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button variant="default" asChild>
                        <Link href="/">
                            <Home className="mr-2 h-5 w-5" />
                            Back Home
                        </Link>
                    </Button>
                    <Button variant="default" asChild>
                        <Link href="/events">
                            <Sparkles className="mr-2 h-5 w-5" />
                            Explore
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};