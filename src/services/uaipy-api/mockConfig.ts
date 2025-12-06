/**
 * Configurações para os dados mockados
 * 
 * Centraliza os valores de variação, mínimos e máximos usados
 * na geração de dados simulados de sensores
 */

export interface SensorConfig {
  variation: number;
  minValue: number;
  maxValue: number;
}

export interface StationSensorConfig {
  urban?: SensorConfig;
  rural?: SensorConfig;
  mountain?: SensorConfig;
  default?: SensorConfig;
}

/**
 * Configurações de sensores por tipo e estação
 */
export const SENSOR_CONFIGS: Record<string, StationSensorConfig | SensorConfig> = {
  'Temperatura do Ar': {
    urban: { variation: 2.5, minValue: 25, maxValue: 32 },
    rural: { variation: 3, minValue: 20, maxValue: 28 },
    mountain: { variation: 4, minValue: 13, maxValue: 23 },
  },
  'Temperatura do Solo': {
    variation: 1.5,
    minValue: 20,
    maxValue: 25,
  },
  'Umidade do Ar': {
    urban: { variation: 8, minValue: 55, maxValue: 75 },
    rural: { variation: 8, minValue: 65, maxValue: 85 },
    mountain: { variation: 8, minValue: 75, maxValue: 95 },
  },
  'Umidade do Solo': {
    variation: 4,
    minValue: 40,
    maxValue: 50,
  },
  'Precipitação': {
    urban: { variation: 1.5, minValue: 0, maxValue: 3 },
    rural: { variation: 1.5, minValue: 0, maxValue: 3 },
    mountain: { variation: 1.5, minValue: 0, maxValue: 5 },
  },
  'Pressão Atmosférica': {
    variation: 12,
    minValue: 835,
    maxValue: 865,
  },
};

/**
 * Mapeamento de projectId para tipo de estação
 */
export const STATION_TYPES: Record<string, 'urban' | 'rural' | 'mountain'> = {
  'station-001': 'urban',
  'station-002': 'rural',
  'station-003': 'mountain',
};

/**
 * Obtém a configuração de um sensor baseado no nome e tipo de estação
 */
export function getSensorConfig(
  actorName: string,
  projectId: string
): SensorConfig {
  const config = SENSOR_CONFIGS[actorName];
  const stationType = STATION_TYPES[projectId];

  if (!config) {
    return { variation: 5, minValue: 0, maxValue: 100 };
  }

  if ('urban' in config || 'rural' in config || 'mountain' in config) {
    const stationConfig = config as StationSensorConfig;
    const stationSpecific = stationType ? stationConfig[stationType] : undefined;
    
    if (stationSpecific) {
      return stationSpecific;
    }
    
    if (stationConfig.default) {
      return stationConfig.default;
    }
  }

  return config as SensorConfig;
}

/**
 * Intervalo padrão entre leituras de sensores (em milissegundos)
 */
export const SENSOR_READING_INTERVAL_MS = 60000; // 1 minuto

/**
 * Número padrão de pontos de dados mantidos por sensor
 */
export const DEFAULT_DATA_POINTS = 20;
