import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Form,Col} from 'react-bootstrap';
import useContextBase from './../../hooks/useContextbase';
import Header from '../../../Shared/Header/Head';
import { useHistory,useLocation  } from 'react-router-dom';
import { FaUserSecret} from 'react-icons/fa';
import { MdPassword} from 'react-icons/md';
import { RiLoginCircleFill} from 'react-icons/ri';
import { MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import { GiArchiveRegister} from 'react-icons/gi';

const Register = () => {
    const {registerNewUSer}=useContextBase();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError] =useState('');
    const location =useLocation();
    const history =useHistory();     

    const handleRegistration = (e)=>{
       
        e.preventDefault();

        console.log(name,email,password)
  
        if(!/(@)/.test(email)){
        setError('Oops ! You Miss @ ! Please Enter @ in Email')
        return;
        }
        if(email.length < 6){
          setError('Enter a Valid Email Address')
          return;
        }
        if(password.length < 6){
          setError('Password should be 6 Characters or long.')
          return;
        }
        
        registerNewUSer(name,email,password,history,location)
        
      }

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        }
        
        const handlePasswordChange = (e)=>{
          setPassword(e.target.value)
        }
        const handleNameChange = (e)=>{
          setName(e.target.value)
        }



    return (
        <> 
        <Header></Header>

            <div className="mt-5 pt-3">
            <h3 className="text-light bg-success p-2 w-50 mx-auto"> Please Register an new account Here  </h3>

            <Form onSubmit={handleRegistration} className="mt-3">
           
            <Form.Group className="mx-auto mt-2" as={Col} md="4" lg="6" controlId="validationCustom01">
            <Form.Label className="text-light"><MdOutlineDriveFileRenameOutline/> Enter Your Name</Form.Label>
            <Form.Control
            className="border border-warning"
            onBlur={handleNameChange}
            required
            type="text"
            placeholder="Enter Your Name"
            />
            </Form.Group>
            <Form.Group className="mx-auto mt-2" as={Col} md="4" lg="6" controlId="validationCustom01">
            <Form.Label className="text-light"><FaUserSecret/> Enter Your Email</Form.Label>
            <Form.Control
            className="border border-warning"
            onBlur={handleEmailChange}
            required
            type="text"
            placeholder="Enter Your Email"
            />
            </Form.Group>


           
            
            <Form.Group className="mx-auto mt-2" as={Col} md="6" lg="6" controlId="validationCustom03">
            <Form.Label className="text-light"><MdPassword/>  Enter Your Password</Form.Label>
            <Form.Control className="border border-warning" 
            onBlur={handlePasswordChange} type="password" 
            placeholder="Enter Your Password" 
            required />
            <Form.Control.Feedback  type="invalid">
            Please provide a valid password.
            </Form.Control.Feedback>
            </Form.Group> 
            
            <button  className="btn btn-warning mt-2"  type="submit">Register <RiLoginCircleFill/></button>
            </Form>
            <div className="text-light mt-2">{error}</div>
            <button className="btn btn-dark rounded"><Link className="text-light fw-bold" to="/login"
          ><h6>Already have account ? Please Login here</h6></Link></button>
            
 
        </div>
        </>
       
        
    );
};

export default Register;