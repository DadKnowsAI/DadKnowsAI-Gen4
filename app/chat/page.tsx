'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Send, User, ThumbsUp, MessageCircle,
  ArrowLeft, Wrench, ChefHat, Car, Baby,
  Crown, Lightbulb, ExternalLink, Award, Clock, CheckCircle,
  TrendingUp, Star
} from 'lucide-react';

interface ExpertResponse {
  expertName: string;
  expertBadge: string;
  nods: number;
  response: string;
  successRate: string;
  timesSolved: number;
}

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  expertResponses?: ExpertResponse[];
  showingExpanded?: boolean;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "🎤 Hey there! I'm Dad, your friendly AI host! I connect you with REAL experts who've solved problems just like yours. What's troubling you today? Leaky pipe? Burnt dinner? Car making weird noises? Let me find the top-voted solutions from our verified experts!",
      timestamp: new Date(),
      expertResponses: [
        {
          expertName: 'MikeThePlumber',
          expertBadge: 'Super Dad',
          nods: 2847,
          response: "Click on any expert response to dive deeper into the conversation! I've helped solve thousands of plumbing issues with proven solutions.",
          successRate: '98%',
          timesSolved: 247
        },
        {
          expertName: 'ChefCarla',
          expertBadge: 'Pro Chef',
          nods: 1923,
          response: "Try clicking on my response to see how our conversation threads work! I specialize in cooking solutions that actually work.",
          successRate: '95%',
          timesSolved: 189
        }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response with expert responses
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "🎯 Great question! I've found the TOP community-verified solutions for this exact problem. Here's what our experts say:",
        timestamp: new Date(),
        expertResponses: [
          {
            expertName: 'MikeThePlumber',
            expertBadge: 'Super Dad',
            nods: 2847,
            response: "Classic flapper valve issue! Turn off the water supply valve behind the toilet, flush to empty the tank, then replace the $5 rubber flapper from any hardware store. Takes 10 minutes max. I've fixed this exact issue 247 times!",
            successRate: '98%',
            timesSolved: 247
          },
          {
            expertName: 'HandymanHank',
            expertBadge: 'Pro',
            nods: 1923,
            response: "Before replacing anything, try adjusting the chain length first - sometimes it's just too tight or loose. If the flapper looks warped or has mineral buildup, then replace it.",
            successRate: '92%',
            timesSolved: 189
          },
          {
            expertName: 'DIYDiana',
            expertBadge: 'Rising Star',
            nods: 892,
            response: "Pro tip: While you're in there, add food coloring to the tank. If color appears in the bowl without flushing, you definitely have a flapper leak!",
            successRate: '89%',
            timesSolved: 67
          }
        ]
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Follow-up message
      setTimeout(() => {
        const followUp: Message = {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          content: "💡 MikeThePlumber's solution has helped 247 people with a 98% success rate! Want me to connect you directly with Mike for follow-up questions? Or should I find video tutorials for this fix?",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, followUp]);
      }, 3000);
    }, 2000);
  };

  const handleNod = (messageId: string, expertIndex: number) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId && msg.expertResponses) {
        const updatedResponses = [...msg.expertResponses];
        updatedResponses[expertIndex] = {
          ...updatedResponses[expertIndex],
          nods: updatedResponses[expertIndex].nods + 1
        };
        return { ...msg, expertResponses: updatedResponses };
      }
      return msg;
    }));
  };

  const suggestedQuestions = [
    { icon: <Wrench className="w-4 h-4" />, text: "My toilet won't stop running" },
    { icon: <ChefHat className="w-4 h-4" />, text: "Why is my bread always dense?" },
    { icon: <Car className="w-4 h-4" />, text: "Car making weird noise when turning" },
    { icon: <Baby className="w-4 h-4" />, text: "3-year-old won't sleep through night" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-bold">Back</span>
              </Link>
              <div className="border-l border-gray-200 pl-4">
                <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">🎤</div>
                  Dad AI - Your Expert Matchmaker
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Live
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-600">
                <span className="font-bold text-blue-600">14,827</span> problems solved today
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4" style={{ height: 'calc(100vh - 3.5rem)' }}>
        {/* Left Sidebar - Live Activity */}
        <div className="w-80 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              Trending Now
            </h3>
            <div className="space-y-2">
              <Link href="/thread/garbage-disposal-humming" className="block">
                <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 hover:border-orange-300 transition cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-900">Garbage disposal humming</span>
                    <span className="text-xs text-orange-600 font-bold">+342 nods</span>
                  </div>
                  <p className="text-xs font-bold text-gray-600">ElectricianEd's reset button tip going viral</p>
                </div>
              </Link>
              <Link href="/thread/sourdough-starter-dying" className="block">
                <div className="p-2 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 hover:border-green-300 transition cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-900">Sourdough starter dying</span>
                    <span className="text-xs text-green-600 font-bold">+289 nods</span>
                  </div>
                  <p className="text-xs font-bold text-gray-600">BakerBeth saved 47 starters today!</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              Top Experts Online Now
            </h3>
            <div className="space-y-2">
              <Link href="/profile/mike-the-plumber" className="block">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-sm transition cursor-pointer">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">M</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900 hover:text-blue-600">MikeThePlumber</div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs font-bold">Super Dad</span>
                      <span className="font-bold text-gray-500">247 helps today</span>
                    </div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
              </Link>
              <Link href="/profile/chef-carla" className="block">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-sm transition cursor-pointer">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900 hover:text-orange-600">ChefCarla</div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-orange-100 text-orange-700 px-1 py-0.5 rounded text-xs font-bold">Pro Chef</span>
                      <span className="font-bold text-gray-500">183 helps today</span>
                    </div>
                  </div>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
            <h4 className="font-bold text-gray-900 mb-2 text-sm">How This Works</h4>
            <ul className="space-y-1 text-xs font-bold text-gray-700">
              <li className="flex items-start gap-1">
                <span className="text-blue-600">1.</span>
                <span>You describe your problem</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-blue-600">2.</span>
                <span>I find the most-nodded expert solutions</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-blue-600">3.</span>
                <span>Real experts with proven track records</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-blue-600">4.</span>
                <span>You can connect directly for follow-ups</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6">
            {messages.length === 1 && (
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 mb-3">Popular Problems Right Now:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {suggestedQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInputValue(q.text);
                        // Auto-send the question
                        setTimeout(() => {
                          handleSend();
                        }, 100);
                      }}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition text-left cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-600">
                        {q.icon}
                      </div>
                      <span className="text-sm font-bold text-gray-700">{q.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.type === 'user' ? (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                      🎤
                    </div>
                  )}
                  
                  <div className={`flex-1 max-w-3xl ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                    <div>
                      <div className={`rounded-xl px-4 py-3 ${
                        message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'
                      }`}>
                        <p className={`text-sm font-bold ${message.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                          {message.content}
                        </p>
                      </div>
                      
                      {message.expertResponses && (
                        <div className="mt-3 space-y-3">
                          {message.expertResponses.map((expert, idx) => (
                            <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition cursor-pointer" onClick={() => window.location.href = `/chat/thread/${message.id}`}>
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    {expert.expertName.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="font-bold text-sm text-gray-900">{expert.expertName}</span>
                                      <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">
                                        {expert.expertBadge}
                                      </span>
                                      {idx === 0 && (
                                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                                          <Star className="w-3 h-3" />
                                          TOP ANSWER
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                                      <span className="font-bold">{expert.successRate} success</span>
                                      <span>•</span>
                                      <span className="font-bold">{expert.timesSolved} times solved</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <p className="text-sm font-bold text-gray-700 mb-3">{expert.response}</p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleNod(message.id, idx);
                                    }}
                                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition"
                                  >
                                    <ThumbsUp className={`w-4 h-4 ${expert.nods > 2000 ? 'fill-blue-600 text-blue-600' : ''}`} />
                                    <span className="font-bold">{expert.nods.toLocaleString()}</span>
                                    <span>nods</span>
                                  </button>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.location.href = `/chat/thread/${message.id}`;
                                    }}
                                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                                  >
                                    <MessageCircle className="w-4 h-4" />
                                    <span className="font-bold">Ask {expert.expertName.split(/(?=[A-Z])/)[0]}</span>
                                  </button>
                                </div>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.location.href = `/experts/${expert.expertName.toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, '')}`;
                                  }}
                                  className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1"
                                >
                                  View Profile
                                  <ExternalLink className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                    🎤
                  </div>
                  <div className="bg-gray-100 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-600">Finding top expert solutions</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your problem... (e.g., 'toilet keeps running' or 'bread too dense')"
                className="flex-1 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 font-bold"
              >
                <Send className="w-4 h-4" />
                Get Expert Help
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-bold text-gray-500">
                Dad AI presents the most-nodded community solutions from verified experts
              </span>
              <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Avg response: 3 seconds
              </span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Why Trust These Experts?
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">Verified Credentials</span>
                  <p className="text-xs font-bold text-gray-600 mt-0.5">Real plumbers, real chefs, real mechanics</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">Community Validated</span>
                  <p className="text-xs font-bold text-gray-600 mt-0.5">Thousands of successful solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900">Track Record Visible</span>
                  <p className="text-xs font-bold text-gray-600 mt-0.5">See success rates and nod counts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-600" />
              Get Better Answers
            </h4>
            <ul className="space-y-1 text-xs font-bold text-gray-700">
              <li>• Include your specific model/brand</li>
              <li>• Mention what you've already tried</li>
              <li>• Add photos if possible</li>
              <li>• Specify your skill level</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
            <h4 className="font-bold text-gray-900 mb-2 text-sm">Today's Stats</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-600">Problems Solved</span>
                <span className="font-bold text-gray-900">14,827</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-600">Experts Active</span>
                <span className="font-bold text-gray-900">892</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-600">Avg Solution Time</span>
                <span className="font-bold text-gray-900">3.2 min</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-bold text-gray-600">Success Rate</span>
                <span className="font-bold text-green-600">94.3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;