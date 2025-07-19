import React from 'react'
import { Blog } from './chunks/Blog'
import Stacked from '@/modules/communityCookbook/chunks/Stacked'

const CommunityCookbook = () => {
  return (
    <div>
      <div id="blog">
        <Blog />
      </div>
      <div id="community">
        <Stacked />
      </div>
    </div>
  )
}

export default CommunityCookbook
