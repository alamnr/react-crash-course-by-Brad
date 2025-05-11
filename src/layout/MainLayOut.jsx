import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayOut = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    );

};

export default MainLayOut;