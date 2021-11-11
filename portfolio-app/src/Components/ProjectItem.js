import Button from 'react-bootstrap/Button'
import React from 'react'
import Card from 'react-bootstrap/Card'
import LinkToGameButtonComponent from './Modular/linkToGameButtonComponent'
import LinkToSourceCodeButtonComponent from './Modular/LinkToSourceCodeButtonComponent'
import LinkToTeaserTrailerComponent from './Modular/LinkToTeaserTrailerComponent'
import LinkToGamePitchDocumentCompoment from './Modular/LinkToGamePitchDocumentCompoment'
import LinkToPrototypeComponent from './Modular/LinkToPrototypeComponent'
import LinkToDesignDocuments from './Modular/LinkToDesignDocuments'
import Badge from 'react-bootstrap/Badge'
import LinkToProject from './Modular/LinkToProject'

export default function ProjectItem({image, description , name, linkToGame, keywords, linkToSourceCode , linkToTeaserTrailer, linkToGamePitchDocumentCompoment, linkToPrototype, linkToDesignDocuments, line2, linkToProject }) {

    var localKeywordsString = keywords;


    return (
        
       
            <Card border="dark" class="card mb-4 border-4" className="Projectcard"  >
                <Card.Img className="CardImage" variant="top" src={image} />
                <Card.Body>
                    <Card.Title> <h1 className="CardTitle"> {name} </h1> </Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Keywords <br/> <br/> <Badge bg="success">Prova</Badge> {  localKeywordsString===undefined ? '' : localKeywordsString.map(

                        element => { return (<Badge bg="secondary">{element}{' '}</Badge>) }

                    ) }</Card.Subtitle> */}
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
                    <LinkToProject linkToProject={linkToProject} />
                    </div>
                
                </Card.Body>
            </Card>

       
        
    )
}
