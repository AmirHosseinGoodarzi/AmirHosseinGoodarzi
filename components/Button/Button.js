import React from 'react'
// styles 
import styles from "./Button.module.scss"
//=============================================================
function Button({ text, onClick, type }) {
    return (
        <button className={type == "FILL" ? styles.buttonFill : styles.button}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
