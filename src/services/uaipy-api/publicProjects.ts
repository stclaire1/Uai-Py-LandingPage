import { PublicProjectsResponse, ProjectDataResponse } from './types';
import { mockPublicProjects, getMockProjectData } from './mocks';

export const publicProjectsService = {
    getPublicProjects: async (): Promise<PublicProjectsResponse> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockPublicProjects;
    },
    getProjectData: async (projectId: string): Promise<ProjectDataResponse> => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return getMockProjectData(projectId);
    }
};

