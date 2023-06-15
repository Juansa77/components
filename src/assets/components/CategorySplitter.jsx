import React from 'react';
import styled from 'styled-components';

const CategoryTextContainer = styled.div`
  bottom: 0;
  left: 0;
  min-width: 90%;
  height:3.2vh;

  color:beige;
  display:flex;
  border-bottom: 1px solid beige;
  

`;

const CategoryText = styled.h2`
  font-size: 2.5vh;
  text-align: left;
  margin: 0;
  margin-bottom:2vh;
`;



const CategorySplitter = ({title}) => {
  return (
    <CategoryTextContainer>
        <CategoryText>{title}</CategoryText>
    </CategoryTextContainer>
  )
}

export default CategorySplitter