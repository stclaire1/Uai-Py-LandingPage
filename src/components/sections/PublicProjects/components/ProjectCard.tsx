import { PublicProject, Device, Actor } from '@/services/uaipy-api/types';
import { useState } from 'react';
import { CustomChart } from '@/components/ui/CustomChart';
import { SensorChartSwitcher } from '@/components/ui/SensorChartSwitcher';

interface ProjectCardProps {
    project: PublicProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [sensorChartTypes, setSensorChartTypes] = useState<Record<string, "line" | "bar">>({});

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

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.projectName}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{project.devices.length} dispositivo{project.devices.length !== 1 ? 's' : ''}</span>
                    <span>{allActors.length} sensor{allActors.length !== 1 ? 'es' : ''}</span>
                </div>
            </div>

            {allActors.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm text-center py-8">
                    Nenhum dado de sensor disponível
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {allActors.map(({ device, actor }) => {
                        const onlyBar = isChuva(actor.actorName);
                        const chartType = onlyBar
                            ? "bar"
                            : sensorChartTypes[actor.actorId] || "line";
                        const sortedData = [...actor.data].sort(
                            (a, b) =>
                                new Date(a.timestamp).getTime() -
                                new Date(b.timestamp).getTime()
                        );
                        const values = sortedData.map(d => d.value);
                        const dataMin = values.length > 0 ? Math.min(...values) : 0;
                        const dataMax = values.length > 0 ? Math.max(...values) : 0;
                        const latestValue = sortedData[sortedData.length - 1];

                        return (
                            <div
                                key={actor.actorId}
                                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {actor.actorName}
                                        </h4>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {device.deviceName}
                                            </span>
                                            <span className={`h-2 w-2 rounded-full ${getStatusColor(device.status)}`} />
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {device.status}
                                            </span>
                                        </div>
                                    </div>
                                    {latestValue && (
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                                                {latestValue.value} {actor.unitOfMeasurement}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                Última leitura
                                            </p>
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
                                <div className="mt-2">
                                    <CustomChart
                                        data={sortedData}
                                        chartType={chartType}
                                        xKey="timestamp"
                                        yKey="value"
                                        legendName={actor.actorName}
                                        unit={actor.unitOfMeasurement}
                                        dataMin={dataMin}
                                        dataMax={dataMax}
                                        color={getSensorColor(actor.actorName)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

