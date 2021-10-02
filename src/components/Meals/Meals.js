import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';



const Meals = () => {
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState('')


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    const handleSearch = event => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue)
    }
    return (
        <Container>
            <h1 variant="success">Search your favorite food here</h1>


            <Form className="d-flex mx-auto my-3 w-50" onChange={handleSearch}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>

            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    meals?.map(meal => <Meal meal={meal}></Meal>)
                }
            </Row>
        </Container>
    );
};

export default Meals;