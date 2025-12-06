import { useState, useCallback } from 'react';
import { whatsappService } from '@/services/whatsappService';
import { FORM_CONFIG } from '@/constants/config';
import { logger } from '@/utils/logger';

/**
 * Hook para gerenciar envio de mensagens via WhatsApp
 */
export function useWhatsApp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (name: string, message: string) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await whatsappService.sendMessage(name, message);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), FORM_CONFIG.SUCCESS_MESSAGE_DURATION_MS);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao enviar mensagem via WhatsApp';
      logger.error('Erro ao enviar mensagem via WhatsApp:', err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    sendMessage,
    isSubmitting,
    isSuccess,
    error,
    clearError,
  };
}

