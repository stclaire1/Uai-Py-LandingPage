import { Device, Actor } from '@/services/uaipy-api/types';
import { getDeviceStatusColor } from '@/utils/sensorUtils';
import { Activity } from 'lucide-react';

interface SensorHeaderProps {
  device: Device;
  actor: Actor;
  variant?: 'compact' | 'detailed';
}

/**
 * Componente que renderiza o header com informações do sensor e dispositivo
 */
export function SensorHeader({ device, actor, variant = 'detailed' }: SensorHeaderProps) {
  if (variant === 'compact') {
    return (
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">
          {actor.actorName}
        </h4>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {device.deviceName}
          </span>
          <span className={`h-2 w-2 rounded-full ${getDeviceStatusColor(device.status)}`} />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {device.status}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-between mb-2">
      <div className="flex-1">
        <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
          {actor.actorName}
        </h4>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Activity className="h-4 w-4" />
          <span>{device.deviceName}</span>
          <span className={`h-2 w-2 rounded-full ${getDeviceStatusColor(device.status)}`} />
          <span className="capitalize">{device.status}</span>
        </div>
      </div>
    </div>
  );
}

