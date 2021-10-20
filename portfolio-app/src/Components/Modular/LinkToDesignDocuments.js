import React from 'react'

export default function LinkToDesignDocuments({linkToDesignDocuments}) {
    if(linkToDesignDocuments == null)
        return (<div></div>)
    
    else return (
        <div className="CardButton">
        <a className="Link" href={linkToDesignDocuments} target="_blank" >Design Documents</a>
        </div>


    )
}
