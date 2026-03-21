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