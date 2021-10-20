import React from 'react'
import { useState } from 'react'

export default function LinkToPrototypeComponent({linkToPrototype}) {
    
    const [clicked, setclicked] = useState(false)

    if(linkToPrototype == null)
    return (<div></div>)

else return (
    <div className="CardButton">
    <a className="Link" href={linkToPrototype} target="_blank" onClick={ () => { if(clicked === false){ alert("Figaro application produces sound, and it may be very loud. \n\nI strongly suggest lowering the volume of your device."); setclicked(true); }} } >Go to application</a>
    </div>


)


}
