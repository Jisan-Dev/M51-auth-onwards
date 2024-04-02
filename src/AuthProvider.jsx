import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import auth from './firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser };
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
