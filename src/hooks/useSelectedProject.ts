import { useState, useEffect, useMemo } from 'react';
import { PublicProject } from '@/services/uaipy-api/types';

/**
 * Hook para gerenciar o projeto selecionado
 * Automaticamente seleciona o primeiro projeto quando a lista carrega
 */
export const useSelectedProject = (projects: PublicProject[]) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  // Memoiza o primeiro projeto para evitar recálculos desnecessários
  const firstProjectId = useMemo(() => {
    return projects.length > 0 ? projects[0].projectId : '';
  }, [projects]);

  useEffect(() => {
    if (firstProjectId && !selectedProjectId) {
      setSelectedProjectId(firstProjectId);
    }
  }, [firstProjectId, selectedProjectId]);

  return {
    selectedProjectId,
    setSelectedProjectId,
  };
};

