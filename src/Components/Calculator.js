import React, {useState} from "react";
import "./Calculator.css"

const Calculator =()=>{
    const [inputValue,setInputValue]=useState("");
const display=(value)=>{
    setInputValue(inputValue+value)
}
const calculate=()=>{
    let answer = eval (inputValue);
    setInputValue(answer);
}
const clear=()=>{
    setInputValue("");
}

return(
    <div className="main-container">
        <input type="text" placeholder="0" id="result" value={inputValue}/>
        <button onClick={()=>{display("1")}}>1</button>
        <button onClick={()=>{display("2")}}>2</button>
        <button onClick={()=>{display("3")}}>3</button>
         <button onClick={()=>{display("+")}} >+</button>
        <button onClick={()=>{display("4 ")}}>4</button>
        <button onClick={()=>{display("5")}}>5</button>
        <button onClick={()=>{display("6")}}>6</button>
        <button onClick={()=>{display("-")}}>-</button>
        <button onClick={()=>{display("7")}}>7</button>
        <button onClick={()=>{display("8")}}>8</button>
        <button onClick={()=>{display("9")}}>9</button>
        <button onClick={()=>{display("*")}}>*</button>
        <button onClick={()=>{display(".")}}>.</button>
        <button onClick={()=>{display("0")}}>0</button>
        <button onClick={()=>{display("/")}}>/</button>
        <button onClick={()=>{display("%")}}>%</button>
        <button onClick={()=>{calculate()}} className="btn" >=</button>
        <button onClick={()=>{clear()}} className="btn" >C</button>
    </div>
);
}
export default Calculator;