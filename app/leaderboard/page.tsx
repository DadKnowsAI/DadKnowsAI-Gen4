'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  TrendingUp, Star, BookOpen,
  Wrench, Car, ChefHat, Baby, Heart, Zap, Eye,
  Crown, Shield,
  Medal, Target, BarChart3
} from 'lucide-react';

const LeaderboardPage = () => {
  const [timeFilter, setTimeFilter] = useState('week');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const experts = [
    {
      id: 'electrician-ed',
      name: 'ElectricianEd',
      title: 'Master Electrician',
      specialty: 'Electrical',
      avatar: '/api/placeholder/48/48',
      nods: 2847,
      helps: 142,
      solved: 98,
      rank: 1,
      change: '+12',
      badges: ['Super Dad', 'Verified Expert'],
      online: true,
      joinDate: '2023-01-15'
    },
    {
      id: 'chef-carla',
      name: 'ChefCarla',
      title: 'Professional Chef',
      specialty: 'Cooking',
      avatar: '/api/placeholder/48/48',
      nods: 1923,
      helps: 89,
      solved: 67,
      rank: 2,
      change: '+8',
      badges: ['Pro Chef', 'Community Favorite'],
      online: true,
      joinDate: '2023-02-20'
    },
    {
      id: 'mechanic-dave',
      name: 'MechanicDave',
      title: 'Auto Mechanic',
      specialty: 'Automotive',
      avatar: '/api/placeholder/48/48',
      nods: 1654,
      helps: 76,
      solved: 54,
      rank: 3,
      change: '+5',
      badges: ['Car Expert', 'Rising Star'],
      online: false,
      joinDate: '2023-03-10'
    },
    {
      id: 'mike-the-plumber',
      name: 'MikeThePlumber',
      title: 'Master Plumber',
      specialty: 'Plumbing',
      avatar: '/api/placeholder/48/48',
      nods: 1423,
      helps: 68,
      solved: 45,
      rank: 4,
      change: '+15',
      badges: ['Super Dad', 'Problem Solver'],
      online: true,
      joinDate: '2023-01-25'
    },
    {
      id: 'teacher-tina',
      name: 'TeacherTina',
      title: 'Parenting Expert',
      specialty: 'Parenting',
      avatar: '/api/placeholder/48/48',
      nods: 1187,
      helps: 52,
      solved: 38,
      rank: 5,
      change: '+22',
      badges: ['Teacher', 'Trending'],
      online: true,
      joinDate: '2023-04-05'
    },
    {
      id: 'gardener-gary',
      name: 'GardenerGary',
      title: 'Horticulturist',
      specialty: 'Gardening',
      avatar: '/api/placeholder/48/48',
      nods: 956,
      helps: 41,
      solved: 29,
      rank: 6,
      change: '+3',
      badges: ['Green Thumb', 'Expert'],
      online: false,
      joinDate: '2023-05-12'
    },
    {
      id: 'tech-tom',
      name: 'TechTom',
      title: 'IT Specialist',
      specialty: 'Technology',
      avatar: '/api/placeholder/48/48',
      nods: 834,
      helps: 35,
      solved: 26,
      rank: 7,
      change: '+7',
      badges: ['Tech Guru', 'Helper'],
      online: true,
      joinDate: '2023-06-18'
    },
    {
      id: 'fitness-frank',
      name: 'FitnessFrank',
      title: 'Personal Trainer',
      specialty: 'Fitness',
      avatar: '/api/placeholder/48/48',
      nods: 712,
      helps: 28,
      solved: 21,
      rank: 8,
      change: '-2',
      badges: ['Fitness Pro', 'Motivator'],
      online: false,
      joinDate: '2023-07-22'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Trophy },
    { id: 'electrical', name: 'Electrical', icon: Zap },
    { id: 'cooking', name: 'Cooking', icon: ChefHat },
    { id: 'automotive', name: 'Automotive', icon: Car },
    { id: 'plumbing', name: 'Plumbing', icon: Wrench },
    { id: 'parenting', name: 'Parenting', icon: Baby },
    { id: 'gardening', name: 'Gardening', icon: Heart },
    { id: 'technology', name: 'Technology', icon: Eye },
    { id: 'fitness', name: 'Fitness', icon: Target }
  ];

  const timeFilters = [
    { id: 'day', name: 'Today' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'year', name: 'This Year' },
    { id: 'all', name: 'All Time' }
  ];

  const filteredExperts = categoryFilter === 'all' 
    ? experts 
    : experts.filter(expert => expert.specialty.toLowerCase() === categoryFilter);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-600';
      case 2: return 'text-gray-500';
      case 3: return 'text-orange-600';
      default: return 'text-gray-400';
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
                  placeholder="Search experts..." 
                  className="w-96 bg-gray-100 rounded-full px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <nav className="flex items-center gap-2">
              <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/categories" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
                <Users className="w-4 h-4" />
                Communities
              </Link>
              <Link href="/education" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
                <BookOpen className="w-4 h-4" />
                Learn AI
              </Link>
              <Link href="/leaderboard" className="px-3 py-2 rounded-lg bg-blue-50 text-blue-600 flex items-center gap-2 text-sm font-medium">
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
                <Link href="/profile" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JD
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Expert Leaderboard</h1>
          <p className="text-gray-600">Celebrating our top contributors and problem solvers</p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Time Filter */}
            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
              {timeFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setTimeFilter(filter.id)}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition ${
                    timeFilter === filter.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setCategoryFilter(category.id)}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition flex items-center gap-2 ${
                      categoryFilter === category.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BarChart3 className="w-4 h-4" />
            <span>Updated 5 minutes ago</span>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Expert</div>
              <div className="col-span-2">Nods</div>
              <div className="col-span-2">Helps</div>
              <div className="col-span-2">Solved</div>
              <div className="col-span-1">Change</div>
            </div>
          </div>

          {/* Expert Rows */}
          <div className="divide-y divide-gray-200">
            {filteredExperts.map((expert) => (
              <div key={expert.id} className="px-6 py-4 hover:bg-gray-50 transition">
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1">
                    <div className={`text-2xl font-bold ${getRankColor(expert.rank)}`}>
                      {getRankIcon(expert.rank)}
                    </div>
                  </div>

                  {/* Expert Info */}
                  <div className="col-span-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={expert.avatar} alt={expert.name} className="w-12 h-12 rounded-full" />
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          expert.online ? 'bg-green-500' : 'bg-gray-400'
                        }`}></span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{expert.name}</div>
                        <div className="text-sm text-gray-600">{expert.title}</div>
                        <div className="flex items-center gap-1 mt-1">
                          {expert.badges.map((badge, index) => (
                            <span key={index} className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="col-span-2">
                    <div className="text-lg font-semibold text-gray-900">{expert.nods.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">total nods</div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-lg font-semibold text-gray-900">{expert.helps}</div>
                    <div className="text-xs text-gray-500">people helped</div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-lg font-semibold text-gray-900">{expert.solved}</div>
                    <div className="text-xs text-gray-500">problems solved</div>
                  </div>

                  {/* Change */}
                  <div className="col-span-1">
                    <div className={`text-sm font-medium ${
                      expert.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {expert.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Top Performer</h3>
                <p className="text-sm text-gray-600">This {timeFilter === 'day' ? 'day' : timeFilter === 'week' ? 'week' : timeFilter === 'month' ? 'month' : 'year'}</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{filteredExperts[0]?.name}</div>
            <div className="text-sm text-gray-600">{filteredExperts[0]?.nods.toLocaleString()} nods</div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Rising Star</h3>
                <p className="text-sm text-gray-600">Biggest gainer</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {filteredExperts.reduce((max, expert) => 
                parseInt(expert.change) > parseInt(max.change) ? expert : max
              )?.name}
            </div>
            <div className="text-sm text-gray-600">
              +{Math.max(...filteredExperts.map(e => parseInt(e.change)))} positions
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Total Experts</h3>
                <p className="text-sm text-gray-600">Active contributors</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{filteredExperts.length}</div>
            <div className="text-sm text-gray-600">
              {filteredExperts.filter(e => e.online).length} online now
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievement Badges</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Crown className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="font-medium text-gray-900">Super Dad</div>
              <div className="text-xs text-gray-600">Top 1% expert</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-medium text-gray-900">Verified Expert</div>
              <div className="text-xs text-gray-600">Background checked</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Medal className="w-6 h-6 text-green-600" />
              </div>
              <div className="font-medium text-gray-900">Community Favorite</div>
              <div className="text-xs text-gray-600">Most helpful</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="font-medium text-gray-900">Rising Star</div>
              <div className="text-xs text-gray-600">Fast growing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;