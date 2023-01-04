import styled from 'styled-components';

export const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 15px;
`;

export const Text = styled.span`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 150%;
width: 200px;
transition: 0.2s;
`;

export const MainContainer = styled.div`
  width: 994px;
  height: 551px;
  background: #FFFFFF;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
`;

export const ListContainer = styled.div`
  display: flex;
  width: 994px;
  margin: auto;
  flex-wrap: wrap;
  gap: 80px;
`;

export const FilterContainer = styled.div`
 width: 994px;
height: 75px;
display: flex;
border: 1px solid black;
margin: auto;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
display: flex;
align-items: center;
color: #FFFFFF;
background-color: #036B52;
justify-content: space-evenly;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin-top: 10px;
`;

export const CardsContainer = styled.div`
  font-family: 'Epilogue';
  font-style: italic;
  font-weight: 600;
  font-size: 28px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 60px;
`;

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 30px;
`;

export const ButtonConatiner = styled.div`
  display: flex;
  width: 430px;
  justify-content: space-between;
  margin-top: 30px;
  border: 1px solid black;
  position: relative;
`;
