import React from 'react'
import { Blog } from './chunks/Blog'
import Stacked from '@/modules/communityCookbook/chunks/Stacked'

const CommunityCookbook = () => {
  return (
    <div>
      <div>
        <Blog />
      </div>
      <div>
        <Stacked />
      </div>
    </div>
  )
}

export default CommunityCookbook
