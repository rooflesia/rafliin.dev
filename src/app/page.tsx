'use client';

import { motion } from 'framer-motion';
import { Button, Card, Separator } from '@/components/atoms';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const experiences = [
  {
    icon: '🌍',
    role: 'Frontend Developer - Fulltime',
    description:
      'Handle All Frontend Projects Including Website Development using React (Next.JS), and Mobile Development using Kotlin. Creating and Maintaining apps for goverment website and application, public company website and application.',
    company: 'PT. Quantus Telematika Indonesia',
    date: 'August 2021 - January 2023',
  },
  {
    icon: '🚗',
    role: 'Frontend Developer - Fulltime',
    description:
      'Handle Telkom DBT (Digital Business & Technology) Partnership Unit Support Website Application using ReactJS',
    company: 'PT. Telekomunikasi Indonesia',
    date: 'September 2023 - September 2024',
  },
];

const awards = [
  {
    icon: '🥉',
    title: 'Best 3 Students 2020/2021',
    description:
      'Achieving Awards as Top 3 Students at Fakultas Ilmu Terapan Telkom University 2020/2021',
    event: 'Fakultas Ilmu Terapan - Telkom University',
    date: '2021',
  },
  {
    icon: '🥈',
    title: '2nd Place AI4IMPACT SAVE TOURISM GLOBAL CHALLENGE',
    description:
      'Achieving 2nd place making a chatbot at AI4IMPACT SAVE TOURISM GLOBAL CHALLENGE with my team as Frontend Engineer',
    event: 'AI4Impact.org',
    date: '2021',
  },
];

const whatIDo = [
  {
    icon: '😎',
    title: 'End to End Website Application',
    description: 'Made a fullstack end-to-end website/mobile application',
  },
  {
    icon: '😆',
    title: 'Company Website Design and Application',
    description: 'Made a fullstack Company Profile Design and Application',
  },
  {
    icon: '😍',
    title: 'Landing Page Design and Application',
    description: 'Made a fullstack Landing Page Design and Application',
  },
  {
    icon: '😁',
    title: 'Dashboard Design and Application',
    description: 'Made a fullstack custom Dashboard Design and Application',
  },
];

const portofolio = [
  {
    // icon: '😎',
    icon: '/images/rudolf-1.png',
    title: 'Rudolf ID',
    description: 'Website Application for Rudolf ID',
    stack: ['react', 'nextjs', 'tailwind', 'antd'],
  },
  {
    // icon: '😎',
    icon: '/images/georginapparel-2.png',
    title: 'Georginapparel',
    description: 'Landing page B2C for Georgina Apparel',
    stack: ['react', 'nextjs', 'tailwind'],
  },
  {
    // icon: '😆',
    icon: '/images/envisions-1.png',
    title: 'Envisions.id',
    description: 'Made a Company Profile for Envisions',
    stack: ['wordpress'],
  },
  {
    // icon: '😍',
    icon: '/images/ikimodal-salescore.png',
    title: 'IKI Modal - Loan Application, OJK Reporting, Escrow Monitoring',
    description:
      'Made a fullstack Website Application about loan application for PT. Iki Karunia Indonesia',
    stack: ['react', 'antd', 'nodejs'],
  },
  {
    // icon: '😁',
    icon: '/images/isikulkasku-1.png',
    title: 'Foralifecycle',
    description: 'Made a fullstack B2C web application using laravel',
    stack: ['laravel', 'livewire'],
  },
  {
    // icon: '😁',
    icon: '/images/odissey-1.png',
    title: 'Odissey',
    description: 'Create and maintaining support application for Partnership Unit Telkom Indonesia',
    stack: ['react', 'bootstrap'],
  },
];

const stackImages: { [key: string]: string } = {
  react: '/images/react.png',
  nextjs: '/images/next.png',
  tailwind: '/images/tailwind.png',
  shadcn: '/images/shadcn.png',
  laravel: 'images/laravel.png',
  livewire: 'images/livewire.svg',
  antd: 'images/antd.svg',
  nodejs: 'images/nodejs.svg',
  wordpress: 'images/wordpress.png',
  bootstrap: 'images/bootstrap.png',
};

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredAward, setIsHoveredAward] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6285174464640', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={'w-full bg-zinc-100 p-6 text-white'}>
        <div className="flex items-center justify-between text-black">
          {/* Logo */}
          <div className={`ml-8 flex items-start justify-start font-sans text-2xl font-bold`}>
            Rooflesia.
          </div>

          {/* Navigation */}
          {!isMobile ? (
            <nav className={`mr-8 flex space-x-8 ${isMobile ? 'items-center' : 'items-start'}`}>
              <a href="#whatido" className="hover:underline">
                Services
              </a>
              <a href="#portofolio" className="hover:underline">
                Portofolio
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="#contact" className="hover:underline" onClick={handleWhatsAppClick}>
                Contact
              </a>
            </nav>
          ) : (
            <div></div>
          )}
        </div>
      </header>
      <div className="flex flex-col bg-zinc-100 font-body text-darkGray lg:min-h-screen lg:flex-row lg:justify-end">
        {/* Left Column */}
        <div className="lg:w-3/7 top-0 w-full p-12 lg:sticky lg:mb-8 lg:h-screen">
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
            <div className="mt-4">
              <p className="text-md font-sans">📧 : muhamadraflinaufal@gmail.com</p>
              <p className="w-100 flex items-center">
                <Image
                  className="mr-2"
                  src="/images/linkedin.png"
                  width={20}
                  height={20}
                  alt="Linkedin"
                />{' '}
                :{' '}
                <a
                  onClick={() =>
                    window.open('https://www.linkedin.com/in/muhammad-rafli-naufal/', '_blank')
                  }
                  className="text-md ml-1 cursor-pointer font-sans hover:underline"
                >
                  Muhammad Rafli Naufal
                </a>
              </p>
              <p className="text-md font-sans">☎️ : +62 85174464640</p>
            </div>
          </div>
          <Separator className="my-12 bg-black" />
          {!isMobile ? (
            <div>
              <h2 className="mt-4 w-4/5 font-sans text-4xl font-bold">
                Passionate creating great experiences for Digital Products.
              </h2>
              <div className="space-y-8">
                <Button
                  size="lg"
                  className="mr-2 rounded-full bg-black font-sans text-white"
                  onClick={handleWhatsAppClick}
                >
                  I’m Interested!
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black bg-beige font-sans text-black"
                  onClick={() => scrollToSection('portofolio')}
                >
                  See my works
                </Button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* Right Column */}
        <motion.div
          className="lg:w-4/7 w-full space-y-8 overflow-y-scroll p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section: Working Experience */}
          <div className="space-y-4">
            <div className="flex justify-between" id="working-experiences">
              <h3 className="text-xl font-semibold">Working Experiences</h3>
              <h4 className="mr-2 cursor-pointer text-sm font-semibold text-black hover:underline">
                See More
              </h4>
            </div>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 rounded-full border border-gray-200 bg-white p-4 shadow-sm"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                initial={{ opacity: 0.9, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-2xl">{exp.icon}</span>{' '}
                  {/* Replace with img if using actual icons */}
                </div>

                {/* Job Information */}
                <div className="flex-grow">
                  <div className="text-lg font-medium text-black text-gray-800">{exp.role}</div>
                  <div className="text-sm font-bold text-black">{exp.company}</div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-gray-600"
                  >
                    {exp.description}
                  </motion.div>
                </div>

                {/* Date */}
                {!isMobile ? (
                  <div className="whitespace-nowrap text-sm text-gray-500">{exp.date}</div>
                ) : (
                  <div></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Section: Awards & Recognition */}
          <section className="space-y-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold" id="awards">
                Awards & Recognition
              </h3>
              <h4 className="mr-2 cursor-pointer text-sm font-semibold text-black hover:underline">
                See More
              </h4>
            </div>
            {awards.map((exp, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 rounded-full border border-gray-200 bg-white p-4 shadow-sm"
                onHoverStart={() => setIsHoveredAward(true)}
                onHoverEnd={() => setIsHoveredAward(false)}
                initial={{ opacity: 0.9, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-2xl">{exp.icon}</span>{' '}
                  {/* Replace with img if using actual icons */}
                </div>

                {/* Job Information */}
                <div className="flex-grow">
                  <div className="text-lg font-medium text-gray-800">{exp.title}</div>
                  <div className="text-sm font-bold text-black">{exp.event}</div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      isHoveredAward ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-gray-600"
                  >
                    {exp.description}
                  </motion.div>
                </div>

                {/* Date */}
                <div className="whitespace-nowrap text-sm text-gray-500">{exp.date}</div>
              </motion.div>
            ))}
          </section>

          {/* Section: What I Do */}
          <section className="space-y-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold" id="whatido">
                What I Do
              </h3>
              <h4 className="mr-2 cursor-pointer text-sm font-semibold text-black hover:underline">
                See More
              </h4>
            </div>
            {whatIDo.map((exp, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 rounded-full border border-gray-200 bg-white p-4 shadow-sm"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-2xl">{exp.icon}</span>{' '}
                  {/* Replace with img if using actual icons */}
                </div>

                {/* Job Information */}
                <div className="flex-grow">
                  <div className="text-lg font-medium text-gray-800">{exp.title}</div>
                  <div className="mt-4 text-sm text-gray-500">{exp.description}</div>
                </div>

                <div className="whitespace-nowrap text-sm text-gray-500">
                  <ChevronRight className="mr-4" />
                </div>
              </div>
            ))}
          </section>

          {/* Section: Selected Works */}
          <section className="space-y-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold" id="portofolio">
                Portofolio
              </h3>
              <h4 className="mr-2 cursor-pointer text-sm font-semibold text-black hover:underline">
                See More
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {portofolio.map((item, key) => (
                <Card key={key} className="rounded-md bg-white p-4 text-darkGray shadow-lg">
                  <Image
                    src={item.icon}
                    alt="Work 1"
                    width={600}
                    height={400}
                    className="rounded-md"
                  />
                  <h4 className="mt-2 font-semibold">{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="mt-4 flex space-x-2">
                    {item.stack.map((tech, idx) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={idx} src={stackImages[tech]} alt={tech} className="mr-2 h-6 w-6" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
      <footer className="w-full bg-black py-6 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          {/* Footer Content */}
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fotoprofil.jpeg"
              alt="Profile Picture"
              className="h-12 w-12 rounded-full"
            />
            {/* <Image src="/images/fotoprofil.jpeg" width={240} height={240} alt="Hero Image" className="rounded-lg" /> */}

            {/* Text */}
            <div>
              <p className="text-sm font-medium">Muhammad Rafli Naufal</p>
              <p className="text-sm text-gray-400">Fullstack Developer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 flex space-x-8 md:mt-0">
            <a
              href="#services"
              className="hover:underline"
              onClick={() => scrollToSection('whatido')}
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="hover:underline"
              onClick={() => scrollToSection('portofolio')}
            >
              Portofolio
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline" onClick={handleWhatsAppClick}>
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="mt-4 md:mt-0">
            <Button
              variant="outline"
              className="border-white bg-white text-black"
              onClick={handleWhatsAppClick}
            >
              Talk with me
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
