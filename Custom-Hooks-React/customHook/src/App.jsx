import UseStorage from "./Component/UseStorage"
export default function App(){
  const[state, setState] = UseStorage("")
  return(
    <>
    <input type="text" onChange={(e)=> setState(e.target.value)} value={state}/>
    </>
  )
}