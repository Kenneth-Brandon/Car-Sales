import React from "react";

const Header = (props) => {
  return (
    <>
      <figure className="image is-250x250">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header;
