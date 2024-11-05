import React, { useState } from 'react'
import LikeHOC from './LikeHOC'

function LikePostHOC(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}

export default LikeHOC(LikePostHOC)