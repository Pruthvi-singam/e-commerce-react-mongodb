import React,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import AdminDashBoard from './Dashboard';
import ProfilePage from '../components/Profilepage';
import  {AdminContainer}  from '../StyledComponents/AdminPageStyles';
import {useLocation} from 'react-router-dom'
const Admin = () => {

    const location = useLocation();  // Get current location object
    const [currentFragment, setCurrentFragment] = useState(location.hash);
  
    // Whenever location.hash (fragment) changes, update the state
    useEffect(() => {
      const handleHashChange = () => {
        setCurrentFragment(location.hash);
      };
  
      // Listen to hash change events
      window.addEventListener('hashchange', handleHashChange);
  
      // Cleanup listener when component unmounts
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }, [location.hash]);
  
    return (
      <AdminContainer>
        <Sidebar />
        {currentFragment=="#dashboard" ?       <AdminDashBoard />: <ProfilePage />}
  
      </AdminContainer>
    );
};

export default Admin;