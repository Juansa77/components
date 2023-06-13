import React from 'react'
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 40vw;
  border: 3px solid #8F8C8A;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background: #ff894c;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const CardAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  
`;

const CardUsername = styled.span`
  font-weight: bold;
  color: #f8f8f8; 
`;

const CardImage = styled.img`
  height:50vh;
  width:100%;
  object-fit:cover;
  
  margin-bottom: 12px;
`;

const CardContent = styled.p`
  margin-bottom: 12px;
  position:relative;
  width:100%;
  text-align:left;
  font-size:3vh;
  color: #f8f8f8
`;

const CardActions = styled.div`
  display: flex;

  align-items: center;
`;


const CardButtonAddList = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #dc2f2f;
  color: #f8f8f8;
  cursor: pointer;
`;

const CardButtonAux = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #dc2f2f;
  color: #f8f8f8;
  cursor: pointer;
  margin-left:1vw;
`;


const CardDescription = styled.p`
  margin-bottom: 12px;
  font-size:2vh;
  color: #f8f8f8;
  width:100%;
  text-align:left;

`;
// Componente de tarjeta
const CardGameHorizontal = ({ avatar, username, image, content }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardAvatar src={avatar} alt="Avatar" />
        <CardUsername>{username}</CardUsername>
      </CardHeader>
      <CardImage src={image} alt="Imagen" />
      <CardActions>
        <CardButtonAddList>Add to list</CardButtonAddList>
        <CardButtonAux>Comentar</CardButtonAux>
      </CardActions>
      <CardContent>{content}</CardContent>
      <CardDescription>Game description</CardDescription>
     
     
    </CardWrapper>
  );
};

export default CardGameHorizontal