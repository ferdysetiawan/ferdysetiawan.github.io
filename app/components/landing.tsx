"use client";
import Image from "next/image";
import PFP from "@/public/frdy.jpg";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import Efek from "./efek";
import { useEffect, useState } from "react";

const socialLinks = [
  { href: "https://linkedin.com/in/ferdysetiawan", label: "LinkedIn Profile", Icon: LinkedinIcon },
  { href: "https://x.com/ferstawn", label: "X/Twitter Profile", Icon: TwitterIcon },
  { href: "https://github.com/ferdysetiawan", label: "GitHub Profile", Icon: GithubIcon },
];

const TYPING_TEXT = "それでも, 僕だけは忘れない 物語";

function TypingText() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < TYPING_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + TYPING_TEXT[index]);
        setIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <p className="font-[gamma] text-base text-gray-400 sm:text-lg min-h-[1.75rem]">
      {displayed}
      {index < TYPING_TEXT.length && (
        <span className="inline-block w-[2px] h-[1em] bg-gray-400 ml-0.5 animate-pulse align-middle" />
      )}
    </p>
  );
}

export default function Landing() {
  return (
    <main className="relative flex h-screen max-h-screen flex-col items-center overflow-x-hidden bg-black">
      <Efek/>
      <div className="relative z-10 flex flex-grow flex-col items-center justify-center gap-5 px-4 text-center">
        <Image
          src={PFP}
          alt="Frdystawn"
          className="h-32 w-32 rounded-full object-cover shadow-lg sm:h-40 sm:w-40 md:h-44 md:w-44"
          priority
        />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold tracking-widest text-white sm:text-3xl">
            FERDY SETIAWAN
          </h1>
          <TypingText />
        </div>
      </div>

      <footer className="relative z-10 w-full shrink-0 flex justify-center gap-8 pb-8 pt-4">
        {socialLinks.map(({ href, label, Icon }) => (
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
      </footer>
    </main>
  );
}