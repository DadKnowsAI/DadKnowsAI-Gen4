'use client'

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft, User, Calendar, MapPin, Award, MessageSquare,
  ThumbsUp, Clock, CheckCircle, Star, Settings, Share2,
  Wrench, Home, Heart, Zap, Eye, Bookmark, MoreHorizontal, Car
} from 'lucide-react';

const MechanicDaveProfile = () => {
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
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              M
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">MechanicDave</h1>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Online</span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">Master Mechanic</span>
              </div>
              <p className="text-gray-600 mb-4 font-bold">
                ASE certified mechanic • 18 years experience • Dad of 2 • Diagnosing car problems like a pro
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Member since Mar 2020</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Phoenix, AZ</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition">
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
            <div className="text-2xl font-bold text-gray-900">2,512</div>
            <div className="text-sm font-bold text-gray-500">Total Nods</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">1,234</div>
            <div className="text-sm font-bold text-gray-500">Problems Solved</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">97%</div>
            <div className="text-sm font-bold text-gray-500">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">28</div>
            <div className="text-sm font-bold text-gray-500">Helps Today</div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-6 py-3 text-sm font-bold text-red-600 border-b-2 border-red-600 bg-red-50">
                Recent Solutions
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Reviews
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Car Maintenance
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
                      T
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900">TechDad99</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">OP</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">2 hours ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Car shaking at highway speeds - alignment issue?</h3>
                <p className="text-sm font-bold text-gray-600 mb-3">
                  Could be alignment, but more likely unbalanced tires or worn suspension. Check tire pressure first, then look for uneven tire wear. If tires look good, get a balance and alignment check. Shaking usually means tire balance, pulling means alignment.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-red-600">
                    <ThumbsUp className="w-4 h-4 fill-red-600" />
                    <span className="font-bold">167</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">19</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Car Trouble</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      B
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900">BakerBeth</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">OP</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">4 hours ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Brake pedal goes to floor - emergency!</h3>
                <p className="text-sm font-bold text-gray-600 mb-3">
                  STOP DRIVING IMMEDIATELY! This is a brake fluid leak or master cylinder failure. Check brake fluid level first. If it&apos;s low, you have a leak - call a tow truck. If fluid is full, master cylinder is bad. Either way, this is not safe to drive!
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-red-600">
                    <ThumbsUp className="w-4 h-4 fill-red-600" />
                    <span className="font-bold">312</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">45</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Car Trouble</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicDaveProfile;
