import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 25vw;
  height: 40vh;
  background-color: #141414;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition:  0.2s ease-in-out;
  cursor:pointer;
  box-shadow: 5px 2px 20px black;

  @media (max-width: 768px) {
    width: 50vw;
  }

  
  &:hover {
    transform: scale(1.02);
    border: 3px solid beige;
    box-shadow: 0 5px 50px black;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 85%;
  &:hover {
    opacity: 90%;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;

`;

const Title = styled.h2`
  font-size: 3vh;
  text-align: left;
  margin: 0;
  margin-bottom:2vh;
`;

const GameCardNew=({image, title}) => {
  return (
    <CardContainer>
      <Image src={image} alt="Imagen" />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </CardContainer>
  );
}

export default GameCardNew;
