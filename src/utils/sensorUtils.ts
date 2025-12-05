import { SENSOR_COLORS, DEVICE_STATUS_COLORS } from '@/constants/colors';

/**
 * Verifica se o sensor é de precipitação (chuva)
 */
export const isPrecipitationSensor = (actorName: string): boolean => {
  return actorName.toLowerCase().includes('rain');
};

/**
 * Retorna a cor apropriada para o tipo de sensor
 */
export const getSensorColor = (actorName: string): string => {
  const lowerActorName = actorName.toLowerCase().replace(/_/g, ' ');

  if (lowerActorName.includes('air tem') || lowerActorName.includes('temperature')) {
    return SENSOR_COLORS.AIR_TEMPERATURE;
  }
  if (lowerActorName.includes('soil tem')) {
    return SENSOR_COLORS.SOIL_TEMPERATURE;
  }
  if (lowerActorName.includes('air hum') || lowerActorName.includes('humidity')) {
    return SENSOR_COLORS.AIR_HUMIDITY;
  }
  if (lowerActorName.includes('soil hum') || lowerActorName.includes('moisture')) {
    return SENSOR_COLORS.SOIL_HUMIDITY;
  }
  if (lowerActorName.includes('rain')) {
    return SENSOR_COLORS.RAIN;
  }
  if (lowerActorName.includes('co2')) {
    return SENSOR_COLORS.CO2;
  }
  if (lowerActorName.includes('pm25') || lowerActorName.includes('pm10')) {
    return SENSOR_COLORS.PM25_PM10;
  }

  return SENSOR_COLORS.DEFAULT;
};

/**
 * Retorna a classe CSS para a cor de status do dispositivo
 */
export const getDeviceStatusColor = (status: string): string => {
  const normalizedStatus = status.toLowerCase();
  
  switch (normalizedStatus) {
    case 'online':
      return DEVICE_STATUS_COLORS.ONLINE;
    case 'offline':
      return DEVICE_STATUS_COLORS.OFFLINE;
    default:
      return DEVICE_STATUS_COLORS.DEFAULT;
  }
};

