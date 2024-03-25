/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Header from "../pages/shared/header/Header";

const Root = () => {
  return (
    <div className="w-[90%] mx-auto max-w-[112.5rem]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
