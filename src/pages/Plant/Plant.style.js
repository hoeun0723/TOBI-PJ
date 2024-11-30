import styled, { keyframes, css } from 'styled-components';
import bubble from '../../assets/messageBg.svg';
import Death from '../../assets/Deathicon.svg';
import Tip from '../../assets/Tipicon.svg';

export const IconsContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 53px;
  display: flex;
  flex-direction: row;
  gap: 45px;
  align-items: center;
  justify-content: center;
`;

export const DeathContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #FFFFFF;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;

export const DeathIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Death});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TipContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #FFFFFF;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;

export const TipIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Tip});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PlantWrapper = styled.div`
  font-family: Pretendard;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PotContainer = styled.div`
  position: absolute;
  top: 70px;
  display: flex;
  flex-direction: column;

`;

export const PotInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Username = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 40px;
`;

export const DateCount = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
`;

export const PlantImage = styled.img`
  width: 200px;
  height: auto;
  justify-content: center;
  cursor: pointer;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 150px;
  right: 90px;
  gap: 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const MessageBubble = styled.div`
  background-image: url(${bubble});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 375px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1A1A1A;
  text-align: center;
  font-size: 32px;
  font-weight: 700;

  ${(props) =>
    props.isVisible
      ? css`
          animation: ${fadeIn} 0.5s forwards, ${fadeOut} 0.5s 4.5s forwards;
        `
      : css`
          display: none;
        `}
`;

export const Message = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
