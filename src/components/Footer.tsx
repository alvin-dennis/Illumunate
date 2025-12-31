import Link from 'next/link';
import { MotionDiv } from './Framer';
import Image from 'next/image';
import { links, socials } from '@/data/common';

export default function Footer() {
  return (
    <footer className="relative py-20 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex flex-col items-center gap-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full">
            <div className="text-center md:text-left">
              <Link href="/" className="block mb-6">
                <MotionDiv whileHover={{ scale: 1.03 }}>
                  <Image
                    src="/logo.png"
                    alt="Illumunate Logo"
                    width={170}
                    height={170}
                    preload
                    className="h-auto mx-auto md:mx-0"
                  />
                </MotionDiv>
              </Link>
              <p className="text-sm max-w-xs mx-auto md:mx-0">
                Illuµnate is the annual Christmas festival organized by µLearn,
                bringing together students from various colleges to celebrate the
                festive season with joy, creativity, and community spirit.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-4">
                  Quick Links
                </span>
                <div className="flex flex-col gap-3 items-center md:items-start">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm"
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
                <div className="flex flex-col gap-3 items-center md:items-start">
                  {socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                    >
                      {social.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center gap-4 pt-8 border-t border-border/20 text-center md:text-left w-full">
            <span className="text-xs text-muted-foreground">
              © 2025 Illuµnate. All rights reserved.
            </span>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <span className="text-xs text-muted-foreground">Powered by</span>
              <Link
                href="https://mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground hover:underline"
              >
                μLearn
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
