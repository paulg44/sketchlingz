interface ISkeletonElement {
  width: string;
  height: string;
  className?: string;
}

const SkeletonElement = ({ width, height, className }: ISkeletonElement) => (
  <div
    style={{ height: height, width: width }}
    className={`rounded-md bg-gray-100 animate-pulse max-w-full ${className}`}
  />
);

export default SkeletonElement;
