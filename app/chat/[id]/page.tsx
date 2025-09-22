'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ThumbsUp, MessageCircle, Bookmark, Share2, 
  Send, User, Clock, Users, Activity
} from 'lucide-react';
import HeaderNav from '../../components/HeaderNav';
import '../chat.css';

interface ChatMessage {
  type: 'user' | 'ai' | 'expert' | 'stat'
  text: string
  delay: number
  success?: boolean
  name?: string
  timestamp?: string
}

interface ChatData {
  id: string
  user: string
  username: string
  category: string
  avatar: string
  aiName: string
  messages: ChatMessage[]
  title: string
  description: string
}

const ChatPage = ({ params }: { params: { id: string } }) => {
  const [comment, setComment] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [liveUsers, setLiveUsers] = useState(47);
  const [reactionCount, setReactionCount] = useState(2847);
  const [comments, setComments] = useState([
    {
      id: 'comment1',
      author: 'MikeThePlumber',
      avatar: 'M',
      time: '1 hour ago',
      text: 'Exact same issue! This solution worked perfectly for me. Thanks for sharing!',
      nods: 23,
      reactions: ['👍', '🔥', '💯']
    },
    {
      id: 'comment2', 
      author: 'SarahM',
      avatar: 'S',
      time: '45 min ago',
      text: 'I had this problem last week. The CV joint replacement was exactly what I needed. Saved me $200!',
      nods: 15,
      reactions: ['💰', '✅', '🙌']
    },
    {
      id: 'comment3',
      author: 'TechDad99',
      avatar: 'T', 
      time: '30 min ago',
      text: 'Great explanation! The clicking sound is so distinctive once you know what to listen for.',
      nods: 8,
      reactions: ['🎯', '👏']
    }
  ]);
  const [userNods, setUserNods] = useState<Record<string, boolean>>({});
  const [floatingReactions, setFloatingReactions] = useState<Array<{id: string, emoji: string, x: number, y: number}>>([]);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [messageAnimations, setMessageAnimations] = useState<Record<string, boolean>>({});

  // Sample chat data based on the ID
  const getChatData = (id: string): ChatData => {
    const chatData: Record<string, ChatData> = {
      'car-clicking-when-turning': {
        id: 'car-clicking-when-turning',
        user: 'JD',
        username: 'JohnDad42',
        category: 'Car Trouble',
        avatar: '🔧',
        aiName: 'MechanicAI',
        title: 'Car clicking when turning - CV joint issue?',
        description: 'Help! My car makes a clicking sound when I turn. Is this a CV joint problem?',
        messages: [
          { type: 'user', text: 'Car clicking when turning!! HELP! 😰', delay: 0, timestamp: '2 min ago' },
          { type: 'ai', text: 'That clicking sound when turning is classic <span class="ai-highlight">CV joint</span> failure! ~$280 fix', delay: 200, timestamp: '1 min ago' },
          { type: 'user', text: 'How urgent is this? Can I drive it?', delay: 400, timestamp: '1 min ago' },
          { type: 'ai', text: 'You can drive short distances, but get it fixed soon. The clicking gets worse and can cause more damage!', delay: 600, timestamp: '1 min ago' },
          { type: 'expert', name: 'MechanicDave', text: 'I\'d recommend getting it fixed within a week. The longer you wait, the more expensive it gets!', delay: 800, timestamp: '1 min ago' },
          { type: 'user', text: 'Thanks! Booked appointment for tomorrow. You guys are lifesavers! 🙏', delay: 1000, success: true, timestamp: 'now' },
          { type: 'stat', text: '🔥 1.2k dads helped with car issues today!', delay: 1200, timestamp: 'now' }
        ]
      }
    };
    
    return chatData[id] || chatData['car-clicking-when-turning'];
  };

  const chatData = getChatData(params.id);

  // Live effects and animations
  useEffect(() => {
    // Simulate live user count changes
    const userInterval = setInterval(() => {
      setLiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);

    // Simulate random floating reactions
    const reactionInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createFloatingReaction();
      }
    }, 2000);

    // Simulate typing indicators
    const typingInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const users = ['MikeThePlumber', 'SarahM', 'TechDad99', 'NewbieBob'];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        setTypingUsers(prev => [...prev, randomUser]);
        setTimeout(() => {
          setTypingUsers(prev => prev.filter(u => u !== randomUser));
        }, 3000);
      }
    }, 5000);

    // Simulate reaction count updates
    const reactionUpdateInterval = setInterval(() => {
      setReactionCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 4000);

    return () => {
      clearInterval(userInterval);
      clearInterval(reactionInterval);
      clearInterval(typingInterval);
      clearInterval(reactionUpdateInterval);
    };
  }, []);

  const createFloatingReaction = () => {
    const reactions = ['❤️', '👍', '🔥', '💯', '🙌', '✨', '💪', '🎯', '⚡', '🚀'];
    const emoji = reactions[Math.floor(Math.random() * reactions.length)];
    const id = Date.now().toString();
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 60 + 20;
    
    setFloatingReactions(prev => [...prev, { id, emoji, x, y }]);
    
    setTimeout(() => {
      setFloatingReactions(prev => prev.filter(r => r.id !== id));
    }, 3000);
  };

  const handleComment = () => {
    if (!comment.trim()) return;
    
    setIsTyping(true);
    setShowTypingIndicator(true);
    
    setTimeout(() => {
      const newComment = {
        id: `comment${comments.length + 1}`,
        author: 'You',
        avatar: 'Y',
        time: 'just now',
        text: comment,
        nods: 0,
        reactions: []
      };
      
      setComments(prev => [...prev, newComment]);
      setComment('');
      setIsTyping(false);
      setShowTypingIndicator(false);
      
      // Trigger floating reactions
      for (let i = 0; i < 3; i++) {
        setTimeout(() => createFloatingReaction(), i * 200);
      }
      
      // Animate the new comment
      setMessageAnimations(prev => ({ ...prev, [newComment.id]: true }));
    }, 1500);
  };

  const handleNod = (commentId: string) => {
    setUserNods(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
    
    // Create floating reaction on nod
    createFloatingReaction();
  };

  const handleReaction = (commentId: string, emoji: string) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { ...comment, reactions: [...(comment.reactions || []), emoji] }
        : comment
    ));
    createFloatingReaction();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Navigation Header */}
      <HeaderNav />
      
      {/* Live Status Bar */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 text-center text-sm font-bold">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>LIVE CHAT</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{liveUsers} dads online</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span>{reactionCount.toLocaleString()} reactions</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-bold">Back to Feed</span>
              </Link>
              <div className="h-6 w-px bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-green-400">Live Discussion</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Bookmark className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Share2 className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Chat Header */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {chatData.user}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{chatData.username}</h1>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Online</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">{chatData.category} Expert</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{chatData.title}</h2>
              <p className="text-gray-600 mb-4">{chatData.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">Started 2 hours ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-700">{comments.length} comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Conversation */}
        <div className="bg-black rounded-xl overflow-hidden mb-6 relative" style={{minHeight: '500px'}}>
          {/* Floating Reactions */}
          {floatingReactions.map((reaction) => (
            <div
              key={reaction.id}
              className="absolute text-2xl pointer-events-none z-20 animate-float-up"
              style={{
                left: `${reaction.x}%`,
                top: `${reaction.y}%`,
                animation: 'floatUp 3s ease-out forwards'
              }}
            >
              {reaction.emoji}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {showTypingIndicator && (
            <div className="absolute bottom-4 left-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span>AI is typing...</span>
              </div>
            </div>
          )}

          <div className="p-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-2">
                {chatData.messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}>
                    {message.type === 'user' ? (
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                        <div className="font-bold text-sm">{message.text}</div>
                        <div className="text-xs opacity-75 mt-1">{message.timestamp}</div>
                      </div>
                    ) : message.type === 'ai' ? (
                      <div className="bg-gray-800 text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-md shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg animate-pulse">{chatData.avatar}</span>
                          <span className="font-bold text-sm">{chatData.aiName}</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="text-sm" dangerouslySetInnerHTML={{__html: message.text}}></div>
                        <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
                      </div>
                    ) : message.type === 'expert' ? (
                      <div className="bg-green-900 text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-md shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                            {message.name?.substring(0, 2)}
                          </div>
                          <span className="font-bold text-sm">{message.name}</span>
                          <span className="bg-yellow-500 text-black px-1 py-0.5 rounded text-xs font-bold animate-pulse">EXPERT</span>
                        </div>
                        <div className="text-sm">{message.text}</div>
                        <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
                      </div>
                    ) : message.type === 'stat' ? (
                      <div className="bg-yellow-900 text-white px-4 py-2 rounded-2xl max-w-md mx-auto text-center shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                        <div className="text-sm font-bold animate-pulse">{message.text}</div>
                        <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add Comment */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 mb-6">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Join the conversation! Share your experience or ask questions..."
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                rows={3}
              />
              <div className="flex justify-between items-center mt-2">
                <div className="text-xs text-gray-400">
                  💬 {typingUsers.length > 0 && `${typingUsers.join(', ')} ${typingUsers.length === 1 ? 'is' : 'are'} typing...`}
                </div>
                <button
                  onClick={handleComment}
                  disabled={!comment.trim() || isTyping}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition flex items-center gap-2 font-bold"
                >
                  {isTyping ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-white text-xl flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Community Discussion ({comments.length})
            </h2>
            <select className="text-sm bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white">
              <option>Most Helpful</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          {comments.map((comment) => (
            <div key={comment.id} className={`bg-gray-800 rounded-xl border border-gray-700 p-4 hover:border-blue-500 hover:shadow-lg transition-all duration-300 ${messageAnimations[comment.id] ? 'animate-slide-in' : ''}`}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-white">{comment.author}</span>
                    <span className="text-xs text-gray-400">• {comment.time}</span>
                    {comment.author === 'You' && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">YOU</span>
                    )}
                  </div>
                  <p className="text-gray-200 mb-3">{comment.text}</p>
                  
                  {/* Reactions */}
                  {comment.reactions && comment.reactions.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {comment.reactions.map((reaction, index) => (
                        <span key={index} className="text-lg hover:scale-125 transition-transform cursor-pointer">
                          {reaction}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handleNod(comment.id)}
                      className={`flex items-center gap-1.5 text-sm ${userNods[comment.id] ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-400 transition-colors`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${userNods[comment.id] ? 'fill-current' : ''}`} />
                      <span className="font-bold">{comment.nods + (userNods[comment.id] ? 1 : 0)}</span>
                    </button>
                    
                    {/* Quick Reactions */}
                    <div className="flex items-center gap-2">
                      {['👍', '❤️', '🔥', '😂', '😮'].map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => handleReaction(comment.id, emoji)}
                          className="text-lg hover:scale-125 transition-transform"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                    
                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                      Reply
                    </button>
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

export default ChatPage;
