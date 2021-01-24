import React from 'react';
import './Work.scss';
import Card from '../shared/Card'
import Cat from '../assets/cat.jpg';

export default function Work() {
    const cards = [
        {
            id: 1,
            title: "Sandbox, A.S.",
            description: "I worked in a sandbox doing my business (if you know what i mean)",
            img: Cat,
        },
        {
            id: 2,
            title: "Dog are stupids, A.S.",
            description: "I worked as a good boy. Nah, I am not a good boy, let that crapt to the dog.",
            img: Cat,
        },
        {
            id: 3,
            title: "Fuck off",
            description: "It is not your business where i worked. Prr.",
            img: Cat,
        },
    ];
    
    return (
        <section className="work-section">
            <div className="work-inside-section">
                { cards.map(elem => <Card key={elem.id} title={elem.title} imageProp={elem.img} description={elem.description}></Card>) }
            </div>
        </section>
    )
}
