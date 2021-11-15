
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './pages/AllRoutes/PrivateRoute/PrivateRoute';
import BuyNow from './pages/BuyNow/BuyNow';
import AuthProvider from './pages/context/AuthProvider';
import DashboardHome from './pages/Dashboard/DashBoardHome/DashboardHome';
import PayNow from './pages/Dashboard/PayNow/PayNow';
import Home from './pages/HomeItems/Home/Home';
import MoreProducts from './pages/HomeItems/MoreProducts/MoreProducts';
import Products from './pages/HomeItems/Products/Products';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Review from './pages/Dashboard/Review/Review';
import AddProduct from './pages/AddProduct/AddProduct';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders/ManageAllOrders';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import AdminRoute from './pages/AllRoutes/AdminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        
      <BrowserRouter>
      
      <Switch>
        <Route exact path ="/">
        <Home></Home>
        </Route>
        <Route exact path ="/home">
        <Home></Home>
        </Route>
        <Route path ="/products">
          <Products></Products>
        </Route>
        
        <PrivateRoute path ="/buynow/:productId">
          <BuyNow></BuyNow>
        </PrivateRoute>
        <Route path ="/login">
          <Login></Login>
        </Route>
        <Route path ="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path ="/dashboard"> 
          <DashboardHome></DashboardHome>
        </PrivateRoute>
        <Route path="/allbikes">
        <MoreProducts></MoreProducts>
        </Route>
        <AdminRoute path="/makeAdmin">
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <PrivateRoute path="/paynow">
        <PayNow></PayNow>
        </PrivateRoute>
        <PrivateRoute path="/myorders">
        <MyOrders></MyOrders>
        </PrivateRoute>
        <AdminRoute path="/manageAllOrders">
        <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <PrivateRoute path="/review">
        <Review></Review>
        </PrivateRoute>
        <AdminRoute path="/addproduct">
        <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path="/manageProducts">
        <ManageProducts></ManageProducts>
        </AdminRoute>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
