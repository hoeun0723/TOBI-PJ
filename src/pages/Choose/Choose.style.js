import styled from 'styled-components';

export const ChooseWrapper = styled.div`
  font-family: Pretendard;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 660px;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  margin-top: 229px;
`;

export const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

export const InfoMessage = styled.div`
  color: #8A88FF;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
`;

export const PlantChoices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 200px;
  margin-top: 100px;
`;

export const PlantCard = styled.div`
  width: 200px;
  height: 383.681px;
  cursor: pointer;
  position: relative; 
  margin-top: 0;

  img {
    width: 100%;
    height: 100%;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover img {
    opacity: 0.2; 
  }

  &:hover > div {
    display: flex;
  }
`;

export const PlantName = styled.div`
  display: none;
  justify-items: center;
  position: absolute;
  top: 105px;
  left: 50%;
  width: 200px;
  transform: translate(-50%, -50%);
  color: #FFF;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  z-index: 10;

  ${PlantCard}:hover & {
    display: block;
  }
`;

export const PlantInfo = styled.div`
  display: none;
  gap: 20px;
  flex-direction: column;
  position: absolute;
  top: 290px;
  left: 50%;
  width: 200px;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const Info = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`