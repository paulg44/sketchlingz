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
    <>
      <div className='border border-gray-300 m-4 flex flex-col items-center space-y-4 h-lg w-lg justify-center'>
        <h2 className='text-center font-bold font-sans text-2xl p-4'>{randomItem.name}</h2>

        <div className='w-lg h-lg flex items-center justify-center'>
          {imageLoading && (
            <div className='animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-gray-700' />
          )}
          <img
            className={`w-lg ${imageLoading ? 'hidden' : ''}`}
            src={randomItem.imageUrl}
            alt={randomItem.altText || randomItem.name}
            onLoad={() => setImageLoading(false)}
          />
        </div>
      </div>
    </>
  );
};

export default RandomItemDisplay;
