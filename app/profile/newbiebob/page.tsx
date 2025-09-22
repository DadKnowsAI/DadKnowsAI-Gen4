'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  ThumbsUp, MessageCircle,
  Calendar, MapPin, BookOpen, ArrowLeft
} from 'lucide-react';

const NewbieBobProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const userStats = {
    totalNods: 1247,
    postsCount: 23,
    commentsCount: 156,
    solvedCount: 8,
    joinDate: 'March 2024',
    location: 'Denver, CO',
    expertise: ['HVAC', 'Home Repair', 'DIY']
  };

  const recentPosts = [
    {
      id: '1',
      title: 'Killer HVAC tip on frozen pipes',
      category: 'HVAC',
      nods: 342,
      comments: 23,
      time: '2 hours ago',
      solved: true
    },
    {
      id: '2', 
      title: 'Quick fix for leaky faucet',
      category: 'Plumbing',
      nods: 89,
      comments: 12,
      time: '1 day ago',
      solved: true
    },
    {
      id: '3',
      title: 'Best way to clean air ducts?',
      category: 'HVAC', 
      nods: 156,
      comments: 18,
      time: '3 days ago',
      solved: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
                <Link href="/profile" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Back Button */}
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-bold">Back to Home</span>
            </Link>

            {/* Profile Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  NB
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">NewbieBob</h1>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Rising Star</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">HVAC Expert</span>
                  </div>
                  <p className="text-gray-600 mb-4">DIY enthusiast who loves sharing practical home repair tips. Specializing in HVAC and general home maintenance.</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{userStats.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {userStats.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{userStats.totalNods}</div>
                  <div className="text-sm text-gray-500">Total Nods</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{userStats.postsCount}</div>
                  <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{userStats.commentsCount}</div>
                  <div className="text-sm text-gray-500">Comments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{userStats.solvedCount}</div>
                  <div className="text-sm text-gray-500">Solved</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 mb-6">
              <div className="flex border-b border-gray-200">
                <button 
                  onClick={() => setActiveTab('posts')}
                  className={`px-6 py-3 text-sm font-bold ${activeTab === 'posts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Posts
                </button>
                <button 
                  onClick={() => setActiveTab('comments')}
                  className={`px-6 py-3 text-sm font-bold ${activeTab === 'comments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Comments
                </button>
                <button 
                  onClick={() => setActiveTab('solved')}
                  className={`px-6 py-3 text-sm font-bold ${activeTab === 'solved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Solved
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'posts' && (
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <a key={post.id} href={`/thread/${post.id}`} className="block">
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">{post.category}</span>
                              {post.solved && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">SOLVED</span>}
                            </div>
                            <span className="text-xs text-gray-500">{post.time}</span>
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">{post.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{post.nods}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            {/* Expertise */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
              <h3 className="font-bold text-gray-900 mb-3">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {userStats.expertise.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-3">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Posted HVAC tip</span>
                  <span className="text-gray-400">2h ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Solved plumbing issue</span>
                  <span className="text-gray-400">1d ago</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">Gained 50 nods</span>
                  <span className="text-gray-400">2d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewbieBobProfile;
