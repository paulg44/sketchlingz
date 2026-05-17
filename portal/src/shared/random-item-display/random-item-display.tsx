import { useItem } from '../../core/providers/item-context';
import SharedButton from '../button/button';

interface RandomItemDisplayProps {
  name: string;
  imageUrl: string;
  altText?: string;
}

const RandomItemDisplay = (randomItem: RandomItemDisplayProps) => {
  const { respinItem } = useItem();

  if (!randomItem) {
    return <div>No item to display</div>;
  }

  return (
    <div className='border p-4 m-4'>
      <h2>{randomItem.name}</h2>
      <img className='w-3xs' src={randomItem.imageUrl} alt={randomItem.altText || randomItem.name} />
      <SharedButton labelKey='Respin Item' onClick={respinItem} appearance='primary' />
    </div>
  );
};

export default RandomItemDisplay;
