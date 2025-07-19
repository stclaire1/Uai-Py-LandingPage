import { getIconByName, type IconName } from '@/lib/Icons';

type CardHeaderTitleProps = {
    title?: string;
    description?: string;
    icon?: IconName;
  };

  
  const CardHeaderTitle = ({
    title,
    description,
    icon,
  }: CardHeaderTitleProps) => {

    const Icon = getIconByName(icon)

    return (
      <div className="grow">
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="sm:block">
              {Icon && (
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            )}
            </div>
          )}
          {title && (
            <h3 className="text-xl font-bold leading-6 text-primary dark:text-primary">{title}</h3>
          )}
        </div>
        {description && <p className="text-description">{description}</p>}
      </div>
    );
  };
  
  export default CardHeaderTitle;