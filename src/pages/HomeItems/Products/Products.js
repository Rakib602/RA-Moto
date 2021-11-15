import React, { useEffect, useState } from 'react';
import { Row, Spinner,Button } from 'react-bootstrap';
import Product from '../Product/Product';
import '../Product/Product.css';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/bikes')
        .then(res=>res.json())
        .then(data=> setProducts(data.slice(0,6)))
    },[])
    
    return (
        <div id="products" className="mt-3 p-2 container">
            <h2 className=" m-3 p-2"> Our Top {products.length} Products </h2>
            {
                products.length<1? <Button variant="danger">
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading......
              </Button>
              :
<Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
    {
        products.map(product=> <Product key={product._id} product={product}
        
        
        ></Product>)
    }
</Row>
            }
        </div>
    );
};

export default Products;