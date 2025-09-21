'use client'

import React, { useState } from 'react';
import { 
  ThumbsUp, MessageCircle, Bookmark, MoreHorizontal,
  CheckCircle, Share2, Flag, Eye as EyeIcon, ArrowLeft
} from 'lucide-react';

const PostThreadClient = () => {
  const [nodCounts, setNodCounts] = useState<Record<string, number>>({});

  const post = {
    id: '1',
    title: 'Help! Water won\'t stop running in toilet!',
    content: 'I\'ve been dealing with this issue for the past few days. The water keeps running continuously in my toilet tank, and I can hear it constantly. I\'ve tried adjusting the float but it doesn\'t seem to help. Any suggestions on what might be causing this and how to fix it?',
    author: {
      name: 'SarahM',
      avatar: '/api/placeholder/40/40',
      title: 'Community Member',
      nods: 45
    },
    category: 'Plumbing',
    time: '2 hours ago',
    solved: true,
    expert: {
      name: 'MikeThePlumber',
      avatar: '/api/placeholder/40/40',
      title: 'Super Dad',
      nods: '2.8k',
      solution: 'Classic flapper issue! Turn off water valve behind toilet, flush to empty tank, then replace the rubber flapper. It\'s a $5 fix at any hardware store - takes 10 minutes max!'
    },
    stats: {
      nods: 127,
      comments: 8,
      views: 234
    }
  };

  const handleNod = (itemId: string) => {
    setNodCounts(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back Button */}
      <div className="mb-6">
        <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>

      {/* Main Post */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="p-6">
          {/* Post Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt="User" className="w-10 h-10 rounded-full" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{post.author.name}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{post.author.title}</span>
                  <span className="text-xs text-gray-500">{post.time}</span>
                  {post.solved && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">SOLVED</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.author.nods} nods</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <Flag className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Post Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>

          {/* Post Content */}
          <div className="prose prose-gray max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>

          {/* Expert Solution */}
          {post.solved && post.expert && (
            <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={post.expert.avatar} alt="Expert" className="w-8 h-8 rounded-full" />
                    <span className="font-medium text-sm text-gray-900">{post.expert.name}</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">{post.expert.title}</span>
                    <span className="text-xs text-gray-500">• {post.expert.nods} nods</span>
                  </div>
                  <p className="text-sm text-gray-700">{post.expert.solution}</p>
                </div>
              </div>
            </div>
          )}

          {/* Post Stats */}
          <div className="flex items-center gap-6 border-t border-gray-200 pt-4">
            <button 
              onClick={() => handleNod('post')}
              className={`flex items-center gap-1.5 text-sm ${nodCounts.post ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'} transition`}
            >
              <ThumbsUp className={`w-4 h-4 ${nodCounts.post ? 'fill-blue-600' : ''}`} />
              <span className="font-medium">{post.stats.nods + (nodCounts.post || 0)}</span>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition">
              <MessageCircle className="w-4 h-4" />
              <span>{post.stats.comments}</span>
            </button>
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <EyeIcon className="w-4 h-4" />
              <span>{post.stats.views}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Comments ({post.stats.comments})</h3>
          
          {/* Add Comment */}
          <div className="mb-6">
            <div className="flex items-start gap-3">
              <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
              <div className="flex-1">
                <textarea
                  placeholder="Add a comment..."
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                <div className="flex items-center justify-end mt-2">
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700 transition">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Comments */}
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-start gap-3">
                <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm text-gray-900">HandyMike</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Helper</span>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">Great solution from MikeThePlumber! I've had this exact issue before and the flapper replacement worked perfectly.</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition">
                      <ThumbsUp className="w-3 h-3" />
                      <span>12</span>
                    </button>
                    <button className="text-xs text-gray-500 hover:text-gray-700 transition">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostThreadClient;