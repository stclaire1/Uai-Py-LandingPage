/**
 * Cores dos sensores baseadas no tipo de medição
 */
export const SENSOR_COLORS = {
  AIR_TEMPERATURE: '#ff6b6b',
  SOIL_TEMPERATURE: '#8dc9ab',
  AIR_HUMIDITY: '#b974db',
  SOIL_HUMIDITY: '#45b7d1',
  RAIN: '#feca57',
  CO2: '#95a5a6',
  PM25_PM10: '#e74c3c',
  DEFAULT: '#3b82f6',
} as const;

/**
 * Cores de status dos dispositivos
 */
export const DEVICE_STATUS_COLORS = {
  ONLINE: 'bg-green-500',
  OFFLINE: 'bg-red-500',
  DEFAULT: 'bg-gray-500',
} as const;

/**
 * Cor de fundo do container principal de projetos
 */
export const PROJECTS_CONTAINER_BG = '#000932';

