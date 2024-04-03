import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">HOMEPAGE for {user.email}</h1>
    </div>
  );
};

export default Home;
