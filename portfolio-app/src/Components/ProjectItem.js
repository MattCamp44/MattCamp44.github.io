import React from 'react'
import Card from 'react-bootstrap/Card'


export default function ProjectItem({image, description , name }) {
    return (
        
       
            <Card border="dark" class="card mb-4 border-4" className="Projectcard"  >
                <Card.Img className="CardImage" variant="top" src={image} />
                <Card.Body>
                    <Card.Title> <h1> {name} </h1> </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Gamedev - Online </Card.Subtitle>
                    <Card.Text>
                    {description}
                    </Card.Text>
                
                </Card.Body>
            </Card>

       
        
    )
}
