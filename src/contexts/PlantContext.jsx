import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const PlantContext = createContext();

export const usePlantContext = () => useContext(PlantContext);

export const PlantProvider = ({ children }) => {
  const baseURL = import.meta.env.VITE_APP_SERVER_BASE_URL;

  const [latestData, setLatestData] = useState({});
  const [id, setId] = useState(null);
  const [plantName, setPlantName] = useState("");
  const [led, setLed] = useState(1);
  const [mode, setMode] = useState("manual");
  const [humidity, setHumidity] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [pump, setPump] = useState(false);
  const [timestamps, setTimestamps] = useState({
    plantNameUpdatedAt: null,
    humidityUpdatedAt: null,
    ledUpdatedAt: null,
    pumpUpdatedAt: null,
    brightnessUpdatedAt: null,
  });

  const fetchPlantData = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/api/datas`);
      setLatestData(data);
      setId(data.id);
      setPlantName(data.plantName);
      setLed(data.led);
      setMode(data.mode);
      setHumidity(data.humidity);
      setBrightness(data.brightness);
      setPump(data.pump);
      setTimestamps({
        plantNameUpdatedAt: data.plantNameUpdatedAt,
        humidityUpdatedAt: data.humidityUpdatedAt,
        ledUpdatedAt: data.ledUpdatedAt,
        pumpUpdatedAt: data.pumpUpdatedAt,
        brightnessUpdatedAt: data.brightnessUpdatedAt,
      });
    } catch (error) {
      console.error("Error fetching plant data:", error);
    }
  };

  const updatePlantData = async (updatedData) => {
    const currentTime = new Date().toISOString();

    const requestData = {
      id: latestData.id || id,
      mode: updatedData.mode || latestData.mode || mode,
      humidity: latestData.humidity || humidity,
      humidityUpdatedAt:
        updatedData.humidityUpdatedAt ||
        latestData.humidityUpdatedAt ||
        timestamps.humidityUpdatedAt ||
        currentTime,
      led: updatedData.led || latestData.led || led,
      ledUpdatedAt:
        updatedData.ledUpdatedAt ||
        latestData.ledUpdatedAt ||
        timestamps.ledUpdatedAt ||
        currentTime,
      pump:
        updatedData.pump !== undefined
          ? updatedData.pump
          : latestData.pump || pump,
      pumpUpdatedAt:
        updatedData.pumpUpdatedAt ||
        latestData.pumpUpdatedAt ||
        timestamps.pumpUpdatedAt ||
        currentTime,
      brightness: latestData.brightness || brightness,
      brightnessUpdatedAt:
        updatedData.brightnessUpdatedAt ||
        latestData.brightnessUpdatedAt ||
        timestamps.brightnessUpdatedAt ||
        currentTime,
      plantName: updatedData.plantName || latestData.plantName || plantName,
      plantNameUpdatedAt:
        updatedData.plantNameUpdatedAt ||
        latestData.plantNameUpdatedAt ||
        timestamps.plantNameUpdatedAt ||
        currentTime,
    };

    try {
      await axios.post(`${baseURL}/api/datas`, requestData);
      setLatestData(requestData);
      setTimestamps({
        plantNameUpdatedAt: requestData.plantNameUpdatedAt,
        humidityUpdatedAt: requestData.humidityUpdatedAt,
        ledUpdatedAt: requestData.ledUpdatedAt,
        pumpUpdatedAt: requestData.pumpUpdatedAt,
        brightnessUpdatedAt: requestData.brightnessUpdatedAt,
      });
    } catch (error) {
      console.error("Error updating plant data:", error);
    }
  };

  const value = {
    id,
    setId,
    plantName,
    setPlantName,
    led,
    setLed,
    mode,
    setMode,
    humidity,
    brightness,
    pump,
    fetchPlantData,
    updatePlantData,
    plantNameUpdatedAt: timestamps.plantNameUpdatedAt, 
    setPlantNameUpdatedAt: (updatedAt) =>
      setTimestamps((prev) => ({
        ...prev,
        plantNameUpdatedAt: updatedAt,
      })),
  };

  return <PlantContext.Provider value={value}>{children}</PlantContext.Provider>;
};
