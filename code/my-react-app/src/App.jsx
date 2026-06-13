import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  function add() {
    setResult(Number(num1) + Number(num2));
  }

  function sub() {
    setResult(Number(num1) - Number(num2));
  }

  function mul() {
    setResult(Number(num1) * Number(num2));
  }

  function div() {
    setResult(Number(num1) / Number(num2));
  }

  return (
    <>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>

      <h2>Result: {result}</h2>
    </>
  );
}


export default App;