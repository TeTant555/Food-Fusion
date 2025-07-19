import { Collection } from '@/components/Collection'
import { Resource } from '@/components/Resource'
import Tutorial from '@/components/Totorial'

const EducationResource = () => {
  return (
    <div>
      <div id="education-resource">
        <Resource />
      </div>
      <div id="education-collection">
        <Collection />
      </div>
      <div id="education-tutorial">
        <Tutorial />
      </div>
    </div>
  )
}

export default EducationResource
