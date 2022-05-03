import React from 'react'
import './tag.scss'

function Tag({text, theme}) {
  return (
    <div className={`tag ${theme}`}>{text}</div>
  )
}

export default Tag