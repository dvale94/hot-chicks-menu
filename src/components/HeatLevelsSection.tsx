import AltSection from "@/components/AltSection";

type HeatLevelsSectionProps = {
  heading: string;
  levels: {
    color: string;
    description: string;
    level: string;
  }[];
};

export default function HeatLevelsSection({ heading, levels }: HeatLevelsSectionProps) {
  return (
    <AltSection heading={heading}>
      <div className="flex flex-col justify-center">
        {levels.map(({ color, description, level }) => (
          <p className="text-white text-center text-sm mt-1" key={level}><span className={`text-${color}`}>{level}</span> ({description})</p>
        ))}
      </div>

      {/* hidden divs for color loading */}
      <div className="hidden invisible text-yellow-100 text-yellow-300 text-yellow-600"></div>
    </AltSection>
  )
};
