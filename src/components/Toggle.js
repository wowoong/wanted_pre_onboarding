import React, { useState } from 'react';
import styled from "styled-components";
import { css } from "styled-components";




const Toggle = () => {
  const [toggle, setToggle] = useState(0);
  
  
  return (
    <ToggleWrap>
      <Left onClick={() => setToggle(0)} selected={toggle === 0 ? true : false}>기본</Left>
      <Right onClick={() => setToggle(1)} selected={toggle === 1 ? true : false}>상세</Right>
      <Ball toggle={toggle}></Ball>
    </ToggleWrap>
  )
}


export const ToggleWrap = styled.div`
  width: 400px;
  padding: 4px;
  display: flex;
  border-radius: 50px;
  background-color: #eeeeee;
`;

const Left = styled.div`
  z-index: 1;  
  width: 200px;
  display: flex;
  cursor: pointer;
  color: "#dddddd";
  padding: 10px 30px;
  border-radius: 50px;
  justify-content: center;
  
`;

const Right = styled(Left)``;

const Ball = styled.div`
  height: 40px;
  width: 200px;
  position: absolute;
  border-radius: 50px;
  background-color: #fff;
  transition: all 0.4s ease-in-out;
  ${({ toggle }) =>
    toggle
      ? css`transform: translatex(100%); `
      : css`transform: translatex(0%);`}
`;



export default Toggle;