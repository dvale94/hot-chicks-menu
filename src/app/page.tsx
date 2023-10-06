import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-black to-red-900 flex h-fit justify-center w-screen pt-4 pb-4 md:p-4">
      <div className='max-w-[950px]'>
        <Header />
        <Body />
        <Footer />
      </div>
    </main>
  )
};
