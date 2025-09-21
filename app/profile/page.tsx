'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  TrendingUp, Clock, CheckCircle, Star, BookOpen,
  Wrench, Car, ChefHat, Baby, Heart, Zap, Eye,
  ThumbsUp, MessageCircle, Bookmark, MoreHorizontal,
  Circle, ChevronRight, Award, Lightbulb, HelpCircle,
  ArrowLeft, Filter, Grid, List, Plus, Crown, Shield,
  Medal, Target, Calendar, BarChart3, Edit, Settings,
  Mail, Phone, MapPin, Globe, Camera, Share2
} from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isEditing, setIsEditing] = useState(false);

  const user = {
    name: 'John Doe',
    username: 'JohnDoe',
    title: 'Community Member',
    bio: 'Passionate DIY enthusiast and problem solver. Love helping others with home improvement projects and sharing knowledge.',
    avatar: '/api/placeholder/120/120',
    coverImage: '/api/placeholder/800/200',
    location: 'San Francisco, CA',
    website: 'johndoe.com',
    joinDate: '2023-06-15',
    badges: ['Helper', 'Rising Star', 'Community Member'],
    stats: {
      posts: 23,
      helps: 45,
      nods: 234,
      solved: 18
    },
    specialties: ['Home Repair', 'Cooking', 'Gardening'],
    online: true
  };

  const posts = [
    {
      id: '1',
      title: 'Fixed my leaky faucet with help from MikeThePlumber',
      category: 'Plumbing',
      time: '2 hours ago',
      nods: 12,
      comments: 3,
      solved: true,
      expert: 'MikeThePlumber'
    },
    {
      id: '2',
      title: 'Need help with my garden - tomatoes not growing',
      category: 'Gardening',
      time: '1 day ago',
      nods: 8,
      comments: 7,
      solved: false,
      expert: null
    },
    {
      id: '3',
      title: 'Cooking tip: Perfect steak every time',
      category: 'Cooking',
      time: '3 days ago',
      nods: 15,
      comments: 5,
      solved: true,
      expert: 'ChefCarla'
    }
  ];

  const achievements = [
    {
      id: '1',
      title: 'First Help',
      description: 'Helped your first person',
      icon: Heart,
      earned: true,
      date: '2023-06-20'
    },
    {
      id: '2',
      title: 'Problem Solver',
      description: 'Solved 10 problems',
      icon: CheckCircle,
      earned: true,
      date: '2023-07-15'
    },
    {
      id: '3',
      title: 'Community Favorite',
      description: 'Received 100 nods',
      icon: Star,
      earned: true,
      date: '2023-08-10'
    },
    {
      id: '4',
      title: 'Expert Helper',
      description: 'Help 50 people',
      icon: Award,
      earned: false,
      date: null
    }
  ];

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
              <Link href="/leaderboard" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-medium text-gray-700">
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
        {/* Profile Header */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative">
            <img src={user.coverImage} alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg hover:bg-white/30 transition flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg hover:bg-white/30 transition flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="relative -mt-16">
                  <img src={user.avatar} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Circle className="w-3 h-3 fill-white text-white" />
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <span className="text-gray-600">@{user.username}</span>
                    <div className="flex items-center gap-1">
                      {user.badges.map((badge, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{user.bio}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <a href={user.website} className="text-blue-600 hover:text-blue-700">{user.website}</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Stats */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Activity Stats</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.posts}</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.helps}</div>
                  <div className="text-sm text-gray-600">Helps Given</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.nods}</div>
                  <div className="text-sm text-gray-600">Nods Received</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.solved}</div>
                  <div className="text-sm text-gray-600">Problems Solved</div>
                </div>
              </div>
            </div>

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
                onClick={() => setActiveTab('helps')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'helps' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Helps Given
              </button>
              <button 
                onClick={() => setActiveTab('achievements')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'achievements' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Achievements
              </button>
            </div>

            {/* Posts Tab */}
            {activeTab === 'posts' && (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">{user.name}</span>
                              <span className="text-xs text-gray-500">{post.time}</span>
                              {post.solved && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">SOLVED</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{post.category}</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>

                      <h3 className="font-medium text-gray-900 mb-3">{post.title}</h3>
                      
                      {post.expert && (
                        <div className="bg-blue-50 rounded-lg p-3 mb-3 border border-blue-200">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-blue-600">Solved with help from:</span>
                            <span className="font-medium text-sm text-gray-900">{post.expert}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="font-medium">{post.nods}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-600 transition">
                          <Bookmark className="w-4 h-4" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={achievement.id} className={`p-4 rounded-xl border transition ${
                      achievement.earned 
                        ? 'bg-white border-gray-200' 
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          achievement.earned 
                            ? 'bg-yellow-100 text-yellow-600' 
                            : 'bg-gray-200 text-gray-400'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{achievement.title}</div>
                          <div className="text-sm text-gray-600">{achievement.description}</div>
                          {achievement.earned && achievement.date && (
                            <div className="text-xs text-gray-500 mt-1">
                              Earned {new Date(achievement.date).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                        {achievement.earned && (
                          <div className="text-yellow-500">
                            <Star className="w-5 h-5 fill-current" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            {/* Specialties */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
              <div className="space-y-2">
                {user.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <Wrench className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-900">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">Solved a plumbing problem</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <ThumbsUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">Received 5 nods</div>
                    <div className="text-xs text-gray-500">1 day ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">Helped someone with cooking</div>
                    <div className="text-xs text-gray-500">3 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600">Send Message</span>
                </button>
                <button className="w-full text-left p-2 bg-green-50 rounded-lg hover:bg-green-100 transition flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">Start Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;