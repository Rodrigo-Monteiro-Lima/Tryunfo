import styled from 'styled-components';

export const CardArea = styled.div`
width: 278px;
height: 434.33px;
/* font-style: italic;
font-weight: 800;
font-size: 28px;
line-height: 29px;
text-align: center; */
background: #FFFFFF;
box-shadow: 0px 3.89311px 18.4923px rgba(0, 0, 0, 0.25);
border-radius: 10px;
display: flex;
align-items: center;
`;

export const InsideCard = styled.div`
  width: 259px;
  height: 415px;
  background: #036B52;
  border-radius: 10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const NameContainer = styled.div`
  width: 208.53px;
  height: 58.93px;
  background: #023031;
  border-radius: 9.73277px 9.73277px 0px 0px;
  text-align: end;
  font-style: normal;
  font-weight: 700;
  font-size: 27.2518px;
  line-height: 28px;
  color: #FFFFFF;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ImageCard = styled.img`
  width: 198.53px;
  height: 130px;
`;

export const CardText = styled.div`
  width: 198.53px;
  height: 55px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 13px;
  color: #FFFFFF;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 2px 0;
`;

export const CartAttContainer = styled.div`
  width: 208px;
  height: 132px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  gap: 10px;
  position: relative;
`;

export const CartAtt = styled.div`
  width: 56px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 23px;
  font-style: normal;
  font-weight: 600;
  font-size: 15.5724px;
  line-height: 150%;
  color: #3D495C;
  text-align: start;
`;

export const CartRarity = styled.div`
  font-size: 18px;
  background-color: black;
  width: 208px;
  padding: 3px;
  color: white;
  text-align: center;
  position: absolute;
  top: 0;
`;

export const Trunfo = styled.img`
  position: absolute;
  right: 0;
  top: 120px;
`;

export const Button = styled.button`
padding: 8px 32px;
gap: 10px;
width: 115px;
height: 40px;
background: red;
border-radius: 2px;
color: #FFFFFF;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const CardContainer = styled.div`
  font-style: italic;
  font-weight: 800;
  font-size: 28px;
  line-height: 29px;
  text-align: center;
  height: 490px;
`;

export const CardTitle = styled.h4`
  margin-bottom: 25px;
`;
