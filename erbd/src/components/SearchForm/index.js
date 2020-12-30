import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search" onSubmit={props.handleFormSubmit}>
      <div className="form-row justify-content-center">
      <div class="col-md-6 mb-3">
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
        <div class="col-md-0 mb-1">
        <button type="submit" className="btn btn-success mb-2">
          Search
        </button>
        </div>
      </div>
      {props.redirect}
    </form>
  );
}

export default SearchForm;
