import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

const AddProduct = () => {
     // Add New Product Section 
     const nameRef = useRef();
     const priceRef = useRef();
  const engineRef = useRef();
  const mileageRef = useRef();
  const topspeedRef = useRef();
     const imgRef = useRef();


     const handleAddProduct =e=>{
        const name = nameRef.current.value;
        const price = priceRef.current.value;
       const engine = engineRef.current.value;
       const mileage = mileageRef.current.value;
       const topspeed = topspeedRef.current.value;
        const img =  imgRef.current.value;
       
        
        e.preventDefault();
           
        
        const newProduct = {name,price, topspeed,engine,mileage,img}
        fetch('https://quiet-bayou-58678.herokuapp.com/newBikes',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          
          body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            alert('Product Added Successfully, Check Dashboard')
            e.target.reset();
          }
        })
            }
    return (
        <div>
            <h5 className="bg-dark text-light fw-bold m-3 p-2">Add a new Bike</h5>
            <form onSubmit={handleAddProduct}  className="booking-form" >
           
            <Row>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input  style={{width:'85%'}} type="text" ref={nameRef} placeholder="Enter new bike  Name"  /> 
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}} type="text" ref={priceRef} placeholder="Enter bike Price "/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}}  type="text" ref={engineRef} placeholder="Enter engine power of bike"/>
            </Col>
            <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{ width: '85%' }} type="text" ref={mileageRef} placeholder="Enter mileage of bike " />
            </Col>
            <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{ width: '85%' }} type="text" ref={topspeedRef} placeholder="Enter top Speed of bike" />
            </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input required style={{width:'85%'}}  type="text" ref={imgRef} placeholder="Enter any Image URL"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}}className="btn btn-warning fw-bold mx-auto" type="submit" value="Add This Product"/>
              </Col>
              

            </Row>
 
                </form>
        </div>
    );
};

export default AddProduct;