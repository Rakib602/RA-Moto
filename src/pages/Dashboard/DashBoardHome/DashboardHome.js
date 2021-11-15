import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Switch,Route,useRouteMatch} from "react-router-dom";

import { Link } from 'react-router-dom';
import useContextBase from '../../hooks/useContextbase';
import { Image, Navbar } from 'react-bootstrap';
import PayNow from '../PayNow/PayNow';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MyOrders from './../MyOrders/MyOrders';
import Review from '../Review/Review';
import AddProduct from '../../AddProduct/AddProduct';
import ManageAllOrders from './../ManageAllOrders/ManageAllOrders';
import MoreProducts from '../../HomeItems/MoreProducts/MoreProducts';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import ManageProducts from './../ManageProducts/ManageProducts';
import AdminRoute from './../../AllRoutes/AdminRoute/AdminRoute';
import PrivateRoute from '../../AllRoutes/PrivateRoute/PrivateRoute';



const drawerWidth = 180;

function DashboardHome(props) {
  
//   const {admin} =useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user,logOut,admin} =useContextBase();

  let{path,url} = useRouteMatch();
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Navbar.Brand>
        <h2>RA-MOTO</h2> 
       </Navbar.Brand>
      <Toolbar />
      <Divider />

      {/* NORMAL USERS FEATURES  */}
      {
        !admin && <> 
        <Link to ={`${url}/paynow`}><button className="btn btn-success" style={{textDecoration:'none', width:'100%'}}  >Pay Now</button></Link>
      <Link to ={`${url}/myorders`}><button className="btn btn-warning mt-2" style={{textDecoration:'none', width:'100%'}}  >My Orders</button></Link>
      <Link to ={`${url}/review`}><button className="btn btn-dark mt-2" style={{textDecoration:'none', width:'100%'}}  >Post Review</button></Link>
        </>
      }
      
    
     {/* ADMIN FEATURES   */}
    
      {
        admin &&
        <>
          <Link to={`${url}/manageAllOrders`}><button className="btn btn-warning mt-2" style={{ textDecoration: 'none', width: '100%' }}  >Manage All Orders</button></Link>
          <Link to={`${url}/addproduct`}><button className="btn btn-primary mt-2" style={{ textDecoration: 'none', width: '100%' }}  >Add a New product</button></Link>
          <Link to={`${url}/makeAdmin`}><button className="btn btn-danger mt-2" style={{ textDecoration: 'none', width: '100%' }}  >Make an Admin</button></Link>
          <Link to={`${url}/manageProducts`}><button className="btn btn-success mt-2" style={{ textDecoration: 'none', width: '100%' }}  >Manage Products</button></Link>
        </>
      }
      <Link to ='/home'><button className="btn btn-danger mt-5"style={{textDecoration:'none', width:'100%'}}>Back to Home</button></Link>
     
      
      {
   user?.email && 
   <Navbar.Text>
     
     <button onClick={logOut} style={{textDecoration:'none', width:'100%'}} className="btn btn-dark mt-3">Log Out</button> <br />
     <Image className="ms-3 mt-2" style={{width:30}} src={user.photoURL} roundedCircle />
   </Navbar.Text>
}
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
              Wellcome to {user.displayName} {admin && 'Admin'}DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          
          <Switch>
            <Route exact path={path}>
          <MoreProducts></MoreProducts>
            </Route>
            {/* NO ADMIN FEATURES WITH PRIVATE ROUTE */}

            <PrivateRoute  path={`${path}/paynow`}>
          <PayNow></PayNow>
            </PrivateRoute>

            <PrivateRoute  path={`${path}/myorders`}>
          <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute  path={`${path}/review`}>
          <Review></Review>
            </PrivateRoute>

            
            

            {/* ADMIN FEATURES WITH ADMIN ROUTE */}

            <AdminRoute  path={`${path}/manageAllOrders`}>
          <ManageAllOrders></ManageAllOrders>
            </AdminRoute>

            <AdminRoute  path={`${path}/addproduct`}>
          <AddProduct></AddProduct>
            </AdminRoute>

            <AdminRoute  path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <AdminRoute  path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
            </AdminRoute>

          </Switch>
      </Box>
    </Box>
    </>
  );
}

DashboardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardHome;
