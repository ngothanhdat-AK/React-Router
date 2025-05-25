import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start text-muted"
        style={{backgroundColor: "#ccc"}}
      >
        <div className="text-center p-4 text-black">
          © 2023 Copyright:
          <a className="text-reset fw-bold m-4" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
