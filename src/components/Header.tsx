import Image from 'next/image';
import logo from 'public/images/logo.webp';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly pl-4 pr-4">
      <div className="flex text-white justify-center md:max-w-[220px]">
        <Image 
          alt="logo"
          className="h-auto w-1/2 md:w-full"
          src={logo}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4 -mb-4 md:mt-0 md:mb-0">
        <p className="text-white text-center text-xs md:text-sm font-bold">14816 PINES BOULEVARD PEMBROKE PINES, FL 33027</p>
        <p className="mt-1 text-yellow-400 text-xs md:text-sm">Mon-Sun 11 AM - 9 PM</p>
        <p className="text-white text-xs md:text-sm">(754)-703-5119</p>
        <p className="text-white text-xs md:text-sm">WWW.HCHOC.COM</p>
        <p className="mt-2 text-red-600 text-center text-base md:text-lg font-bold italic">We use Antibiotic Free & Hormone Free Chicken</p>
      </div>
    </div>
  )
};
