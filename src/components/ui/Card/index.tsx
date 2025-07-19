import CardHeader from './Header/CardHeader';
import CardBody from './CardBody';

const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="overflow-hidden bg-white p-6 rounded-lg dark:bg-zinc-900">{children}</div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;