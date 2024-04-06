'use client';

import Link from 'next/link';
import Header from '../components/header'
import Footer from '../components/footer'
import form from '../components/form'

export default function Home() {
  return (
    <div className='bg-light_blue'>
      <div className='backdrop-blur-3xl flex flex-col min-h-screen mx-auto' style={{ maxWidth: '1500px' }}>
        <Header />
        <main className="flex-grow">
          <section className='text-center min-h-screen flex flex-col justify-center relative'>
            <div className='relative z-10 mx-auto w-2/3'>
              {/* <form /> */}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div >
  );
}