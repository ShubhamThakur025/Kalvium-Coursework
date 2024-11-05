import Reducer from "./Reducer";
import { createStore } from "redux";
import { incrementLike, decrementLike } from "./Actions";
import { useState } from "react";
const store = createStore(Reducer)

function LikeCounter() {
    const [state, changeState] = useState(0)
    store.subscribe(() => changeState(store.getState().count))
    return (
        <div className="counter">
            <h1>{state}</h1>
            <div>
                <button onClick={() => store.dispatch(incrementLike())}>Like</button>
                <button onClick={() => store.dispatch(decrementLike())}>Unlike</button>
            </div>

        </div>
    )
}

export default LikeCounter

