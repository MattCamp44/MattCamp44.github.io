import React from 'react'

export default function LinkToPrototypeComponent({linkToPrototype}) {
    
    if(linkToPrototype == null)
    return (<div></div>)

else return (
    <div className="CardButton">
    <a href={linkToPrototype} target="_blank" >Go to application</a>
    </div>


)


}
