import { AboutContent } from "./chunks/AboutContent"
import { Team } from "./chunks/Team"
import { TimeLine } from "./chunks/TimeLine"


const About = () => {
  return (
    <div>
      <div id="about">
        <AboutContent />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="timeline">
        <TimeLine />
      </div>
    </div>
  )
}

export default About
