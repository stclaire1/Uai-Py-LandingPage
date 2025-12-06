import { SensorData } from '@/services/uaipy-api/types';

/**
 * Interface para estatísticas calculadas de dados de sensores
 */
export interface SensorStats {
  min: number;
  max: number;
  minValue: SensorData;
  maxValue: SensorData;
  latestValue: SensorData | null;
}

/**
 * Ordena dados de sensores por timestamp (crescente)
 */
export function sortSensorDataByTimestamp(data: SensorData[]): SensorData[] {
  return [...data].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
}

/**
 * Calcula estatísticas de dados de sensores (min, max, latest)
 */
export function calculateSensorStats(data: SensorData[]): SensorStats {
  if (data.length === 0) {
    throw new Error('Dados de sensores não podem estar vazios');
  }

  const sortedData = sortSensorDataByTimestamp(data);
  const values = sortedData.map(d => d.value);
  
  const dataMin = values.length > 0 ? Math.min(...values) : 0;
  const dataMax = values.length > 0 ? Math.max(...values) : 0;
  
  const latestValue = sortedData[sortedData.length - 1];
  const minValue = sortedData.find(d => d.value === dataMin) || sortedData[0];
  const maxValue = sortedData.find(d => d.value === dataMax) || sortedData[0];

  return {
    min: dataMin,
    max: dataMax,
    minValue,
    maxValue,
    latestValue,
  };
}

/**
 * Formata um valor numérico com número específico de casas decimais
 */
export function formatSensorValue(value: number, decimals: number = 1): string {
  if (typeof value !== 'number' || isNaN(value)) {
    return String(value);
  }
  return value.toFixed(decimals);
}

/**
 * Filtra dados de sensores válidos (remove valores inválidos)
 */
export function filterValidSensorData(data: SensorData[]): SensorData[] {
  return data.filter(
    d => d && typeof d.value === 'number' && !isNaN(d.value)
  );
}

