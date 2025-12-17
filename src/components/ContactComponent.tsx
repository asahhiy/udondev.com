'use client'

import { Mail } from "lucide-react"
import { useAtom } from "jotai";
import { headerToggleAtom } from '@/store/atoms'



export default function ContactComponent() {
  const [isEnglsih] = useAtom(headerToggleAtom);
  return (
    <div>
      <div className="h-20" />
      <div className='font-bold font-pathway text-5xl flex justify-center'>Contact</div>
      <div className="m-5 flex justify-center flex-wrap">
        <Mail />
      </div>
    </div>
  )
}

