import Hero from '@/app/(home)/_components/Hero';
import Concept from '@/app/(home)/_components/Concept';
import Zones from '@/app/(home)/_components/Zones';
import CTA from '@/app/(home)/_components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Concept />
      <Zones />
      <CTA />
    </div>
  );
};
