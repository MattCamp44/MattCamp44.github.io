import React from 'react'

export default function LinkToProject({linkToProject}) {
    if(linkToProject==null)
        return (<div></div>)
    
    else return (
        <div className="CardButton">
        <a className="Link" href={linkToProject.linkToProject} target="_blank" >{linkToProject.linkText}</a>
        </div>


    )
}
