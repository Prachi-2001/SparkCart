import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventPage,
  FaqPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <>
      {loading ? null : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route
                path="/activation/:activation_token"
                element={<ActivationPage />}
              />
              <Route
                path="/seller/activation/:activation_token"
                element={<SellerActivationPage />}
              />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:name" element={<ProductDetailsPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/shop-create" element={<ShopCreatePage />} />
              <Route path="/shop-login" element={<ShopLoginPage />} />

              <Route
                path="/profile"
                element={
                  // <ProtectedRoutes isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                  //  </ProtectedRoutes>
                }
              />
            </Routes>
          </Router>

          {/* below code for react toastify */}
          <ToastContainer
            position="bottom-right"
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
        </>
      )}
    </>
  );
};

export default App;
