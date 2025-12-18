'use client'
import { useAtom } from "jotai";
import { headerToggleAtom } from '@/store/atoms'

export default function HeaderComponents() {
  const [isEnglish, setIsEnglish] = useAtom(headerToggleAtom)
  return (
    <div className='flex justify-between bg-black'>
      <header className='font-bebas text-7xl flex block-inline text-creamwhite items-center m-1'>udondev.com</header>
      <div className='text-creamwhite flex items-center '>
        <a href="#about" className='m-3'>About Me</a>
        <a href="#skills" className='m-3'>Skills</a>
        <a href="#works" className='m-3'>Works</a>
        <a href="#contact" className='m-3'>Contact</a>

      </div>
      <div className='w-[200px] flex items-center'>
        <div className="text-creamwhite mx-2">
          English
        </div>
        <input type="checkbox" onChange={() => {
          setIsEnglish(!isEnglish)
        }} className="toggle" />
      </div>
    </div>

  )
}
