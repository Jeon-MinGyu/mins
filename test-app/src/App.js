import './App.css';
import React from "react";
import OneToFifty from "./OneToFifty";


const Speedgame = () => {
  return <OneToFifty></OneToFifty>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="img/scball.png" className="App-logo" alt="ball" />
        <p>
          우당탕탕 축구 교실
        </p>
        <button className="Game-Bt" onclick={Speedgame()}>순발력 훈련</button>
      </header>
    </div>

  );
}


export default App;
