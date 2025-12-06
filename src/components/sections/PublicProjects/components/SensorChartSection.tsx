import { Actor } from '@/services/uaipy-api/types';
import { SensorStats } from '@/utils/sensorDataUtils';
import { CustomChart } from '@/components/ui/CustomChart';
import { SensorChartSwitcher } from '@/components/ui/SensorChartSwitcher';
import { getSensorColor, isPrecipitationSensor } from '@/utils/sensorUtils';
import { SensorData } from '@/services/uaipy-api/types';

interface SensorChartSectionProps {
  actor: Actor;
  stats: SensorStats;
  validData: SensorData[];
  chartType: 'line' | 'bar';
  onChartTypeChange: (type: 'line' | 'bar') => void;
  variant?: 'compact' | 'detailed';
}

/**
 * Componente que renderiza a seção do gráfico com switcher
 */
export function SensorChartSection({
  actor,
  stats,
  validData,
  chartType,
  onChartTypeChange,
  variant = 'detailed',
}: SensorChartSectionProps) {
  const isPrecipitation = isPrecipitationSensor(actor.actorName);
  const marginTop = variant === 'compact' ? 'mt-2' : 'mt-6';

  return (
    <>
      <SensorChartSwitcher
        chartType={chartType}
        onChange={onChartTypeChange}
        onlyBar={isPrecipitation}
      />
      <div className={marginTop}>
        <CustomChart
          data={validData}
          chartType={chartType}
          xKey="timestamp"
          yKey="value"
          legendName={actor.actorName}
          unit={variant === 'compact' ? actor.unitOfMeasurement : actor.unitOfMeasurement || ''}
          dataMin={stats.min}
          dataMax={stats.max}
          color={getSensorColor(actor.actorName)}
        />
      </div>
    </>
  );
}

