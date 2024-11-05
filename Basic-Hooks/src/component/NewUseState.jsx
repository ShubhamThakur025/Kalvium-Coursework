import React, { useEffect, useState } from "react";

export default function NewUseState(props) {
    const [state, setState] = useState(" ")
    const [likeState, setLikes] = useState(0)
    const handleClick = () => {
        setState(state => state == " " ? props.content : " ")
    }
    useEffect(() => {
        alert("Content Button Clicked!")
    }, [state])
    const handleLike = () => {
        setLikes(likeState + 1)
    }
    return (
        <>
            <p>{state}</p>
            <button onClick={handleClick}>Content</button>
            <p className="likes">{likeState}</p>
            <button onClick={handleLike}>Like</button>
        </>

    )
}