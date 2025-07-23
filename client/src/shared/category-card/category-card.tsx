import { Card } from 'antd';
import kidsCategoryData from '../../core/data/kids-categories.json';

interface ISharedCategoryCard {
  title?: string;
  outerClassName?: string;
  innerClassName?: string;
}

const SharedCategoryCard = ({ title }: ISharedCategoryCard) => {
  const mainCategories = Object.keys(kidsCategoryData.kidsCategories);

  return (
    <div>
      {mainCategories.map((categoryItem, index) => (
        <Card key={index} title={categoryItem}>
          {title}
        </Card>
      ))}
    </div>
  );
};

export default SharedCategoryCard;
