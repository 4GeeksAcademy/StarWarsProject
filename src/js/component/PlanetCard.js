import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const PlanetCard = ({ planet }) => {
    const { store, actions } = useContext(Context);
    const planetId = planet.uid;
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;

    const isFavorite = store.favorites.some(favorite => favorite.uid === planetId);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{planet.name}</Card.Title>
                <Link to={`/details/planets/${planetId}`} className="btn btn-primary">Details</Link>
                <Button
                    variant={isFavorite ? "danger" : "outline-primary"}
                    onClick={() => {
                        isFavorite ? actions.removeFavorite({ ...planet, type: 'planets' }) : actions.addFavorite({ ...planet, type: 'planets' });
                    }}
                >
                    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default PlanetCard;