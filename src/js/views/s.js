import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Card } from "react-bootstrap";

const PersonDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const fetchPersonDetails = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
            const data = await response.json();
            setPerson(data.result.properties);
        };
        fetchPersonDetails();
    }, [uid]);

    if (!person) return <div>Loading...</div>;

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} />
                <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>Gender: {person.gender}</Card.Text>
                    <Card.Text>Birth Year: {person.birth_year}</Card.Text>
                    <Card.Text>Height: {person.height}</Card.Text>
                    <Card.Text>Mass: {person.mass}</Card.Text>
                    <Card.Text>Hair Color: {person.hair_color}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PersonDetails;