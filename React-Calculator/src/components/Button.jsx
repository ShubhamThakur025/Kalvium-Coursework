import React from 'react'
import { ACTIONS } from '../App.jsx'

export default function Button({ dispatch, digit }) {
  return (
    <button className='button' onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
  )
}


