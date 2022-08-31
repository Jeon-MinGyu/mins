import './App.css';
import React, { useState } from 'react'
import Modal from './Modal';
import styled from "styled-components";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">

      <img src="img/scball.png" className="App-logo" alt="ball" />
        <p className="Goal">
          우당탕탕 축구 교실
        </p>
        <buttonGroup className="Game-Bt" aria-label="Game-modal">
      <Button className="Game-Bt" onclick={onClickButton}>반응속도 테스트</Button>
      <Button className="Game-Bt" onClick={onClickButton}>순발력 테스트</Button>
      {isOpen && (<Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />)}
      <Button className="Game-Bt" onclick={onClickButton}>이건 무슨 테스트</Button>
    </buttonGroup>
      </header>
    </div>

  );
}


const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

const AppWrap = styled.div`
  text-align: center;
  margin: 50px auto;
`;

export default App;