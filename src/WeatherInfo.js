import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-wrapper">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>

      <div className="weather-wrapper">
        <div className="d-flex justify-content-center">
          <div className="justify">
            <WeatherIcon
              code={props.data.icon}
              size={80}
              alt={props.data.description}
            />
          </div>
          <div className="justify">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>

      <div className="weather-wrapper">
        <ul>
          <li>Feels like: {Math.round(props.data.feels)}℃</li>
          <li>Humidity: {props.data.humidity}% </li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
