import styled from 'styled-components';
import ControlBoard from '../../assets/ControlBoard.svg';
import SwitchAuto from '../../assets/Switch_auto.svg';
import SwitchIot from '../../assets/Switch_iot.svg';
import ButtonOn from '../../assets/Btn_pressed.svg';
import ButtonOff from '../../assets/Btn_default.svg';
import LedSteps from '../../assets/Steps.png';

export const ControlContainer = styled.div`
  position: fixed;
  align-items: center;
  bottom: 0px;
  width: 1200px;
  height: 252px;
  background-image: url(${ControlBoard});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`

export const ModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModeTitle = styled.div`
  width: 151px;
  height: 40px;
  color: #1FAA67;
  text-align: center;
  font-size: 32px;
  font-weight: 900;
  margin-top: 45px;
`

export const ModeToggle = styled.div`
  position: absolute;
  top: 110px;
  left: 530px;
  width: 151px;
  height: 40px;
  color: #8A88FF;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Toggle = styled.div`
  width: 44px;
  height: 24px;
  background-image: url(${SwitchIot});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ModeExplain1 = styled.div`
  position: absolute;
  bottom: 60px;
  left: 530px;
  color: #FFFFFF;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  strong {
    font-weight: 700;
  }
`;

export const ModeExplain2 = styled.div`
  position: absolute;
  bottom: 25px;
  left: 530px;
  color: #FFFFFF;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  strong {
    font-weight: 700;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Buttons1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  right: 140px;
  top: 48px;
`;

export const Buttons2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  right: 140px;
  top: 93px;
`;

export const ButtonName = styled.div`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
`;

export const Button = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${ButtonOff});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LedTitle = styled.div`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  left: 100px;
  top: 48px;
`;

export const LedSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  position: absolute;
  left: 20px;
  top: 114px;
`;

export const LedSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 300px;
  height: 4px;
  background: linear-gradient(to right, #1A1A1A ${(props) => props.value}%, #1FAA67 ${(props) => props.value}%);
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #ffffff;
    border: 2px solid #1FAA67;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 2px solid #000000;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const SliderLabel = styled.div`
  color: #1FAA67;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 240px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SliderSteps = styled.div`
  background-image: url(${LedSteps});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 50px;
  position: absolute;
  top: 22px;
  left: 101px;
  pointer-events: none;
`;

export const ButtonMessage = styled.div`
  color: #93E2C2;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  position: absolute;
  right: 120px;
  bottom: 284px;
`;