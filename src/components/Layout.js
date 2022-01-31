import {useState} from 'react';
import { Navbar } from 'react-bootstrap';
import {Outlet} from 'react-router';

function Layout(){
    const [loading, setLoading] = useState(false);
    return (
        <div className='App'>
            <Navbar/>
            <Outlet/>
            {loading ? (<p className="text-center">Cargando...</p>): null};
        </div>
    )
}

export default Layout;