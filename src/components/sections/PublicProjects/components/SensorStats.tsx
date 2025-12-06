import { Actor } from '@/services/uaipy-api/types';
import { SensorStats as SensorStatsType } from '@/utils/sensorDataUtils';
import { formatSensorValue } from '@/utils/sensorDataUtils';

interface SensorStatsDisplayProps {
  actor: Actor;
  stats: SensorStatsType;
  variant?: 'compact' | 'detailed';
}

/**
 * Componente que renderiza estatísticas do sensor (valor atual, min, max)
 */
export function SensorStats({ actor, stats, variant = 'detailed' }: SensorStatsDisplayProps) {
  const formatValue = (value: number) => formatSensorValue(value, 1);

  if (variant === 'compact') {
    return (
      stats.latestValue && (
        <div className="text-right">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {formatValue(stats.latestValue.value)} {actor.unitOfMeasurement}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Última leitura
          </p>
        </div>
      )
    );
  }

  return (
    stats.latestValue && (
      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Valor Atual</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatValue(stats.latestValue.value)} {actor.unitOfMeasurement}
          </span>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">Mín: </span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {formatValue(stats.minValue.value)}
            </span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">Máx: </span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {formatValue(stats.maxValue.value)}
            </span>
          </div>
        </div>
      </div>
    )
  );
}

