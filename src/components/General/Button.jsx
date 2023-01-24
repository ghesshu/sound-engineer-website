import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.buttonOnClick} className={`${props.buutonClass}`}>{props.buttonText}</button>
    </div>
  )
}

export default Button
