import React from 'react'

export default function LinkToSourceCodeButtonComponent({linkToSourceCode}) {
    if(linkToSourceCode == null)
        return (<div></div>)
    
    else return (
        <div className="CardButton">
        <a className="Link" href={linkToSourceCode} target="_blank" >Source Code</a>
        </div>


    )
}
