import React, { useState,useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { RiDeleteBin5Fill} from 'react-icons/ri';

const ManageProducts = () => {
    const [allproducts,setAllProducts] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/bikes')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])


    const handleDelete=id=>{
        // Delete Confirmation     
        const confirmDelete=window.confirm('Are you sure ? to delete this product from your booking !')
        if(confirmDelete){
            // deleting product by id
            fetch(`http://localhost:4000/bikes${id}`,{
                method:'DELETE'})
                // regulaer process
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert('Deleted Successfully')
                        // matching product by id
                        const presentPackage=allproducts.filter(book=> book._id !==id)
                        setAllProducts(presentPackage)
                    }
                })
        }
    }
    return (
        <div>
            
            <div className="product-container mt-5 pt-4">
            <h5 className="bg-warning text-dark rounded-3 m-3 p-2">Manage All Products: {allproducts.length} </h5>
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
       <Table className="bg-dark text-light mx-auto mt-3">
                  <Thead className="thead">
                    <Tr>
                      <Th>Bike Name</Th>
                      <Th>Price</Th>
                      <Th>Product ID</Th>
                      <Th>Product Picture</Th>
                      <Th>Delete Item</Th>
                      
                    </Tr>
                  </Thead>
                  <Tbody>
                 

                {allproducts.map(({name,price,_id,img})=>(

                <Tr key={_id} className="tableData">
                <Td> {name} </Td>
                <Td>{price}</Td>
                <Td>{_id}</Td>
                <Td><img style={{width:'150px',height:'100px'}} src={img} alt="" /> </Td>
                
                <Td><button className="btn btn-danger" onClick={()=>handleDelete(_id)}><RiDeleteBin5Fill/>

                </button></Td>
                </Tr>
                ))}              

                 
               
              
                   
                   
                  </Tbody>
                </Table>
        </div>
        </div>
    );
};

export default ManageProducts;