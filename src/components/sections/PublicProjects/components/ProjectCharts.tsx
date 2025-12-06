import { useState, useMemo } from 'react';
import { QueryStateHandler } from '@/components/ui/QueryStateHandler';
import { Clock } from 'lucide-react';
import { usePublicProjectData } from '@/hooks/usePublicProjects';
import { formatTimestamp, isValidTimestamp } from '@/utils/dateUtils';
import { extractAllActors } from '@/utils/projectUtils';
import { SensorChartCard } from './SensorChartCard';
import { UI_MESSAGES } from '@/constants/messages';

interface ProjectChartsProps {
    projectId: string;
}

type ChartType = 'line' | 'bar';

export function ProjectCharts({ projectId }: ProjectChartsProps) {
    const [sensorChartTypes, setSensorChartTypes] = useState<Record<string, ChartType>>({});
    const { data: queryData, isLoading, error, isFetching } = usePublicProjectData(projectId, true);
    const project = queryData?.project;
    const timestamp = queryData?.timestamp;
    const hasValidTimestamp = isValidTimestamp(timestamp);

    const allActors = useMemo(() => {
        if (!project) return [];
        return extractAllActors(project);
    }, [project]);

    const isEmpty = !project || !project.devices || allActors.length === 0;

    return (
        <QueryStateHandler
            isLoading={isLoading}
            error={error}
            isEmpty={isEmpty}
            loadingMessage={UI_MESSAGES.LOADING_PROJECT_DATA}
            errorMessage={error instanceof Error ? error.message : UI_MESSAGES.ERROR_LOADING_PROJECT_DATA}
            emptyMessage={
                !project || !project.devices 
                    ? UI_MESSAGES.ERROR_INVALID_PROJECT_DATA
                    : UI_MESSAGES.NO_SENSOR_DATA
            }
            className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center"
        >
            <div className="space-y-6">
                {project && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {project.projectName}
                                    </h3>
                                    {isFetching && (
                                        <span className="flex items-center gap-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                                            <span className="h-2 w-2 bg-[#067F32] rounded-full animate-pulse"></span>
                                            Atualizando...
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span>{project.devices.length} dispositivo{project.devices.length !== 1 ? 's' : ''}</span>
                                    <span>{allActors.length} sensor{allActors.length !== 1 ? 'es' : ''}</span>
                                </div>
                            </div>
                        </div>
                        {hasValidTimestamp && (
                            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    Última atualização: <span className="font-semibold">{formatTimestamp(timestamp)}</span>
                                </span>
                            </div>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
                    {allActors.map(({ device, actor }) => {
                        if (!actor.data || actor.data.length === 0) return null;
                        
                        const chartType: ChartType = sensorChartTypes[actor.actorId] || 'line';
                        
                        return (
                            <SensorChartCard
                                key={actor.actorId}
                                device={device}
                                actor={actor}
                                variant="detailed"
                                chartType={chartType}
                                onChartTypeChange={(type) =>
                                    setSensorChartTypes((prev) => ({ ...prev, [actor.actorId]: type }))
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </QueryStateHandler>
    );
}

