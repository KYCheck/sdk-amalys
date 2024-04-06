'use client';

import Link from 'next/link';
import Form from '../components/form'
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-dark_DYDX'>
      <div className='backdrop-blur-3xl flex flex-col min-h-screen mx-auto' style={{ maxWidth: '1500px' }}>
        <div className='absolute z-1'>
          <Image
            src="/images/background.png"
            alt="background"
            width={6000}
            height={4000}
          />
        </div>
        <main className="flex-grow">
          <section className='text-center min-h-screen flex flex-col justify-center relative z-10'>
            <Form />
          </section>
        </main>
      </div>
    </div >
  );
}