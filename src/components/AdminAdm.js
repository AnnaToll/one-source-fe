import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AdminAdm = () => { 

    const handleClickDeleteCookies = async () => {
        await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/deleteCookies`, { credentials: 'include' });
    };

    return (
        !jwt_decode(sessionStorage.getItem('accessToken')).accessLevel.includes('admin')
        ?
            <Navigate to='/admin'/>
        :
        <>
            <h2>Admin</h2>
            <section className='admin-content-container'>               
                <h3 className='green'>Access</h3>
                <section>
                    <div>
                        <h5 className='gray'>Add access</h5>
                        <form>
                            <p>Email</p>
                            <input type="email" />
                            <p>Access type</p>
                            <input 
                                type="text" 
                                placeholder='developer, support or admin'
                            />
                            <button className='btn bg-grey top-s pad-s'>Add</button>
                        </form>
                    </div>
                    <div>
                        <h5 className='gray'>Remove access</h5>
                        <form>
                            <p>Email</p>
                            <input type="email" />
                            <p>Access type</p>
                            <input 
                                type="text" 
                                placeholder='developer, support or admin'
                            />
                            <button className='btn bg-grey top-s pad-s'>Remove</button>
                        </form>
                    </div>
                </section>
                <hr />
                <button onClick={ handleClickDeleteCookies } className='btn bg-grey'>Clear all Cookies</button>
            </section>
        </>
    );
};

export default AdminAdm;