import Item, { ItemProps }  from "@/components/Item";

type SectionProps = {
  heading: string;
  itemBasisStyle?: string;
  items: ItemProps[];
};

export default function Section({ heading, itemBasisStyle, items }: SectionProps) {
  return (
    <div className="flex flex-col items-center p-4 mt-4">
      <p className="text-white text-xl font-bold underline">{heading}</p>
      <div className="flex flex-row flex-wrap justify-center w-full">
        {items.map((item) => (
          <Item
            basisStyle={itemBasisStyle}
            description={item.description}
            key={item.name}
            name={item.name}
            hasSizes={item.hasSizes}
            price={item.price}
            sizes={item.sizes}
          />
        ))}
      </div>
    </div>
  )
};
