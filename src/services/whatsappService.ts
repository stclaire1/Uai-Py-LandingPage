import { WHATSAPP_CONFIG, FORM_CONFIG } from '@/constants/config';
import { openWhatsApp } from '@/utils/whatsappUtils';

/**
 * Service para envio de mensagens via WhatsApp
 */
export const whatsappService = {
  /**
   * Envia uma mensagem via WhatsApp
   */
  sendMessage: async (name: string, message: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, FORM_CONFIG.SUBMISSION_DELAY_MS));
    
    openWhatsApp(WHATSAPP_CONFIG.PHONE_NUMBER, name, message);
  },
};

