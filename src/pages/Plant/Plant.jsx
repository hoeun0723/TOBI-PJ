import * as S from './Plant.style';
import { useEffect } from 'react';
import { usePlantContext } from '../../contexts/PlantContext.jsx';
import Plant1 from '../../assets/산세베리아.svg';
import Plant2 from '../../assets/스킨답서스.svg';
import Plant3 from '../../assets/테이블야자.svg';
import Control from '../../components/Control/Control';
import Status from '../../components/Status/Status';

function Plant() {
  const {
    plant,
    username,
    ledValue,
    setLedValue,
    isAutoMode,
    setIsAutoMode,
    plantCreationDate,
    setPlantCreationDate,
  } = usePlantContext();

  const plantImages = {
    산세베리아: Plant1,
    스킨답서스: Plant2,
    테이블야자: Plant3,
  };

  const plantImage = plantImages[plant];

  const calculateDateCount = () => {
    if (!plantCreationDate) return 0;
    const creationDate = new Date(plantCreationDate);
    const currentDate = new Date();
    const timeDiff = currentDate - creationDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  };

  const dateCount = calculateDateCount();

  useEffect(() => {
    if (!plantCreationDate) {
      setPlantCreationDate(new Date().toISOString());
    }
  }, [plantCreationDate, setPlantCreationDate]);

  return (
    <S.PlantWrapper>
      <Status ledValue={ledValue} plant={plant} username={username} />
      <S.PotContainer>
        <S.PotInfo>
          <S.Username>{username}</S.Username>
          <S.DateCount>D + {dateCount}</S.DateCount>
        </S.PotInfo>
        <S.PlantImage src={plantImage} alt={plant} />
      </S.PotContainer>
      <Control ledValue={ledValue} setLedValue={setLedValue} />
    </S.PlantWrapper>
  );
}

export default Plant;
