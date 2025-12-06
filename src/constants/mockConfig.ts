/**
 * Configurações para os mocks de dados
 */

export const MOCK_CONFIG = {
  // Intervalo entre leituras de sensores (em milissegundos)
  SENSOR_READING_INTERVAL_MS: 60000, // 1 minuto
  
  // Número padrão de pontos de dados por sensor
  DEFAULT_DATA_POINTS: 20,
  
  // Número máximo de pontos de dados mantidos
  MAX_DATA_POINTS: 20,
  
  // Variações padrão para diferentes tipos de sensores
  SENSOR_VARIATIONS: {
    AIR_TEMPERATURE: {
      URBAN: 2.5,
      RURAL: 3,
      MOUNTAIN: 4,
    },
    SOIL_TEMPERATURE: 1.5,
    AIR_HUMIDITY: 8,
    SOIL_HUMIDITY: 4,
    PRECIPITATION: 1.5,
    PRESSURE: 12,
    DEFAULT: 5,
  },
  
  // Valores mínimos e máximos por tipo de sensor e estação
  SENSOR_RANGES: {
    AIR_TEMPERATURE: {
      URBAN: { min: 25, max: 32 },
      RURAL: { min: 20, max: 28 },
      MOUNTAIN: { min: 13, max: 23 },
    },
    SOIL_TEMPERATURE: { min: 20, max: 25 },
    AIR_HUMIDITY: {
      URBAN: { min: 55, max: 75 },
      RURAL: { min: 65, max: 85 },
      MOUNTAIN: { min: 75, max: 95 },
    },
    SOIL_HUMIDITY: { min: 40, max: 50 },
    PRECIPITATION: {
      URBAN: { min: 0, max: 3 },
      RURAL: { min: 0, max: 3 },
      MOUNTAIN: { min: 0, max: 5 },
    },
    PRESSURE: { min: 835, max: 865 },
  },
  
  // Tendência suave para variação de valores
  TREND_FACTOR: 0.3,
  
  // Precisão decimal para valores
  DECIMAL_PLACES: 1,
} as const;

