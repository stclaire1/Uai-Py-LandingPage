import { useMemo, useCallback } from 'react';
import { SensorData } from '@/services/uaipy-api/types';
import {
  sortSensorDataByTimestamp,
  calculateSensorStats,
  formatSensorValue,
  filterValidSensorData,
  SensorStats,
} from '@/utils/sensorDataUtils';

/**
 * Hook para transformação e processamento de dados de sensores
 */
export function useSensorData(data: SensorData[]) {
  const sortedData = useMemo(() => {
    return sortSensorDataByTimestamp(data);
  }, [data]);

  const stats = useMemo((): SensorStats | null => {
    if (sortedData.length === 0) return null;
    try {
      return calculateSensorStats(sortedData);
    } catch {
      return null;
    }
  }, [sortedData]);

  const validData = useMemo(() => {
    return filterValidSensorData(sortedData);
  }, [sortedData]);

  const formatValue = useCallback(
    (value: number, decimals: number = 1) => {
      return formatSensorValue(value, decimals);
    },
    []
  );

  return {
    sortedData,
    stats,
    validData,
    formatValue,
  };
}

