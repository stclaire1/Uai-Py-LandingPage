/**
 * Formata uma mensagem para envio via WhatsApp
 */
export function formatWhatsAppMessage(name: string, message: string): string {
  return `*Solicitação de Contato UAI.py*

 *Nome:* ${name}

*Mensagem:*
${message}

---
_Enviado através do site da UAI.py_`;
}

/**
 * Cria a URL do WhatsApp com número de telefone e mensagem formatada
 */
export function createWhatsAppUrl(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Abre o WhatsApp em uma nova aba com a mensagem formatada
 */
export function openWhatsApp(phoneNumber: string, name: string, message: string): void {
  const formattedMessage = formatWhatsAppMessage(name, message);
  const whatsappUrl = createWhatsAppUrl(phoneNumber, formattedMessage);
  window.open(whatsappUrl, '_blank');
}

