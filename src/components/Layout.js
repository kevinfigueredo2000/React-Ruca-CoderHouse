import {useState} from 'react';
import { Navbar } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

function Layout(){
    const [loading, setLoading] = useState(false);
    return (
        <div className='App'>
            <Navbar/>
            <Outlet/>
            {loading ? <Loading/> : null};
        </div>
    )
}

export default Layout;