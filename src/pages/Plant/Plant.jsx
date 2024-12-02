import * as S from './Plant.style';
import { useEffect, useState } from 'react';
import { usePlantContext } from '../../contexts/PlantContext.jsx';
import Plant1 from '../../assets/산세베리아.svg';
import Plant2 from '../../assets/스킨답서스.svg';
import Plant3 from '../../assets/테이블야자.svg';
import Control from '../../components/Control/Control';
import Status from '../../components/Status/Status';

function Plant() {
  const {
    id,
    plantName,
    led,
    setLed,
    mode,
    setMode,
    humidity,
    brightness,
    plantNameUpdatedAt,
    setPlantNameUpdatedAt,
    fetchPlantData,
    updatePlantData,
  } = usePlantContext();

  const plantImages = {
    산세베리아: Plant1,
    스킨답서스: Plant2,
    테이블야자: Plant3,
  };

  const plantImage = plantImages[id];

  const calculateDateCount = () => {
    if (!plantNameUpdatedAt) return 0;
    const creationDate = new Date(plantNameUpdatedAt);
    const currentDate = new Date();
    const timeDiff = currentDate - creationDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  };

  const dateCount = calculateDateCount();

  useEffect(() => {
    fetchPlantData(); // /plant로 이동시 요청
  }, [fetchPlantData]);

  useEffect(() => {
    if (!plantNameUpdatedAt) {
      const now = new Date().toISOString();
      setPlantNameUpdatedAt(now);
      updatePlantData({ plantNameUpdatedAt: now });
    }
  }, [plantNameUpdatedAt, setPlantNameUpdatedAt, updatePlantData]);

  const [messages, setMessages] = useState([]);
  const messageTexts = [
    '만나서 반가워요!',
    '77분 전에 물을 줬어요.',
    '산소 만드는 중 🎵',
    '오늘 하루는 어떠셨나요?',
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  const handlePlantClick = () => {
    setMessages((prev) => {
      const newMessages = [...prev];
      if (newMessages.length >= 3) newMessages.shift();
      newMessages.push({
        id: Date.now(),
        text: messageTexts[messageIndex],
      });
      return newMessages;
    });
    setMessageIndex((prevIndex) => (prevIndex + 1) % messageTexts.length);
  };

  useEffect(() => {
    const timers = messages.map((message) =>
      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== message.id));
      }, 5000)
    );
    return () => timers.forEach(clearTimeout);
  }, [messages]);

  return (
    <S.PlantWrapper>
      <Status ledValue={led} plant={id} username={plantName} />
      <S.PotContainer>
        <S.PotInfo>
          <S.Username>{plantName}</S.Username>
          <S.DateCount>D + {dateCount}</S.DateCount>
        </S.PotInfo>
        <S.PlantImage src={plantImage} alt={id} onClick={handlePlantClick} />
      </S.PotContainer>
      <S.IconsContainer>
        <S.TipContainer>
          <S.TipIcon /> Tip !
        </S.TipContainer>
        <S.DeathContainer>
          <S.DeathIcon /> 식물이 시들었어요
        </S.DeathContainer>
      </S.IconsContainer>
      <Control ledValue={led} setLed={setLed} />
      <S.MessageContainer>
        {messages.map((message) => (
          <S.MessageBubble key={message.id} isVisible>
            <S.Message>{message.text}</S.Message>
          </S.MessageBubble>
        ))}
      </S.MessageContainer>
    </S.PlantWrapper>
  );
}

export default Plant;
