import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult]=useState('')

  const handleClick=(e)=>{
        setResult(result.concat(e.target.name))
  }

  const click=()=>{
    setResult('')
  }

  const deleteScreen=()=>{
    setResult(result.slice(0,result.length-1))
  }

  const calculate=()=>{

    try{
      setResult(eval(result).toString())
    }
    catch(err){
       setResult("Syntax Error")
    }
    
  }

  return (
    <div className="container">
       <form>

           <input className='current-operand output' type="text" value={result}/>

           
          </form>

           <div className="buttons">

             <button name='' className='ac span-two' onClick={click}>AC</button>
             <button name=''onClick={deleteScreen}>Del</button>
             <button name='/'onClick={handleClick}>&divide;</button>
             <button name='7'onClick={handleClick}>7</button>
             <button name='8'onClick={handleClick}>8</button>
             <button name='9'onClick={handleClick}>9</button>
             <button name='*'onClick={handleClick}>&times;</button>
             <button name='4'onClick={handleClick}>4</button>
             <button name='5'onClick={handleClick}>5</button>
             <button name='6'onClick={handleClick}>6</button>
             <button name='-'onClick={handleClick}>-</button>
             <button name='1'onClick={handleClick}>1</button>
             <button name='2'onClick={handleClick}>2</button>
             <button name='3'onClick={handleClick}>3</button>
             <button name='+'onClick={handleClick}>+</button>
             <button name='0'onClick={handleClick}>0</button>
             <button name='.'onClick={handleClick}>.</button>
             <button name='='onClick={calculate}>=</button>
           </div>
      
    </div>
  );
}

export default App;
