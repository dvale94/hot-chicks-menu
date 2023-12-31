import AltSection from "@/components/AltSection";

type SidesSectionProps = {
  heading: string;
  largePrice: string;
  sides: string[];
  smallPrice: string;
};

export default function SidesSection({ heading, largePrice ,sides, smallPrice }: SidesSectionProps) {
  return (
    <AltSection heading={heading}>
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center flex-col justify-evenly w-full">
          {sides.map(( side, index ) => (
            <p
              className={`text-${(index % 2 == 0) ? 'yellow-400' : 'red-600'} text-sm text-center mt-1 md:basis-1/3`} 
              key={side}
            >
              {side}
            </p>
          ))}
        </div>
        <div className="flex flex-row gap-6 mt-4 text-sm w-full justify-center">
          <p className="text-white">Small {smallPrice}</p>
          <p className="text-white">Large {largePrice}</p>
        </div>
      </div>
    </AltSection>
  )
};
