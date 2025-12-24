import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionH2, MotionP, MotionDiv } from '@/components/Framer';

const BrutalistCTA = () => {

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <MotionH2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-12"
          >
            JOIN THE<br />
            <span className="text-gradient">LIGHT</span>
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-editorial text-lg max-w-md mx-auto mb-16"
          >
            Be part of an experience that transcends traditional celebration.
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/register">
              <Button
                variant={"default"}
                className="px-4 py-2"
              >
                <span className="relative z-10">REGISTER NOW</span>
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default BrutalistCTA;
