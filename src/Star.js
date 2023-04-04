import React from 'react'

export default function Star(props){
    const estrela = props.isFilled ? "star" : "star-outline"
    return(
        <p className ='content_star' onClick={props.handleClik} >
            <ion-icon name = {estrela} ></ion-icon>
        </p>
    )

}

