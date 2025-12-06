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
 * Cores de status dos dispositivos (valores hex)
 */
export const DEVICE_STATUS_COLORS_HEX = {
  ONLINE: '#067F32',
  OFFLINE: '#C41C1C',
  DEFAULT: '#6b7280',
} as const;

/**
 * Cores de status dos dispositivos (classes Tailwind)
 */
export const DEVICE_STATUS_COLORS = {
  ONLINE: 'bg-[#067F32]',
  OFFLINE: 'bg-[#C41C1C]',
  DEFAULT: 'bg-gray-500',
} as const;

/**
 * Cores de marca
 */
export const BRAND_COLORS = {
  PRIMARY: '#030820',
  PROJECTS_BG: '#000932',
} as const;

/**
 * Cores de UI (tooltips, backgrounds, etc)
 */
export const UI_COLORS = {
  TOOLTIP_BG: '#f8fafc',
  TOOLTIP_BORDER: '#e2e8f0',
  WHITE_OFF: '#FFFFFA',
  BLACK: '#000000',
} as const;

/**
 * Cores de botões
 */
export const BUTTON_COLORS = {
  YELLOW: '#FFBE2E',
  YELLOW_HOVER: '#E29C00',
} as const;

/**
 * Cor de fundo do container principal de projetos
 * @deprecated Use BRAND_COLORS.PROJECTS_BG instead
 */
export const PROJECTS_CONTAINER_BG = BRAND_COLORS.PROJECTS_BG;

