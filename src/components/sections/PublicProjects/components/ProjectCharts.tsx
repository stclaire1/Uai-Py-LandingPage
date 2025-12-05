import { Device, Actor, SensorData } from '@/services/uaipy-api/types';
import { useState, useMemo, useCallback } from 'react';
import { CustomChart } from '@/components/ui/CustomChart';
import { SensorChartSwitcher } from '@/components/ui/SensorChartSwitcher';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Activity, Clock } from 'lucide-react';
import { usePublicProjectData } from '@/hooks/usePublicProjects';
import { getSensorColor, getDeviceStatusColor, isPrecipitationSensor } from '@/utils/sensorUtils';
import { formatTimestamp } from '@/utils/dateUtils';

interface ProjectChartsProps {
    projectId: string;
}

type ChartType = 'line' | 'bar';

export function ProjectCharts({ projectId }: ProjectChartsProps) {
    const [sensorChartTypes, setSensorChartTypes] = useState<Record<string, ChartType>>({});
    const { data: queryData, isLoading, error, isFetching } = usePublicProjectData(projectId, true);
    const project = queryData?.project;
    const timestamp = queryData?.timestamp;
    
    // Validação explícita para garantir que timestamp existe
    const hasValidTimestamp = useMemo(() => {
        return timestamp && typeof timestamp === 'string' && timestamp.trim() !== '';
    }, [timestamp]);

    const allActors = useMemo(() => {
        if (!project?.devices) return [];
        
        const actors: Array<{ device: Device; actor: Actor }> = [];
        project.devices.forEach(device => {
            device.actors.forEach(actor => {
                if (actor.data && actor.data.length > 0) {
                    actors.push({ device, actor });
                }
            });
        });
        return actors;
    }, [project]);

    // Memoiza a função de atualização do tipo de gráfico
    const handleChartTypeChange = useCallback((actorId: string, type: ChartType) => {
        setSensorChartTypes((prev) => ({ ...prev, [actorId]: type }));
    }, []);

    // Função auxiliar para formatar valores
    const formatValue = useCallback((value: number): string => {
        return typeof value === 'number' ? value.toFixed(1) : String(value);
    }, []);

    if (isLoading) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <LoadingSpinner message="Carregando dados do projeto..." size="md" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <ErrorMessage 
                    message={error instanceof Error ? error.message : 'Erro ao carregar dados do projeto'} 
                />
            </div>
        );
    }

    if (!project || !project.devices) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Dados do projeto inválidos
                </p>
            </div>
        );
    }

    if (allActors.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Este projeto não possui dados de sensores disponíveis
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {project.projectName}
                            </h3>
                            {isFetching && (
                                <span className="flex items-center gap-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                                    <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
                {allActors.map(({ device, actor }) => {
                    if (!actor.data || actor.data.length === 0) return null;
                    
                    const isPrecipitation = isPrecipitationSensor(actor.actorName);
                    const chartType: ChartType = isPrecipitation
                        ? 'bar'
                        : sensorChartTypes[actor.actorId] || 'line';
                    
                    // Ordena os dados por timestamp
                    const sortedData = [...actor.data].sort(
                        (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
                    );
                    
                    if (sortedData.length === 0) return null;
                    
                    // Calcula valores estatísticos
                    const values = sortedData.map(d => d.value);
                    const dataMin = values.length > 0 ? Math.min(...values) : 0;
                    const dataMax = values.length > 0 ? Math.max(...values) : 0;
                    const latestValue = sortedData[sortedData.length - 1];
                    const minValue = sortedData.find(d => d.value === dataMin) || sortedData[0];
                    const maxValue = sortedData.find(d => d.value === dataMax) || sortedData[0];

                    return (
                        <div
                            key={actor.actorId}
                            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 shadow-sm"
                        >
                            <div className="mb-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                                            {actor.actorName}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                            <Activity className="h-4 w-4" />
                                            <span>{device.deviceName}</span>
                                            <span className={`h-2 w-2 rounded-full ${getDeviceStatusColor(device.status)}`} />
                                            <span className="capitalize">{device.status}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {latestValue && (
                                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Valor Atual</span>
                                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {formatValue(latestValue.value)} {actor.unitOfMeasurement}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                                            <div className="text-sm">
                                                <span className="text-gray-500 dark:text-gray-400">Mín: </span>
                                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                    {formatValue(minValue.value)}
                                                </span>
                                            </div>
                                            <div className="text-sm">
                                                <span className="text-gray-500 dark:text-gray-400">Máx: </span>
                                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                    {formatValue(maxValue.value)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <SensorChartSwitcher
                                chartType={chartType}
                                onChange={(type) => handleChartTypeChange(actor.actorId, type)}
                                onlyBar={isPrecipitation}
                            />
                            
                            <div className="mt-6">
                                <CustomChart
                                    data={sortedData.filter(d => d && typeof d.value === 'number' && !isNaN(d.value))}
                                    chartType={chartType}
                                    xKey="timestamp"
                                    yKey="value"
                                    legendName={actor.actorName}
                                    unit={actor.unitOfMeasurement || ''}
                                    dataMin={dataMin}
                                    dataMax={dataMax}
                                    color={getSensorColor(actor.actorName)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

