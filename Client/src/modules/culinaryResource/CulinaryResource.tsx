import { Collection } from '@/components/Collection'
import { Resource } from '@/components/Resource'
import Tutorial from '@/components/Totorial'

const CulinaryResource = () => {
  return (
    <div>
      <div id="culinary-resource">
        <Resource />
      </div>
      <div id="culinary-collection">
        <Collection />
      </div>
      <div id="culinary-tutorial">
        <Tutorial />
      </div>
    </div>
  )
}

export default CulinaryResource
