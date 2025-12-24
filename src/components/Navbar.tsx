"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv, MotionHeader } from "./Framer";
import { navLinks } from "@/data/common";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <MotionHeader
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/30 py-4 shadow-sm"
          : "bg-transparent py-6"
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <MotionDiv whileHover={{ scale: 1.03 }}>
              <Image
                src="/logo.svg"
                alt="Illumunate Logo"
                width={170}
                height={170}
                preload
                className="h-auto"
              />
            </MotionDiv>
          </Link>


          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm tracking-wide transition-colors ${isActive(link.path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <MotionDiv
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <MotionDiv
            className="
              hidden md:block
              backdrop-blur-md
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/zones">
              <Button variant="default" className="px-5 py-2">
                Join
              </Button>
            </Link>
          </MotionDiv>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 relative z-10"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MotionDiv
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden mt-6
                rounded-2xl
                bg-background/80 backdrop-blur-xl
                border border-border/30
                shadow-lg
                p-6
              "
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </MotionHeader>
  );
};

export default Navbar;
