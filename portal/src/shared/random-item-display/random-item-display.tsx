import { useEffect, useState } from 'react';
import { useItem } from '../../core/providers/item-context';
import SharedButton from '../button/button';

interface RandomItemDisplayProps {
  name: string;
  imageUrl: string;
  altText?: string;
}

const RandomItemDisplay = (randomItem: RandomItemDisplayProps) => {
  const { respinItem } = useItem();
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [randomItem.imageUrl]);

  if (!randomItem) {
    return <div>No item to display</div>;
  }

  return (
    <div className='border p-4 m-4'>
      <h2>{randomItem.name}</h2>
      <div className='w-3xs flex items-center justify-center min-h-24'>
        {imageLoading && (
          <div className='animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-gray-700' />
        )}
        <img
          className={`w-3xs ${imageLoading ? 'hidden' : ''}`}
          src={randomItem.imageUrl}
          alt={randomItem.altText || randomItem.name}
          onLoad={() => setImageLoading(false)}
        />
      </div>
      <SharedButton labelKey='Respin Item' onClick={respinItem} appearance='primary' />
    </div>
  );
};

export default RandomItemDisplay;
