import styled from 'styled-components';
import StatBoard from '../../assets/StatBoard.svg';

export const StatusContainer = styled.div`
  position: fixed;
  align-items: center;
  top: 35px;
  left: 80px;
  width: 325px;
  height: 464px;
  background-image: url(${StatBoard});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
`