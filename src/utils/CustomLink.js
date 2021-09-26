/*
Custom Link

If your Rich text fields have links, you'll need this Custom Link function to 
generate the correct routes to internal documents or external URLs. 
Create a file such as 〜/src/utils/CustomLink.js and add the following code:

*/
import React from 'react'
import { Link } from 'gatsby'
import { linkResolver } from './LinkResolver'

export const CustomLink = (type, element, content, children, index) => {
  if (element.data.link_type === 'Document') {
    <Link to={linkResolver(element.data)} key={element.data.id}>
      {content}
    </Link>
  }

  if (element.data.link_type === 'Web') {
    <a id={element.data.id} href={element.data.url}>
      {content}
    </a>
  }
  return null
}