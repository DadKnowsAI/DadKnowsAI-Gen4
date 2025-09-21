'use client'

import React, { useState } from 'react';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  TrendingUp, Clock, CheckCircle, Star, BookOpen,
  Wrench, Car, ChefHat, Baby, Heart, Zap, Eye,
  ThumbsUp, MessageCircle, Bookmark, MoreHorizontal,
  Circle, ChevronRight, Award, Lightbulb, HelpCircle,
  ArrowLeft, Filter, Grid, List, Plus
} from 'lucide-react';

const CategoriesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    {
      id: 'home-repair',
      name: 'Home Repair',
      description: 'Fix it yourself with expert guidance',
      icon: Wrench,
      color: 'blue',
      members: 1247,
      active: 89,
      trending: true,
      recentPosts: [
        { title: 'Leaky faucet won\'t stop dripping', author: 'SarahM', time: '2m ago', solved: true },
        { title: 'Drywall repair techniques', author: 'HandyMike', time: '15m ago', solved: false }
      ]
    },
    {
      id: 'cooking',
      name: 'Cooking',
      description: 'Master the kitchen with pro tips',
      icon: ChefHat,
      color: 'orange',
      members: 892,
      active: 67,
      trending: true,
      recentPosts: [
        { title: 'Bread keeps coming out dense', author: 'DavidK', time: '5m ago', solved: false },
        { title: 'Perfect steak cooking method', author: 'ChefCarla', time: '1h ago', solved: true }
      ]
    },
    {
      id: 'car-trouble',
      name: 'Car Trouble',
      description: 'Diagnose and fix automotive issues',
      icon: Car,
      color: 'green',
      members: 634,
      active: 45,
      trending: false,
      recentPosts: [
        { title: 'Engine making weird noise', author: 'CarGuy', time: '8m ago', solved: false },
        { title: 'Brake pad replacement guide', author: 'MechanicDave', time: '2h ago', solved: true }
      ]
    },
    {
      id: 'parenting',
      name: 'Parenting',
      description: 'Navigate the challenges of raising kids',
      icon: Baby,
      color: 'purple',
      members: 1156,
      active: 78,
      trending: true,
      recentPosts: [
        { title: 'Toddler won\'t sleep through night', author: 'MomOfTwo', time: '12m ago', solved: false },
        { title: 'Dealing with teenage attitude', author: 'TeacherTina', time: '3h ago', solved: true }
      ]
    },
    {
      id: 'gardening',
      name: 'Gardening',
      description: 'Grow your green thumb',
      icon: Heart,
      color: 'green',
      members: 423,
      active: 34,
      trending: false,
      recentPosts: [
        { title: 'Tomatoes not ripening', author: 'GreenThumb', time: '20m ago', solved: false },
        { title: 'Composting basics', author: 'EcoDad', time: '4h ago', solved: true }
      ]
    },
    {
      id: 'tech-support',
      name: 'Tech Support',
      description: 'Solve computer and gadget problems',
      icon: Zap,
      color: 'blue',
      members: 756,
      active: 56,
      trending: false,
      recentPosts: [
        { title: 'WiFi keeps disconnecting', author: 'TechNoob', time: '25m ago', solved: false },
        { title: 'Phone battery draining fast', author: 'GadgetGuru', time: '5h ago', solved: true }
      ]
    },
    {
      id: 'fitness',
      name: 'Fitness',
      description: 'Get fit and stay healthy',
      icon: Eye,
      color: 'red',
      members: 567,
      active: 42,
      trending: false,
      recentPosts: [
        { title: 'Home workout without equipment', author: 'FitDad', time: '30m ago', solved: false },
        { title: 'Proper form for squats', author: 'GymRat', time: '6h ago', solved: true }
      ]
    },
    {
      id: 'finance',
      name: 'Personal Finance',
      description: 'Manage money like a pro',
      icon: Award,
      color: 'yellow',
      members: 389,
      active: 28,
      trending: false,
      recentPosts: [
        { title: 'Budgeting for beginners', author: 'MoneyWise', time: '35m ago', solved: false },
        { title: 'Investment strategies', author: 'FinanceGuru', time: '7h ago', solved: true }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const filteredCategories = selectedFilter === 'all' 
    ? categories 
    : selectedFilter === 'trending' 
    ? categories.filter(cat => cat.trending)
    : categories.filter(cat => cat.active > 50);

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
                  placeholder="Search communities..." 
                  className="w-96 bg-gray-100 rounded-full px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <nav className="flex items-center gap-2">
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="/categories" className="px-3 py-2 rounded-lg bg-blue-50 text-blue-600 flex items-center gap-2 text-sm font-medium">
                <Users className="w-4 h-4" />
                Communities
              </a>
              <a href="/education" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
                <BookOpen className="w-4 h-4" />
                Learn AI
              </a>
              <a href="/leaderboard" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
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
                <a href="/profile" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JD
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Communities</h1>
            <p className="text-gray-600">Find your tribe and get expert help in specialized areas</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Community
          </button>
        </div>

        {/* Filters and View Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
              <button 
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition ${
                  selectedFilter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setSelectedFilter('trending')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition ${
                  selectedFilter === 'trending' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Trending
              </button>
              <button 
                onClick={() => setSelectedFilter('active')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition ${
                  selectedFilter === 'active' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Most Active
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition ${
                viewMode === 'grid' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition ${
                viewMode === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <a 
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {category.trending && (
                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                          Trending
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{category.members.toLocaleString()} members</span>
                      <div className="flex items-center gap-1">
                        <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                        <span>{category.active} active</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                    <div className="text-xs text-gray-600">
                      Recent: {category.recentPosts[0].title}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <a 
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                            {category.name}
                          </h3>
                          {category.trending && (
                            <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                              Trending
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                        
                        <div className="flex items-center gap-6 text-xs text-gray-500">
                          <span>{category.members.toLocaleString()} members</span>
                          <div className="flex items-center gap-1">
                            <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                            <span>{category.active} active</span>
                          </div>
                          <span>Recent: {category.recentPosts[0].title}</span>
                        </div>
                      </div>
                      
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No communities found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or create a new community</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Create Community
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;

