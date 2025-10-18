interface RandomItemDisplayProps {
  name: string;
  imageUrl: string;
  altText?: string;
}

const randomItemDisplay = (randomItem: RandomItemDisplayProps) => {
  if (!randomItem) {
    return <div>No item to display</div>;
  }

  return (
    <div>
      <h2>{randomItem.name}</h2>
      <img src={randomItem.imageUrl} alt={randomItem.altText || randomItem.name} />
    </div>
  );
};

export default randomItemDisplay;
