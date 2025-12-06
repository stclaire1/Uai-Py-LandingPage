import { PublicProjectsResponse, ProjectDataResponse, SensorData, PublicProject } from './types';
import type { Device, Actor } from './types';
import { getSensorConfig, SENSOR_READING_INTERVAL_MS, DEFAULT_DATA_POINTS } from './mockConfig';

function generateSensorData(
    baseValue: number,
    variation: number,
    count: number = DEFAULT_DATA_POINTS
): SensorData[] {
    const data: SensorData[] = [];
    const now = new Date();
    
    for (let i = count - 1; i >= 0; i--) {
        const timestamp = new Date(now.getTime() - i * SENSOR_READING_INTERVAL_MS);
        const randomVariation = (Math.random() - 0.5) * variation;
        const value = baseValue + randomVariation;
        
        data.push({
            id: `sensor-${timestamp.getTime()}`,
            value: Math.round(value * 10) / 10, // 1 casa decimal
            timestamp: timestamp.toISOString()
        });
    }
    
    return data;
}

const station1: PublicProjectsResponse = {
    success: true,
    data: {
        projects: [
            {
                projectId: 'station-001',
                projectName: 'Estação Meteorológica Urbana',
                devices: [
                    {
                        deviceId: 'device-001',
                        deviceName: 'Sensor Principal',
                        serialNumber: 'SN-URB-001',
                        deviceType: 'Weather Station',
                        status: 'online',
                        actors: [
                            {
                                actorId: 'temp-air-001',
                                actorName: 'Temperatura do Ar',
                                unitOfMeasurement: '°C',
                                data: generateSensorData(28.5, 3, 20)
                            },
                            {
                                actorId: 'humidity-air-001',
                                actorName: 'Umidade do Ar',
                                unitOfMeasurement: '%',
                                data: generateSensorData(65, 10, 20)
                            },
                            {
                                actorId: 'rain-001',
                                actorName: 'Precipitação',
                                unitOfMeasurement: 'mm',
                                data: generateSensorData(0, 2, 20)
                            }
                        ]
                    }
                ]
            }
        ],
        total: 1
    },
    timestamp: new Date().toISOString()
};

const station2: PublicProjectsResponse = {
    success: true,
    data: {
        projects: [
            {
                projectId: 'station-002',
                projectName: 'Estação Meteorológica Rural',
                devices: [
                    {
                        deviceId: 'device-002',
                        deviceName: 'Sensor Agrícola',
                        serialNumber: 'SN-RUR-002',
                        deviceType: 'Agricultural Station',
                        status: 'online',
                        actors: [
                            {
                                actorId: 'temp-air-002',
                                actorName: 'Temperatura do Ar',
                                unitOfMeasurement: '°C',
                                data: generateSensorData(24.0, 4, 20)
                            },
                            {
                                actorId: 'temp-soil-002',
                                actorName: 'Temperatura do Solo',
                                unitOfMeasurement: '°C',
                                data: generateSensorData(22.5, 2, 20)
                            },
                            {
                                actorId: 'humidity-air-002',
                                actorName: 'Umidade do Ar',
                                unitOfMeasurement: '%',
                                data: generateSensorData(75, 8, 20)
                            },
                            {
                                actorId: 'humidity-soil-002',
                                actorName: 'Umidade do Solo',
                                unitOfMeasurement: '%',
                                data: generateSensorData(45, 5, 20)
                            },
                            {
                                actorId: 'rain-002',
                                actorName: 'Precipitação',
                                unitOfMeasurement: 'mm',
                                data: generateSensorData(0, 1.5, 20)
                            }
                        ]
                    }
                ]
            }
        ],
        total: 1
    },
    timestamp: new Date().toISOString()
};

const station3: PublicProjectsResponse = {
    success: true,
    data: {
        projects: [
            {
                projectId: 'station-003',
                projectName: 'Estação Meteorológica Montanhosa',
                devices: [
                    {
                        deviceId: 'device-003',
                        deviceName: 'Sensor de Altitude',
                        serialNumber: 'SN-MNT-003',
                        deviceType: 'Mountain Station',
                        status: 'online',
                        actors: [
                            {
                                actorId: 'temp-air-003',
                                actorName: 'Temperatura do Ar',
                                unitOfMeasurement: '°C',
                                data: generateSensorData(18.0, 5, 20)
                            },
                            {
                                actorId: 'humidity-air-003',
                                actorName: 'Umidade do Ar',
                                unitOfMeasurement: '%',
                                data: generateSensorData(85, 8, 20)
                            },
                            {
                                actorId: 'rain-003',
                                actorName: 'Precipitação',
                                unitOfMeasurement: 'mm',
                                data: generateSensorData(0.5, 3, 20)
                            },
                            {
                                actorId: 'pressure-003',
                                actorName: 'Pressão Atmosférica',
                                unitOfMeasurement: 'hPa',
                                data: generateSensorData(850, 15, 20)
                            }
                        ]
                    }
                ]
            }
        ],
        total: 1
    },
    timestamp: new Date().toISOString()
};

export const mockPublicProjects: PublicProjectsResponse = {
    success: true,
    data: {
        projects: [
            station1.data.projects[0],
            station2.data.projects[0],
            station3.data.projects[0]
        ],
        total: 3
    },
    timestamp: new Date().toISOString()
};

const projectDataState: Record<string, PublicProject> = {};

export function getMockProjectData(projectId: string): ProjectDataResponse {
    let baseProject;
    
    switch (projectId) {
        case 'station-001':
            baseProject = station1.data.projects[0];
            break;
        case 'station-002':
            baseProject = station2.data.projects[0];
            break;
        case 'station-003':
            baseProject = station3.data.projects[0];
            break;
        default:
            throw new Error('Projeto não encontrado');
    }
    
    if (!projectDataState[projectId]) {
        projectDataState[projectId] = JSON.parse(JSON.stringify(baseProject));
    }
    
    const currentProject = projectDataState[projectId];
    const updatedProject: PublicProject = {
        ...currentProject,
        devices: currentProject.devices.map((device: Device) => ({
            ...device,
            actors: device.actors.map((actor: Actor) => {
                const lastData = actor.data[actor.data.length - 1];
                const baseValue = lastData.value;
                const sensorConfig = getSensorConfig(actor.actorName, projectId);
                const { variation, minValue, maxValue } = sensorConfig;
                const trend = (Math.random() - 0.5) * 0.3;
                const randomChange = (Math.random() - 0.5) * variation;
                let newValue = baseValue + trend + randomChange;
                newValue = Math.max(minValue, Math.min(maxValue, newValue));
                
                const newDataPoint: SensorData = {
                    id: `sensor-${Date.now()}-${Math.random()}`,
                    value: Math.round(newValue * 10) / 10,
                    timestamp: new Date().toISOString()
                };
                
                const updatedData = [...actor.data.slice(1), newDataPoint];
                
                return {
                    ...actor,
                    data: updatedData
                };
            })
        }))
    };
    
    projectDataState[projectId] = updatedProject;
    
    return {
        success: true,
        data: updatedProject,
        timestamp: new Date().toISOString()
    };
}

