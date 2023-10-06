import { ReactNode } from "react";

export default function AltSection({ children, heading }: {children: ReactNode, heading: string;}) {
  return (
    <div className="border-2 border-red-600 relative rounded-md self-center mt-5 ml-4 mr-4 p-5">
      <p className="absolute bg-black bottom-full font-bold left-0 m-auto right-0 -top-3 text-center text-white w-fit">{heading}</p>
      {children}
    </div>
  )
};
