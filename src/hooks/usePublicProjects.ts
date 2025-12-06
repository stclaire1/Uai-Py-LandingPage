import { useQuery } from '@tanstack/react-query';
import { publicProjectsService } from '@/services/uaipy-api/publicProjects';
import { PublicProject } from '@/services/uaipy-api/types';

interface ProjectDataWithTimestamp {
    project: PublicProject;
    timestamp: string;
}

export function usePublicProjects() {
    return useQuery({
        queryKey: ['publicProjects'],
        queryFn: async () => {  
            const response = await publicProjectsService.getPublicProjects();
            if (response.success && response.data.projects) {
                return response.data.projects;
            }
            throw new Error('Erro ao carregar projetos públicos');
        },
    });
}

export function usePublicProjectData(projectId: string | null, enabled: boolean = true) {
    return useQuery<ProjectDataWithTimestamp, Error>({
        queryKey: ['publicProjectData', projectId],
        queryFn: async (): Promise<ProjectDataWithTimestamp> => {
            if (!projectId) throw new Error('ProjectId é necessário');
            const response = await publicProjectsService.getProjectData(projectId);
            if (response.success && response.data && response.timestamp) {
                return {
                    project: response.data,
                    timestamp: response.timestamp
                };
            }
            throw new Error('Erro ao carregar dados do projeto');
        },
        enabled: enabled && !!projectId,
        refetchInterval: 7000, // Atualiza a cada 7 segundos
    });
}

