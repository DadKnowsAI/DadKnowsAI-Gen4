'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ThumbsUp, MessageCircle, Bookmark, Award, 
  MoreHorizontal, Clock, CheckCircle, Reply, Send,
  TrendingUp, Users, ChevronUp, ChevronDown, Star, User
} from 'lucide-react';

const ThreadPage = () => {
  const [comment, setComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({
    main: 127,
    comment1: 45,
    comment2: 23,
    comment3: 89,
    comment4: 12
  });
  const [userVotes, setUserVotes] = useState<Record<string, string | null>>({});

  const handleVote = (id: string, type: string) => {
    const currentVote = userVotes[id];
    let voteChange = 0;
    
    if (currentVote === type) {
      // Remove vote
      setUserVotes(prev => ({ ...prev, [id]: null }));
      voteChange = type === 'up' ? -1 : 1;
    } else if (currentVote === null || currentVote === undefined) {
      // Add vote
      setUserVotes(prev => ({ ...prev, [id]: type }));
      voteChange = type === 'up' ? 1 : -1;
    } else {
      // Change vote
      setUserVotes(prev => ({ ...prev, [id]: type }));
      voteChange = type === 'up' ? 2 : -2;
    }
    
    setVotes(prev => ({ ...prev, [id]: prev[id] + voteChange }));
  };

  const [comments, setComments] = useState([
    {
      id: 'comment1',
      author: 'HandymanHank',
      badge: 'DIY Expert',
      nods: 1234,
      time: '1 hour ago',
      text: 'Great advice! I&apos;d also add that while you&apos;re at it, check the chain length. If it&apos;s too short, the flapper won&apos;t seal properly. You can adjust it or get a new one for another couple bucks.',
      replies: [
        {
          id: 'reply1',
          author: 'SarahM',
          badge: 'OP',
          time: '45 minutes ago',
          text: 'Thanks for the extra tip! I&apos;ll check that too.',
          isOP: true
        }
      ]
    },
    {
      id: 'comment2',
      author: 'BudgetBetty',
      badge: null,
      nods: 432,
      time: '2 hours ago',
      text: 'For anyone on a tight budget - you can sometimes get a temporary fix by cleaning the existing flapper with vinegar. Mineral buildup can prevent a good seal. Not permanent but buys you time!',
      replies: []
    },
    {
      id: 'comment3',
      author: 'PlumberPete',
      badge: 'Verified Pro',
      nods: 3421,
      time: '30 minutes ago',
      text: 'Mike&apos;s spot on. Just want to add - if this is happening to multiple toilets in your house, you might have high water pressure. Worth checking if the problem comes back!',
      replies: [
        {
          id: 'reply2',
          author: 'MikeThePlumber',
          badge: 'Super Dad',
          time: '28 minutes ago',
          text: 'Excellent point Pete! High water pressure can definitely cause premature wear on flappers. 👍'
        }
      ]
    }
  ]);

  const handleComment = () => {
    if (!comment.trim()) return;
    
    const newComment = {
      id: `comment${comments.length + 2}`,
      author: 'You',
      badge: null,
      nods: 0,
      time: 'just now',
      text: comment,
      replies: []
    };
    
    setComments([...comments, newComment]);
    setComment('');
    setVotes(prev => ({ ...prev, [newComment.id]: 0 }));
  };

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
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Plumbing</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">SOLVED</span>
                <span className="text-xs text-gray-500">• Posted 2 hours ago by <Link href="/profile/sarahm" className="font-bold text-blue-600 hover:text-blue-800 hover:underline">SarahM</Link></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Original Post */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6 hover:border-blue-300 hover:shadow-md transition cursor-pointer" onClick={() => window.location.href = '/thread/1'}>
          <div className="p-6">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Link href="/profile/sarahm" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold hover:opacity-80 transition">
                  <User className="w-6 h-6" />
                </Link>
                <div>
                  <div className="flex items-center gap-2">
                    <Link href="/profile/sarahm" className="font-bold text-gray-900 hover:text-blue-600 hover:underline">SarahM</Link>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">OP</span>
                    <span className="text-xs text-gray-500">• 2 hours ago</span>
                  </div>
                  <div className="text-sm font-bold text-gray-600">First time homeowner</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Help! Water won't stop running in toilet!
            </h1>

            {/* Post Body */}
            <div className="text-gray-700 mb-4 space-y-3">
              <p className="font-bold text-lg">
                I just bought my first house and the upstairs toilet won't stop running. The water keeps going and going. 
                I tried jiggling the handle but that only works for a few seconds.
              </p>
              <p className="font-bold text-lg">
                It's driving me crazy and probably wasting tons of water. Is this something I can fix myself or do I need 
                to call a plumber? I'm pretty handy but have never dealt with toilet repairs before.
              </p>
              <p className="font-bold text-lg">
                Any help would be appreciated! Thanks in advance, dads!
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
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <Link href="/profile/mike-the-plumber" className="font-bold text-gray-900 hover:text-blue-600 hover:underline">MikeThePlumber</Link>
                    <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">Super Dad</span>
                    <span className="text-xs text-gray-500">• 2.8k nods</span>
                  </div>
                  <p className="text-gray-700 font-bold text-lg">
                    Classic flapper issue. Turn off water valve behind toilet, flush to empty tank, 
                    then replace the rubber flapper. It's a $5 fix at any hardware store - takes 10 
                    minutes max! Here's what you do:
                  </p>
                  <ol className="mt-2 ml-4 space-y-1 text-sm text-gray-700 font-bold">
                    <li>1. Turn off the water valve (usually on the wall behind the toilet)</li>
                    <li>2. Flush the toilet to empty the tank</li>
                    <li>3. Unhook the old flapper from the flush arm</li>
                    <li>4. Snap the new flapper in place</li>
                    <li>5. Turn water back on and test</li>
                  </ol>
                  <p className="text-sm text-gray-600 mt-2 font-bold">
                    You got this! Let me know if you need any clarification.
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
                  <span>{comments.length + comments.reduce((acc, c) => acc + c.replies.length, 0)} comments</span>
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

        {/* Add Comment */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add your advice or experience..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <div className="flex justify-between items-center mt-2">
                <div className="text-xs text-gray-500">
                  Be helpful and respectful
                </div>
                <button
                  onClick={handleComment}
                  disabled={!comment.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Comment
                </button>
              </div>
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
            <div key={comment.id} className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition cursor-pointer" onClick={() => window.location.href = '/thread/1'}>
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
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
                    
                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="mt-4 pl-4 border-l-2 border-gray-200 space-y-3">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex items-start gap-2">
                            <div className={`w-8 h-8 ${(reply as any).isOP ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-orange-500 to-red-600'} rounded-full flex items-center justify-center text-white font-bold text-xs`}>
                              <User className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm text-gray-900">{reply.author === 'SarahM' ? <Link href="/profile/sarahm" className="hover:text-blue-600 hover:underline">SarahM</Link> : reply.author}</span>
                                {reply.badge && (
                                  <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">
                                    {reply.badge}
                                  </span>
                                )}
                                <span className="text-xs text-gray-500">• {reply.time}</span>
                              </div>
                              <p className="text-sm text-gray-700 font-bold">{reply.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Reply Input */}
                    {replyTo === comment.id && (
                      <div className="mt-3 pl-4">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Write a reply..."
                            className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                setReplyTo(null);
                              }
                            }}
                          />
                          <button 
                            onClick={() => setReplyTo(null)}
                            className="text-sm text-gray-500 hover:text-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
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

export default ThreadPage;