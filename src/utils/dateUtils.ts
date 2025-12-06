/**
 * Valida se um timestamp é válido (não vazio e é uma string)
 */
export const isValidTimestamp = (timestamp: unknown): timestamp is string => {
  return typeof timestamp === 'string' && timestamp.trim() !== '';
};

/**
 * Formata um timestamp ISO para formato brasileiro
 */
export const formatTimestamp = (timestamp: string | undefined): string => {
  if (!timestamp) return 'N/A';
  
  const date = new Date(timestamp);
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

