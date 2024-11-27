import React, { createContext, useState, useContext } from 'react';

const PlantContext = createContext();

export const usePlantContext = () => useContext(PlantContext);

export const PlantProvider = ({ children }) => {
  const [plant, setPlant] = useState('산세베리아'); 
  const [username, setUsername] = useState('토비'); 
  const [ledValue, setLedValue] = useState(0); 
  const [isAutoMode, setIsAutoMode] = useState(false); 
  const [plantCreationDate, setPlantCreationDate] = useState(null); 

  const value = {
    plant,
    setPlant,
    username,
    setUsername,
    ledValue,
    setLedValue,
    isAutoMode,
    setIsAutoMode,
    plantCreationDate,
    setPlantCreationDate,
  };

  return <PlantContext.Provider value={value}>{children}</PlantContext.Provider>;
};
