'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ThumbsUp, MessageCircle, Bookmark, Award, 
  MoreHorizontal, Clock, CheckCircle, Reply, Send,
  TrendingUp, Users, ChevronUp, ChevronDown, Star, User
} from 'lucide-react';

const SourdoughStarterThread = () => {
  const [comment, setComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({
    main: 289,
    comment1: 156,
    comment2: 78,
    comment3: 45
  });
  const [userVotes, setUserVotes] = useState<Record<string, string | null>>({});

  const handleVote = (id: string, type: string) => {
    const currentVote = userVotes[id];
    let voteChange = 0;
    
    if (currentVote === type) {
      setUserVotes(prev => ({ ...prev, [id]: null }));
      voteChange = type === 'up' ? -1 : 1;
    } else if (currentVote === null || currentVote === undefined) {
      setUserVotes(prev => ({ ...prev, [id]: type }));
      voteChange = type === 'up' ? 1 : -1;
    } else {
      setUserVotes(prev => ({ ...prev, [id]: type }));
      voteChange = type === 'up' ? 2 : -2;
    }
    
    setVotes(prev => ({ ...prev, [id]: prev[id] + voteChange }));
  };

  const [comments, setComments] = useState([
    {
      id: 'comment1',
      author: 'BakerBeth',
      badge: 'Pro Baker',
      nods: 1923,
      time: '2 hours ago',
      text: 'I\'ve saved 47 starters today! The key is feeding twice daily with equal parts flour and water. Keep at room temp (70-75°F). If it\'s really bad, start fresh with a tablespoon of the old starter mixed into new flour/water.',
      replies: []
    },
    {
      id: 'comment2',
      author: 'ChefCarla',
      badge: 'Pro Chef',
      nods: 1923,
      time: '1 hour ago',
      text: 'Beth\'s method works! Also try adding a pinch of sugar to give the yeast a boost. And make sure you\'re using unbleached flour - the natural yeast needs those nutrients.',
      replies: []
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center h-14">
            <button 
              onClick={() => window.location.href = '/'}
              className="p-2 hover:bg-gray-100 rounded-lg transition mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">Cooking</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">SOLVED</span>
                <span className="text-xs text-gray-500">• Posted 2 hours ago by <Link href="/profile/bakerbeth" className="font-bold text-blue-600 hover:text-blue-800 hover:underline">BakerBeth</Link></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Original Post */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6 hover:border-blue-300 hover:shadow-md transition cursor-pointer" onClick={() => window.location.href = '/thread/sourdough-starter-dying'}>
          <div className="p-6">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Link href="/profile/bakerbeth" className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold hover:opacity-80 transition">
                  <User className="w-6 h-6" />
                </Link>
                <div>
                  <div className="flex items-center gap-2">
                    <Link href="/profile/bakerbeth" className="font-bold text-gray-900 hover:text-blue-600 hover:underline">BakerBeth</Link>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">Pro Baker</span>
                    <span className="text-xs text-gray-500">• 2 hours ago</span>
                  </div>
                  <div className="text-sm font-bold text-gray-600">Professional baker</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Sourdough starter dying - BakerBeth saved 47 starters today!
            </h1>

            {/* Post Body */}
            <div className="text-gray-700 mb-4 space-y-3">
              <p className="font-bold text-lg">
                My sourdough starter has been looking really sad lately. It's not bubbling much, smells a bit off, 
                and the texture is wrong. I've been feeding it daily but it's just not coming back to life.
              </p>
              <p className="font-bold text-lg">
                I've tried everything - different flours, different water temperatures, even moving it to different spots 
                in my kitchen. Nothing seems to work and I'm about to give up on it.
              </p>
              <p className="font-bold text-lg">
                Help! This starter has been with me for 6 months and I don't want to lose it. 
                What am I doing wrong?
              </p>
            </div>

            {/* Best Answer */}
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-2 border-green-200">
              <div className="flex items-start gap-3">
                <div className="pt-1">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="font-bold text-sm text-green-800">Best Answer</span>
                    <span className="text-xs text-gray-600">• Marked by OP</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-gray-900">BakerBeth</span>
                    <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Pro Baker</span>
                    <span className="text-xs text-gray-500">• 1.9k nods</span>
                  </div>
                  <p className="text-gray-700 font-bold text-lg">
                    I've saved 47 starters today! The key is feeding twice daily with equal parts flour and water. Keep at room temp (70-75°F). If it's really bad, start fresh with a tablespoon of the old starter mixed into new flour/water. Also try adding a pinch of sugar to give the yeast a boost!
                  </p>
                </div>
              </div>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => handleVote('main', 'up')}
                    className={`p-1 rounded hover:bg-gray-100 ${userVotes.main === 'up' ? 'text-blue-600' : 'text-gray-500'}`}
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                  <span className={`font-bold text-sm ${userVotes.main ? 'text-blue-600' : 'text-gray-700'}`}>
                    {votes.main}
                  </span>
                  <button 
                    onClick={() => handleVote('main', 'down')}
                    className={`p-1 rounded hover:bg-gray-100 ${userVotes.main === 'down' ? 'text-red-600' : 'text-gray-500'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
                <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700">
                  <MessageCircle className="w-4 h-4" />
                  <span>{comments.length} comments</span>
                </button>
                <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-600">
                  <Bookmark className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
              <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700">
                <Reply className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">All Comments ({comments.length})</h2>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
              <option>Most Helpful</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-xl border border-gray-200">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900 text-lg">{comment.author}</span>
                      {comment.badge && (
                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">
                          {comment.badge}
                        </span>
                      )}
                      {comment.nods && (
                        <span className="text-xs text-gray-500">• {comment.nods} nods</span>
                      )}
                      <span className="text-xs text-gray-500">• {comment.time}</span>
                    </div>
                    <p className="text-gray-700 mb-3 font-bold text-lg">{comment.text}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={() => handleVote(comment.id, 'up')}
                          className={`p-1 rounded hover:bg-gray-100 ${userVotes[comment.id] === 'up' ? 'text-blue-600' : 'text-gray-500'}`}
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <span className={`text-sm ${userVotes[comment.id] ? 'text-blue-600' : 'text-gray-600'}`}>
                          {votes[comment.id]}
                        </span>
                        <button 
                          onClick={() => handleVote(comment.id, 'down')}
                          className={`p-1 rounded hover:bg-gray-100 ${userVotes[comment.id] === 'down' ? 'text-red-600' : 'text-gray-500'}`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourdoughStarterThread;


