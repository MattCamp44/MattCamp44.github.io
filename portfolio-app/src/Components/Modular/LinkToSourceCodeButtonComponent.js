import React from 'react'

export default function LinkToSourceCodeButtonComponent({linkToSourceCode}) {
    if(linkToSourceCode == null)
        return (<div></div>)
    
    else return (
        <div className="CardButton">
        <a href={linkToSourceCode} target="_blank" >Source Code</a>
        </div>


    )
}
