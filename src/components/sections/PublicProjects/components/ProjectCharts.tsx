import { Device, Actor } from '@/services/uaipy-api/types';
import { useState } from 'react';
import { CustomChart } from '@/components/ui/CustomChart';
import { SensorChartSwitcher } from '@/components/ui/SensorChartSwitcher';
import { Activity, Loader2 } from 'lucide-react';
import { usePublicProjectData } from '@/hooks/usePublicProjects';

interface ProjectChartsProps {
    projectId: string;
}

export function ProjectCharts({ projectId }: ProjectChartsProps) {
    const [sensorChartTypes, setSensorChartTypes] = useState<Record<string, "line" | "bar">>({});
    const { data: project, isLoading, error, isFetching } = usePublicProjectData(projectId, true);

    if (isLoading) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <div className="flex items-center justify-center gap-3">
                    <Loader2 className="h-6 w-6 animate-spin text-gray-600 dark:text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Carregando dados do projeto...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-red-400 text-lg">
                    {error instanceof Error ? error.message : 'Erro ao carregar dados do projeto'}
                </p>
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

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'online':
                return 'bg-green-500';
            case 'offline':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const isChuva = (actorName: string) => {
        return actorName.toLowerCase().includes("rain");
    };

    const getSensorColor = (actorName: string): string => {
        const lowerActorName = actorName.toLowerCase().replace(/_/g, " ");

        if (lowerActorName.includes("air tem") || lowerActorName.includes("temperature")) {
            return "#ff6b6b";
        }
        if (lowerActorName.includes("soil tem")) {
            return "#8dc9ab";
        }
        if (lowerActorName.includes("air hum") || lowerActorName.includes("humidity")) {
            return "#b974db";
        }
        if (lowerActorName.includes("soil hum") || lowerActorName.includes("moisture")) {
            return "#45b7d1";
        }
        if (lowerActorName.includes("rain")) {
            return "#feca57";
        }
        if (lowerActorName.includes("co2")) {
            return "#95a5a6";
        }
        if (lowerActorName.includes("pm25") || lowerActorName.includes("pm10")) {
            return "#e74c3c";
        }

        return "#3b82f6";
    };

    const getAllActors = (): Array<{ device: Device; actor: Actor }> => {
        const allActors: Array<{ device: Device; actor: Actor }> = [];
        project.devices.forEach(device => {
            device.actors.forEach(actor => {
                if (actor.data && actor.data.length > 0) {
                    allActors.push({ device, actor });
                }
            });
        });
        return allActors;
    };

    const allActors = getAllActors();

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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
                {allActors.map(({ device, actor }) => {
                    if (!actor.data || actor.data.length === 0) return null;
                    
                    const onlyBar = isChuva(actor.actorName);
                    const chartType = onlyBar
                        ? "bar"
                        : sensorChartTypes[actor.actorId] || "line";
                    const sortedData = [...actor.data].sort(
                        (a, b) =>
                            new Date(a.timestamp).getTime() -
                            new Date(b.timestamp).getTime()
                    );
                    
                    if (sortedData.length === 0) return null;
                    
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
                                            <span className={`h-2 w-2 rounded-full ${getStatusColor(device.status)}`} />
                                            <span className="capitalize">{device.status}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {latestValue && (
                                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Valor Atual</span>
                                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {typeof latestValue.value === 'number' ? latestValue.value.toFixed(1) : latestValue.value} {actor.unitOfMeasurement}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                                            <div className="text-sm">
                                                <span className="text-gray-500 dark:text-gray-400">Mín: </span>
                                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                    {typeof minValue.value === 'number' ? minValue.value.toFixed(1) : minValue.value}
                                                </span>
                                            </div>
                                            <div className="text-sm">
                                                <span className="text-gray-500 dark:text-gray-400">Máx: </span>
                                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                    {typeof maxValue.value === 'number' ? maxValue.value.toFixed(1) : maxValue.value}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <SensorChartSwitcher
                                chartType={chartType}
                                onChange={(type) =>
                                    setSensorChartTypes((prev) => ({ ...prev, [actor.actorId]: type }))
                                }
                                onlyBar={onlyBar}
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

