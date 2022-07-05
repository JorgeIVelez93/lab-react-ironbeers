import { ReactFragment } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home">
      <Link to="allbeers" style={{ textDecoration: `none`, color: `#00008b` }}>
        All Beers
      </Link>
      <Link to="newbeer" style={{ textDecoration: `none`, color: `#00008b` }}>
        New Beer
      </Link>
      <Link
        to="randombeer"
        style={{ textDecoration: `none`, color: `#00008b` }}
      >
        RandomBeer
      </Link>
    </div>
  );
};
export default Homepage;
