'use client'
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { useAtom } from "jotai";
import { headerToggleAtom } from '@/store/atoms'




type WorkCardProps = {
  title: string;
  ja_contents: string;
  en_contents: string;
  link: string;
  imageurl: StaticImageData;
}

export default function WorkCardComponent({ title, ja_contents, en_contents, link, imageurl }: WorkCardProps) {
  const [isEnglish] = useAtom(headerToggleAtom)
  return (
    <div
      className="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 m-3"
    >
      <div
        className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group"
      >
        <Image
          src={imageurl}
          alt="product image"
          width={300}
          height={300}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"
        ></div>
      </div>
      <div className="p-6">
        <h5
          className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300"
        >
          {title}
        </h5>
        <p
          className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased"
        >
          {isEnglish ? en_contents : ja_contents}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
        >
          <Link href={link}>
            <span className="relative flex items-center gap-2">
              Read More
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </Link>
        </button>
      </div>
    </div>
  )
}

