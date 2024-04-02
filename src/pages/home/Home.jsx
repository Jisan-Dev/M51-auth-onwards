import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">HOMEPAGE for {authInfo.name}</h1>
    </div>
  );
};

export default Home;
