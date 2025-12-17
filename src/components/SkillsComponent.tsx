'use client'
import SkillCardComponent from './skills/SkillCardComponent';

export default function SkillsComponent() {
  const typescriptEx = 6;
  const nextJsEx = 6;
  const tailwindcssEx = 6;
  const prismaEx = 2;
  const cEx = 3;

  return (
    <div>
      <div className="h-20" />
      <div className='font-bold font-pathway text-5xl flex justify-center'>Skills</div>
      <div className='flex flex-wrap my-5 mx-17'>
        <SkillCardComponent 
        name="TypeScript" 
        experience={typescriptEx} 
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" 
        ja_description="next.jsやReactでの開発で主に使用しております。" 
        en_description="About half year" />

        <SkillCardComponent 
        name="Next.js" 
        experience={nextJsEx} 
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" 
        ja_description="webアプリを構築する際は基本的に使用します。" 
        en_description="About half year" />

       
        <SkillCardComponent 
        name="Tailwind CSS" 
        experience={tailwindcssEx} 
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" 
        ja_description="スタイリングには主にTailwind CSSを使用しています。" 
        en_description="About half year" />

        <SkillCardComponent 
        name="Prisma" 
        experience={prismaEx} 
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg" 
        ja_description="ブログサイト構築時にORMとして使用しました。" 
        en_description="" />

        <SkillCardComponent 
        name="C言語" 
        experience={cEx} 
        icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" 
        ja_description="大学の授業で現在勉強中です。基本構文は一通り理解しています。" 
        en_description="" />
      </div>
    </div>
  )
}

