import React from "react";

function TodoApp() {

  function callFun() {
    alert("function called");
  }

  return (
    <div>
      <h1>Anil Sidhu Todos</h1>

      <img
        src="https://fastly.picsum.photos/id/237/250/250.jpg"
        alt="Anil Sidhu"
        className="photo"
      />

      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

      <button onClick={callFun}>Click Me</button>
    </div>
  );
}

export default TodoApp;