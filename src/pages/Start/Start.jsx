import * as S from './Start.style';
import Credits from '../../components/Credits/Credits';

function Start () {
    return (
        <S.StartWrapper>
          <Credits/>
          <S.IntroContainer>
            온오프라인으로 함께하는 나의 반려 식물
          </S.IntroContainer>
          <S.TitleContainer>
            <S.EngTitle>
              TO-BI
            </S.EngTitle>
            <S.KorTitle>
              토-비
            </S.KorTitle>
          </S.TitleContainer>
        </S.StartWrapper>
    )
}

export default Start;