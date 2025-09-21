'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  TrendingUp, Clock, CheckCircle, Star, BookOpen,
  Wrench, Car, ChefHat, Baby,
  ThumbsUp, MessageCircle, Bookmark, MoreHorizontal,
  Circle, Lightbulb
} from 'lucide-react';

const DadKnowsHomepage = () => {
  const [solvedToday, setSolvedToday] = useState(1847);
  const [nodsToday, setNodsToday] = useState(8293);
  const [expertsOnline, setExpertsOnline] = useState(247);
  const [nodCounts, setNodCounts] = useState<Record<string, number>>({});
  const [activeFilter, setActiveFilter] = useState<'trending' | 'recent' | 'solved' | 'live'>('trending');

  useEffect(() => {
    const interval = setInterval(() => {
      setSolvedToday(prev => prev + Math.floor(Math.random() * 3));
      setNodsToday(prev => prev + Math.floor(Math.random() * 10));
      setExpertsOnline(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  // Thread data for different filters
  const trendingThreads = [
    {
      id: '1',
      author: 'SarahM',
      time: '2 minutes ago',
      category: 'Plumbing',
      solved: true,
      title: 'Help! Water won\'t stop running in toilet!',
      expert: 'MikeThePlumber',
      expertNods: '2.8k',
      solution: 'Classic flapper issue. Turn off water valve behind toilet, flush to empty tank, then replace the rubber flapper. It\'s a $5 fix at any hardware store - takes 10 minutes max!',
      nods: 127,
      comments: 8,
      avatar: 'S',
      avatarColor: 'from-blue-500 to-purple-600',
      typing: false
    },
    {
      id: '2',
      author: 'DavidK',
      time: '5 minutes ago',
      category: 'Cooking',
      solved: false,
      title: 'My bread keeps coming out dense. What am I doing wrong?',
      expert: null,
      expertNods: null,
      solution: null,
      nods: 45,
      comments: 12,
      avatar: 'D',
      avatarColor: 'from-green-500 to-teal-600',
      typing: true
    }
  ];

  const recentThreads = [
    {
      id: '3',
      author: 'NewbieBob',
      time: '1 minute ago',
      category: 'Electrical',
      solved: false,
      title: 'Light switch making buzzing sound - is this dangerous?',
      expert: null,
      expertNods: null,
      solution: null,
      nods: 23,
      comments: 5,
      avatar: 'N',
      avatarColor: 'from-yellow-500 to-orange-600',
      typing: false
    },
    {
      id: '4',
      author: 'HandyMike',
      time: '3 minutes ago',
      category: 'Home Repair',
      solved: false,
      title: 'Drywall repair techniques for beginners',
      expert: null,
      expertNods: null,
      solution: null,
      nods: 67,
      comments: 9,
      avatar: 'H',
      avatarColor: 'from-purple-500 to-pink-600',
      typing: false
    },
    {
      id: '1',
      author: 'SarahM',
      time: '2 minutes ago',
      category: 'Plumbing',
      solved: true,
      title: 'Help! Water won\'t stop running in toilet!',
      expert: 'MikeThePlumber',
      expertNods: '2.8k',
      solution: 'Classic flapper issue. Turn off water valve behind toilet, flush to empty tank, then replace the rubber flapper. It\'s a $5 fix at any hardware store - takes 10 minutes max!',
      nods: 127,
      comments: 8,
      avatar: 'S',
      avatarColor: 'from-blue-500 to-purple-600',
      typing: false
    }
  ];

  const solvedThreads = [
    {
      id: '1',
      author: 'SarahM',
      time: '2 minutes ago',
      category: 'Plumbing',
      solved: true,
      title: 'Help! Water won\'t stop running in toilet!',
      expert: 'MikeThePlumber',
      expertNods: '2.8k',
      solution: 'Classic flapper issue. Turn off water valve behind toilet, flush to empty tank, then replace the rubber flapper. It\'s a $5 fix at any hardware store - takes 10 minutes max!',
      nods: 127,
      comments: 8,
      avatar: 'S',
      avatarColor: 'from-blue-500 to-purple-600',
      typing: false
    },
    {
      id: '5',
      author: 'TeacherTina',
      time: '1 hour ago',
      category: 'Cooking',
      solved: true,
      title: 'How do I fix overcooked pasta?',
      expert: 'ChefCarla',
      expertNods: '1.9k',
      solution: 'Try rinsing with cold water to stop cooking, then reheat gently in sauce. For future, test pasta 2 minutes before package time!',
      nods: 89,
      comments: 15,
      avatar: 'T',
      avatarColor: 'from-indigo-500 to-blue-600',
      typing: false
    },
    {
      id: '6',
      author: 'SafetyFirst',
      time: '2 hours ago',
      category: 'Electrical',
      solved: true,
      title: 'GFCI outlet keeps tripping - troubleshooting help?',
      expert: 'ElectricianEd',
      expertNods: '3.2k',
      solution: 'Check for moisture first, then test appliances one by one. If it trips immediately, you likely have a ground fault. Call a licensed electrician if unsure!',
      nods: 156,
      comments: 23,
      avatar: 'S',
      avatarColor: 'from-red-500 to-pink-600',
      typing: false
    }
  ];

  const liveFeedThreads = [
    {
      id: '7',
      author: 'QuickFix',
      time: '30 seconds ago',
      category: 'Plumbing',
      solved: false,
      title: 'Kitchen sink clogged - need immediate help!',
      expert: null,
      expertNods: null,
      solution: null,
      nods: 12,
      comments: 3,
      avatar: 'Q',
      avatarColor: 'from-red-500 to-pink-600',
      typing: true
    },
    {
      id: '8',
      author: 'EmergencyMom',
      time: '1 minute ago',
      category: 'Cooking',
      solved: false,
      title: 'Baby food too hot - how to cool quickly?',
      expert: null,
      expertNods: null,
      solution: null,
      nods: 8,
      comments: 2,
      avatar: 'E',
      avatarColor: 'from-orange-500 to-yellow-600',
      typing: true
    },
    {
      id: '9',
      author: 'UrgentDad',
      time: '2 minutes ago',
      category: 'Electrical',
      solved: false,
      title: 'Power went out - circuit breaker keeps tripping',
      expert: null,
      expertNods: null,
      solution: null,
      nods: 15,
      comments: 4,
      avatar: 'U',
      avatarColor: 'from-yellow-500 to-orange-600',
      typing: true
    }
  ];

  const getCurrentThreads = () => {
    switch (activeFilter) {
      case 'recent':
        return recentThreads;
      case 'solved':
        return solvedThreads;
      case 'live':
        return liveFeedThreads;
      default:
        return trendingThreads;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">D</div>
                DadKnows
              </Link>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for help..." 
                  className="w-96 bg-gray-100 rounded-full px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <nav className="flex items-center gap-2">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/categories" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Users className="w-4 h-4" />
                Communities
              </Link>
              <Link href="/education" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <BookOpen className="w-4 h-4" />
                Learn AI
              </Link>
              <Link href="/leaderboard" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Trophy className="w-4 h-4" />
                Rankings
              </Link>
              
              <div className="ml-4 flex items-center gap-3 border-l border-gray-200 pl-4">
                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">3</span>
                </button>
                <a href="/profile" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Live Stats Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
                <span className="text-sm font-bold">{expertsOnline} experts online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-bold">{solvedToday.toLocaleString()} solved today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.754a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <span className="text-sm font-bold">{nodsToday.toLocaleString()} nods given</span>
              </div>
            </div>
            <Link href="/chat" className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-blue-50 transition">
              Ask Dad AI →
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            {/* Quick Categories */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 bg-blue-50">
                <h3 className="font-bold text-gray-900">Quick Help</h3>
              </div>
              <div className="p-2">
                <Link href="/categories/home-repair" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Home Repair</div>
                    <div className="text-xs font-bold text-gray-500">247 active</div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </Link>
                <Link href="/categories/cooking" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Cooking</div>
                    <div className="text-xs font-bold text-gray-500">183 active</div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </Link>
                <Link href="/categories/car-trouble" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Car Trouble</div>
                    <div className="text-xs font-bold text-gray-500">156 active</div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </Link>
                <Link href="/categories/parenting" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Baby className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Parenting</div>
                    <div className="text-xs font-bold text-gray-500">94 active</div>
                  </div>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                </Link>
              </div>
              <div className="px-4 py-2 border-t border-gray-200">
                <Link href="/categories" className="text-sm text-blue-600 hover:text-blue-700 font-bold">
                  Browse all categories →
                </Link>
              </div>
            </div>

            {/* Top Experts Online */}
            <div className="bg-white rounded-xl border border-gray-200 mt-4 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-blue-50">
                <h3 className="font-bold text-gray-900">Top Experts Online</h3>
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="p-2">
                <Link href="/experts/mike-the-plumber" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      M
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">MikeThePlumber</div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">Super Dad</span>
                      <span className="text-xs font-bold text-gray-500">2.8k nods</span>
                    </div>
                  </div>
                </Link>
                <Link href="/experts/chef-carla" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      C
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">ChefCarla</div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">Pro Chef</span>
                      <span className="text-xs font-bold text-gray-500">1.9k nods</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-span-6">
            {/* Dad AI Chat Interface */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 mb-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl">
                  🧔
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-900">Dad&apos;s Here to Help</h2>
                  <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Currently helping 14 people
                  </span>
                </div>
                <Link href="/chat" className="text-sm text-blue-600 hover:text-blue-700 font-bold">
                  Open Full Chat →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4 min-h-[120px] border border-gray-200">
                <p className="text-gray-700 mb-2 font-bold">Hey there! What&apos;s going on? Car trouble? Leaky faucet? Burnt dinner?</p>
                <p className="text-gray-600 text-sm font-bold">I&apos;ve got <span className="text-blue-600 font-bold">ChefCarla (2,847 nods)</span> and <span className="text-blue-600 font-bold">MikeThePlumber (1,923 nods)</span> standing by if we need expert backup!</p>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your question here... (e.g., &apos;My toilet won&apos;t stop running&apos;)"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 pr-20 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.location.href = '/chat';
                    }
                  }}
                />
                <button 
                  onClick={() => window.location.href = '/chat'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg transition text-sm font-bold"
                >
                  Ask
                </button>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2">
                  <Link href="/categories/home-repair" className="text-xs font-bold bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition cursor-pointer">
                    🚿 Plumbing issue
                  </Link>
                  <Link href="/categories/cooking" className="text-xs font-bold bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition cursor-pointer">
                    🍳 Cooking help
                  </Link>
                  <Link href="/categories/car-trouble" className="text-xs font-bold bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition cursor-pointer">
                    🚗 Car problem
                  </Link>
                </div>
              </div>
            </div>

            {/* Feed Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveFilter('trending')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold transition ${
                    activeFilter === 'trending' 
                      ? 'bg-blue-50 border-blue-200 text-gray-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  Trending
                </button>
                <button 
                  onClick={() => setActiveFilter('recent')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold transition ${
                    activeFilter === 'recent' 
                      ? 'bg-blue-50 border-blue-200 text-gray-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  Recent
                </button>
                <button 
                  onClick={() => setActiveFilter('solved')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold transition ${
                    activeFilter === 'solved' 
                      ? 'bg-blue-50 border-blue-200 text-gray-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  Solved
                </button>
                <button 
                  onClick={() => setActiveFilter('live')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold transition ${
                    activeFilter === 'live' 
                      ? 'bg-blue-50 border-blue-200 text-gray-700' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Live Feed
                </button>
              </div>
            </div>

            {/* Feed Items */}
            <div className="space-y-4">
              {getCurrentThreads().map((thread) => (
                <Link key={thread.id} href={`/thread/${thread.id}`} className="block">
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition cursor-pointer">
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${thread.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {thread.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900">{thread.author}</span>
                              <span className="text-xs font-bold text-gray-500">{thread.time}</span>
                              {thread.solved && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                              )}
                              {thread.typing && (
                                <span className="text-xs text-orange-500 flex items-center gap-1">
                                  <Circle className="w-1.5 h-1.5 fill-orange-500" />
                                  3 experts typing...
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                                thread.category === 'Plumbing' ? 'bg-blue-100 text-blue-700' :
                                thread.category === 'Cooking' ? 'bg-orange-100 text-orange-700' :
                                thread.category === 'Electrical' ? 'bg-yellow-100 text-yellow-700' :
                                thread.category === 'Home Repair' ? 'bg-purple-100 text-purple-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {thread.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-2">{thread.title}</h3>
                      
                      {thread.solved && thread.solution && (
                        <div className="bg-green-50 rounded-lg p-3 mb-3 border border-green-200">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm text-gray-900">{thread.expert}</span>
                                <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">Super Dad</span>
                                <span className="text-xs font-bold text-gray-500">• {thread.expertNods} nods</span>
                              </div>
                              <p className="text-sm font-bold text-gray-700">
                                {thread.solution}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {thread.typing && (
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                                C
                              </div>
                              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                                B
                              </div>
                              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs">
                                G
                              </div>
                            </div>
                            <span className="text-xs font-bold text-gray-600">ChefCarla, BakerBeth, and GrandmaGrace are crafting responses...</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-1.5 text-sm ${nodCounts[`item${thread.id}`] ? 'text-blue-600' : 'text-gray-500'} transition`}>
                          <ThumbsUp className={`w-4 h-4 ${nodCounts[`item${thread.id}`] ? 'fill-blue-600' : ''}`} />
                          <span className="font-bold">{thread.nods + (nodCounts[`item${thread.id}`] || 0)}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-bold">{thread.comments}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <Bookmark className="w-4 h-4" />
                          <span className="font-bold">Save</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            {/* Today's Champions */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 bg-blue-50">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-orange-600" />
                    Today&apos;s Champions
                  </h3>
                  <Link href="/leaderboard" className="text-xs text-orange-600 hover:text-orange-700 font-bold">
                    View All
                  </Link>
                </div>
              </div>
              <div className="p-2 space-y-3">
                <Link href="/experts/electrician-ed" className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg border border-orange-200 border-t-4 border-t-blue-500 hover:shadow-sm transition">
                  <span className="text-lg">🥇</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-gray-900">ElectricianEd</div>
                    <div className="text-xs font-bold text-gray-500">847 nods • 42 helps</div>
                  </div>
                </Link>
                <Link href="/experts/chef-carla" className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg border border-orange-200 hover:shadow-sm transition">
                  <span className="text-lg">🥈</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-gray-900">ChefCarla</div>
                    <div className="text-xs font-bold text-gray-500">623 nods • 31 helps</div>
                  </div>
                </Link>
                <Link href="/experts/mechanic-dave" className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg border border-orange-200 hover:shadow-sm transition">
                  <span className="text-lg">🥉</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-gray-900">MechanicDave</div>
                    <div className="text-xs font-bold text-gray-500">512 nods • 28 helps</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Rising Stars */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mt-6">
              <div className="px-4 py-3 border-b border-gray-200 bg-blue-50">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Rising Stars
                </h3>
              </div>
              <div className="p-2 space-y-3">
                <Link href="/profile/newbiebob" className="block">
                  <div className="p-2 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-gray-900">NewbieBob</span>
                      <span className="text-xs text-green-600 font-bold">+342 today</span>
                    </div>
                    <p className="text-xs font-bold text-gray-600 mt-1">Killer HVAC tip on frozen pipes</p>
                  </div>
                </Link>
                <Link href="/profile/teachertina" className="block">
                  <div className="p-2 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-gray-900">TeacherTina</span>
                      <span className="text-xs text-green-600 font-bold">+289 today</span>
                    </div>
                    <p className="text-xs font-bold text-gray-600 mt-1">Trending in Parenting</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Tip */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-4 mt-6">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Did You Know?
              </h3>
              <p className="text-sm font-bold text-gray-700">
                WD-40 stands for &quot;Water Displacement, 40th formula&quot; - it took 40 attempts to get it right!
              </p>
              <Link href="/education" className="text-sm text-blue-600 hover:text-blue-700 font-bold mt-2 inline-block">
                Learn more tips →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadKnowsHomepage;