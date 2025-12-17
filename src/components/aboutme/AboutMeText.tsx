'use client'
import { useAtom } from 'jotai'
import { headerToggleAtom } from '@/store/atoms'

export default function AboutMeText() {
  const [isEnglish] = useAtom(headerToggleAtom)
  return (
    <div className="flex flex-col justify-center">
      <div className='object-cover transition-transform duration-500
            ease-in-out group-hover:-translate-x-100 mx-6'>
        <h1 className='font-bold font-pathway text-5xl'>Web Developer</h1>


      </div>
      <div className="mx-6 font-pathway text-2xl font-bold">
        udon
      </div>
      <div className="my-6 mx-6 justify-center flex">
        {isEnglish ? <div className="my-6 mx-6 justify-center flex">
          Ritsumeikan University, <br />College of Information Science and Engineering <br />
          Currently enrolled in the Security and Network Engineering Course. <br />
          I am currently focusing my studies on front-end development.
        </div> : <div className="my-6 mx-6 justify-center flex">29卒<br />立命館大学情報理工学部<br />セキュリティネットワークコース在学中。
          <br />現在はフロントエンドを中心に勉強中です。<br />たまにCTFにも参加しています。</div>}

      </div>

    </div>
  )
}

