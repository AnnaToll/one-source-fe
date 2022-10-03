
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AdminSupp = () => { 

    return (
        !jwt_decode(sessionStorage.getItem('accessToken')).accessLevel.includes('support')
        ?
            <Navigate to='/admin'/>
        :
            <> 
                <h2>Support</h2>
            </>
    );
};

export default AdminSupp;