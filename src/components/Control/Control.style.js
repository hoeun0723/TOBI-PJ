import styled from 'styled-components';
import ControlBoard from '../../assets/ControlBoard.svg';

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