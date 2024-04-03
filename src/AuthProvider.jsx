import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from './firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('current user', currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, signInUser, logOut };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * 1. create context and export it
 * 2. set provider and value
 * 3. use the AuthProvider in main.jsx file to get all the components as children
 * 4. access children in the AuthProvider component as children and use in the middle of the provider
 * ** */
