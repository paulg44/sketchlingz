import { useEffect, useState } from 'react';

interface RandomItemDisplayProps {
  name: string;
  imageUrl: string;
  altText?: string;
}

const RandomItemDisplay = (randomItem: RandomItemDisplayProps) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [randomItem.imageUrl]);

  if (!randomItem) {
    return <div>No item to display</div>;
  }

  return (
    <div className='border border-gray-300 m-4 p-4 flex flex-col items-center gap-4'>
      <h2 className='text-center font-bold text-xl'>{randomItem.name}</h2>
      <div className='relative w-32 h-32 flex items-center justify-center'>
        {imageLoading && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-gray-700' />
          </div>
        )}
        <img
          className={`w-full h-full object-contain ${imageLoading ? 'invisible' : ''}`}
          src={randomItem.imageUrl}
          alt={randomItem.altText || randomItem.name}
          onLoad={() => setImageLoading(false)}
        />
      </div>
    </div>
  );
};

export default RandomItemDisplay;
