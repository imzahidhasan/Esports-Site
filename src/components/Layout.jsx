import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
