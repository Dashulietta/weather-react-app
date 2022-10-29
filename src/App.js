
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
  <div className="App">
    <div className="container">
   
     <Weather defaultCity="Kyiv" />
      <footer>
      This project is created by <a href ="https://brilliant-kelpie-907866.netlify.app" target="_blank"  rel="noreferrer"> Petrova Dariia </a> and it is 
      <a href="https://github.com/Dashulietta/weather-react-app" target="_blank"  rel="noreferrer" > open-sorced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}




