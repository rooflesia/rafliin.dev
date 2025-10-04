'use client';

import { Button } from '@/components/atoms';
import Image from 'next/image';
import { ArrowUpRight, Quote } from 'lucide-react';

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
    icon: '💼',
    role: 'Fullstack Developer',
    description:
      'Developing and maintaining end-to-end Duluin HRMS Web and App for managing Employee Data, Attendance, Claim, Leaves, Payroll, and Performance Reviews. Utilizing technologies such as React, Next.js, Laravel, Node.js, and MySQL with microservices to build scalable and efficient solutions.',
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

const clients = [
  {
    name: 'Ahmad Syahrul',
    role: 'CTO, Duluin Group',
    quote:
      "Rafli's fullstack development skills have been instrumental in building our HRMS platform. His expertise in React, Laravel, and database optimization delivered exceptional results.",
    image: '/images/profilez.jpg',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Project Manager, PT. Telkom Indonesia',
    quote:
      'Working with Rafli on our support web application was seamless. His frontend development skills and attention to detail made the project a huge success.',
    image: '/images/profilez.jpg',
  },
];

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
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white"
                  >
                    View Work
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

      {/* About Me Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-black">ABOUT ME</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Being a fullstack developer is truly a rewarding experience as it offers the
                opportunity to bring digital ideas to life from concept to deployment. With 3+ years
                of experience in web and mobile app development, I specialize in creating end-to-end
                solutions using modern technologies like React, Next.js, Vue.js, Laravel, Node.js,
                Docker, and MySQL. My passion lies in building scalable, efficient, and
                user-friendly applications that solve real business problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-black">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-black">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-black">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-black">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 rounded-2xl bg-white p-6 shadow-lg"
              >
                <div className="text-3xl">{exp.icon}</div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-black">{exp.role}</h3>
                  <p className="mb-2 text-gray-600">{exp.company}</p>
                  <p className="mb-4 text-sm text-gray-500">{exp.date}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
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
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <div className="mb-2 text-2xl font-bold">
                Muhammad Rafli Naufal <span className="text-white">©</span>
              </div>
              <p className="text-gray-400">Fullstack Developer</p>
            </div>

            <div className="mb-4 flex space-x-8 md:mb-0">
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
            </div>

            <div className="text-sm text-gray-400">
              © 2025 Muhammad Rafli Naufal. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
