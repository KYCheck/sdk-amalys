'use client';

import Link from 'next/link';
import Form from '../components/form'
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-white'>
      <Image
        src="/images/background.png"
        alt="background"
        layout='fill'
      />
      <div className='backdrop-blur-3xl flex flex-col min-h-screen mx-auto' style={{ maxWidth: '1500px' }}>
        <main className="flex-grow">
          <section className='text-center min-h-screen flex flex-col justify-center relative'>

              <Form />

          </section>
        </main>
      </div>
    </div >
  );
}