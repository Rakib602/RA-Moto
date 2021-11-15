import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import MoreProduct from '../../MoreProduct/MoreProduct';
import Header from '../../../Shared/Header/Head';
// import Header from '../../Shared/Header/Head';
import '../MoreProducts/MoreProducts.css';

const MoreProducts = () => {
    const [allproducts,setAllProducts] =useState([]);

    useEffect(()=>{
        fetch('https://quiet-bayou-58678.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
    return (
        <> 
        <Header></Header>
         <div className="product-container mt-5 pt-4 container">
            <h2 className=" m-3 p-2">Our All Products: {allproducts.length} </h2>
            {
            allproducts?.length <1  && <Button variant="danger">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Please wait a moment......
          </Button>
        }
        <Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
            {
                allproducts.map(product => <MoreProduct key={product._id} product={product}
                
                
                ></MoreProduct>)
            }
        </Row>
        </div>
        </>
       
    );
};

export default MoreProducts;