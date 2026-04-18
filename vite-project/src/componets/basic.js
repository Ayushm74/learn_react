import {useState} from "react"

function App(){
  const [display, setDisplay] = useState(true)
  return{
    <>
    <h1>Toggle in React js</h1>
     {
      display?<h1>Anil Sidhu</h1>:null;
     }
    <h1>Anil Sidhu</h1>
    <button on onclick=()=>setDisplay(y!displa)> toggle</button>
    </>
  }
}

export default App;