import Providers from "@/app/providers";
import Animations from "@/app/(home)/_components/Animations";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <Animations>{children}</Animations>
        </Providers>
    );
}
