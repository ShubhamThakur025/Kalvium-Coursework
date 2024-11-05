import React, { useState } from 'react'

const LikeHOC = (WrappedComp) => {
    function LikeHOC() {
        const [counter, setCounter] = useState(0);

        const handleCounter = () => {
            setCounter(counter + 1);
        }
        return(
            <WrappedComp counter = {counter} handleCounter ={handleCounter} />
        )
    }
    return LikeHOC
}

export default LikeHOC
