'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  TrendingUp, Clock, CheckCircle, Star, BookOpen,
  Wrench, Car, ChefHat, Baby, Heart, Zap, Eye,
  ThumbsUp, MessageCircle, Bookmark, MoreHorizontal,
  Circle, ChevronRight, Award, Lightbulb, HelpCircle,
  ArrowLeft, Filter, Grid, List, Plus, Send, User
} from 'lucide-react';

const CategoryPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [activeTab, setActiveTab] = useState('posts');
  const [nodCounts, setNodCounts] = useState<Record<string, number>>({});

  const categoryData = {
    'home-repair': {
      name: 'Home Repair',
      description: 'Fix it yourself with expert guidance from experienced DIYers and professionals',
      icon: Wrench,
      color: 'blue',
      members: 1247,
      online: 89,
      posts: 342,
      solved: 298
    },
    'cooking': {
      name: 'Cooking',
      description: 'Master the kitchen with pro tips from chefs and cooking enthusiasts',
      icon: ChefHat,
      color: 'orange',
      members: 892,
      online: 67,
      posts: 256,
      solved: 201
    },
    'car-trouble': {
      name: 'Car Trouble',
      description: 'Diagnose and fix automotive issues with help from mechanics and car experts',
      icon: Car,
      color: 'green',
      members: 634,
      online: 45,
      posts: 189,
      solved: 156
    },
    'parenting': {
      name: 'Parenting',
      description: 'Navigate the challenges of raising kids with support from experienced parents',
      icon: Baby,
      color: 'purple',
      members: 1156,
      online: 78,
      posts: 423,
      solved: 367
    }
  };

  const category = categoryData[slug as keyof typeof categoryData] || categoryData['home-repair'];
  const IconComponent = category.icon;

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const posts = [
    {
      id: '1',
      title: 'Leaky faucet won\'t stop dripping - help!',
      author: 'SarahM',
      time: '2 minutes ago',
      category: 'Plumbing',
      solved: true,
      expert: 'MikeThePlumber',
      expertNods: '2.8k',
      solution: 'Classic flapper issue. Turn off water valve behind toilet, flush to empty tank, then replace the rubber flapper. It\'s a $5 fix at any hardware store - takes 10 minutes max!',
      nods: 127,
      comments: 8
    },
    {
      id: '2',
      title: 'Drywall repair techniques for beginners',
      author: 'HandyMike',
      time: '15 minutes ago',
      category: 'Drywall',
      solved: false,
      expert: null,
      expertNods: null,
      solution: null,
      nods: 45,
      comments: 12
    },
    {
      id: '3',
      title: 'Electrical outlet not working - safety first!',
      author: 'SafetyFirst',
      time: '1 hour ago',
      category: 'Electrical',
      solved: true,
      expert: 'ElectricianEd',
      expertNods: '3.2k',
      solution: 'First, turn off the breaker! Then check if the outlet is GFCI protected. If it\'s a simple outlet replacement, make sure to match the wire colors exactly. When in doubt, call a licensed electrician.',
      nods: 89,
      comments: 15
    }
  ];

  const handleNod = (postId: string) => {
    setNodCounts(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
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
                  placeholder="Search in this community..." 
                  className="w-96 bg-gray-100 rounded-full px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <nav className="flex items-center gap-2">
              <a href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="/categories" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
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
        {/* Back Button */}
        <div className="mb-6">
          <a href="/categories" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Communities
          </a>
        </div>

        {/* Category Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(category.color)}`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h1>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{category.members.toLocaleString()} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                    <span>{category.online} online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{category.posts} posts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>{category.solved} solved</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/thread/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Ask Question
              </Link>
              <button 
                onClick={() => {
                  alert('Welcome to the Home Repair community! You are now a member.');
                }}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1 mb-6">
              <button 
                onClick={() => setActiveTab('posts')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'posts' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Posts
              </button>
              <button 
                onClick={() => setActiveTab('experts')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'experts' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Experts
              </button>
              <button 
                onClick={() => setActiveTab('rules')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'rules' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Rules
              </button>
            </div>

            {/* Posts */}
            {activeTab === 'posts' && (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition cursor-pointer" onClick={() => window.location.href = `/thread/${post.id}`}>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            <User className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <Link href="/profile/sarahm" className="font-bold text-gray-900 hover:text-blue-600 hover:underline text-lg">{post.author}</Link>
                              <span className="text-xs text-gray-500">{post.time}</span>
                              {post.solved && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className={`text-xs px-2 py-0.5 rounded font-bold ${getColorClasses(category.color)}`}>
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-4 text-xl">{post.title}</h3>
                      
                      {post.solved && post.solution && (
                        <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-200">
                          <div className="flex items-start gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Link href="/profile/mike-the-plumber" className="font-bold text-sm text-gray-900 hover:text-blue-600 hover:underline">{post.expert}</Link>
                                <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">Expert</span>
                                <span className="text-xs text-gray-500">• {post.expertNods} nods</span>
                              </div>
                              <p className="text-sm text-gray-700 font-bold">{post.solution}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNod(post.id);
                          }}
                          className={`flex items-center gap-1.5 text-sm ${nodCounts[post.id] ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'} transition`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${nodCounts[post.id] ? 'fill-blue-600' : ''}`} />
                          <span className="font-bold">{post.nods + (nodCounts[post.id] || 0)}</span>
                        </button>
                        <button 
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="font-bold">{post.comments}</span>
                        </button>
                        <button 
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-600 transition"
                        >
                          <Bookmark className="w-4 h-4" />
                          <span className="font-bold">Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Experts Tab */}
            {activeTab === 'experts' && (
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Top Experts in {category.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <img src="/api/placeholder/48/48" alt="Expert" className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">MikeThePlumber</div>
                        <div className="text-sm text-gray-600">Professional plumber with 15 years experience</div>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <span>2.8k nods</span>
                          <span>•</span>
                          <span>142 helps</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                            Online
                          </span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition">
                        Ask Question
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Rules Tab */}
            {activeTab === 'rules' && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Community Rules</h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">1. Be Respectful</h4>
                    <p>Treat everyone with respect and kindness. No personal attacks or harassment.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">2. Stay On Topic</h4>
                    <p>Keep discussions relevant to {category.name.toLowerCase()}. Off-topic posts may be removed.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">3. Provide Helpful Answers</h4>
                    <p>When helping others, provide clear, actionable advice. Include safety warnings when appropriate.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">4. Use Descriptive Titles</h4>
                    <p>Make your post titles clear and descriptive so others can easily find relevant discussions.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            {/* Quick Ask */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Ask</h3>
              <div className="space-y-3">
                <textarea 
                  placeholder="What's your question?"
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                <Link href="/thread/new" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Post Question
                </Link>
              </div>
            </div>

            {/* Online Members */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Online Now</h3>
              <div className="space-y-2">
                <Link href="/profile/mike-the-plumber" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 hover:text-blue-600">MikeThePlumber</span>
                </Link>
                <Link href="/profile/handymike" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 hover:text-blue-600">HandyMike</span>
                </Link>
                <Link href="/profile/safetyfirst" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-yellow-500 rounded-full border-2 border-white"></span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 hover:text-blue-600">SafetyFirst</span>
                </Link>
              </div>
            </div>

            {/* Related Communities */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Related Communities</h3>
              <div className="space-y-2">
                <a href="/categories/cooking" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Cooking</div>
                    <div className="text-xs text-gray-500">892 members</div>
                  </div>
                </a>
                <a href="/categories/car-trouble" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Car className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Car Trouble</div>
                    <div className="text-xs text-gray-500">634 members</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;