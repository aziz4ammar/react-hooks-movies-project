import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import Stars from './Stars';
import "./dash.css"
import More from './More';
import { BrowserRouter, Route,Routes } from "react-router-dom";
const Dash = ({el,edit}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name} </Card.Title>
        <Card.Text>{el.date}</Card.Text>
        <Stars rating={el.rating}/>
        <br />
        <div className="cs">
        <Edit el={el} edit={edit}/>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Dash