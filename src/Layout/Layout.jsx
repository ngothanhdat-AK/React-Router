import {Stack, Button} from "react-bootstrap";
import {Routes, Route, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
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
