'use client';

import Image from 'next/image';
import { useAtom } from 'jotai';
import { headerToggleAtom} from '@/store/atoms'

type SkillProps = {
    name: string;
    experience: number;
    icon: string;
    ja_description: string;
    en_description: string;
}


export default function SkillCardComponent({name, experience, icon, ja_description, en_description}: SkillProps) {
    const [isEnglish] = useAtom(headerToggleAtom);
  return (
    <div>
        <div className="card w-80 shadow-sm bg-creamwhite m-1.5">
          <figure className='h-50'>
            <Image src={icon}
              width={150}
              height={150}
              alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{isEnglish ? en_description : ja_description}</p>
            <div className='flex items-center w-auto'>
              <progress className="progress progress-accent w-56" value={experience*7} max="100"></progress>
              <div className='flex items-center px-1 my-1'>{experience}か月</div>
            </div>
          </div>
        </div>
    </div>
  )
}
