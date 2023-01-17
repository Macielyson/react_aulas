import React from "react";
import styled from 'styled-components'

const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #00ff00;
`;

const Botao = styled.button`
  font-size: 19px;
  padding: 10px;
`;

function App() {
  return <Site>
    <Botao>Clique aqui</Botao>
  </Site>
}

export default App;