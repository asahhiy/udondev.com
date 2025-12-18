"use client";

import { Mail, GitFork } from "lucide-react";

export default function ContactComponent() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-20" />
      <div className="font-bold font-pathway text-5xl flex justify-center">
        Contact
      </div>
      <div className="bg-white/90 rounded-lg shadow-md mt-10 mb-5 p-5 w-110 flex flex-col justify-center">
        <div className="m-5 flex justify-center px-5">
          <Mail />
          <p className="px-5">mugimugiworks105@gmail.com</p>
        </div>
        <div className="m-5 flex justify-center px-5">
          <GitFork />
          <div className="w-67">
            <a className="px-5" href="https://github.com/asahhiy">
              asahhiy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
