import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.scss';
import db from '../firebase'; 

export default function Contact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        db.collection("contact").add(data)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <section className="contact-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="title" placeholder="Title" ref={register} />
                <input name="description" placeholder="What are you looking for? Prr" ref={register({ required: true })} />
                <button type="submit"> Send </button>
            </form>
        </section>
    )
}
