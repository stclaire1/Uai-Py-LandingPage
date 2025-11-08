import { useQuery } from '@tanstack/react-query';
import { publicProjectsService } from '@/services/uaipy-api/publicProjects';

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
    return useQuery({
        queryKey: ['publicProjectData', projectId],
        queryFn: async () => {
            if (!projectId) throw new Error('ProjectId é necessário');
            const response = await publicProjectsService.getProjectData(projectId);
            if (response.success && response.data) {
                return response.data;
            }
            throw new Error('Erro ao carregar dados do projeto');
        },
        enabled: enabled && !!projectId,
        refetchInterval: 7000, // Atualiza a cada 7 segundos
    });
}

