import Image from "next/image";

export default function Loader() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center">
            <div className="p-4 shadow-lg flex items-center justify-center animate-pulse transition-all ease-out">
                <div className="relative">
                    <Image
                        src="/logo.svg"
                        alt="Illumunate Logo"
                        width={170}
                        height={170}
                        preload
                        className="h-auto"
                    />
                </div>
            </div>
        </main>
    );
}