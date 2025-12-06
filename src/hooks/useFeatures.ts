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
        // Valida os dados do JSON usando Zod
        const validatedFeatures = featuresSchema.parse(featuresData.features);
        
        // Transforma para o tipo Feature (já validado pelo schema)
        const typedFeatures: Feature[] = validatedFeatures.map((feature) => ({
          id: feature.id,
          title: feature.title,
          description: feature.description,
          icon: feature.icon as Feature['icon'], // Type assertion segura após validação Zod
          external: feature.external ?? true,
        }));
        
        return typedFeatures;
      } catch (error) {
        logger.error('Erro ao validar features:', error);
        throw new Error('Erro ao carregar features: dados inválidos');
      }
    },
    staleTime: Infinity, // Dados estáticos nunca ficam stale
  });
}

