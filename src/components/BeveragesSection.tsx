import AltSection from "@/components/AltSection";

type BeveragesSectionProps = {
  beverages: {
    name: string;
    price: string;
  }[];
  heading: string;
};

export default function BeveragesSection({ beverages, heading }: BeveragesSectionProps) {
  return (
    <AltSection heading={heading}>
      <div className="flex flex-col justify-center w-full">
        {beverages.map(({ name, price }) => (
          <div key={name} className="flex flex-col justify-center w-full">
            <p className="text-white text-sm text-center mt-1">{name}</p>
            <p className="text-yellow-400 text-center">{price}</p>
          </div>
        ))}
      </div>
    </AltSection>
  )
};
