import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('user logged out'))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <header className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">AUTH ONWARDS_</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
            </ul>
            {user && (
              <>
                {user.email}{' '}
                <button onClick={handleLogOut} className="btn ">
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
