import { createContext, useEffect, useState } from "react";
import auth from "../Secrete/secrete";
import PropTypes from "prop-types";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const updateUserNameAndPhoto = (
    name,
    photo = "https://i.ibb.co/5x441PC/user.png"
  ) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signUpWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLoginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    auth,
    loading,
    user,
    signUpWithEmailAndPassword,
    updateUserNameAndPhoto,
    userLoginWithEmailAndPassword,
    userLogOut,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      const logoutUser = user?.email;
      setUser(user);
      setLoading(false);
      if (user) {
        const currentuser = { email: user.email };
        axios
          .post("http://localhost:5174/jwt/token", currentuser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      } else {
        axios
          .post("http://localhost:5174/jwt/token/clear", logoutUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data.data))
          .catch((err) => console.log(err));
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
