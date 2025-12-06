import { PublicProject } from '@/services/uaipy-api/types';

/**
 * Calcula o total de sensores em um projeto
 */
export const getTotalSensors = (project: PublicProject): number => {
  return project.devices.reduce((total, device) => total + device.actors.length, 0);
};

/**
 * Calcula o total de dispositivos em um projeto
 */
export const getTotalDevices = (project: PublicProject): number => {
  return project.devices.length;
};

