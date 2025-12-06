import { Device, Actor } from '@/services/uaipy-api/types';
import { useState } from 'react';
import { isPrecipitationSensor } from '@/utils/sensorUtils';
import { useSensorData } from '@/hooks/useSensorData';
import { SensorHeader } from './SensorHeader';
import { SensorStats } from './SensorStats';
import { SensorChartSection } from './SensorChartSection';

interface SensorChartCardProps {
  device: Device;
  actor: Actor;
  variant?: 'compact' | 'detailed';
  chartType?: 'line' | 'bar';
  onChartTypeChange?: (type: 'line' | 'bar') => void;
}

/**
 * Componente que encapsula a lógica de renderização de gráfico de sensor
 * Usa o hook useSensorData para processar dados e calcular estatísticas
 */
export function SensorChartCard({
  device,
  actor,
  variant = 'detailed',
  chartType: controlledChartType,
  onChartTypeChange,
}: SensorChartCardProps) {
  const [internalChartType, setInternalChartType] = useState<'line' | 'bar'>('line');
  const isPrecipitation = isPrecipitationSensor(actor.actorName);
  const chartType = controlledChartType ?? (isPrecipitation ? 'bar' : internalChartType);
  const { stats, validData } = useSensorData(actor.data);
  
  if (!stats || validData.length === 0) {
    return null;
  }
  
  const handleChartTypeChange = (type: 'line' | 'bar') => {
    if (onChartTypeChange) {
      onChartTypeChange(type);
    } else {
      setInternalChartType(type);
    }
  };
  
  if (variant === 'compact') {
    return (
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <SensorHeader device={device} actor={actor} variant="compact" />
          <SensorStats actor={actor} stats={stats} variant="compact" />
        </div>
        <SensorChartSection
          actor={actor}
          stats={stats}
          validData={validData}
          chartType={chartType}
          onChartTypeChange={handleChartTypeChange}
          variant="compact"
        />
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
      <div className="mb-6">
        <SensorHeader device={device} actor={actor} variant="detailed" />
        <SensorStats actor={actor} stats={stats} variant="detailed" />
      </div>
      <SensorChartSection
        actor={actor}
        stats={stats}
        validData={validData}
        chartType={chartType}
        onChartTypeChange={handleChartTypeChange}
        variant="detailed"
      />
    </div>
  );
}

