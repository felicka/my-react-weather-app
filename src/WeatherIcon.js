import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "10d": "RAIN",
    "10n": "RAIN",
    "13d": "SLEET",
    "13n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "WIND",
    "50n": "WIND",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="pink"
      size={props.size}
      animate={true}
    />
  );
}
