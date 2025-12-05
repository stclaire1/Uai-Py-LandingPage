import { Layout } from "@/components/layout/Layout";
import { usePublicProjects } from '@/hooks/usePublicProjects';
import { useSelectedProject } from '@/hooks/useSelectedProject';
import { ProjectCharts } from '@/components/sections/PublicProjects/components/ProjectCharts';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { PROJECTS_CONTAINER_BG } from '@/constants/colors';

export const Projects = () => {
    const { data: projects = [], isLoading, error } = usePublicProjects();
    const { selectedProjectId, setSelectedProjectId } = useSelectedProject(projects);

    if (isLoading) {
        return (
            <Layout>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                    <LoadingSpinner message="Carregando projetos..." size="lg" />
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                    <ErrorMessage 
                        message={error instanceof Error ? error.message : 'Erro ao carregar projetos públicos'} 
                    />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Projetos Públicos
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Explore e visualize dados em tempo real de sensores e dispositivos IoT compartilhados pela comunidade.
                        </p>
                    </div>

                    {selectedProjectId && (
                        <div 
                            className="rounded-lg py-10 px-2 sm:px-4 lg:px-6 xl:px-8"
                            style={{ backgroundColor: PROJECTS_CONTAINER_BG }}
                        >
                            {projects.length > 0 && (
                                <div className="mb-6 flex flex-col items-center">
                                    <select
                                        value={selectedProjectId}
                                        onChange={(e) => setSelectedProjectId(e.target.value)}
                                        className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {projects.map((project) => (
                                            <option key={project.projectId} value={project.projectId}>
                                                {project.projectName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <ProjectCharts projectId={selectedProjectId} />
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
};

