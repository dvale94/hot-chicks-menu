import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black flex h-fit justify-center w-screen pt-4 pb-4 md:p-4">
      <div className='max-w-[950px]'>
        <Header />
        <Body />
        <Footer />
      </div>
    </main>
  )
};
