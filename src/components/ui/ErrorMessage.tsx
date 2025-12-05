interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage = ({ message, className = '' }: ErrorMessageProps) => {
  const textColorClass = className.includes('text-white')
    ? 'text-white'
    : 'text-red-400';

  return (
    <div className={`text-center ${className}`}>
      <p className={`${textColorClass} text-lg`}>{message}</p>
    </div>
  );
};

