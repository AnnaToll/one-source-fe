import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = ({ loggedIn }) => {
    
    return (
      loggedIn ? <Outlet/> : <Navigate to='/'/>
    );
};

export default AdminRoutes;