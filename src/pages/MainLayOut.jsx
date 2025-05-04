import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayOut = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );

};

export default MainLayOut;