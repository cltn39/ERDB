import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  // var aspectRatioGroup = document.querySelector(
  //   "#aspectRatio--group .segmentedControl"
  // );
  // var radios = aspectRatioGroup.querySelectorAll("input");
  // var i = 1;

  // // set CSS Var to number of radios we have
  // aspectRatioGroup.style.setProperty("--options", radios.length);

  // // loop through radio elements
  // radios.forEach((input) => {
  //   // store position as data attribute
  //   input.setAttribute("data-pos", i);

  //   // add click handler to change position
  //   input.addEventListener("click", (e) => {
  //     aspectRatioGroup.style.setProperty(
  //       "--options-active",
  //       e.target.getAttribute("data-pos")
  //     );
  //   });

  //   // increment counter
  //   i++;
  // });

  // // add class to enable the sliding pill animation, otherwise it uses a fallback
  // aspectRatioGroup.classList.add("useSlidingAnimation");

  // // add class to enable the sliding pill animation, otherwise it uses a fallback
  // aspectRatioGroup.classList.add("useSlidingAnimation");

  return (
    <form className="search container" onSubmit={props.handleFormSubmit}>
      <div className="row justify-content-center">
        <div id="inputContainer">
          <fieldset id="aspectRatio--group" className="inputGroup">
            <div className="segmentedControl">
              <span className="segmentedControl--group">
                <input
                  type="radio"
                  name="aspectRatio"
                  id="aspectRatio--16x9"
                  checked
                />
                <label className="label" for="aspectRatio--16x9">
                  Solo
                </label>
              </span>
              <span className="segmentedControl--group">
                <input type="radio" name="aspectRatio" id="aspectRatio--1x1" />
                <label class="label" for="aspectRatio--1x1">
                  Duo
                </label>
              </span>
              <span className="segmentedControl--group">
                <input type="radio" name="aspectRatio" id="aspectRatio--4x5" />
                <label className="label" for="aspectRatio--4x5">
                  Trio
                </label>
              </span>
            </div>
          </fieldset>
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
          <button type="submit" className="btn btn-warning mb-2">
            Search
          </button>
        </div>
      </div>
      {props.redirect}
    </form>
  );
}

export default SearchForm;
