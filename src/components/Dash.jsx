import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import Stars from './Stars';
import "./dash.css"
import More from './More';
import {Link} from "react-router-dom";
const Dash = ({el,edit}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Link to={`/movie/${el.id}`} >
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name} </Card.Title>
        <Card.Text>{el.date}</Card.Text>
        <Stars rating={el.rating}/>
        <br />
      </Card.Body>
      </Link>
      <div className="cs">
        <Edit el={el} edit={edit}/>
        </div>
    </Card>
    </div>
  )
}

export default Dash