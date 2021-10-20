import React from 'react'

export default function LinkToTeaserTrailerComponent({linkToTeaserTrailer}) {
    
    if(linkToTeaserTrailer == null)
        return (<div></div>)
    
    else return (
        <div className="CardButton">
        <a className="Link" href={linkToTeaserTrailer} target="_blank" >Teaser Trailer</a>
        </div>


    )


}
