import React, { useEffect, useState } from 'react';
import { Row, Carousel, Card } from 'react-bootstrap';

import { BiHappyHeartEyes } from 'react-icons/bi';
import Rating from 'react-rating';



const Reviews = () => {
    const [usersReview, setUsersReview] = useState([]);
    useEffect(() => {
        fetch('https://quiet-bayou-58678.herokuapp.com/getReviews')
            .then(res => res.json())
            // .then(data=>console.log(data));
            .then(data => setUsersReview(data.slice(0, 6)));
    }, [])
    return (
        <div className="banner mt-3 container">
            <h2 className=" text-danger m-4 p-2"><BiHappyHeartEyes /> Happy Clients Reviews  </h2>

            <Row xs={1} md={3} lg={4} className="g-3 m-3 rounded">
                {
                    usersReview.map(review => <Carousel key={review._id}>
                        <Carousel.Item>

                            <Card className="card" border="warning">

                                <Card.Body style={{ height: "250px" }} className="bg-dark">
                                    <Card.Title className="text-primary fw-bold bg-dark p-2 rounded">{review.userName}</Card.Title>
                                    <Card.Text className="text-light ">{review.description}</Card.Text>
                                    <p className="text-danger fw-bold">Rating : {review.rating}/5</p>
                                    <Rating className="text-warning" readonly initialRating={review.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    ></Rating>
                                </Card.Body>
                            </Card>

                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="card" border="warning">

                                <Card.Body style={{ height: "250px" }} className="bg-dark">
                                    <Card.Title className="text-primary  p-2 rounded">{review.userName}</Card.Title>
                                    <Card.Text className="text-light">{review.description}</Card.Text>
                                    <p className="text-danger fw-bold">Rating : {review.rating}/5</p>
                                    <Rating className="text-warning" readonly initialRating={review.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    ></Rating>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>


                    )


                }
            </Row>



        </div>
    );
};

export default Reviews;


