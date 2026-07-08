"use client";
import Image from "next/image";
import PFP from "@/public/media/images/frdy.jpg";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import Aurora from "./aurora";
import { useEffect, useState } from "react";

const TYPING_TEXT = "それでも, 僕だけは忘れない 物語";
const TYPING_DELAY_MS = 80;

const SOCIAL_LINKS = [
  { href: "https://linkedin.com/in/ferdysetiawan", label: "LinkedIn Profile", Icon: LinkedinIcon },
  { href: "https://x.com/ferstawn", label: "X/Twitter Profile", Icon: TwitterIcon },
  { href: "https://github.com/ferdysetiawan", label: "GitHub Profile", Icon: GithubIcon },
];

function TypingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex >= TYPING_TEXT.length) return;

    const timeoutId = setTimeout(() => {
      setDisplayedText((prev) => prev + TYPING_TEXT[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, TYPING_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [charIndex]);

  const isTypingActive = charIndex < TYPING_TEXT.length;

  return (
    <p className="font-[gamma] text-base text-gray-400 sm:text-lg min-h-[1.75rem]">
      {displayedText}
      {isTypingActive && (
        <span className="inline-block w-[2px] h-[1em] bg-gray-400 ml-0.5 animate-pulse align-middle" />
      )}
    </p>
  );
}

function ProfileSection() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold tracking-widest text-white sm:text-3xl">
        FERDY SETIAWAN
      </h1>
      <TypingText />
    </div>
  );
}

function SocialMediaFooter() {
  return (
    <div className="relative z-10 w-full flex justify-center gap-8">
      {SOCIAL_LINKS.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white transition-opacity duration-200 hover:opacity-60"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default function Landing() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-black">
      <div className="absolute top-0 left-0 right-0 h-full z-0 pointer-events-none">
        <Aurora />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4 text-center">
        <Image
          src={PFP}
          alt="Profile Picture"
          className="h-32 w-32 rounded-full object-cover shadow-lg sm:h-40 sm:w-40 md:h-44 md:w-44"
          priority
        />
        <ProfileSection />
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <SocialMediaFooter />
      </div>
    </main>
  );
}