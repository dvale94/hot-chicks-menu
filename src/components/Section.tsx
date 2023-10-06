import Item, { ItemProps }  from "@/components/Item";

type SectionProps = {
  heading: string;
  itemBasisStyle?: string;
  items: ItemProps[];
};

export default function Section({ heading, itemBasisStyle, items }: SectionProps) {
  return (
    <div className="flex flex-col border-2 border-red-600 relative rounded-md items-center p-4 mt-6">
      <p className="absolute bg-black bottom-full font-bold left-0 m-auto right-0 -top-3 text-center text-white w-fit">{heading}</p>
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
