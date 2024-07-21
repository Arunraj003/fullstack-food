import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Main } from "./containers";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { getAllCartItems, validateUserJWTToken } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { motion } from "framer-motion";
import { fadeInOut } from "./animations";
import { Alert, CheckOutSuccess, MainLoader, UsersOrder } from "./components";
import { setCartItems } from "./context/actions/cartAction";

const App = () => {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState(true);
  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleAuthStateChange = async (cred) => {
      if (cred) {
        const token = await cred.getIdToken();
        const data = await validateUserJWTToken(token);

        if (data) {
          const items = await getAllCartItems(data.data?.user_id);
          dispatch(setCartItems(items));
          dispatch(setUserDetails(data));
        }
      }
      setIsLoading(false);
    };

    const unsubscribe = firebaseAuth.onAuthStateChanged(handleAuthStateChange);
    return () => unsubscribe();
  }, [firebaseAuth, dispatch]);

  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {isLoading && (
        <motion.div
          className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
          {...fadeInOut}
        >
          <MainLoader />
        </motion.div>
      )}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/checkout-success" element={<CheckOutSuccess />} />
        <Route path="/user-orders" element={<UsersOrder />} />
      </Routes>
      {alert?.type && <Alert type={alert?.type} message={alert.message} />}
    </div>
  );
};

export default App;
