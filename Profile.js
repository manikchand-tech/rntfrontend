// Profile.js

import React from 'react';
import { useAuth } from './AuthContext';
import SearchSection from './SearchSection';
import Login from './Login';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { isLoggedIn } = useAuth();
   
    return (
        <div className='Home-Content'>
           {isLoggedIn ? (
           <> <p>Welcome, you are logged in!</p>
            <SearchSection/>
            </>  ) : (
           <>
            <Login/>
      <div className="home-signup" style={{textAlign:'center', margin:'1rem'}}>
            <p>Not registered?</p>
            <Link to="/vendor-signup" className="signup-link">Sign up as Vendor</Link>
            <Link to="/customer-signup" className="signup-link">Sign up as Customer</Link>
        </div>
        </> 
        )}
        </div>
    );
};

export default Profile;
