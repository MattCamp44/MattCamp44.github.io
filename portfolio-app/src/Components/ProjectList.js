import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectList({projectList,selectedKeywords}) {

    var word;

    return (
        <div className="projectList" >
            { projectList
            .filter(
                element => {

                    if( selectedKeywords.length === 0 ) return true

                    for( word in selectedKeywords )
                        if( element.keywords.includes(word) ) return true

                    return false

                }
            )
            .map(element => {
                return (< ProjectItem name = {element.name} description = {element.description} image = {element.image} linkToGame={element.linkToGame} keywords={element.keywords} linkToSourceCode={element.linkToSourceCode} linkToTeaserTrailer={element.linkToTeaserTrailer} linkToGamePitchDocumentCompoment={element.linkToGamePitchDocumentCompoment} linkToPrototype={element.linkToPrototype} linkToDesignDocuments={element.linkToDesignDocuments} line2={element.line2} />)
            }) }
        </div>
    )
}
