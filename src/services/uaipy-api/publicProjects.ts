import { api } from '@/services/uaipy-api/api';
import { PublicProjectsResponse, ProjectDataResponse } from './types';

export const publicProjectsService = {
    getPublicProjects: async (): Promise<PublicProjectsResponse> => {
        const { data } = await api.get<PublicProjectsResponse>('/general/projects/data');
        return data;
    },
    getProjectData: async (projectId: string): Promise<ProjectDataResponse> => {
        const { data } = await api.get<ProjectDataResponse>(`/general/projects/${projectId}/data`);
        return data;
    }
};

