import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const vehicleCard = ({ vehicle }) => {
    const { store, actions } = useContext(Context);
    const vehicleId = vehicle.uid;
    const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`;

    const isFavorite = store.favorites.some(favorite => favorite.uid === vehicleId);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <Link to={`/details/vehicle/${vehicleId}`} className="btn btn-primary">Details</Link>
                <Button
                    variant={isFavorite ? "danger" : "outline-primary"}
                    onClick={() => {
                        isFavorite ? actions.removeFavorite(vehicle) : actions.addFavorite(vehicle);
                    }}
                >
                    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default vehicleCard;