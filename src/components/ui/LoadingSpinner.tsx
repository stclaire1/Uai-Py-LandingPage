import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
};

export const LoadingSpinner = ({ 
  message = 'Carregando...', 
  size = 'md',
  className = '',
}: LoadingSpinnerProps) => {
  const textColorClass = className.includes('text-white') 
    ? 'text-white' 
    : 'text-gray-600 dark:text-gray-400';
  
  const iconColorClass = className.includes('text-white')
    ? 'text-white'
    : 'text-gray-600 dark:text-gray-400';

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin ${iconColorClass}`} />
      {message && (
        <span className={textColorClass}>{message}</span>
      )}
    </div>
  );
};

