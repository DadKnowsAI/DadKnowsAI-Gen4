'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ThumbsUp, MessageCircle, Bookmark, Award, 
  MoreHorizontal, Clock, CheckCircle, Reply, Send,
  TrendingUp, Users, ChevronUp, ChevronDown, Star, User
} from 'lucide-react';

const GarbageDisposalThread = () => {
  const [comment, setComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({
    main: 342,
    comment1: 89,
    comment2: 45,
    comment3: 67
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
      author: 'ElectricianEd',
      badge: 'Verified Pro',
      nods: 2847,
      time: '1 hour ago',
      text: 'The humming usually means the motor is trying to run but something is stuck. First, turn off the disposal at the wall switch, then use a flashlight to look down the drain. If you see something stuck, use tongs or pliers to remove it.',
      replies: []
    },
    {
      id: 'comment2',
      author: 'HandyMike',
      badge: 'DIY Expert',
      nods: 1234,
      time: '45 minutes ago',
      text: 'Ed\'s right! The reset button trick works great too. Look for a small red button on the bottom of the disposal unit - press it to reset the motor. This fixes 80% of humming issues.',
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
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold">Electrical</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">SOLVED</span>
                <span className="text-xs text-gray-500">• Posted 1 hour ago by <Link href="/profile/electrician-ed" className="font-bold text-blue-600 hover:text-blue-800 hover:underline">ElectricianEd</Link></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Original Post */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6 hover:border-blue-300 hover:shadow-md transition cursor-pointer" onClick={() => window.location.href = '/thread/garbage-disposal-humming'}>
          <div className="p-6">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Link href="/profile/electrician-ed" className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold hover:opacity-80 transition">
                  <User className="w-6 h-6" />
                </Link>
                <div>
                  <div className="flex items-center gap-2">
                    <Link href="/profile/electrician-ed" className="font-bold text-gray-900 hover:text-blue-600 hover:underline">ElectricianEd</Link>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Verified Pro</span>
                    <span className="text-xs text-gray-500">• 1 hour ago</span>
                  </div>
                  <div className="text-sm font-bold text-gray-600">Licensed electrician</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Garbage disposal humming - reset button tip going viral!
            </h1>

            {/* Post Body */}
            <div className="text-gray-700 mb-4 space-y-3">
              <p className="font-bold text-lg">
                My disposal has been humming for 2 days and won't turn on. I tried everything - checked the circuit breaker, 
                looked for jams, even tried the Allen wrench trick. Nothing worked.
              </p>
              <p className="font-bold text-lg">
                Finally found the solution! There's a reset button on the bottom of most disposal units. 
                Turn off the power, press the red reset button, then turn power back on. Fixed it instantly!
              </p>
              <p className="font-bold text-lg">
                This tip has helped 47 people today alone! Share it with anyone having disposal issues.
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
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-gray-900">ElectricianEd</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">Verified Pro</span>
                    <span className="text-xs text-gray-500">• 2.8k nods</span>
                  </div>
                  <p className="text-gray-700 font-bold text-lg">
                    The humming usually means the motor is trying to run but something is stuck. First, turn off the disposal at the wall switch, then use a flashlight to look down the drain. If you see something stuck, use tongs or pliers to remove it. The reset button trick works great too!
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
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900 text-lg">{comment.author}</span>
                      {comment.badge && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">
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

export default GarbageDisposalThread;


