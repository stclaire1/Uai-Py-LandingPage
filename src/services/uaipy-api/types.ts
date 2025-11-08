export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

export interface PublicProject {
    projectId: string;
    projectName: string;
    devices: Device[];
}

export interface Device {
    deviceId: string;
    deviceName: string;
    serialNumber: string;
    deviceType: string;
    status: string;
    actors: Actor[];
}

export interface Actor {
    actorId: string;
    actorName: string;
    unitOfMeasurement: string;
    data: SensorData[];
}

export interface SensorData {
    id: string;
    value: number;
    timestamp: string;
}

export interface PublicProjectsResponse {
    success: boolean;
    data: {
        projects: PublicProject[];
        total: number;
    };
    timestamp: string;
}

export interface ProjectDataResponse {
    success: boolean;
    data: PublicProject;
    timestamp: string;
}
