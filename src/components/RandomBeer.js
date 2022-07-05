import { ReactFragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const RandomBeer = () => {
  const [single, setSingle] = React.useState([]);
  const params = useParams();

  React.useEffect(function () {
    getBeer();
  }, []);

  const getBeer = async () => {
    let response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    setSingle(response.data);
    console.log(setSingle);
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: `none`, color: `#00008b` }}>
        Home
      </Link>
      ;
      <img width="40px" height="100px" src={single.image_url} alt="" />
      <h2> {single.name}</h2>
      <h2> {single.tagline}</h2>
      <h2> {single.first_brewed}</h2>
      <h2> {single.attenuation_level}</h2>
      <h2> {single.description}</h2>
      <h2> {single.contributed_by}</h2>
    </div>
  );
};
export default RandomBeer;
