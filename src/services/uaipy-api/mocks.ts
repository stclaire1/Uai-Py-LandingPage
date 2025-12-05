import { PublicProjectsResponse, ProjectDataResponse, SensorData } from './types';

// Função auxiliar para gerar dados de sensores com variação realista
function generateSensorData(
    baseValue: number,
    variation: number,
    count: number = 20,
    unit: string = ''
): SensorData[] {
    const data: SensorData[] = [];
    const now = new Date();
    
    for (let i = count - 1; i >= 0; i--) {
        const timestamp = new Date(now.getTime() - i * 60000); // 1 minuto entre cada leitura
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

// Estação Meteorológica 1: Urbana - Centro da Cidade
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
                ],
                total: 1
            }
        ],
        total: 1
    },
    timestamp: new Date().toISOString()
};

// Estação Meteorológica 2: Rural - Zona Agrícola
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
                ],
                total: 1
            }
        ],
        total: 1
    },
    timestamp: new Date().toISOString()
};

// Estação Meteorológica 3: Montanhosa - Alta Altitude
const station3: PublicProjectsResponse = {
    success: true,
    data: {
        projects: [
            {
                projectId: 'station-003',
                projectName: 'Estação Meteorológica',
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
                ],
                total: 1
            }
        ],
        total: 1
    },
    timestamp: new Date().toISOString()
};

// Mock combinado com todas as 3 estações
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

// Armazena o estado atual dos dados de cada projeto
const projectDataState: Record<string, any> = {};

// Função para obter dados de um projeto específico com atualização dinâmica
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
    
    // Se não existe estado, inicializa com os dados base
    if (!projectDataState[projectId]) {
        projectDataState[projectId] = JSON.parse(JSON.stringify(baseProject));
    }
    
    const currentProject = projectDataState[projectId];
    
    // Atualiza os dados com valores mais recentes para simular atualização em tempo real
    const updatedProject = {
        ...currentProject,
        devices: currentProject.devices.map((device: any) => ({
            ...device,
            actors: device.actors.map((actor: any) => {
                const lastData = actor.data[actor.data.length - 1];
                const baseValue = lastData.value;
                
                // Define variação baseada no tipo de sensor
                let variation: number;
                let minValue: number;
                let maxValue: number;
                
                if (actor.actorName.includes('Temperatura do Ar')) {
                    variation = projectId === 'station-001' ? 2.5 : projectId === 'station-002' ? 3 : 4;
                    minValue = projectId === 'station-001' ? 25 : projectId === 'station-002' ? 20 : 13;
                    maxValue = projectId === 'station-001' ? 32 : projectId === 'station-002' ? 28 : 23;
                } else if (actor.actorName.includes('Temperatura do Solo')) {
                    variation = 1.5;
                    minValue = 20;
                    maxValue = 25;
                } else if (actor.actorName.includes('Umidade do Ar')) {
                    variation = 8;
                    minValue = projectId === 'station-001' ? 55 : projectId === 'station-002' ? 65 : 75;
                    maxValue = projectId === 'station-001' ? 75 : projectId === 'station-002' ? 85 : 95;
                } else if (actor.actorName.includes('Umidade do Solo')) {
                    variation = 4;
                    minValue = 40;
                    maxValue = 50;
                } else if (actor.actorName.includes('Precipitação')) {
                    variation = 1.5;
                    minValue = 0;
                    maxValue = projectId === 'station-003' ? 5 : 3;
                } else if (actor.actorName.includes('Pressão')) {
                    variation = 12;
                    minValue = 835;
                    maxValue = 865;
                } else {
                    variation = 5;
                    minValue = baseValue - 10;
                    maxValue = baseValue + 10;
                }
                
                // Gera novo valor com tendência suave (não totalmente aleatório)
                const trend = (Math.random() - 0.5) * 0.3; // Tendência suave
                const randomChange = (Math.random() - 0.5) * variation;
                let newValue = baseValue + trend + randomChange;
                
                // Limita aos valores mínimos e máximos
                newValue = Math.max(minValue, Math.min(maxValue, newValue));
                
                // Adiciona novo ponto de dados
                const newDataPoint: SensorData = {
                    id: `sensor-${Date.now()}-${Math.random()}`,
                    value: Math.round(newValue * 10) / 10,
                    timestamp: new Date().toISOString()
                };
                
                // Mantém apenas os últimos 20 pontos
                const updatedData = [...actor.data.slice(1), newDataPoint];
                
                return {
                    ...actor,
                    data: updatedData
                };
            })
        }))
    };
    
    // Atualiza o estado
    projectDataState[projectId] = updatedProject;
    
    return {
        success: true,
        data: updatedProject,
        timestamp: new Date().toISOString()
    };
}

