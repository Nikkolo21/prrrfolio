import React from 'react';
import './Card.scss'

export default function Card(props) {
    const { description, title, imageProp } = props;
    return (
        <div className="card">
            <img className="img" src={imageProp}></img>
            <h3>{title}</h3>
            <div> {description} </div>
        </div>
    )
}
