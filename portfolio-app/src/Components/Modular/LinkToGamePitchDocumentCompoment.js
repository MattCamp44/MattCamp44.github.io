import React from 'react'

export default function LinkToGamePitchDocumentCompoment({linkToGamePitchDocumentCompoment}) {
    if(linkToGamePitchDocumentCompoment == null)
        return (<div></div>)
    
    else return (
        <div className="CardButton">
        <a className="Link" href={linkToGamePitchDocumentCompoment} target="_blank" >Game Pitch Document</a>
        </div>


    )
}
