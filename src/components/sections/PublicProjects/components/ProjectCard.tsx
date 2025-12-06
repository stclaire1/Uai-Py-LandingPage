import { PublicProject } from '@/services/uaipy-api/types';
import { useState } from 'react';
import { extractAllActors } from '@/utils/projectUtils';
import { SensorChartCard } from './SensorChartCard';

interface ProjectCardProps {
    project: PublicProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [sensorChartTypes, setSensorChartTypes] = useState<Record<string, "line" | "bar">>({});

    const allActors = extractAllActors(project);

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
                        const chartType = sensorChartTypes[actor.actorId] || "line";
                        
                        return (
                            <SensorChartCard
                                key={actor.actorId}
                                device={device}
                                actor={actor}
                                variant="compact"
                                chartType={chartType}
                                onChartTypeChange={(type) =>
                                    setSensorChartTypes((prev) => ({ ...prev, [actor.actorId]: type }))
                                }
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

