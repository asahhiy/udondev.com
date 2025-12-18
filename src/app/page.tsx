import AboutmeComponent from "@/components/AboutmeComponent"
import ContactComponent from "@/components/ContactComponent"
import Example from "@/components/exmaple"
import SkillsComponent from "@/components/SkillsComponent"
import WorksComponent from "@/components/WorksComponent"

export default function page() {
  return (
    <div className="items-center">
      <p className='font-bebas text-9xl flex justify-center'>Portfolio</p>
      <section id="about">
        <AboutmeComponent />
      </section>
      <section id="skills">
        <SkillsComponent />
      </section>
      <section id="works">
        <WorksComponent />
      </section>
      <section id="contact">
        <ContactComponent />
      </section>

    </div>
  )
}
