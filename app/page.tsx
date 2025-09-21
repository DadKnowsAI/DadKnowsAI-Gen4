'use client'

import React, { useState, useEffect } from 'react';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  TrendingUp, Clock, CheckCircle, Star, BookOpen,
  Wrench, Car, ChefHat, Baby, Heart, Zap, Eye,
  ThumbsUp, MessageCircle, Bookmark, MoreHorizontal,
  Circle, ChevronRight, Award, Lightbulb, HelpCircle, User
} from 'lucide-react';

const DadKnowsHomepage = () => {
  const [solvedToday, setSolvedToday] = useState(1847);
  const [nodsToday, setNodsToday] = useState(8293);
  const [expertsOnline, setExpertsOnline] = useState(247);
  const [nodCounts, setNodCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setSolvedToday(prev => prev + Math.floor(Math.random() * 3));
      setNodsToday(prev => prev + Math.floor(Math.random() * 10));
      setExpertsOnline(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNod = (itemId: string) => {
    setNodCounts(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <a href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">D</div>
                DadKnows
              </a>
              
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
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="/categories" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Users className="w-4 h-4" />
                Communities
              </a>
              <a href="/education" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <BookOpen className="w-4 h-4" />
                Learn AI
              </a>
              <a href="/leaderboard" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <Trophy className="w-4 h-4" />
                Rankings
              </a>
              
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
                <Circle className="w-2 h-2 fill-green-400 text-green-400 animate-pulse" />
                <span className="text-sm font-bold">{expertsOnline} experts online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-bold">{solvedToday.toLocaleString()} solved today</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm font-bold">{nodsToday.toLocaleString()} nods given</span>
              </div>
            </div>
            <a href="/chat" className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-blue-50 transition">
              Ask Dad AI →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            {/* Quick Categories */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Quick Help</h3>
              </div>
              <div className="p-2">
                <a href="/categories/home-repair" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Home Repair</div>
                    <div className="text-xs font-bold text-gray-500">247 active</div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </a>
                <a href="/categories/cooking" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Cooking</div>
                    <div className="text-xs font-bold text-gray-500">183 active</div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </a>
                <a href="/categories/car-trouble" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Car Trouble</div>
                    <div className="text-xs font-bold text-gray-500">156 active</div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </a>
                <a href="/categories/parenting" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Baby className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">Parenting</div>
                    <div className="text-xs font-bold text-gray-500">94 active</div>
                  </div>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                </a>
              </div>
              <div className="px-4 py-2 border-t border-gray-200">
                <a href="/categories" className="text-sm text-blue-600 hover:text-blue-700 font-bold">
                  Browse all categories →
                </a>
              </div>
            </div>

            {/* Top Experts Online */}
            <div className="bg-white rounded-xl border border-gray-200 mt-4 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Top Experts Online</h3>
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="p-2">
                <a href="/experts/mike-the-plumber" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
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
                </a>
                <a href="/experts/chef-carla" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
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
                </a>
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
                  <h2 className="text-lg font-bold text-gray-900">Dad's Here to Help</h2>
                  <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Currently helping 14 people
                  </span>
                </div>
                <a href="/chat" className="text-sm text-blue-600 hover:text-blue-700 font-bold">
                  Open Full Chat →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4 min-h-[120px] border border-gray-200">
                <p className="text-gray-700 mb-2 font-bold">Hey there! What's going on? Car trouble? Leaky faucet? Burnt dinner?</p>
                <p className="text-gray-600 text-sm font-bold">I've got <span className="text-blue-600 font-bold">ChefCarla (2,847 nods)</span> and <span className="text-blue-600 font-bold">MikeThePlumber (1,923 nods)</span> standing by if we need expert backup!</p>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your question here... (e.g., 'My toilet won't stop running')"
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
                  <button className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition">
                    🚿 Plumbing issue
                  </button>
                  <button className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition">
                    🍳 Cooking help
                  </button>
                  <button className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition">
                    🚗 Car problem
                  </button>
                </div>
                <span className="text-xs font-bold text-gray-500">Avg response: 12 seconds</span>
              </div>
            </div>

            {/* Feed Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50">
                  <TrendingUp className="w-4 h-4" />
                  Trending
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-gray-500 hover:text-gray-700">
                  <Clock className="w-4 h-4" />
                  Recent
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-gray-500 hover:text-gray-700">
                  <CheckCircle className="w-4 h-4" />
                  Solved
                </button>
              </div>
              <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Live Feed
              </span>
            </div>

            {/* Feed Items */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        S
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">SarahM</span>
                          <span className="text-xs font-bold text-gray-500">2 minutes ago</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Plumbing</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2">Help! Water won't stop running in toilet!</h3>
                  
                  <div className="bg-green-50 rounded-lg p-3 mb-3 border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-gray-900">MikeThePlumber</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">Super Dad</span>
                          <span className="text-xs font-bold text-gray-500">• 2.8k nods</span>
                        </div>
                        <p className="text-sm font-bold text-gray-700">
                          Classic flapper issue. Turn off water valve behind toilet, flush to empty tank, then replace the rubber flapper. It's a $5 fix at any hardware store - takes 10 minutes max!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => { e.preventDefault(); handleNod('item1'); }}
                      className={`flex items-center gap-1.5 text-sm ${nodCounts.item1 ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'} transition`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${nodCounts.item1 ? 'fill-blue-600' : ''}`} />
                      <span className="font-bold">{127 + (nodCounts.item1 || 0)}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition">
                      <MessageCircle className="w-4 h-4" />
                      <span>8</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-600 transition">
                      <Bookmark className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition">
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        D
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">DavidK</span>
                          <span className="text-xs font-bold text-gray-500">5 minutes ago</span>
                          <span className="text-xs text-orange-500 flex items-center gap-1">
                            <Circle className="w-1.5 h-1.5 fill-orange-500" />
                            3 experts typing...
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold">Cooking</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-3">My bread keeps coming out dense. What am I doing wrong?</h3>
                  
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
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            {/* Today's Champions */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange-600" />
                  Today's Champions
                </h3>
                <a href="/leaderboard" className="text-xs text-orange-600 hover:text-orange-700 font-bold">
                  View All
                </a>
              </div>
              <div className="space-y-2">
                <a href="/experts/electrician-ed" className="flex items-center gap-3 p-2 bg-white rounded-lg hover:shadow-sm transition">
                  <span className="text-lg">🥇</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-gray-900">ElectricianEd</div>
                    <div className="text-xs font-bold text-gray-500">847 nods • 42 helps</div>
                  </div>
                </a>
                <a href="/experts/chef-carla" className="flex items-center gap-3 p-2 bg-white rounded-lg hover:shadow-sm transition">
                  <span className="text-lg">🥈</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-gray-900">ChefCarla</div>
                    <div className="text-xs font-bold text-gray-500">623 nods • 31 helps</div>
                  </div>
                </a>
                <a href="/experts/mechanic-dave" className="flex items-center gap-3 p-2 bg-white rounded-lg hover:shadow-sm transition">
                  <span className="text-lg">🥉</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-gray-900">MechanicDave</div>
                    <div className="text-xs font-bold text-gray-500">512 nods • 28 helps</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Rising Stars */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Rising Stars
              </h3>
              <div className="space-y-2">
                <div className="p-2 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">NewbieBob</span>
                    <span className="text-xs text-green-600 font-bold">+342 today</span>
                  </div>
                  <p className="text-xs font-bold text-gray-600 mt-1">Killer HVAC tip on frozen pipes</p>
                </div>
                <div className="p-2 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">TeacherTina</span>
                    <span className="text-xs text-green-600 font-bold">+289 today</span>
                  </div>
                  <p className="text-xs font-bold text-gray-600 mt-1">Trending in Parenting</p>
                </div>
              </div>
            </div>

            {/* Quick Tip */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Did You Know?
              </h3>
              <p className="text-sm font-bold text-gray-700">
                WD-40 stands for "Water Displacement, 40th formula" - it took 40 attempts to get it right!
              </p>
              <a href="/education" className="text-sm text-blue-600 hover:text-blue-700 font-bold mt-2 inline-block">
                Learn more tips →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadKnowsHomepage;