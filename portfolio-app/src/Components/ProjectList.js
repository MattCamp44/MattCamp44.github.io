import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectList({projectList}) {
    return (
        <div className="projectList" >
            { projectList.map(element => {
                return (< ProjectItem name = {element.name} description = {element.description} image = {element.image} linkToGame={element.linkToGame} keywords={element.keywords} linkToSourceCode={element.linkToSourceCode} linkToTeaserTrailer={element.linkToTeaserTrailer} linkToGamePitchDocumentCompoment={element.linkToGamePitchDocumentCompoment} linkToPrototype={element.linkToPrototype} />)
            }) }
        </div>
    )
}
