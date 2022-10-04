import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather />
        <footer>
          Weather App Coded by Felicia{" "}
          <a
            href="https://github.com/felicka/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            on GitHub
          </a>
          <button>Press</button>
        </footer>
      </div>
    </div>
  );
}
