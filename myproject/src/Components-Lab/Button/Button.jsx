
import React from 'react'
import './Button.css'
function Button(){
    const handlClick = ()=> {
        alert("Button is Clicked");
    };
    return(
        <button onClick={handlClick} className='btn'>Click Me</button>
    )
}
export default Button;