import styled from 'styled-components';
import StatBoard from '../../assets/StatBoard.svg';

export const StatusContainer = styled.div`
  font-family: Pretendard;
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

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 70px;
  margin-left: 5px;
`

export const Container2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`

export const Title = styled.div`
  color: #000000;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PlantName = styled.div`
  color: #1FAA67;
  font-size: 32px;
  font-weight: 700;
  margin-top: 10px;
`

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  width: 248px;
  height: 48px;
  align-items: center;
  justify-content: center;
`

export const StatusIcon = styled.div`
  width: 48px; 
  height: 48px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  position: absolute;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StatusTitle = styled.div`
  height: 48px;
  color: #000000;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  position: relative;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StatusFigure = styled.div`
  height: 48px;
  color: #000000;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  position: relative;
  left: 10px;
`

export const StatusFigureStrong = styled.div`
  height: 48px;
  color: #000000;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  position: relative;
  left: 10px;
`