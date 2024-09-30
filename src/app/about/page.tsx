'use client';

import { Button, Separator } from '@/components/atoms';
import Image from 'next/image';

export default function About() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6285174464640', '_blank');
  };
  return (
    // <MainLayout>
    //   <Container>
    //     <h1 className="mb-8">About page</h1>
    //   </Container>
    // </MainLayout>
    <>
      <header className="w-full bg-beige p-6 text-white">
        <div className="flex items-center justify-between text-black">
          {/* Logo */}
          <div className="ml-8 flex items-start justify-start font-sans text-2xl font-bold">
            Rooflesia.
          </div>

          {/* Navigation */}
          <nav className="mr-8 flex space-x-8">
            <a href="#whatido" className="hover:underline">
              Services
            </a>
            <a href="#portofolio" className="hover:underline">
              Portofolio
            </a>
            <a href="/about" className="hover:underline">
              About me
            </a>
            <a href="#contact" className="hover:underline" onClick={handleWhatsAppClick}>
              Contact me
            </a>
          </nav>
        </div>
      </header>
      <div className="flex min-h-screen bg-beige font-body text-darkGray">
        <div className="w-3/7 sticky top-0 h-screen p-12">
          <div className="space-y-4">
            <Image
              src="/images/fotoprofil.jpeg"
              width={240}
              height={240}
              alt="Hero Image"
              className="rounded-lg"
            />

            <h1 className="font-sans text-4xl font-bold">Hello!👋</h1>
            <h1 className="font-sans text-4xl font-bold">I’m Muhammad Rafli Naufal</h1>
            <p className="font-sans text-xl">Fullstack Developer based in Bandung, Indonesia.</p>
          </div>
          <Separator className="my-12 bg-black" />
          <h2 className="mt-4 w-4/5 font-sans text-4xl font-bold">
            Passionate creating great experiences for Digital Products.
          </h2>
          <div className="mt-4 space-y-8">
            <Button
              size="lg"
              className="mr-2 rounded-full bg-black font-sans text-white"
              onClick={handleWhatsAppClick}
            >
              I’m Interested!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
