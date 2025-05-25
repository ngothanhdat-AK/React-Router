import React from "react";
import {Outlet} from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div>
        <h1>Blog Page</h1>
        <Outlet />
      </div>
    </>
  );
};

export default Blog;
