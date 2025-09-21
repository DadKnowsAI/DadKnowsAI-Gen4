'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function HeaderNav() {
  const pathname = usePathname();
  const [expertsOnline, setExpertsOnline] = useState(247);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setExpertsOnline(prev => Math.max(200, Math.min(300, prev + Math.floor(Math.random() * 7) - 3)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Don't show header on login/signup pages
  if (pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <>
      {/* Dark Theme Header */}
      <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-2xl font-bold text-white hover:text-gray-300 transition"
              >
                DADKNOWS
              </Link>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">●</span>
              <span className="font-bold text-red-500">
                {expertsOnline} EXPERTS ONLINE
              </span>
              <div className="flex items-center bg-green-500 rounded-lg px-3 py-1 ml-4">
                <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                </svg>
                <span className="font-bold text-white">8,302 nods given</span>
              </div>
            </div>
            </div>
            <nav className="flex items-center gap-6">
              <Link 
                href="/chat" 
                className={`transition font-bold text-sm uppercase tracking-wide ${
                  pathname === '/chat' ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Ask Dad
              </Link>
              <Link 
                href="/categories/home-repair" 
                className={`transition font-bold text-sm uppercase tracking-wide ${
                  pathname?.includes('/categories') ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Explore
              </Link>
              <Link 
                href="/leaderboard" 
                className={`transition font-bold text-sm uppercase tracking-wide ${
                  pathname === '/leaderboard' ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Leaderboard
              </Link>
              <Link 
                href="/profile" 
                className={`transition font-bold text-sm uppercase tracking-wide ${
                  pathname === '/profile' ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Profile
              </Link>
              <Link 
                href="/login" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide transition"
              >
                Join the Dads
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}