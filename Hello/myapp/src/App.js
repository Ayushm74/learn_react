import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      // For learning purposes only
      // Avoid eval() in production
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
  ];

  return (
    <div className="container">
      <div className="calculator">
        <input
          type="text"
          value={input}
          readOnly
          className="display"
        />

        <div className="top-buttons">
          <button onClick={clearInput}>AC</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "="
                  ? calculate()
                  : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;