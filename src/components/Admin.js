
import styles from './admin.css';
import { useNavigate } from 'react-router-dom';
import App from '../App';
import AdminAdm from './AdminAdm';
import AdminDev from './AdminDev';
import AdminSupp from './AdminSupp';
import AdminTechSupp from './AdminTechSupp';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

const Admin = ({ setLoggedIn, navPages }) => { 

    const [linkClass, setLinkClass] = useState(0);
    const navigate = useNavigate();
    const [nav, setNav] = useState(() => {
        if (sessionStorage.getItem('accessToken')) {
            const user = jwt_decode(sessionStorage.getItem('accessToken'));
            if (typeof user.accessLevel === 'string') {
                return [user.accessLevel];
            }
            return user.accessLevel;
        }
    });

    const getNewToken = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/refresh`, { credentials: 'include' });
        const data = await response.json();
        if (sessionStorage.getItem('accessToken')) {
            sessionStorage.removeItem('accessToken');
        }
        if (response.status === 200) {
            sessionStorage.setItem('accessToken', data.accessToken);
            setLoggedIn(true);
        } else {
            if (localStorage.getItem('expiration')) {
            localStorage.removeItem('expiration');
            }
            setLoggedIn(false);
        }
    };

    const checkExpiration = async () => {
    if (localStorage.getItem('expiration')) {
        const now = Date.now();
        if (now < localStorage.getItem('expiration')) {
            if (sessionStorage.getItem('accessToken')) {
                const token = jwt_decode(sessionStorage.getItem('accessToken'));
                if (now < token.exp * 1000) {
                setLoggedIn(true);
                } else {
                await getNewToken();
                }
            } else {
                await getNewToken();
            }
        }
    }
    };

    const handleClickLogout = async () => {
        sessionStorage.removeItem('accessToken');
        localStorage.removeItem('expiration');
        await fetch(`${process.env.REACT_APP_API_ADDRESS}/api/v0/logout`, { credentials: 'include' });
        setLoggedIn(false);
    };

    useEffect(() => {
        navigate(`/admin/${nav[0]}`);
    }, []);

    return (
        <>
            <App navPages={navPages} />        
            <div className='admin-container'>
                <i className="bi bi-x" onClick={() => {navigate('/');}}></i>
                <aside>
                    {nav.map((access, index) => (
                        <Link 
                            to={`/admin/${access}`} 
                            key={index}
                            onClick={() => setLinkClass(index)}
                        > 
                            <p className={ linkClass === index ? 'is-active' : '' }>
                                {access.charAt(0).toUpperCase() + access.slice(1)}
                            </p>
                        </Link>
                    ))}
                    {/* <Link 
                        to='/admin/tech-support' 
                    > 
                        <p>Tech Support</p>
                    </Link> */}
                    <p onClick={handleClickLogout}>Logout</p>
                </aside>
                <section>
                    <Routes>
                        <Route path='/admin' element={<AdminAdm checkExpiration={ checkExpiration } getNewToken={ getNewToken } />} />
                        <Route path='/developer' element={
                        <AdminDev checkExpiration={ checkExpiration } getNewToken={ getNewToken } />} />
                        <Route path='/support' element={<AdminSupp checkExpiration={ checkExpiration } getNewToken={ getNewToken } />} />
                        {/* <Route path='/tech-support' element={<AdminTechSupp />} /> */}
                    </Routes>
                </section>
            </div>
        </>
    );
};

export default Admin;