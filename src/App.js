import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/context/AuthProvider';
import LazyLoadingSpinner from './components/Spinner/LazyLoadingSpinner';
import SpServiceDetails from './components/Home/SpecialServicesContainer/SpServiceDetails/SpServiceDetails';
import Services from './components/ServicesContainer/Service/Services';
import Contact from './pages/Contact';
import UserLogin from './pages/Login/UserLogin';
import UserRegister from './pages/Register/UserRegister';
import MainDashboard from './pages/MainDashboard/MainDashboard';
import PrivateRoute from './components/shared/PrivateRoute/PrivateRoute';
import MyOrders from './components/UserDashboard/MyOrders/MyOrders';
import AdminRoute from './components/shared/AdminRoute/AdminRoute';
import AddCarDetails from './components/UserDashboard/AddCarDetails/AddCarDetails';
import SendReview from './components/UserDashboard/SendReview/SendReview';
import Payment from './components/UserDashboard/Payment/Payment';
import MakeAdmin from './components/UserDashboard/MakeAdmin/MakeAdmin';
import ManageAllBooking from './components/UserDashboard/ManageAllBooking/ManageAllBooking';
import ManageAllCar from './components/UserDashboard/ManageAllCar/ManageAllCar';
import Update from './components/UserDashboard/Update/Update';


const Home = lazy(() => import('./pages/Home'));
function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<LazyLoadingSpinner />}>
            <Routes>
              <Route path={`/`} element={<Home />}></Route>
              <Route path={`/home`} element={<Home />}></Route>
              <Route path={`/services`} element={<Services />}></Route>
              <Route path={`/contact`} element={<Contact />}></Route>
              <Route path={`/dashboard`} element={<PrivateRoute> <MainDashboard /></PrivateRoute>}>
                <Route path={`dashboard/myBookings`} element={<MyOrders />}></Route>
                <Route path='dashboard/sendReview' element={<PrivateRoute><SendReview/></PrivateRoute>}></Route>
                <Route path={`dashboard/payment`} element={<Payment />}></Route>
                <Route path={`dashboard/addCarDetails`} element={<AdminRoute><AddCarDetails /></AdminRoute>}> </Route>
                <Route path={`dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}> </Route>
                <Route path={`dashboard/manageAllBooking`} element={<AdminRoute><ManageAllBooking /></AdminRoute>}> </Route>
                <Route path={`dashboard/manageAllCar`} element={<AdminRoute><ManageAllCar /></AdminRoute>}> </Route>
                <Route path={`dashboard/update/:id`} element={<AdminRoute><Update /></AdminRoute>}> </Route>
              </Route>
              {/* <Route path={`/orders`} element={<MyOrders/>}></Route> */}
              {/* <AdminRoute path={`/dashboard/addCarDetails`} element={<AddCarDetails/>}> </AdminRoute> */}
              <Route path={`/specialServiceDetails/:id`} element={<SpServiceDetails />}></Route>
              <Route path={`/register`} element={<UserRegister />}></Route>
              <Route path={`/login`} element={<UserLogin />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
