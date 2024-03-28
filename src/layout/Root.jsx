/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Header from "../pages/shared/header/Header";

const Root = () => {
  return (
    <div className=" max-w-[112.5rem] mx-auto">
      <div className="w-[90%] mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
