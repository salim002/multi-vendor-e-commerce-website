import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestsellingPage,
  EventsPage,
  FAQPage,
  ProductsDetailsPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProfilePage,
} from "./Routes.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";

const App = () => {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductsDetailsPage />} />
            <Route path="/best-selling" element={<BestsellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/payment" element={<PaymentPage/>} />
            <Route path="/order/success/:id" element={<OrderSuccessPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
