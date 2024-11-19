import styled from 'styled-components';

export const PlantWrapper = styled.div`
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
`

export const PotInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

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
`;