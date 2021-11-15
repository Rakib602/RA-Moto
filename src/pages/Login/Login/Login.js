import React, { useState } from 'react';
import { Form,Col } from 'react-bootstrap';
import { Link,useLocation,useHistory} from 'react-router-dom';
import Header from '../../../Shared/Header/Head';
import useContextBase from '../../hooks/useContextbase';
import { FaUserSecret} from 'react-icons/fa';
import { FaUserLock} from 'react-icons/fa';
import { MdPassword} from 'react-icons/md';
import { RiLoginCircleFill} from 'react-icons/ri';
import { FcGoogle} from 'react-icons/fc';

const Login = () => {
    const {signInWithGoogle,userLogin} =useContextBase();
    const location =useLocation();
    const history =useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError] =useState('');
  


    // handle google login 
    const handlegoogleLogin =()=>{
        signInWithGoogle(location,history)
  
    }
    
    // handle user login 
    const handleLogin = (e)=>{
       
        e.preventDefault();

        console.log(email,password)
  
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
        
        userLogin(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            
              history.push(location.state?.from || "/home")

          })
          .catch(error=>{
            setError(error.message)
          })
      }

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        }
        
        const handlePasswordChange = (e)=>{
          setPassword(e.target.value)
        }
    return (
        <> 
        <Header></Header>

            <div className="mt-5 pt-3">
            <h3 className="text-light bg-success p-2 w-50 mx-auto"> Please Login to Your account </h3>

            <Form onSubmit={handleLogin} className="mt-3">
           
            <Form.Group className="mx-auto mt-2" as={Col} md="4" lg="6" controlId="validationCustom01">
            <Form.Label className="text-light fw-bold"><FaUserSecret/> Enter Your Email</Form.Label>
            <Form.Control 
            className="border border-warning"
            onBlur={handleEmailChange}
            required
            type="text"
            placeholder="Enter Your Email"
            />
            </Form.Group>


           
            
            <Form.Group className="mx-auto mt-2" as={Col} md="6" lg="6" controlId="validationCustom03">
            <Form.Label className="text-light fw-bold"><MdPassword/> Enter Your Password</Form.Label>
            <Form.Control className="border border-warning" 
            onBlur={handlePasswordChange} type="password" 
            placeholder="Enter Your Password" 
            required />
            <Form.Control.Feedback  type="invalid">
            Please provide a valid password.
            </Form.Control.Feedback>
            </Form.Group> 
            
            <button  className="btn btn-warning mt-2"  type="submit">Login <RiLoginCircleFill/></button>
            </Form>
            <div className="text-light  mt-2">{error}</div>

            <button className="btn btn-dark rounded"><Link className="text-light fw-bold" to="/register"
          ><h6>Dont have account? Please Register here</h6></Link></button>
          
          <div  className="m-3 text-light">.......................Or......................</div>
        <button className="btn btn-light" onClick={handlegoogleLogin}><FcGoogle/> Login with Google</button>
 
        </div>
        </> 
    );
};

export default Login;