import React, { useState } from 'react'

function Wrapper(props) {

    //logic
    const [counter, setCount] = useState(0)
    const handleIncrement = () =>{
        setCount(counter + 1)
    }

  return (
    <div>
      {props.render(counter, handleIncrement)}
    </div>
  )
}

export default Wrapper
