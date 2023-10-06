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
      <div className="flex flex-row flex-wrap justify-center w-full">
        {beverages.map(({ name, price }) => (
          <p className="text-white text-sm basis-full md:basis-1/2 text-center mt-1" key={name}>{name} <span className="text-yellow-400">{price}</span></p>
        ))}
      </div>
    </AltSection>
  )
};
