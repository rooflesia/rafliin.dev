'use client';

import { Button } from '@/components/atoms';
import Image from 'next/image';
import { ArrowUpRight, Linkedin, Instagram, Mail } from 'lucide-react';

const services = [
  {
    icon: '�',
    title: 'Frontend Development',
    description:
      'Building responsive and interactive web applications using React, Next.js, Vue.js with modern CSS frameworks like Tailwind CSS.',
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    description:
      'Developing robust server-side applications with Node.js, Laravel PHP, and creating scalable APIs with proper authentication.',
  },
  {
    icon: '�',
    title: 'Mobile App Development',
    description:
      'Creating cross-platform mobile applications using React Native and progressive web apps for optimal user experience.',
  },
  {
    icon: '�️',
    title: 'Database Management',
    description:
      'Designing and optimizing MySQL databases, implementing efficient queries and ensuring data integrity and security.',
  },
  {
    icon: '🐳',
    title: 'DevOps & Deployment',
    description:
      'Containerizing applications with Docker, setting up CI/CD pipelines, and managing cloud deployments for scalability.',
  },
  {
    icon: '�',
    title: 'Business Development',
    description:
      'Providing technical consulting, project planning, and strategic solutions to help businesses achieve their digital transformation goals.',
  },
];

const experiences = [
  {
    icon: '✈️',
    role: 'Software Engineer Lead',
    description:
      'Leading the development of SATU Digital Creative Web & Apps Development Team. Collaborating with cross-functional teams to ensure high-quality deliverables and continuous improvement. Also helping Duluin Group in building and maintaining internal tools and applications to streamline operations and enhance productivity.',
    company: 'Satu Digital Creative',
    date: 'October 2025 - Present',
  },
  {
    icon: '💼',
    role: 'Fullstack Developer',
    description:
      'Developing and maintaining end-to-end Duluin HR Management System Web and App for managing Employee Data, Attendance, Claim, Leaves, Payroll, and Performance Reviews. Utilizing technologies such as React, Next.js, Laravel, Node.js, and MySQL with microservices to build scalable and efficient solutions.',
    company: 'Duluin Group',
    date: 'April 2025 - Present',
  },
  {
    icon: '🚀',
    role: 'Frontend Web Developer',
    description:
      'Developed Support Web Application for managing customer inquiries and support tickets, improving response times and customer satisfaction. Utilized React, Next.js, and Bootstrap CSS to create a user-friendly interface.',
    company: 'PT. Telekomunikasi Indonesia',
    date: 'September 2023 - July 2024',
  },
  {
    icon: '🚀',
    role: 'Frontend Developer',
    description:
      'Developed and maintained several government websites and public sector applications, ensuring responsiveness and performance. Using technologies such as React & Next.js, Kotlin, SolidJS, and Tailwind CSS to build scalable and efficient web solutions.',
    company: 'PT. Quantus Telematika Indonesia',
    date: 'August 2021 - January 2023',
  },
];

const portfolioItems = [
  {
    image: '/images/rudolf-1.png',
    title: 'Rudolf ID',
    description:
      'Dashboard for Key Performance Indicator (KPI) Internal and Reporting System Rudolf Group',
    category: 'Dashboard',
  },
  {
    image: '/images/georginapparel-2.png',
    title: 'Georgina Apparel',
    description: 'E-commerce platform design for fashion brand',
    category: 'E-commerce',
  },
  {
    image: '/images/envisions-1.png',
    title: 'Envisions',
    description: 'Landing page design for a Company Profile',
    category: 'Landing Page',
  },
  {
    image: '/images/ikimodal-salescore.png',
    title: 'IKI Modal',
    description: 'Financial platform interface design',
    category: 'Fintech',
  },
];

const technologies = [
  { name: 'React', logo: '/logo/react-white.png' },
  { name: 'Next.js', logo: '/logo/nextjs-white.png' },
  { name: 'Vue.js', logo: '/logo/vuejs-white.png' },
  { name: 'Laravel', logo: '/logo/laravel-white.png' },
  { name: 'Node.js', logo: '/logo/nodejs-white.svg' },
  { name: 'Docker', logo: '/logo/docker-white.png' },
  { name: 'MySQL', logo: '/logo/mysql-white.png' },
  { name: 'Go Lang', logo: '/logo/golang-white.png' },
  { name: 'Tailwind CSS', logo: '/logo/tailwind-white.png' },
  { name: 'PostgreSQL', logo: '/logo/postgresql-white.webp' },
];

// const clients = [
//   {
//     name: 'Ahmad Syahrul',
//     role: 'CTO, Duluin Group',
//     quote:
//       "Rafli's fullstack development skills have been instrumental in building our HRMS platform. His expertise in React, Laravel, and database optimization delivered exceptional results.",
//     image: '/images/profilez.jpg',
//   },
//   {
//     name: 'Siti Nurhaliza',
//     role: 'Project Manager, PT. Telkom Indonesia',
//     quote:
//       'Working with Rafli on our support web application was seamless. His frontend development skills and attention to detail made the project a huge success.',
//     image: '/images/profilez.jpg',
//   },
// ];

export default function Home() {
  const handleContactClick = () => {
    window.open('https://wa.me/6285174464640', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black py-6 text-white">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-2xl font-bold">
            Muhammad Rafli Naufal <span className="text-white">©</span>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="transition-colors hover:text-gray-300">
              About Me
            </a>
            <a href="#work" className="transition-colors hover:text-gray-300">
              Work
            </a>
            <a href="#services" className="transition-colors hover:text-gray-300">
              Services
            </a>
            <a href="#experience" className="transition-colors hover:text-gray-300">
              Experience
            </a>
            {/* <a href="#testimonials" className="hover:text-gray-300 transition-colors">Testimonials</a> */}
          </div>
          <Button className="bg-white text-black hover:bg-gray-100" onClick={handleContactClick}>
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div>
                <h1 className="mb-6 text-6xl font-bold leading-tight text-black lg:text-8xl">
                  Muhammad Rafli<span className="text-black">©</span>
                  <br />
                  Naufal
                </h1>
                <p className="mb-8 text-xl text-gray-600">Fullstack Developer Based in Bandung</p>
                <div className="flex space-x-4">
                  <Button
                    className="bg-black text-white hover:bg-gray-600 hover:text-white"
                    onClick={handleContactClick}
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/profilez.jpg"
                  alt="Muhammad Rafli Naufal"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="overflow-hidden bg-black py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
            Technologies I Work With
          </h2>
          <div className="relative">
            <div className="animate-scroll flex space-x-12">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={index} className="flex-shrink-0 transition-transform hover:scale-110">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={120}
                    height={120}
                    className="h-20 w-auto object-contain transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-black">ABOUT ME</h2>
            <div className="mx-auto h-1 w-24 bg-black"></div>
          </div>

          <div className="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700">
                I&apos;m a <span className="font-bold text-black">Software Engineer Lead</span> and{' '}
                <span className="font-bold text-black">Fullstack Developer</span> based in Bandung,
                Indonesia, with <span className="font-bold text-black">3+ years</span> of experience
                in building web and mobile applications.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Currently leading development at SATU Digital Creative and working at Duluin Group,
                specializing in HR Management Systems, employee platforms, and government web
                applications.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                I work with React, Next.js, Vue.js, Laravel, Node.js, Go Lang, Docker, MySQL, and
                modern CSS frameworks like Tailwind and Bootstrap to build scalable solutions from
                concept to deployment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                <div className="mb-3 text-6xl font-bold text-black">3+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-gray-600">
                  Years Experience
                </div>
              </div>
              <div className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                <div className="mb-3 text-6xl font-bold text-black">20+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-gray-600">
                  Projects Completed
                </div>
              </div>
              <div className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                <div className="mb-3 text-6xl font-bold text-black">12+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-gray-600">
                  Technologies Mastered
                </div>
              </div>
              <div className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                <div className="mb-3 text-6xl font-bold text-black">4+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-gray-600">
                  Companies Worked
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-black">SERVICES</h2>
            <Button variant="ghost" className="text-black hover:text-gray-600">
              View All <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-black">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-black">SELECTED WORKS</h2>
            <Button variant="ghost" className="text-black hover:text-gray-600">
              View All Work <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-bold text-black">EXPERIENCES</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gray-400 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-black group-hover:shadow-lg">
                  <span className="transition-all group-hover:animate-bounce">{exp.icon}</span>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-black transition-colors group-hover:text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="mb-2 text-lg font-semibold text-gray-700">{exp.company}</p>
                  <p className="mb-6 text-sm font-medium text-gray-500">{exp.date}</p>
                  <p className="leading-relaxed text-gray-600">{exp.description}</p>
                </div>
                <div className="absolute right-0 top-0 h-1 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      {/* <section id="testimonials" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">MY CLIENT</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-8 border border-gray-700 rounded-2xl"
              >
                <Quote className="text-white mb-6 h-8 w-8" />
                <p className="text-lg mb-6 leading-relaxed">{client.quote}</p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold">{client.name}</div>
                    <div className="text-gray-400">{client.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact CTA Section */}
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <div>
            <h2 className="mb-6 text-5xl font-bold">
              That&apos;s All About Me, Feel
              <br />
              Free to Say Hi!
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
              Ready to transform your business with cutting-edge technology? Let&apos;s discuss your
              next web or mobile app project and build something exceptional together.
            </p>
            <Button
              className="bg-white px-8 py-3 text-lg text-black hover:bg-gray-100"
              onClick={handleContactClick}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 text-2xl font-bold">
                Muhammad Rafli Naufal <span className="text-white">©</span>
              </div>
              <p className="mb-4 text-gray-400">Fullstack Developer</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-rafli-naufal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-white hover:text-black"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/rafliin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-white hover:text-black"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:muhamadraflinaufal@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all hover:bg-white hover:text-black"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-gray-400 transition-colors hover:text-white">
                  About Me
                </a>
                <a href="#work" className="text-gray-400 transition-colors hover:text-white">
                  Work
                </a>
                <a href="#services" className="text-gray-400 transition-colors hover:text-white">
                  Services
                </a>
                <a href="#experience" className="text-gray-400 transition-colors hover:text-white">
                  Experience
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Get in Touch</h3>
              <p className="mb-2 text-gray-400">muhamadraflinaufal@gmail.com</p>
              <p className="text-gray-400">Bandung, Indonesia</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2025 Muhammad Rafli Naufal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
