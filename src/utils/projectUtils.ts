import { PublicProject, Device, Actor } from '@/services/uaipy-api/types';

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

/**
 * Extrai todos os atores (sensores) de um projeto que possuem dados
 */
export function extractAllActors(
  project: PublicProject
): Array<{ device: Device; actor: Actor }> {
  if (!project?.devices) return [];
  
  const actors: Array<{ device: Device; actor: Actor }> = [];
  project.devices.forEach(device => {
    device.actors.forEach(actor => {
      if (actor.data && actor.data.length > 0) {
        actors.push({ device, actor });
      }
    });
  });
  return actors;
}

