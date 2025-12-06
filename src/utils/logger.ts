/**
 * Sistema de logging para o projeto Uai-Py
 * 
 * Em desenvolvimento: logs completos no console
 * Em produção: apenas erros e warnings são logados
 * 
 * Pode ser facilmente substituído por uma biblioteca de logging mais robusta
 * (ex: winston, pino) ou integrado com serviços de monitoramento (ex: Sentry)
 */

const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

/**
 * Configuração do logger
 */
const LOGGER_CONFIG = {
  enableDebugInProduction: false,
  enableInfoInProduction: false,
} as const;

class Logger {
  /**
   * Log de erro - sempre logado, mesmo em produção
   */
  error(message: string, ...args: unknown[]): void {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [ERROR]`;
    console.error(prefix, message, ...args);
    
    if (isProduction) {
    }
  }

  /**
   * Log de warning - sempre logado, mesmo em produção
   */
  warn(message: string, ...args: unknown[]): void {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [WARN]`;
    console.warn(prefix, message, ...args);
  }

  /**
   * Log de informação - apenas em desenvolvimento, a menos que configurado
   */
  info(message: string, ...args: unknown[]): void {
    if (!isDevelopment && !LOGGER_CONFIG.enableInfoInProduction) {
      return;
    }
    
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [INFO]`;
    console.info(prefix, message, ...args);
  }

  /**
   * Log de debug - apenas em desenvolvimento
   */
  debug(message: string, ...args: unknown[]): void {
    if (!isDevelopment && !LOGGER_CONFIG.enableDebugInProduction) {
      return;
    }
    
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [DEBUG]`;
    console.debug(prefix, message, ...args);
  }

  group(label: string): void {
    if (isDevelopment) {
      console.group(label);
    }
  }

  groupEnd(): void {
    if (isDevelopment) {
      console.groupEnd();
    }
  }
}

export const logger = new Logger();
export { Logger };
