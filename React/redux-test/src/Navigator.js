import React from "react";
import { Link, Switch } from "react-router-dom";
const Navigator = props => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};
export default Navigator;
