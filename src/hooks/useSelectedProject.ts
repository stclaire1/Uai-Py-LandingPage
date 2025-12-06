import { useState, useEffect } from 'react';
import { PublicProject } from '@/services/uaipy-api/types';

/**
 * Hook para gerenciar o projeto selecionado
 * Automaticamente seleciona o primeiro projeto quando a lista carrega
 */
export const useSelectedProject = (projects: PublicProject[]) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  useEffect(() => {
    if (projects.length > 0 && !selectedProjectId) {
      setSelectedProjectId(projects[0].projectId);
    }
  }, [projects, selectedProjectId]);

  return {
    selectedProjectId,
    setSelectedProjectId,
  };
};

