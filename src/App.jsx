import { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import Home from './Componants/customer/pages/Home';
import Aboutus from './Componants/customer/pages/Aboutus';
import Products from './Componants/customer/pages/Products';
import ProductDetails from './Componants/customer/pages/Product-Details';
import Checkout from './Componants/customer/pages/Checkout';
import Contactus from './Componants/customer/pages/Contactus';
import Account from './Componants/customer/pages/Account';
import Pagenotfound from './Componants/customer/pages/Pagenotfound';
import Help from './Componants/customer/pages/Help';
import Faqs from './Componants/customer/pages/Faqs';
import Cart from './Componants/customer/pages/Cart';
import Tracking from './Componants/customer/pages/Tracking';
import Login from './Componants/customer/pages/Login';
// admin side
import AdminLogin from './Componants/admin/pages/Admin-Login';
import AdminLayout from './Admin-Layout';
import AdminForgotPassword from './Componants/admin/pages/Admin-Forgot-Password';
import AdminAddCategory from './Componants/admin/pages/Admin-Add-Category';
import AdminAddSlider from './Componants/admin/pages/Admin-Add-Slider';
import AdminAddProduct from './Componants/admin/pages/Admin-Add-Product';
import AdminManageCustomer from './Componants/admin/pages/Admin-Manage-Customer';
import AdminManageCategory from './Componants/admin/pages/Admin-Manage-Category';
import AdminManageSlider from './Componants/admin/pages/Admin-Manage-Slider';
import AdminManageProduct from './Componants/admin/pages/Admin-Manage-Product';
import AdminManageOrders from './Componants/admin/pages/Admin-Manage-Orders';
import AdminManageReviews from './Componants/admin/pages/Admin-Manage-Reviews';
import AdminManageContact from './Componants/admin/pages/Admin-Manage-Contact';
import AdminManageFooter from './Componants/admin/pages/Admin-Manage-Footer';
import AdminChangePassword from './Componants/admin/pages/Admin-Change-Password';
import AdminLogout from './Componants/admin/pages/Admin-logout';
import AdminAddSubCategory from './Componants/admin/pages/Admin-Add-Sub-Category';
import AdminManageSubCategory from './Componants/admin/pages/Admin-Manage-Sub-Category';
import AdminAddState from './Componants/admin/pages/Admin-Add-State';
import AdminManageState from './Componants/admin/pages/Admin-Manage-State';
import AdminAddCity from './Componants/admin/pages/Admin-Add-City';
import AdminManageCity from './Componants/admin/pages/Admin-Manage-City';
import AdminUpdateCategory from './Componants/admin/pages/Admin-Update-Category';
import AdminUpdateSubCategory from './Componants/admin/pages/Admin-Update-Sub-Category';
import AdminUpdateFooter from './Componants/admin/pages/Admin-Update-Footer';
import AdminUpdateSlider from './Componants/admin/pages/Admin-Update-Slider';
import AdminUpdateState from './Componants/admin/pages/Admin-Update-State';
import AdminUpdateCity from './Componants/admin/pages/Admin-Update-City';
import AdminUpdateProduct from './Componants/admin/pages/Admin-Update-Product';



function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true
      }
    );
  }, [])
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* CUSTOMER SIDE */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Product-details" element={<ProductDetails />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Faqs" element={<Faqs />} />
            <Route path="/Tracking" element={<Tracking />} />
            <Route path="*" element={<Pagenotfound />} />
          </Route>

          {/* ADMIN SIDE */}
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-login/admin-forgot-password' element={<AdminForgotPassword />} />
          <Route path='/admin-login/admin-change-password' element={<AdminChangePassword />} />
          <Route path='/admin-login/admin-dashboard' element={<AdminLayout />} />
          {/* add */}
          <Route path="/admin-login/admin-add-category" element={<AdminAddCategory />} />
          <Route path="/admin-login/admin-add-subcategory" element={<AdminAddSubCategory />} />
          <Route path="/admin-login/admin-add-products" element={<AdminAddProduct />} />
          <Route path="/admin-login/admin-add-slider" element={<AdminAddSlider />} />
          <Route path="/admin-login/admin-add-state" element={<AdminAddState />} />
          <Route path="/admin-login/admin-add-city" element={<AdminAddCity />} />
          {/* manage */}
          <Route path="/admin-login/admin-manage-slider" element={<AdminManageSlider />} />
          <Route path="/admin-login/admin-manage-category" element={<AdminManageCategory />} />
          <Route path="/admin-login/admin-manage-subcategory" element={<AdminManageSubCategory />} />
          <Route path="/admin-login/admin-manage-customer" element={<AdminManageCustomer />} />
          <Route path="/admin-login/admin-manage-products" element={<AdminManageProduct />} />
          <Route path="/admin-login/admin-manage-state" element={<AdminManageState />} />
          <Route path="/admin-login/admin-manage-city" element={<AdminManageCity />} />
          <Route path="/admin-login/admin-manage-orders" element={<AdminManageOrders />} />
          <Route path="/admin-login/admin-manage-reviews" element={<AdminManageReviews />} />
          <Route path="/admin-login/admin-manage-contact" element={<AdminManageContact />} />
          <Route path="/admin-login/admin-manage-footer" element={<AdminManageFooter />} />
          {/* update */}
          <Route path="admin-login/admin-update-category/:id" element={<AdminUpdateCategory />} />
          <Route path="/admin-login/admin-update-subcategory/:id" element={<AdminUpdateSubCategory />} />
          <Route path="/admin-login/admin-update-product/:id" element={<AdminUpdateProduct />} />
          <Route path="/admin-login/admin-update-footer/:id" element={<AdminUpdateFooter />} />
          <Route path="/admin-login/admin-update-slider/:id" element={<AdminUpdateSlider />} />
          <Route path="/admin-login/admin-update-state/:id" element={<AdminUpdateState />} />
          <Route path="/admin-login/admin-update-city/:id" element={<AdminUpdateCity />} />
          <Route path="/admin-login/admin-logout" element={<AdminLogout />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
