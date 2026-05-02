import { useState } from 'react';
import Buttonn from './components/button';
import Input from './components/input';
import './my.css';
function Calculator(){
    const[operandA,setOperandA]=useState("")
    const[res,setres]=useState("")
    const[operation,setOperation]=useState("")
    const[currentOperand,setCurrentOperand]=useState("")
  
    let arr=new Array(10)
    const add='+'
    const sub='-'
    const mul='*'
    const divide='/'
   
    const operations=[add,sub,mul,divide]
    function handleEqual() {
  if (currentOperand === "" || operandA === "") return;

  let result = 0;

  switch (operation) {
    case '+':
      result = Number(currentOperand) + Number(operandA);
      
      break;
    case '-':
      result = Number(currentOperand) - Number(operandA);
      break;
    case '*':
      result = Number(currentOperand) * Number(operandA);
      break;
    case '/':
      result = Number(currentOperand) / Number(operandA);
      break;
    default:
      return;
  }

  setres(result);
  setOperandA(`Ans:${result}`);      // show result in input
  setCurrentOperand("");
  setOperation("");
}
    function inputHandler(value){
        setOperandA(value)
        
    }
    function handleAc(){
        setOperandA("")
        setOperation("")
        setCurrentOperand("")
        setres("")
    }
    function handleClick(i){
        
      
       return ()=>{
       
          setOperandA(operandA=>operandA+i);
          
       }
    }
    function handelOperation(o){
         
     
        return ()=>{
            setOperation(o)
           
            setCurrentOperand(operandA)
          
          setOperandA("")
        }
     

       
    }
     
    return(
       
        <div className='calculator' >
          <Input value={operandA} className='calculatorinput' onInput={inputHandler} placeholder='Enter Number' ></Input>
         
         
          <div className='button-grid'>
               {
                [...arr].map((_,i)=>{
                    
                   
                return <Buttonn  className='number' key={i} label={i} onClick={handleClick(i)}></Buttonn>}
            )
              
             }
         

           
       

        
                {
                operations.map(o=>{
                    
                      return <Buttonn className='operator' key={o} label={o}  onClick={handelOperation(o)} ></Buttonn>
                })}
                
                
             
         
            <Buttonn className='equal' label="=" onClick={handleEqual} />
             <Buttonn  label="AC" onClick={handleAc} />
         </div>
        
        </div>
    )
}

export default Calculator;