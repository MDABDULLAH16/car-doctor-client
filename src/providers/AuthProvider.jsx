import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggerEmail = { email: userEmail };

      //if user exist then get a token
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggerEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loggerEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const userInfo = {
    user,
    loading,
    createUser,
    userLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
