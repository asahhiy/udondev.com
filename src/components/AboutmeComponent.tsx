import Image from 'next/image'
import udonProfile from '../../public/udonProfile.png'
import AboutMeText from './aboutme/AboutMeText'



export default function AboutmeComponent() {
  return (
    <div className="flex justify-center py-6 px-5 flex-wrap">
      <div className="hover-3d mx-1">
        {/* content */}
        <figure className="max-w-100 rounded-2xl">
          <Image src={udonProfile}
            width={250}
            height={250}
            alt="3D card"
          />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <AboutMeText />
    </div>
  )
}

