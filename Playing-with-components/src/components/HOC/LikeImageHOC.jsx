import React, { useState } from 'react'
import LikeHOC from './LikeHOC'

function LikeImageHOC(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}
export default LikeHOC(LikeImageHOC)
