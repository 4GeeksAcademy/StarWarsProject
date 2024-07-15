import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const PersonCard = ({ person }) => {
    const { store, actions } = useContext(Context);
    const personId = person.uid;
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`;

    const isFavorite = store.favorites.some(favorite => favorite.uid === personId);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Link to={`/details/person/${personId}`} className="btn btn-primary">Details</Link>
                <Button
                    variant={isFavorite ? "danger" : "outline-primary"}
                    onClick={() => {
                        isFavorite ? actions.removeFavorite({ ...person, type: 'characters' }) : actions.addFavorite({ ...person, type: 'characters' });
                    }}
                >
                    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default PersonCard;