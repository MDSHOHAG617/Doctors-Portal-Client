import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side shadow-xl  ${bgClass} `}>
      <figure className="pl-5 m-5">
        <img src={img} alt="" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default InfoCard;
