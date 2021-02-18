import React from "react";
import "./Tile.css";

function Tile({ img, title, summary }) {
  return (
    <div className="tile">
      <img src={img} alt="tile showcasing" className="tile__img" />

      <h2 className="tile__title">{title}</h2>
      <p className="tile__summary">{summary}</p>
    </div>
  );
}

export default Tile;
