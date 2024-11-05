import { useEffect, useState } from "react"

function saveValue(initValue) {
    const save = JSON.parse(localStorage.getItem("key")) || JSON.parse(sessionStorage.getItem("key"))
    return save ? save : initValue
}

export default function UseStorage(initValue) {

    const [state, setState] = useState(() => {
        return saveValue(initValue)
    })
    useEffect(() => {
        localStorage.setItem("key", JSON.stringify(state))
        sessionStorage.setItem("key", JSON.stringify(state))
    }, [state])
    return [state, setState]
}
