import PhysicsCardComponent from "@/components/aboutme/PhysicsCardComponent"
import AboutmeComponent from "@/components/AboutmeComponent"
import ContactComponent from "@/components/ContactComponent"
import SkillsComponent from "@/components/SkillsComponent"
import { hc } from "hono/client"
import type { AppType } from "@/app/api/[...route]/route"
import WorksComponent from "@/components/WorksComponent"
import GithubComponent from "@/components/skills/GithubComponent"
import { Suspense } from "react"




export default function page() {
  return (
    <div className="items-center space-y-4">
      <div className="grid grid-cols-12 gap-4 mt-10 mx-10" >
        <div className="col-span-12 lg:col-span-4 bg-amber-300 h-auto rounded-2xl" >
          <section id="about">
            <AboutmeComponent />
          </section>
        </div>
        <div className="col-span-12 lg:col-span-8 bg-amber-300 h-auto rounded-2xl">
          <PhysicsCardComponent />
        </div>
        <div className="col-span-12 lg:col-span-8 bg-amber-300 h-auto rounded-2xl space-y-5">
          <section id="works">
            <WorksComponent />
          </section>
        </div>
        <div className="col-span-12 lg:col-span-4 bg-amber-300 h-auto rounded-2xl" >
          <section id="skills">
            <SkillsComponent />
          </section>
        </div>
        <div className="col-span-12 lg:col-span-4 bg-amber-500 h-auto rounded-2xl">
          <section id="contact">
            <ContactComponent />
          </section>
        </div>
        <div className="col-span-12 lg:col-span-5 bg-amber-400 h-auto rounded-2xl">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-32 rounded">

          </div>}>
            <GithubComponent />
          </Suspense>

        </div>
        <div className="col-span-12 lg:col-span-3 bg-amber-300 h-auto rounded-2xl" />
      </div>



    </div>
  )
}
