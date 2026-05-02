import React from 'react'
import './my.css'
 function Input({ placeholder = "",value="", className="",onInput=()=>{} }){
    function inputHandler(e){
       onInput(e.target.value)
    }
    return (
        <div>
            <input className={className} value={value} onInput={inputHandler} placeholder={placeholder} type='text' />
        </div>
    )
}

export default Input
