
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, NavLink, useHistory, useParams } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;

    const history = useHistory()
    const handleMealDetail = () => {
        history.push(`/mealdetails/${idMeal}`)
    }

    return (

        <Col >
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strInstructions.slice(0, 150)}</Card.Text>
                </Card.Body>
                <Link to={`/mealdetails/${idMeal}`}>Detail</Link>
                <br />
                <Link to={`/mealdetails/${idMeal}`}>
                    <button>Detail</button>
                </Link><br />
                <Button variant="secondary w-50 mx-auto" onClick={handleMealDetail}>Detail</Button>
            </Card>
        </Col >
    );
};

export default Meal;