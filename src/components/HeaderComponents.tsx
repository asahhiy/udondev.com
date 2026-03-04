'use client'
import { useAtom } from "jotai";
import { headerToggleAtom } from '@/store/atoms'

export default function HeaderComponents() {
  const [isEnglish, setIsEnglish] = useAtom(headerToggleAtom)
  return (
    <div className='flex justify-between bg-black'>
      <header className='font-bebas lg:text-7xl md:text-xl flex block-inline text-creamwhite items-center m-1'>udondev.com</header>
      <div className='text-creamwhite flex items-center '>


      </div>
      <div className='w-[200px] flex items-center'>
        <div className="text-creamwhite lg:text-xl md:text-sm mx-2">
          English
        </div>
        <input type="checkbox" onChange={() => {
          setIsEnglish(!isEnglish)
        }} className="toggle" />
      </div>
    </div>

  )
}
