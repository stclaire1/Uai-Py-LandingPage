import { useState } from 'react';
import { usePublicProjects } from '@/hooks/usePublicProjects';
import { ProjectCharts } from './components/ProjectCharts';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { PROJECTS_CONTAINER_BG } from '@/constants/colors';

export const PublicProjects = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string>('');
    const { data: projects = [], isLoading, error } = usePublicProjects();

    if (isLoading) {
        return (
            <section className="px-1 my-16 md:px-6 md:my-20 lg:px-8 lg:mb-26 xl:px-12">
                <div 
                    className="rounded-lg py-10 container mx-auto max-w-[99%] md:max-w-[95%] 2xl:max-w-[90%] px-2 sm:px-6 lg:px-8 xl:px-10"
                    style={{ backgroundColor: PROJECTS_CONTAINER_BG }}
                >
                    <div className="flex items-center justify-center py-20">
                        <LoadingSpinner message="Carregando projetos..." size="lg" className="text-white" />
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="px-1 my-16 md:px-6 md:my-20 lg:px-8 lg:mb-26 xl:px-12">
                <div 
                    className="rounded-lg py-10 container mx-auto max-w-[99%] md:max-w-[95%] 2xl:max-w-[90%] px-2 sm:px-6 lg:px-8 xl:px-10"
                    style={{ backgroundColor: PROJECTS_CONTAINER_BG }}
                >
                    <div className="text-center py-20">
                        <ErrorMessage 
                            message={error instanceof Error ? error.message : 'Erro ao carregar projetos públicos'}
                            className="text-white"
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="publicProjects" className="px-1 my-16 md:px-6 md:my-20 lg:px-8 lg:mb-26 xl:px-12">
            <div 
                className="rounded-lg py-10 container mx-auto max-w-[99%] md:max-w-[95%] 2xl:max-w-[90%] px-2 sm:px-6 lg:px-8 xl:px-10"
                style={{ backgroundColor: PROJECTS_CONTAINER_BG }}
            >
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                        PROJETOS PÚBLICOS
                    </h2>
                    <p className="text-sm text-white lg:text-base">
                        Explore dados em tempo real de sensores e dispositivos IoT compartilhados pela comunidade.
                    </p>
                </div>

                <div className="w-full mx-auto">
                    <div className="mb-6 flex flex-col items-center">
                        <select
                            value={selectedProjectId}
                            onChange={(e) => setSelectedProjectId(e.target.value)}
                            className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">-- Selecione um projeto --</option>
                            {projects.map((project) => (
                                <option key={project.projectId} value={project.projectId}>
                                    {project.projectName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {!selectedProjectId ? (
                        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg">
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                Selecione um projeto para visualizar os dados dos sensores
                            </p>
                        </div>
                    ) : (
                        <ProjectCharts projectId={selectedProjectId} />
                    )}
                </div>
            </div>
        </section>
    );
};

