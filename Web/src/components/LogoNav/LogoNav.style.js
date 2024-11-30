import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';

export const LogoContainer = styled.div`
  position: absolute;
  top: 60px;
  width: 400px;
  height: 120px;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`