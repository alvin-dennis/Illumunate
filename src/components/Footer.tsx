import Link from 'next/link';
import { MotionDiv } from './Framer';
import Image from 'next/image';

const Footer = () => {
  const links = [
    { name: 'Zones', path: '/zones' },
    { name: 'Events', path: '/events' },
    { name: 'Results', path: '/results' },
  ];

  return (
    <footer className="relative py-20 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div>
              <Link href="/" className="block mb-6">
                <MotionDiv whileHover={{ scale: 1.03 }}>
                  <Image
                    src="/logo.png"
                    alt="Illumunate Logo"
                    width={170}
                    height={170}
                    preload
                    className="h-auto"
                  />
                </MotionDiv>
              </Link>
              <p className="text-editorial text-sm max-w-xs">
                Illuµnate is the annual Christmas festival organized by µLearn,
                bringing together students from various colleges to celebrate the
                festive season with joy, creativity, and community spirit.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground  block mb-4">
                  Navigate
                </span>
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm "
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-4">
                  Connect
                </span>
                <div className="flex flex-col gap-3">
                  {['Twitter', 'Instagram', 'Discord'].map((social) => (
                    <Link
                      key={social}
                      href="#"
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                    >
                      {social}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/20">
            <span className="text-xs text-muted-foreground">
              © 2025 Illuµnate. All rights reserved.
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Powered by</span>
              <span className="text-xs text-foreground">μLearn × TPM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
