import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('');

  const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C' ,'REMOVE'
  ];


function HandleClick(value){
   if(value == 'C'){
    setInput('')
   }
   else if (value === 'REMOVE') {
    setInput(input.slice(0, -1));
   }
   else if(value == '='){
    try {
      const res = eval(input)
      setInput(res.toString())
      // setInput(eval(input).toString())
    } catch (error) {
      setInput('error')
    }
   }
   else{
    setInput(input+value)
   }
}



  return (
      <div className="calculator">
        <div id='display'>{input||'0'}</div>
        <div id='but'>
          {buttons.map((key)=>(
            <button
            key={key}
            onClick={()=>HandleClick(key)}
            > {key}
            </button>
          ))}
        </div>
      </div>
  );
}

export default App
