'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, 
  BookOpen,
  ThumbsUp, MessageCircle,
  Circle, ArrowLeft, Shield, Award, Calendar,
  Mail, MapPin, Globe,
  Share2, Star
} from 'lucide-react';

const ExpertPage = ({ params }: { params: { id: string } }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [nodCounts, setNodCounts] = useState<Record<string, number>>({});

  const expert = {
    id: params.id,
    name: 'MikeThePlumber',
    title: 'Master Plumber',
    specialty: 'Plumbing & Home Repair',
    avatar: '/api/placeholder/120/120',
    coverImage: '/api/placeholder/800/200',
    bio: 'Professional plumber with 15 years of experience. I love helping people solve their plumbing problems and teaching DIY techniques. When I\'m not fixing pipes, I\'m spending time with my family or working on home improvement projects.',
    location: 'San Francisco, CA',
    website: 'miketheplumber.com',
    joinDate: '2023-01-15',
    badges: ['Super Dad', 'Verified Expert', 'Community Favorite'],
    stats: {
      nods: 2847,
      helps: 142,
      solved: 98,
      posts: 67
    },
    specialties: ['Plumbing', 'Home Repair', 'DIY Projects'],
    online: true,
    responseTime: 'Usually responds within 5 minutes',
    languages: ['English', 'Spanish'],
    certifications: ['Licensed Master Plumber', 'Certified Pipe Fitter'],
    experience: '15 years',
    rating: 4.9,
    reviews: 127
  };

  const recentPosts = [
    {
      id: '1',
      title: 'Quick fix for running toilet - flapper replacement',
      category: 'Plumbing',
      time: '2 hours ago',
      nods: 23,
      comments: 5,
      solved: true
    },
    {
      id: '2',
      title: 'How to fix a leaky faucet without calling a plumber',
      category: 'Home Repair',
      time: '1 day ago',
      nods: 18,
      comments: 8,
      solved: true
    },
    {
      id: '3',
      title: 'Water pressure issues? Check these common causes',
      category: 'Plumbing',
      time: '3 days ago',
      nods: 31,
      comments: 12,
      solved: false
    }
  ];

  const reviews = [
    {
      id: '1',
      author: 'SarahM',
      avatar: '/api/placeholder/32/32',
      rating: 5,
      content: 'Mike helped me fix my toilet issue in minutes! His explanation was clear and the solution worked perfectly. Highly recommend!',
      time: '2 days ago',
      nods: 8
    },
    {
      id: '2',
      author: 'HandyMike',
      avatar: '/api/placeholder/32/32',
      rating: 5,
      content: 'Excellent advice on pipe maintenance. Mike knows his stuff and explains things in a way that\'s easy to understand.',
      time: '1 week ago',
      nods: 5
    }
  ];

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
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/leaderboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Leaderboard
          </Link>
        </div>

        {/* Expert Header */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative">
            <img src={expert.coverImage} alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg hover:bg-white/30 transition flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Expert Info */}
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="relative -mt-16">
                  <img src={expert.avatar} alt="Expert" className="w-32 h-32 rounded-full border-4 border-white" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Circle className="w-3 h-3 fill-white text-white" />
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{expert.name}</h1>
                    <div className="flex items-center gap-1">
                      {expert.badges.map((badge, index) => (
                        <span key={index} className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-medium">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-2">{expert.title}</p>
                  <p className="text-gray-600 mb-4">{expert.bio}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <a href={expert.website} className="text-blue-600 hover:text-blue-700">{expert.website}</a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {new Date(expert.joinDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                      <span>{expert.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Ask Question
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
              <h3 className="font-semibold text-gray-900 mb-4">Expert Stats</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{expert.stats.nods.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Nods Received</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{expert.stats.helps}</div>
                  <div className="text-sm text-gray-600">People Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{expert.stats.solved}</div>
                  <div className="text-sm text-gray-600">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{expert.stats.posts}</div>
                  <div className="text-sm text-gray-600">Posts</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1 mb-6">
              <button 
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'about' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveTab('posts')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'posts' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Recent Posts
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  activeTab === 'reviews' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Reviews
              </button>
            </div>

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Specialties</h3>
                  <div className="flex items-center gap-2">
                    {expert.specialties.map((specialty, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Experience & Certifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{expert.experience} of experience</span>
                    </div>
                    {expert.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Languages</h3>
                  <div className="flex items-center gap-2">
                    {expert.languages.map((lang, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Posts Tab */}
            {activeTab === 'posts' && (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img src={expert.avatar} alt="Expert" className="w-10 h-10 rounded-full" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">{expert.name}</span>
                              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-medium">{expert.title}</span>
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
                      </div>

                      <h3 className="font-medium text-gray-900 mb-3">{post.title}</h3>

                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => handleNod(`post-${post.id}`)}
                          className={`flex items-center gap-1.5 text-sm ${nodCounts[`post-${post.id}`] ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'} transition`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${nodCounts[`post-${post.id}`] ? 'fill-blue-600' : ''}`} />
                          <span className="font-medium">{post.nods + (nodCounts[`post-${post.id}`] || 0)}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <img src={review.avatar} alt="User" className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{review.author}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{review.time}</span>
                        </div>
                        <p className="text-gray-700">{review.content}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition">
                            <ThumbsUp className="w-3 h-3" />
                            <span>{review.nods}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            {/* Contact */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600">Ask Question</span>
                </button>
                <button className="w-full text-left p-2 bg-green-50 rounded-lg hover:bg-green-100 transition flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">Send Message</span>
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{expert.rating}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(expert.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div className="text-sm text-gray-600">{expert.reviews} reviews</div>
              </div>
            </div>

            {/* Similar Experts */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Similar Experts</h3>
              <div className="space-y-2">
                <Link href="/experts/plumber-pete" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition">
                  <img src="/api/placeholder/32/32" alt="Expert" className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">PlumberPete</div>
                    <div className="text-xs text-gray-500">156 nods</div>
                  </div>
                </Link>
                <Link href="/experts/handy-mike" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition">
                  <img src="/api/placeholder/32/32" alt="Expert" className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">HandyMike</div>
                    <div className="text-xs text-gray-500">89 nods</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPage;