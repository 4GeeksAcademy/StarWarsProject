import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Favorites = () => {
    const{store, actions} = useContext(Context)


    return (
        <Container>
        <h2>Favorites</h2>
        <Row>
            {store.favorites.map(favorite => {
                const imageUrl = `https://starwars-visualguide.com/assets/img/${favorite.type}/${favorite.uid}.jpg`;

                return (
                    <Col key={favorite.uid} md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src={imageUrl}
                                onError={(e) => e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}
                            />
                            <Card.Body>
                                <Card.Title>{favorite.name}</Card.Title>
                                <Link to={`/details/${favorite.type}/${favorite.uid}`} className="btn btn-primary">Details</Link>
                                <Button
                                    variant="danger"
                                    onClick={() => actions.removeFavorite(favorite)}
                                >
                                    Remove from Favorites
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    </Container>
    )


}


export default Favorites;