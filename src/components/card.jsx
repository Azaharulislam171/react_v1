import React from 'react'
import { useState } from 'react'
import styles from'./card.module.css'

function Card() {
     {/* I am declaring a variable x and assigning it the value 3 */}
    const [x,setx]=useState(0);
    {/*  useState is a react hook*/}
    function add(){
    setx(x+1);
    }
    return (
        <div className={styles.card}>
            <p> This is my Card </p>
            {/* Note-1: In order to use javascript inside jsx, we must enclose everything inside curly braces{}*/}
            <p> {x} </p>
            {/* Note-2: Instead of using getElementById and adding an event listener, I can directly use onClick to trigger a function */}
            {/* Note-3: When calling a function inside jsx, you dont put parenthisis() */}
            <button className={styles.button} onClick={add}> Increase number </button>
        </div>

    )
}

export default Card

