import React, { useEffect, useState } from 'react';
import useContextBase from '../../hooks/useContextbase';
import './MyOrders.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { RiDeleteBin5Fill} from 'react-icons/ri';

const MyOrders = () => {
    const {user}=useContextBase();
    const [myBookings,setMyBookings] =useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyBookings(data))
    },[])

    const handleDelete=id=>{
      // confrim to delete 
      const confirmDelete =window.confirm('Are You Sure to delete this Package?? ')
    if(confirmDelete){
      fetch(`http://localhost:4000/orders${id}`,{
        method:'DELETE'})

      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount > 0){
      alert('Deleted Successfully !')
      const presentPackages = myBookings.filter(book=>book._id !==id)
      setMyBookings(presentPackages)
        }
      })
    } 
  }
   
    return (
        <div>
            <h4 className="text-warning fw-bold bg-dark p-2 rounded-3">My Orders : {myBookings.length}  </h4>
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
                 

                {myBookings.map(({packageName,userName,address,date,contact,_id})=>(

                <Tr key={_id} className="tableData">
                <Td> {packageName} </Td>
                <Td>{userName}</Td>
                <Td>{address}</Td>
                <Td>{date}</Td>
                <Td>{contact}</Td>
                    <Td><button className="btn btn-danger" onClick={() => handleDelete(_id)}><RiDeleteBin5Fill/>

                </button></Td>
                </Tr>
                ))}              
                  </Tbody>
                </Table>
        </div>
    );
};

export default MyOrders;