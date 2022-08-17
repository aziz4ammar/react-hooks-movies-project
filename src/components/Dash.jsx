import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stars from './Stars';
const Dash = ({el}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name} </Card.Title>
        <Card.Text>
         {el.date}
        </Card.Text>
        <Stars/>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Dash