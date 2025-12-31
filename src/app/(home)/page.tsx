import dynamic from 'next/dynamic';
import Hero from '@/app/(home)/_components/Hero';

const Concept = dynamic(() => import('@/app/(home)/_components/Concept'));
const Zones = dynamic(() => import('@/app/(home)/_components/Zones'));
const CTA = dynamic(() => import('@/app/(home)/_components/CTA'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Concept />
      <Zones />
      <CTA />
    </main>
  );
}
