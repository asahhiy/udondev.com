import Image from 'next/image'
import udonProfile from '../../public/udonProfile.png'
import AboutMeText from './aboutme/AboutMeText'
import { motion } from 'motion/react'


export default function AboutmeComponent() {
  return (
    <div className="flex justify-center py-6 px-5 mt-30 flex-wrap">
      <AboutMeText />
    </div>
  )
}

