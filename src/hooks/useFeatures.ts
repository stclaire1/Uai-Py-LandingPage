import { useQuery } from '@tanstack/react-query';
import { Feature } from '@/lib/Features';
import { featuresSchema } from '@/lib/featuresSchema';
import featuresData from '@/components/sections/Features/features.json';
import { logger } from '@/utils/logger';

/**
 * Hook para buscar features usando React Query
 * Mantém consistência com o resto da aplicação que usa React Query
 * Inclui validação Zod para garantir type safety em runtime
 */
export function useFeatures() {
  return useQuery<Feature[], Error>({
    queryKey: ['features'],
    queryFn: async () => {
      try {
        const validatedFeatures = featuresSchema.parse(featuresData.features);
        
        const typedFeatures: Feature[] = validatedFeatures.map((feature) => ({
          id: feature.id,
          title: feature.title,
          description: feature.description,
          icon: feature.icon as Feature['icon'],
          external: feature.external ?? true,
        }));
        
        return typedFeatures;
      } catch (error) {
        logger.error('Erro ao validar features:', error);
        throw new Error('Erro ao carregar features: dados inválidos');
      }
    },
    staleTime: Infinity,
  });
}

