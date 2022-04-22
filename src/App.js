import React from 'react';
import Input from '../src/components/Input';
import Toggle from '../src/components/Toggle';
import styled from "styled-components";


function App() {
  return (
    <Wrapper>
      <Input></Input>
      <Toggle></Toggle>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  height: 25vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 auto;
`;


export default App;
