import { useContext } from "react";
import { theme } from "../App";
import NewUseState from "./NewUseState";

export default function Child1() {
    const themeContext = useContext(theme)
    const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, incidunt reprehenderit voluptas quis dolorum doloribus tempore, officia aut accusantium iure, hic quae tempora adipisci earum sapiente sint repudiandae odio maiores."
    const style = {
        backgroundColor: themeContext ? "black" : "grey",
        height: "30vh",
        width: "95vw",
        margin: "auto",
        padding: "1vw"
    }
    return (
        <div style={style} className="section1">
            <NewUseState content = {content} />
        </div>

    )
}