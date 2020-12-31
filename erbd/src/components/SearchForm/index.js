import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search container" onSubmit={props.handleFormSubmit}>
        <div className="row justify-content-center">
          <div className="col-sm-2 mb-4">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              aria-pressed="true"
              data-toggle="button"
            >
              Solo
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              aria-pressed="false"
              data-toggle="button"
            >
              Duo
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              aria-pressed="false"
              data-toggle="button"
            >
              Trio
            </button>
          </div>
        </div>
      <div className="form-row justify-content-center">
        <div className="col-sm-7 mb-4">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="breed"
            list="breeds"
            type="text"
            className="form-control mx-lg-1"
            placeholder="Search player name here"
            aria-label="Search"
            id="breed"
          />
        </div>
        <div className="col-sm-1 mb-1">
          <button type="submit" className="btn btn-danger mb-2">
            Search
          </button>
        </div>
      </div>
      {props.redirect}
    </form>
  );
}

export default SearchForm;
