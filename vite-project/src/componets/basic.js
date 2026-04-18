import React from "react";

function Button(){
  const handleClick()=>{
    alert("OMG");
  };
  return({
    <button onClick={handleClick}>Click me<button>
  });
  export default Button;
}


function App(){
  const name = " Ausj";
  return(
    <h1> hello {name}</h1>
  )
}