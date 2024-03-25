/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
import React from "react";

const Btn = ({ label, onClick, color, style, variant, size }) => {
  return (
    <Button
      className={` ${style}`}
      onClick={onClick}
      color={color ? color : "amber"}
      variant={variant}
      size={size}
    >
      {label || "Btn"}
    </Button>
  );
};
Btn.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  style: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default Btn;
