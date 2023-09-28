import "./App.css";
import Cities from "./Cities";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="Weather mb-0">
        <Cities />
        <Search />
        <CurrentWeather />
        <Forecast />
      </div>
      <div className="git-hub">
        <a
          href="https://github.com/ItsmeJessMarie/my-weather-project"
          target="_blank"
          rel="noreferrer noopener"
          className="git-hub-link"
        >
          Open-source code {}
        </a>
        by Jessica Boll
      </div>
    </div>
  );
}
