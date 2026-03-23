function hello(){
    return <div>Hello, World!   </div>
}
exort default hello;

funtion hello2()=>{
    return <div>Hello, World!   </div>
}
export default hello2;

//Q1: Create a component that displays your name
function Myname()=>{
    return <div> my name </div>
}
epxort default Myname

//Q2: Create a component that takes a name as props
const greet = (props)=>{
    return <h2>my name {props.name}</h2>
};

export default greet

Q3: Create a button component with click event

// const greet()=>{
//     return <div> onclik</div>
// }

const clickButton = () =>{
    const handleClick()=>{
        alert("omg");
    }
    return <button onclick={handleClick}>Click me</button>;
};
export default clickButton;


const clickButton()=>{
    const ti()=>{
        alert("omg");
    }
    return <button onclick={ti}>click mr</button>
}
export default clickButton;

🔹 Q4: Create a component using useState (counter)

import useState from react

const counter()=>{
    const[count,setcount] = useState(0);
    return{
        <div>
        <h2>Count : {count}</h2>
        <button onclick = {()=> setcount(count+1)}>increse</button>
        </div>
    }
}
exort default counter;

import useState from react
const counter()=>{
    const[count, setcount] = useState(0);
    return{
        <div>
        <h1>Count: {count}</h1>
        <button onclick = {()=> setcount(count+1)}>incrsee</button>
        </div>
    }
}

//🔹 Q5: Create a reusable card component
const card = ({title,desc})=>{
    return(
    <div style = {{border : "1px solid black", padding = "10px", margin: "10px"}}>
        <<h3>{title}</h3>
        <P> desc</P>
    </div>
 );
};
function Welcome() {
  return <h2>Welcome to React 🚀</h2>;
}

export default Welcome;

import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome />
    </>
  );
}

export default App;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
import { add, multiply } from "./mathUtils";

function App() {
  return (
    <div>
      <p>Add: {add(2, 3)}</p>
      <p>Multiply: {multiply(2, 3)}</p>
    </div>
  );
}

export default App;