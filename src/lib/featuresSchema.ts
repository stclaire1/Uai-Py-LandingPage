import { z } from 'zod';
import { IconName } from '@/lib/Icons';

/**
 * Schema Zod para validação de Feature
 * Garante type safety em runtime
 */
export const featureSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  icon: z.string().refine(
    (val): val is IconName => {
      return typeof val === 'string' && val.length > 0;
    },
    { message: 'Ícone inválido' }
  ),
  external: z.boolean().optional().default(true),
});

export const featuresSchema = z.array(featureSchema);

export type FeatureSchema = z.infer<typeof featureSchema>;

