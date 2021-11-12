import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Card.css';

export const Primary = () => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://blog.greendot.org/wp-content/uploads/sites/13/2021/09/placeholder-image.png" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </>
    )
}