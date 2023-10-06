'use client'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className="flex flex-col gap-1 items-center mt-4 w-full p-4">
      <p className="text-center text-white text-xs">*Consuming raw or undercooked poultry may increase vour risk of foodborne illness, especially if you have certain medical conditions</p>
      <p className="text-center text-white text-xs">Disclaimer: Menu Items may be cooked or come into contact with Eggs, Soy, Dairy. We use vegetable oil.</p>
      <div className="flex flex-row gap-2 items-center mt-2">
        <Icon color='white' height={36} icon="fa6-brands:square-facebook" width={36} />
        <Icon color='white' height={36} icon="mdi:instagram" width={36} />
        <p className="text-white text-xl">@SoFloHoc</p>
      </div>
    </div>
  )
};
