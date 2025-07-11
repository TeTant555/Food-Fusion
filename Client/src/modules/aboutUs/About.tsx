import { AboutContent } from "./chunks/AboutContent"
import { Team } from "./chunks/Team"
import { TimeLine } from "./chunks/TimeLine"


const About = () => {
  return (
    <div>
      <div>
        <AboutContent />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <TimeLine />
      </div>
    </div>
  )
}

export default About
