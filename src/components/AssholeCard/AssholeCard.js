import React from "react";
import "./AssholeCard.css";

const AssholeCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.selectAsshole} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
      </ul>
    </div>
  </div>
);

export default AssholeCard;