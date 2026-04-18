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
