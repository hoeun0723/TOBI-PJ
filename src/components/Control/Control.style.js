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