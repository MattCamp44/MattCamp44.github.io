import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export default function LinkToGameButtonComponent({linkToGame}) {
    
    if(linkToGame == null)
        return (<div></div>)
    
    else return (
        <div className="CardButton">
        <a href={linkToGame} target="_blank" >Download page</a>
        </div>


    )
   
    
}
