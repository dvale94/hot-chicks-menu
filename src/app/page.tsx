import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Image from 'next/image';
import border from 'public/images/border.webp';

export default function Home() {
  return (
    <main className="bg-black flex relative h-fit justify-center w-screen pt-4 pb-4 md:p-4">
      <div className='max-w-[950px]'>
        <Header />
        <Body />
        <Footer />
      </div>

      <Image 
        alt='left border'
        src={border}
        className='hidden md:block absolute top-0 left-0 h-full w-20'
        priority
      />

      <Image 
        alt='right border'
        src={border}
        className='hidden md:block absolute top-0 right-0 h-full w-20 rotate-180'
        priority
      />
    </main>
  )
};
