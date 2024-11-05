import React from 'react'
import { ACTIONS } from '../App.jsx'

export default function Operation({ dispatch, operation }) {
  return (
    <button className='operation' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
  )
}


