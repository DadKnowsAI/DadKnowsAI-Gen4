'use client'

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft, User, Calendar, MapPin, Award, MessageSquare,
  ThumbsUp, Clock, CheckCircle, Star, Settings, Share2,
  Wrench, Home, Heart, Zap, Eye, Bookmark, MoreHorizontal, Laptop
} from 'lucide-react';

const TechDad99Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-bold">Back to Feed</span>
              </Link>
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
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              T
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">TechDad99</h1>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Online</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tech Guru</span>
              </div>
              <p className="text-gray-600 mb-4 font-bold">
                Software engineer • 10 years experience • Dad of 3 • Making technology work for families
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Member since Apr 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Seattle, WA</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">
                Ask Question
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">1,523</div>
            <div className="text-sm font-bold text-gray-500">Total Nods</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">892</div>
            <div className="text-sm font-bold text-gray-500">Problems Solved</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">96%</div>
            <div className="text-sm font-bold text-gray-500">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">67</div>
            <div className="text-sm font-bold text-gray-500">Helps Today</div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-6 py-3 text-sm font-bold text-green-600 border-b-2 border-green-600 bg-green-50">
                Recent Solutions
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Reviews
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Tech Tips
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Recent Solutions */}
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      M
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900">MomDebbie</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">OP</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">1 hour ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">WiFi keeps dropping - kids can't do homework!</h3>
                <p className="text-sm font-bold text-gray-600 mb-3">
                  Try restarting your router first (unplug for 30 seconds). If that doesn't work, check for interference from other devices. Move the router away from microwaves, baby monitors, or cordless phones. Also try changing the WiFi channel in router settings.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-green-600">
                    <ThumbsUp className="w-4 h-4 fill-green-600" />
                    <span className="font-bold">134</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">22</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Technology</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      S
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900">SarahM</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">OP</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">3 hours ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone storage full - how to free up space?</h3>
                <p className="text-sm font-bold text-gray-600 mb-3">
                  Start with photos and videos - they take the most space. Use Google Photos or iCloud to backup and delete from device. Clear app cache in settings, delete unused apps, and empty your trash. For iPhone, try "Offload Unused Apps" in storage settings.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-green-600">
                    <ThumbsUp className="w-4 h-4 fill-green-600" />
                    <span className="font-bold">98</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">15</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechDad99Profile;
