'use client'
import { useAtom } from 'jotai'
import { headerToggleAtom } from '@/store/atoms'
import { motion } from 'motion/react'

export default function AboutMeText() {
  const [isEnglish] = useAtom(headerToggleAtom)
  return (
    <div className="flex flex-col justify-center">
      <motion.div 
        className='object-cover group-hover:-translate-x-100 mx-6'
        initial={{opacity:0,x:-50}}
        animate={{opacity:1, x:0}}
        transition={{
          duration:1,
          type:'spring',
          stiffness:100,
          damping:20

        }}
        style={{display: 'inline-block'}}
        >
        <h1 className='font-bold font-pathway lg:text-9xl'>Web / Mobile  <br />Developer</h1>


      </motion.div>
      <motion.div className="mx-6 font-pathway text-2xl font-bold"
        initial={{opacity:0,x:-50}}
        animate={{opacity:1, x:0}}
        transition={{
          duration:2,
          ease:[0.22,1,0.36,1]
        }}
        style={{display: 'inline-block'}}

      
      >
        udon
      </motion.div>
      <motion.div className="my-6 flex"
         initial={{opacity:0,x:-50}}
        animate={{opacity:1, x:0}}
        transition={{
          duration:3,
          ease:[0.22,1,0.36,1]
        }}
        style={{display: 'inline-block'}}


      >
        {isEnglish ? <div className="my-6 mx-6 flex">
          Ritsumeikan University, <br />College of Information Science and Engineering <br />
          Currently enrolled in the Security and Network Engineering Course. <br />
          I am currently focusing my studies on front-end development.
        </div> : <div className="my-6 mx-6 flex">29卒<br />立命館大学情報理工学部<br />セキュリティネットワークコース
          <br />フロントエンド、モバイル開発が趣味。<br />最近Atcoder始めました。</div>}

      </motion.div>

    </div>
  )
}

