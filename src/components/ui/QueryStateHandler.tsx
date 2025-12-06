import { ReactNode } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

interface QueryStateHandlerProps {
  isLoading: boolean;
  error: Error | null | unknown;
  isEmpty?: boolean;
  children: ReactNode;
  loadingMessage?: string;
  errorMessage?: string;
  emptyMessage?: string;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  emptyComponent?: ReactNode;
  className?: string;
}

/**
 * Componente genérico para lidar com estados comuns de queries (loading, error, empty)
 * Reduz duplicação de código ao encapsular a lógica de validação de estados
 */
export const QueryStateHandler = ({
  isLoading,
  error,
  isEmpty = false,
  children,
  loadingMessage = 'Carregando...',
  errorMessage,
  emptyMessage = 'Nenhum dado disponível',
  loadingComponent,
  errorComponent,
  emptyComponent,
  className = '',
}: QueryStateHandlerProps) => {
  if (isLoading) {
    if (loadingComponent) {
      return <>{loadingComponent}</>;
    }
    return (
      <div className={className}>
        <LoadingSpinner message={loadingMessage} size="lg" />
      </div>
    );
  }

  if (error) {
    if (errorComponent) {
      return <>{errorComponent}</>;
    }
    const message = errorMessage || 
      (error instanceof Error ? error.message : 'Ocorreu um erro inesperado');
    return (
      <div className={className}>
        <ErrorMessage message={message} />
      </div>
    );
  }

  if (isEmpty) {
    if (emptyComponent) {
      return <>{emptyComponent}</>;
    }
    return (
      <div className={className}>
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

