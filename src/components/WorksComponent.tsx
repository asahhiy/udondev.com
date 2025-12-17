import WorkCardComponent from "./works/WorkCardComponent";
import aiTimer from "../../public/aiTimer.png"
import udondev from "../../public/udondev.png"

export default function WorksComponent() {
  return (
    <div>
      <div className="h-20" />
      <div className='font-bold font-pathway text-5xl flex justify-center'>Works</div>
      <div>

        <div className="flex flex-wrap my-10 justify-center">
          <WorkCardComponent
            title="Ai timer"
            ja_contents="Next.jsで作成した最初のwebアプリです。2025年の8月リリース。"
            en_contents="My first next app. Released at 2025 August"
            link="https://ai-timer-eta.vercel.app/"
            imageurl={aiTimer}
          />
          <WorkCardComponent
            title="UdonDev.com"
            ja_contents="このサイトもNext.jsを用いて作成されています"
            en_contents="This site is also used Next.js"
            link="localhost:3000"
            imageurl={udondev}
          />
        </div>
      </div>
    </div>

  )
}

