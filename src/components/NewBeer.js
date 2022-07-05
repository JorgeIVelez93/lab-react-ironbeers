import { ReactFragment } from "react";
import React from "react";
import { Link } from "react-router-dom";

const NewBeer = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: `none`, color: `#00008b` }}>
        Home
      </Link>
    </div>
  );
};
export default NewBeer;
