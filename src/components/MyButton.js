import React from 'react'

function MyButton(props) {
    return (
    <button style={{backgroundColor:props.color}}>{props.title}</button>
)
}

export default MyButton 