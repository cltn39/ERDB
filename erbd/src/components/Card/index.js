import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-front">
          <div
            className="layer"
            style={{
              backgroundImage: props.image ? `url(${props.image})` : "none",
            }}
          >
            <h3>
              {!props.image && (
                <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
              </div>
              )}
            </h3>
            <div className="corner"></div>
            <div className="corner"></div>
            <div className="corner"></div>
            <div className="corner"></div>
          </div>
        </div>
      </div>
      <CardBtn onClick={props.handleBtnClick} data-value="pass" />
      <CardBtn onClick={props.handleBtnClick} data-value="pick" />
    </div>
  );
}

export default Card;
