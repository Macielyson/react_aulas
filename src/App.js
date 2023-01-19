import React from "react";
import styled from 'styled-components';
import './App.css';

const Site = styled.html`
  width: 400px;
  height: 200px;
  background-color: #00ff00;
`;
// voce tem como extender o uso do seu styled para outro componente
const Botao = styled.button`
  font-size: 19px;
  padding: 10px 15px;
  borde: 3px solid #ff0000;
  color: #ff0000; 
  background-color: #fff;
  margin: 5px;
  border-radius: 5px;
`;
// ele esta extendendo do componente Botao ele herda as caracteristicas do Botão
const BotaoPequeno = styled(Botao)`
  padding: 5px 8px;
  font-size: 15px;
  
`;

function App() {
  return (
    <Site>
      <Botao>Clique aqui</Botao>
      <BotaoPequeno>Clique aqui</BotaoPequeno>
    </Site>
  );
}

export default App;