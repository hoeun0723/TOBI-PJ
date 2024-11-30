import styled from 'styled-components';

export const NameWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: auto; 
  opacity: 0.2;
  transform: translate(-50%, -50%);
  z-index: -0.5;
  pointer-events: none;
`;

export const InfoContainer = styled.div`
  width: 660px;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 229px;
  z-index: 1;
`;

export const InfoMessage = styled.div`
  color: #8A88FF;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
`;

export const NameInput = styled.input`
  display: flex;
  margin-top: 120px;
  background-color: #FFF;
  width: 400px;
  height: 86px;
  border: none;
  border-radius: 999px;
  outline: none;
  color: #000000;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  z-index: 1;
  &::placeholder {
    color: #000000;
    opacity: 0.5; 
  }
`