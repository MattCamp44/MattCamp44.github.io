import Button from 'react-bootstrap/Button'
import React from 'react'
import Card from 'react-bootstrap/Card'
import LinkToGameButtonComponent from './Modular/linkToGameButtonComponent'
import LinkToSourceCodeButtonComponent from './Modular/LinkToSourceCodeButtonComponent'
import LinkToTeaserTrailerComponent from './Modular/LinkToTeaserTrailerComponent'
import LinkToGamePitchDocumentCompoment from './Modular/LinkToGamePitchDocumentCompoment'
import LinkToPrototypeComponent from './Modular/LinkToPrototypeComponent'
import LinkToDesignDocuments from './Modular/LinkToDesignDocuments'

export default function ProjectItem({image, description , name, linkToGame, keywords, linkToSourceCode , linkToTeaserTrailer, linkToGamePitchDocumentCompoment, linkToPrototype, linkToDesignDocuments, line2 }) {

    var localKeywordsString = keywords;


    return (
        
       
            <Card border="dark" class="card mb-4 border-4" className="Projectcard"  >
                <Card.Img className="CardImage" variant="top" src={image} />
                <Card.Body>
                    <Card.Title> <h1> {name} </h1> </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Keywords <br/> { localKeywordsString === undefined ? '' : (localKeywordsString + '').replaceAll(","," | ")}</Card.Subtitle>
                    <Card.Text className="CardText" >
                    <br/>{description } <br/> <br/> {line2}
                    
                    </Card.Text>


                    <div className="ButtonGroup">
                    <LinkToPrototypeComponent linkToPrototype={linkToPrototype} />
                    <LinkToGameButtonComponent linkToGame={linkToGame} />
                    <LinkToSourceCodeButtonComponent linkToSourceCode={linkToSourceCode}/>
                    <LinkToTeaserTrailerComponent linkToTeaserTrailer={linkToTeaserTrailer} />
                    <LinkToGamePitchDocumentCompoment linkToGamePitchDocumentCompoment={linkToGamePitchDocumentCompoment} />
                    <LinkToDesignDocuments linkToDesignDocuments={linkToDesignDocuments}/>
                    </div>
                
                </Card.Body>
            </Card>

       
        
    )
}
