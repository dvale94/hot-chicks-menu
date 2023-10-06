export type ItemProps = {
  basisStyle?: string;
  description: string;
  name: string;
  hasSizes: boolean;
  price?: string;
  sizes?: {
    text: string;
    price: string;
  }[];
};

export default function Item({
  basisStyle='basis-1/4',
  description,
  name,
  hasSizes,
  price,
  sizes
}: ItemProps) {
  return (
    <div className={`${basisStyle} flex flex-col items-center mt-4`}>
      <p className="text-red-600 text-center font-bold">{name}</p>
      <p className="text-white text-center text-xs">{description}</p>
      {!hasSizes &&
        <p className="text-yellow-400">{price}</p>
      }
      {sizes && (
        <div className="flex flex-row gap-3">
          {sizes.map(({price, text}) => (
            <div className="flex flex-col items-center" key={text}>
              <p className="text-white">{text}</p>
              <p className="text-yellow-400">{price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};
