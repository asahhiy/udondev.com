"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface techStackProps {
  name: string;
  iconUrl: string;
}

const techStack: techStackProps[] = [
  {
    name: "Next.js",
    iconUrl: "https://devicon-website.vercel.app/api/nextjs/original.svg",
  },
  {
    name: "tailwindcss",
    iconUrl: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
  },
  {
    name: "PostgreSQL",
    iconUrl:
      "https://devicon-website.vercel.app/api/postgresql/original-wordmark.svg",
  },
  {
    name: "typescript",
    iconUrl: "https://devicon-website.vercel.app/api/typescript/original.svg",
  },
  {
    name: "Swift",
    iconUrl: "https://devicon-website.vercel.app/api/swift/original.svg",
  },
  {
    name: "git",
    iconUrl: "https://devicon-website.vercel.app/api/git/original.svg",
  },
  {
    name: "GitHub",
    iconUrl: "https://devicon-website.vercel.app/api/github/original.svg",
  },
  {
    name: 'Figma',
    iconUrl: 'https://devicon-website.vercel.app/api/figma/original.svg'
  },
{
    name: 'C',
    iconUrl: 'https://devicon-website.vercel.app/api/c/original.svg'
  },
{
    name: 'threejs',
    iconUrl: 'https://devicon-website.vercel.app/api/threejs/original.svg'
  },
{
    name: 'debian',
    iconUrl: 'https://devicon-website.vercel.app/api/debian/original.svg'
  },
{
    name: 'linux',
    iconUrl: 'https://devicon-website.vercel.app/api/linux/original.svg'
  },
{
    name: 'html5',
    iconUrl: 'https://devicon-website.vercel.app/api/html5/original.svg'
  },
];

const duplicatedTechStack = [...techStack, ...techStack]

export default function ScrollBaner() {
  return (
    <div className="overflow-hidden w-full py-3 bg-neutral-300 text-black">
      <motion.div
        className="flex w-max gap-12 pr-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {duplicatedTechStack.map((techobject, index) => (
          <span
            key={index}
            className="text-xl font-pathway whitespace-nowrap flex mx-15 space-x-3 items-center"
          >
            <Image
              width={30}
              height={30}
              src={techobject.iconUrl}
              alt={techobject.name}
              className="opacity-80"
            />
            <div className="mx-0.5">{techobject.name}</div>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
