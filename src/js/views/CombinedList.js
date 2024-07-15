import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PersonCard from "../component/PersonCard";
import VehicleCard from "../component/VehicleCard";
import PlanetCard from "../component/PlanetCard";
import { Container, Row, Col, Card } from "react-bootstrap";

const CombinedList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPeople();
        actions.fetchVehicles();
        actions.fetchPlanets();
    }, []);

    return (
        <Container>
            <h2>People</h2>
            <Row>
                {store.people && store.people.map(person => (
                    <Col key={person.uid} md={4}>
                        <PersonCard person={person} />
                    </Col>
                ))}
            </Row>

            <h2>Vehicles</h2>
            <Row>
                {store.vehicles && store.vehicles.map(vehicle => (
                    <Col key={vehicle.uid} md={4}>
                        <VehicleCard vehicle={vehicle} />
                    </Col>
                ))}
            </Row>

            <h2>Planets</h2>
            <Row>
                {store.planets && store.planets.map(planet => (
                    <Col key={planet.uid} md={4}>
                        <PlanetCard planet={planet} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CombinedList;