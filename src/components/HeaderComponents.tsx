'use client'
import { useAtom } from "jotai";
import { headerToggleAtom } from '@/store/atoms'
import Link from "next/link";

export default function HeaderComponents() {
  const [isEnglish, setIsEnglish] = useAtom(headerToggleAtom)
  return (
    <div className='flex justify-between bg-black'>
      <header className='font-bebas lg:text-7xl md:text-xl flex block-inline text-creamwhite items-center m-1'>udondev.com</header>
      <div className="space-x-2 flex items-center">
        <Link href='/' className="text-creamwhite" >
          what
        </Link>
        <Link href='/blog' className="text-creamwhite">
          blog
        </Link>
      </div>

      <div className='w-[200px] flex items-center'>

        <div className="text-creamwhite mx-2">
          English
        </div>
        <input type="checkbox" onChange={() => {
          setIsEnglish(!isEnglish)
        }} className="toggle bg-white" />
      </div>
    </div>

  )
}
