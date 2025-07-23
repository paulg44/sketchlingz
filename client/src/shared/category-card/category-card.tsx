import { Card } from 'antd';

interface ISharedCategoryCard {
  title?: string;
  outerClassName?: string;
  innerClassName?: string;
}

const SharedCategoryCard = ({ title }: ISharedCategoryCard) => {
  return <Card>{title}</Card>;
};

export default SharedCategoryCard;
