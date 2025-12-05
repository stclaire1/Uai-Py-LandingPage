import { useState, useEffect } from 'react';
import { ThemeProvider } from "@/contexts";
import { Layout } from "@/components/layout/Layout";
import { usePublicProjects } from '@/hooks/usePublicProjects';
import { ProjectCharts } from '@/components/sections/PublicProjects/components/ProjectCharts';
import { Loader2 } from 'lucide-react';

export const Projects = () => {
    const { data: projects = [], isLoading, error } = usePublicProjects();
    const [selectedProjectId, setSelectedProjectId] = useState<string>('');

    // Define o primeiro projeto como selecionado por padrão quando os projetos carregarem
    useEffect(() => {
        if (projects.length > 0 && !selectedProjectId) {
            setSelectedProjectId(projects[0].projectId);
        }
    }, [projects, selectedProjectId]);

    if (isLoading) {
        return (
            <ThemeProvider>
                <Layout>
                    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                        <div className="flex items-center gap-3">
                            <Loader2 className="h-8 w-8 animate-spin text-gray-600 dark:text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400">Carregando projetos...</span>
                        </div>
                    </div>
                </Layout>
            </ThemeProvider>
        );
    }

    if (error) {
        return (
            <ThemeProvider>
                <Layout>
                    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                        <p className="text-red-400 text-lg">
                            {error instanceof Error ? error.message : 'Erro ao carregar projetos públicos'}
                        </p>
                    </div>
                </Layout>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider>
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
                    <div className="bg-[#000932] rounded-lg py-10 px-2 sm:px-4 lg:px-6 xl:px-8">
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
        </ThemeProvider>
    );
};

