import * as S from './Status.style';
import ledIcon from '../../assets/led.png';
import soilIcon from '../../assets/soil.png';
import sunIcon from '../../assets/sun.png';
import waterIcon from '../../assets/water.png';

function Status () {
  return (
    <S.StatusContainer>
      <S.Container>
        <S.Status>
          <S.StatusIcon imageUrl={waterIcon}/>
          <S.StatusTitle>토양습도:</S.StatusTitle>
          <S.StatusFigure>50%</S.StatusFigure>
        </S.Status>
        <S.Status>
          <S.StatusIcon imageUrl={soilIcon}/>
          <S.StatusTitle>토양온도:</S.StatusTitle>
          <S.StatusFigure>22°C</S.StatusFigure>
        </S.Status>
        <S.Status>
          <S.StatusIcon imageUrl={sunIcon}/>
          <S.StatusTitle>햇빛:</S.StatusTitle>
          <S.StatusFigureStrong>강함</S.StatusFigureStrong>
        </S.Status>
        <S.Status>
          <S.StatusIcon imageUrl={ledIcon}/>
          <S.StatusTitle>LED:</S.StatusTitle>
          <S.StatusFigureStrong>5단계</S.StatusFigureStrong>
        </S.Status>
      </S.Container>
      <S.Container2>
        <S.Title>나의 식물 종류</S.Title>
        <S.PlantName>산세베리아</S.PlantName>
      </S.Container2>
    </S.StatusContainer>
  )
}

export default Status;