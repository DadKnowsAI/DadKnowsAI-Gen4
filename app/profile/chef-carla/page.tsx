'use client'

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Calendar, MapPin, MessageSquare,
  ThumbsUp, Settings, Share2
} from 'lucide-react';

const ChefCarlaProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-bold">Back to Home</span>
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
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              C
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">ChefCarla</h1>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Online</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">Pro Chef</span>
              </div>
              <p className="text-gray-600 mb-4 font-bold">
                Professional chef • 12 years experience • Mom of 2 • Making cooking simple for busy families
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Member since Mar 2020</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Austin, TX</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition">
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
            <div className="text-2xl font-bold text-gray-900">1,923</div>
            <div className="text-sm font-bold text-gray-500">Total Nods</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">847</div>
            <div className="text-sm font-bold text-gray-500">Problems Solved</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div className="text-sm font-bold text-gray-500">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">183</div>
            <div className="text-sm font-bold text-gray-500">Helps Today</div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-6 py-3 text-sm font-bold text-orange-600 border-b-2 border-orange-600 bg-orange-50">
                Recent Solutions
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Reviews
              </button>
              <button className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
                Recipes & Tips
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
                        <span className="font-bold text-sm text-gray-900">TeacherTina</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">OP</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">1 hour ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">How do I fix overcooked pasta?</h3>
                <p className="text-sm font-bold text-gray-600 mb-3">
                  Try rinsing with cold water to stop cooking, then reheat gently in sauce. For future, test pasta 2 minutes before package time!
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-orange-600">
                    <ThumbsUp className="w-4 h-4 fill-orange-600" />
                    <span className="font-bold">89</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">15</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Cooking</span>
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
                      <span className="text-xs font-bold text-gray-500">2 hours ago</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">SOLVED</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Sourdough starter dying - how to revive?</h3>
                <p className="text-sm font-bold text-gray-600 mb-3">
                  Feed it twice daily with equal parts flour and water. Keep at room temp. If it&apos;s really bad, start fresh with a tablespoon of the old starter mixed into new flour/water.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-sm text-orange-600">
                    <ThumbsUp className="w-4 h-4 fill-orange-600" />
                    <span className="font-bold">289</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-bold">23</span>
                  </button>
                  <span className="text-xs font-bold text-gray-500">Cooking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCarlaProfile;


