import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          Pastel Weather App Coded by Felicia on{" "}
          <a
            href="https://github.com/felicka/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
