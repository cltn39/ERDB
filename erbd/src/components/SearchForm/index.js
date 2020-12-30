import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search" onSubmit={props.handleFormSubmit}>
      <div className="md-form mt-0">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Search player name here"
          aria-label="Search"
          id="breed"
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
      {props.redirect}
    </form>
  );
}

export default SearchForm;
