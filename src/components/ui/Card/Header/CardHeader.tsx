import { clsx } from 'clsx';

import CardHeaderTitle from './CardHeaderTitle';
import CardHeaderTrailingComponent from './CardHeaderTrailingComponent';

const CardHeader = ({ children }: React.PropsWithChildren) => {
  const hasCardBody = false;
  return (
    <div
      className={clsx(
        'flex-wrap gap-2 items-center justify-between lg:flex lg:flex-nowrap',
        { 'mb-4': hasCardBody },
      )}
    >
      {children}
    </div>
  );
};

CardHeader.Title = CardHeaderTitle;
CardHeader.TrailingComponent = CardHeaderTrailingComponent;

export default CardHeader;