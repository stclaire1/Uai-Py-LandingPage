import { useState } from 'react';
import { usePublicProjects } from '@/hooks/usePublicProjects';
import { ProjectCharts } from './components/ProjectCharts';
import { QueryStateHandler } from '@/components/ui/QueryStateHandler';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { PROJECTS_CONTAINER_BG } from '@/constants/colors';
import { UI_MESSAGES } from '@/constants/messages';

export const PublicProjects = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string>('');
    const { data: projects = [], isLoading, error } = usePublicProjects();

    const containerClassName = "px-1 my-16 md:px-6 md:my-20 lg:px-8 lg:mb-26 xl:px-12";
    const innerContainerClassName = "rounded-lg py-10 container mx-auto max-w-[99%] md:max-w-[95%] 2xl:max-w-[90%] px-2 sm:px-6 lg:px-8 xl:px-10";

    return (
        <section id="publicProjects" className={containerClassName}>
            <div 
                className={innerContainerClassName}
                style={{ backgroundColor: PROJECTS_CONTAINER_BG }}
            >
                <QueryStateHandler
                    isLoading={isLoading}
                    error={error}
                    isEmpty={projects.length === 0}
                    loadingMessage={UI_MESSAGES.LOADING_PROJECTS}
                    errorMessage={error instanceof Error ? error.message : UI_MESSAGES.ERROR_LOADING_PROJECTS}
                    emptyMessage={UI_MESSAGES.NO_PROJECTS}
                    loadingComponent={
                        <div className="flex items-center justify-center py-20">
                            <LoadingSpinner message={UI_MESSAGES.LOADING_PROJECTS} size="lg" className="text-white" />
                        </div>
                    }
                    errorComponent={
                        <div className="text-center py-20">
                            <ErrorMessage 
                                message={error instanceof Error ? error.message : UI_MESSAGES.ERROR_LOADING_PROJECTS}
                                className="text-white"
                            />
                        </div>
                    }
                    emptyComponent={
                        <div className="text-center py-20">
                            <p className="text-white text-lg">
                                {UI_MESSAGES.NO_PROJECTS}
                            </p>
                        </div>
                    }
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
                                    {UI_MESSAGES.SELECT_PROJECT}
                                </p>
                            </div>
                        ) : (
                            <ProjectCharts projectId={selectedProjectId} />
                        )}
                    </div>
                </QueryStateHandler>
            </div>
        </section>
    );
};

