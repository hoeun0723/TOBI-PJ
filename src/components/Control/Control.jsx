import * as S from './Control.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Control({ ledValue, setLedValue }) {
  const [buttonState, setButtonState] = useState({ isWatering: false, isRefreshing: false });
  const [buttonMessage, setButtonMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false); 

  const handleSliderChange = (e) => {
    if (isAutoMode) return; 
    setLedValue(parseInt(e.target.value, 10));
  };

  const handleButtonClick = (type) => {
    if (isAutoMode) return;

    if (type === 'water') {
      setButtonState({ ...buttonState, isWatering: true });
      setButtonMessage('물 주는 중 ...');
    } else if (type === 'refresh') {
      setButtonState({ ...buttonState, isRefreshing: true });
      setButtonMessage('살펴보는 중 ...');
    }

    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
      setTimeout(() => {
        setButtonState({ isWatering: false, isRefreshing: false });
        setButtonMessage('');
      }, 500);
    }, 3000);
  };

  const toggleMode = () => {
    setIsAutoMode((prevMode) => !prevMode); 
  };

  return (
    <S.ControlContainer>
      <S.ModeContainer>
        <S.ModeTitle>{isAutoMode ? 'AuTo MODE' : 'IoT MODE'}</S.ModeTitle>
        <S.ModeToggle>
          모드 변경
          <S.Toggle isAutoMode={isAutoMode} onClick={toggleMode} />
        </S.ModeToggle>
        <S.ModeExplain1>
          <strong>IoT MODE:</strong> 원격으로 직접 내 식물 관리가 가능해요.
        </S.ModeExplain1>
        <S.ModeExplain2>
          <strong>AutoTobi MODE:</strong> 시스템이 자동으로 최적화된 식물 관리를 해줘요.
        </S.ModeExplain2>
      </S.ModeContainer>
      <S.ButtonsContainer>
        <S.Buttons1>
          <S.ButtonName isAutoMode={isAutoMode}>물주기</S.ButtonName>
          <S.Button
            isActive={buttonState.isWatering}
            onClick={() => handleButtonClick('water')}
            isDisabled={isAutoMode}
          />
        </S.Buttons1>
        <S.Buttons2>
          <S.ButtonName isAutoMode={isAutoMode}>상태 새로고침</S.ButtonName>
          <S.Button
            isActive={buttonState.isRefreshing}
            onClick={() => handleButtonClick('refresh')}
            isDisabled={isAutoMode}
          />
        </S.Buttons2>
      </S.ButtonsContainer>
      <S.LedContainer>
        <S.LedTitle isAutoMode={isAutoMode}>LED 조명 조절</S.LedTitle>
        <S.LedSliderContainer>
          <S.LabelContainer>
            <S.SliderLabel>조명 끔</S.SliderLabel>
            <S.SliderLabel>조명 최대</S.SliderLabel>
          </S.LabelContainer>
          <S.LedSlider
            type="range"
            min="0"
            max="100"
            step="1"
            value={ledValue}
            onChange={handleSliderChange}
            isDisabled={isAutoMode}
          />
          <S.SliderSteps />
        </S.LedSliderContainer>
      </S.LedContainer>
      {buttonMessage && <S.ButtonMessage isVisible={isMessageVisible}>{buttonMessage}</S.ButtonMessage>}
    </S.ControlContainer>
  );
}

export default Control;
