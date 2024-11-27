import * as S from './Status.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ledIcon from '../../assets/led.png';
import soilIcon from '../../assets/soil.png';
import sunIcon from '../../assets/sun.png';
import waterIcon from '../../assets/water.png';

function Status({ ledValue, plant, username }) {
  const waterFigure = '55';
  const soilFigure = '55';
  const sunFigure = 'high';

  const ledFigure = Math.min(10, Math.floor(ledValue / 10) + 1);

  return (
    <S.StatusContainer>
      <S.Container>
        <S.Status>
          <S.StatusIcon imageUrl={waterIcon}/>
          <S.StatusTitle>토양습도:</S.StatusTitle>
          <S.StatusFigure>{waterFigure}%</S.StatusFigure>
        </S.Status>
        <S.Status>
          <S.StatusIcon imageUrl={soilIcon}/>
          <S.StatusTitle>토양온도:</S.StatusTitle>
          <S.StatusFigure>{soilFigure}°C</S.StatusFigure>
        </S.Status>
        <S.Status>
          <S.StatusIcon imageUrl={sunIcon}/>
          <S.StatusTitle>햇빛:</S.StatusTitle>
          <S.StatusFigureStrong>{sunFigure}</S.StatusFigureStrong>
        </S.Status>
        <S.Status>
          <S.StatusIcon imageUrl={ledIcon}/>
          <S.StatusTitle>LED:</S.StatusTitle>
          <S.StatusFigureStrong>{ledFigure}단계</S.StatusFigureStrong>
        </S.Status>
      </S.Container>
      <S.Container2>
        <S.Title>나의 식물 종류</S.Title>
        <S.PlantName>{plant}</S.PlantName>
      </S.Container2>
    </S.StatusContainer>
  );
}

export default Status;
