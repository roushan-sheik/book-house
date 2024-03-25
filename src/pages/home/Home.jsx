/* eslint-disable no-unused-vars */
import React from "react";
import Btn from "../../components/button/Btn";

const Home = () => {
  function handleClick() {
    alert("clicked");
  }
  return (
    <div>
      <Btn onClick={handleClick} style={"bg-[#41C9E2] text-black"} />
    </div>
  );
};

export default Home;
