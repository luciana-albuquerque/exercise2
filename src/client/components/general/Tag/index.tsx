import React, { ReactElement } from 'react'
import './tag.scss'

type TagT = {
  text: string;
  theme: string;
}

function Tag({text, theme}: TagT): ReactElement {
  return (
    <div className={`tag ${theme}`}>{text}</div>
  )
}

export default Tag