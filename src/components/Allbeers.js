import { ReactFragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Allbeers = () => {
  const [beer, setBeer] = React.useState([]);

  React.useEffect(function () {
    getBeer();
  }, []);

  const getBeer = async () => {
    let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    setBeer(response.data);
    console.log(response.data);
  };

  return (
    <div className="allbeers">
      <Link to="/" style={{ textDecoration: `none`, color: `#00008b` }}>
        Home
      </Link>
      {beer.map(function (brew) {
        return (
          <p>
            <img width="40px" height="100px" src={brew.image_url} alt="" />
            <Link
              to={`/singlebeer/${brew._id}`}
              style={{ textDecoration: `none` }}
            >
              {" "}
              {brew.name}
            </Link>{" "}
            {brew.tagline} {brew.contributed_by}
          </p>
        );
      })}
    </div>
  );
};
export default Allbeers;
