import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { RiDeleteBin5Fill} from 'react-icons/ri';

const ManageAllOrders = () => {
    const [bookedProducts,setBookedProducts]=useState([]);
    useEffect(()=>{
        fetch('https://quiet-bayou-58678.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setBookedProducts(data))
    },[])

    const handleDelete=id=>{
        // Delete Confirmation     
        const confirmDelete=window.confirm('Are you sure ? to delete this product from your booking !')
        if(confirmDelete){
            // deleting product by id
            fetch(`https://quiet-bayou-58678.herokuapp.com/orders${id}`,{
                method:'DELETE'})
                // regulaer process
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert('Deleted Successfully')
                        // matching product by id
                        const presentPackage=bookedProducts.filter(book=> book._id !==id)
                        setBookedProducts(presentPackage)
                    }
                })
        }
    }
    return (
        <div>
            <h4 className="text-warning fw-bold bg-dark p-2 rounded-3">Total Orders : {bookedProducts.length} </h4>
           
            
                  <Table className="bg-dark text-light mx-auto mt-3">
                  <Thead className="thead">
                    <Tr>
                      <Th>Bike Name</Th>
                      <Th>User Name</Th>
                      <Th>Address</Th>
                      <Th>Date</Th>
                      <Th>Contact Number</Th>
                      <Th>Delete Item</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                 

                    {bookedProducts.map(({packageName,userName,address,date,contact,_id})=>(

                <Tr key={_id} className="tableData">
                <Td> {packageName} </Td>
                <Td>{userName}</Td>
                <Td>{address}</Td>
                <Td>{date}</Td>
                <Td>{contact}</Td>
                <Td><button className="btn btn-danger" onClick={()=>handleDelete(_id)}><RiDeleteBin5Fill/>

                </button></Td>
                </Tr>
                ))}              

                 
               
              
                   
                   
                  </Tbody>
                </Table>
                
            
                
            
        </div>
       
    );
};

export default ManageAllOrders;