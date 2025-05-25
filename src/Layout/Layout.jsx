import {Outlet} from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
