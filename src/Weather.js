import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placehoder="Enter City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100"
            />
          </div>
        </div>
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Tuesday 11:11</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">℃</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: 10</li>
            <li>Humidity: 60% </li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
