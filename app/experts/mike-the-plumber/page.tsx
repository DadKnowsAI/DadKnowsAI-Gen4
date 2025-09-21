'use client'

import React from 'react';
import {
  ArrowLeft, User, Calendar, MapPin, Award, MessageSquare,
  ThumbsUp, Clock, CheckCircle, Star, Settings, Share2,
  Wrench, Home, Heart, Zap, Eye, Bookmark, MoreHorizontal,
  Crown, Shield, TrendingUp
} from 'lucide-react';

const MikeThePlumberProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-bold">Back to Home</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              M
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">MikeThePlumber</h1>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Super Dad</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Online</span>
              </div>
              <p className="text-gray-600 mb-4 font-bold">
                Licensed Master Plumber • 15+ years experience • Helping homeowners save money with DIY fixes
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Expert since 2020</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Portland, OR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="font-bold text-gray-700">Top Expert</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                Ask Question
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">2,847</div>
            <div className="text-sm font-bold text-gray-500">Nods Received</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">1,234</div>
            <div className="text-sm font-bold text-gray-500">Questions Answered</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">98.7%</div>
            <div className="text-sm font-bold text-gray-500">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">4.9</div>
            <div className="text-sm font-bold text-gray-500">Rating</div>
          </div>
        </div>

        {/* Specialties */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600" />
            Specialties
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Toilet Repair</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Faucet Installation</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Pipe Leaks</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Water Heater</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Drain Cleaning</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">DIY Tips</span>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-6 py-3 text-sm font-bold text-blue-600 border-b-2 border-blue-600 bg-blue-50">
                Recent Answers
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Reviews
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Tips & Tricks
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Recent Answers */}
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      S
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900">SarahM</span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded font-bold">Question</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">2 minutes ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
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
                  <button className="flex items-center gap-1.5 text-sm text-blue-600">
                    <ThumbsUp className="w-4 h-4 fill-blue-600" />
                    <span className="font-bold">127</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">8</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Plumbing</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      D
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900">DavidK</span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded font-bold">Question</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">1 hour ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Kitchen faucet won't stop dripping</h3>
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
                        Usually the O-ring or cartridge needs replacing. Turn off water under sink, remove handle, and replace the worn parts. Most faucets have replacement kits available.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-blue-600">
                    <ThumbsUp className="w-4 h-4 fill-blue-600" />
                    <span className="font-bold">89</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">12</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Plumbing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MikeThePlumberProfile;
