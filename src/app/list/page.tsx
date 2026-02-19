'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const links = [
  {
    title: 'Website',
    url: 'https://rafliin.dev',
    description: 'Visit my personal website',
    icon: '🌐',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-rafli-naufal/',
    description: 'Connect with me on LinkedIn',
    icon: '💼',
  },
];

export default function ListPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-2xl">
          {/* Profile Section */}
          <div className="animate-fade-in mb-12 text-center">
            <div className="relative mx-auto mb-6 h-32 w-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-md"></div>
              <Image
                src="/images/circle-fotoprofil-svg.svg"
                alt="Profile"
                width={128}
                height={128}
                className="relative rounded-full border-4 border-white shadow-xl dark:border-slate-800"
              />
            </div>
            <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
              Muhammad Rafli Naufal
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Software Engineer | Full Stack Developer
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transform rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl shadow-md">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {link.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>© 2026 Muhammad Rafli Naufal. All rights reserved.</p>
      </footer>
    </div>
  );
}
