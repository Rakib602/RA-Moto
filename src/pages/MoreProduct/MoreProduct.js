import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdInput} from 'react-icons/md';



const MoreProduct = ({product}) => {
  const { name, img, price,engine, topspeed, mileage,_id} = product;
    return (
       <> 
       
        <div className="product-container container">
        
        <Col className="card-body">
  <Card className="card bg-dark" border="warning"> 
    <Card.Img variant="top" src={img} />
    <Card.Body>
                <Card.Title className="text-danger">Name : {name}</Card.Title>
                <Card.Text>Engine Power : {engine}</Card.Text>
                <Card.Text>Top Speed : {topspeed}</Card.Text>
                <Card.Text>Mileage : {mileage}</Card.Text>
                <Card.Text>Price : {price} BDT</Card.Text>
      

      {/* dynamic route */}

      <Link to={`/buynow/${_id}`}
      ><button className="btn btn-dark"> <span className="text-warning"></span><MdInput/> Buy this Product</button></Link>
    </Card.Body>
  </Card>
</Col>
    </div>
       </>
    );
};

export default MoreProduct;