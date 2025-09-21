// app/education/page.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, Users, Trophy, MessageSquare, Bell, Search, BookOpen,
  Brain, Lightbulb, HelpCircle, Shield, Zap, Target,
  PlayCircle, CheckCircle, AlertCircle,
  User, Bot, ThumbsUp, MessageCircle, ChevronRight,
  Sparkles, Lock, Unlock, Award, Clock, Star,
  ArrowRight, Info, BookMarked, Video, FileText
} from 'lucide-react';

const EducationHub = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const lessons = {
    basics: [
      {
        title: "AI Isn&apos;t Magic - It&apos;s Pattern Matching",
        duration: "5 min read",
        difficulty: "Beginner",
        icon: <Brain className="w-5 h-5" />,
        description: "Think of AI like a really good recipe follower who&apos;s read millions of cookbooks",
        locked: false
      },
      {
        title: "Why AI Sometimes Gets Things Wrong",
        duration: "7 min read",
        difficulty: "Beginner",
        icon: <AlertCircle className="w-5 h-5" />,
        description: "Just like asking someone to recall a movie they saw once 5 years ago",
        locked: false
      },
      {
        title: "The Difference Between AI and Search Engines",
        duration: "6 min read",
        difficulty: "Beginner",
        icon: <Search className="w-5 h-5" />,
        description: "One finds information, the other creates new responses from patterns",
        locked: false
      }
    ],
    practical: [
      {
        title: "Getting Better Answers from AI",
        duration: "8 min interactive",
        difficulty: "Intermediate",
        icon: <Target className="w-5 h-5" />,
        description: "Be specific! &apos;Fix my car&apos; vs &apos;My 2015 Honda Civic won&apos;t start, battery is new&apos;",
        locked: false
      },
      {
        title: "When to Trust AI vs Human Experts",
        duration: "10 min guide",
        difficulty: "Important",
        icon: <Shield className="w-5 h-5" />,
        description: "AI for ideas and drafts, humans for critical decisions and expertise",
        locked: false
      },
      {
        title: "Making AI Work for Your Daily Life",
        duration: "12 min tutorial",
        difficulty: "Practical",
        icon: <Sparkles className="w-5 h-5" />,
        description: "Real examples: meal planning, homework help, DIY projects",
        locked: false
      }
    ],
    dadknows: [
      {
        title: "How DadKnows Combines AI + Human Experts",
        duration: "4 min video",
        difficulty: "Essential",
        icon: <Users className="w-5 h-5" />,
        description: "AI finds the experts, experts provide the real answers",
        locked: false
      },
      {
        title: "Understanding Expert Verification",
        duration: "5 min read",
        difficulty: "Important",
        icon: <Award className="w-5 h-5" />,
        description: "How we make sure &apos;MikeThePlumber&apos; is actually a plumber",
        locked: false
      },
      {
        title: "The Nod System Explained",
        duration: "3 min guide",
        difficulty: "Easy",
        icon: <ThumbsUp className="w-5 h-5" />,
        description: "Think Reddit karma, but for actual helpful expertise",
        locked: false
      }
    ]
  };

  const faqs = [
    {
      question: "Is AI going to replace human experts?",
      answer: "No! Think of AI like a really good librarian who can quickly find and summarize information. But for fixing your actual toilet, you still need MikeThePlumber. AI helps connect you to the right expert faster."
    },
    {
      question: "How does DadKnows verify experts are real?",
      answer: "We use a multi-step process: credential verification, community vouching, track record analysis, and our &apos;Super Dad&apos; experts do final vetting. It&apos;s like LinkedIn meets Reddit, but stricter."
    },
    {
      question: "Why should I trust AI-suggested experts?",
      answer: "You shouldn&apos;t blindly! That&apos;s why we show you their track record, nod count, solved problems, and peer endorsements. The AI just helps match you - the proof is in the pudding (or fixed pipe)."
    },
    {
      question: "Can AI actually understand my specific problem?",
      answer: "AI is great at recognizing patterns - &apos;toilet won&apos;t stop running&apos; matches thousands of similar cases. But for nuanced issues, that&apos;s why we connect you to humans who can ask follow-up questions."
    },
    {
      question: "What makes DadKnows different from ChatGPT?",
      answer: "ChatGPT gives you its best guess. DadKnows connects you to ChefCarla who&apos;s actually made 1,000 soufflés. We cite real people with real experience, not just statistical predictions."
    }
  ];

  const realExamples = [
    {
      problem: "My bread is always dense",
      aiResponse: "Generic tips about yeast and kneading",
      dadknowsResponse: "Connected to BakerBeth (2.3k nods) who diagnosed overworked gluten in 30 seconds",
      outcome: "Perfect loaf on first try"
    },
    {
      problem: "Car makes grinding noise when turning",
      aiResponse: "Could be CV joint, power steering, or bearings",
      dadknowsResponse: "MechanicDave (3.1k nods) heard the sound clip, knew it was CV joint immediately",
      outcome: "$300 fix instead of $1,200 guess-work"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
                DadKnows
              </Link>
              
              <nav className="flex items-center gap-2 ml-8">
                <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link href="/categories" className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                  <Users className="w-4 h-4" />
                  Communities
                </Link>
                <a href="/education" className="px-3 py-2 rounded-lg bg-blue-50 flex items-center gap-2 text-sm font-bold text-blue-700">
                  <BookOpen className="w-4 h-4" />
                  Learn AI
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">AI Doesn&apos;t Have to Be Confusing</h1>
            <p className="text-xl font-bold text-blue-100 mb-6">
              Learn how AI actually works, when to trust it, and how DadKnows combines artificial intelligence with real human expertise.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Watch 2-Min Intro
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-400 transition">
                Start Learning
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">87%</div>
              <div className="text-sm font-bold text-blue-100">Users get better AI results after our guides</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">5 min</div>
              <div className="text-sm font-bold text-blue-100">Average lesson length (no fluff!)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold">Free</div>
              <div className="text-sm font-bold text-blue-100">All education content, forever</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-gray-200 mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('basics')}
                  className={`flex-1 px-4 py-3 text-sm font-bold transition ${
                    activeTab === 'basics' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  AI Basics
                </button>
                <button
                  onClick={() => setActiveTab('practical')}
                  className={`flex-1 px-4 py-3 text-sm font-bold transition ${
                    activeTab === 'practical' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Practical Tips
                </button>
                <button
                  onClick={() => setActiveTab('dadknows')}
                  className={`flex-1 px-4 py-3 text-sm font-bold transition ${
                    activeTab === 'dadknows' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  How DadKnows Works
                </button>
              </div>

              {/* Lessons Grid */}
              <div className="p-4">
                <div className="space-y-3">
                  {lessons[activeTab as keyof typeof lessons].map((lesson, idx) => (
                    <a
                      key={idx}
                      href={`/education/lesson/${activeTab}-${idx}`}
                      className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                            {lesson.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                              {lesson.title}
                              {!lesson.locked && idx === 0 && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">
                                  Start Here
                                </span>
                              )}
                            </h3>
                            <p className="text-sm font-bold text-gray-600 mb-2">{lesson.description}</p>
                            <div className="flex items-center gap-3 text-xs font-bold text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {lesson.duration}
                              </span>
                              <span className={`px-2 py-0.5 rounded font-bold ${
                                lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                                lesson.difficulty === 'Important' ? 'bg-orange-100 text-orange-700' :
                                lesson.difficulty === 'Essential' ? 'bg-red-100 text-red-700' :
                                'bg-blue-100 text-blue-700'
                              }`}>
                                {lesson.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mt-2" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Real Examples Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Real Examples: AI vs DadKnows
              </h2>
              <div className="space-y-4">
                {realExamples.map((example, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                      <span className="font-bold text-sm text-gray-900">Problem: "{example.problem}"</span>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                          <Bot className="w-4 h-4" />
                          Generic AI Response
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-sm font-bold text-gray-600 italic">
                          "{example.aiResponse}"
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                          <Users className="w-4 h-4" />
                          DadKnows Response
                        </div>
                        <div className="bg-blue-50 p-3 rounded text-sm font-bold text-gray-700">
                          "{example.dadknowsResponse}"
                        </div>
                        <div className="bg-green-50 p-2 rounded text-sm font-bold text-green-700">
                          ✓ {example.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Common Questions (In Plain English)
              </h2>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                      className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between text-left"
                    >
                      <span className="font-bold text-sm text-gray-900">{faq.question}</span>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFAQ === idx ? 'rotate-90' : ''
                      }`} />
                    </button>
                    {expandedFAQ === idx && (
                      <div className="px-4 py-3 bg-white">
                        <p className="text-sm font-bold text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4">
            {/* Quick Start Guide */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-4 mb-4">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Quick Start Guide
              </h3>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <span className="text-gray-700 font-bold">Learn the basics (10 min)</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <span className="text-gray-700 font-bold">Try asking Dad AI a question</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <span className="text-gray-700 font-bold">See how experts validate answers</span>
                </li>
              </ol>
              <a href="/chat" className="mt-4 block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                Try Dad AI Now
              </a>
            </div>

            {/* Your Progress */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-4">
              <h3 className="font-bold text-gray-900 mb-3">Your Learning Progress</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 font-bold">AI Basics</span>
                    <span className="text-gray-900 font-bold">0/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 font-bold">Practical Tips</span>
                    <span className="text-gray-900 font-bold">0/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 font-bold">DadKnows Platform</span>
                    <span className="text-gray-900 font-bold">0/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-bold text-gray-600">Complete all lessons to earn your</p>
                <div className="flex items-center gap-2 mt-1">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-900">AI Literacy Badge</span>
                </div>
              </div>
            </div>

            {/* Tips Box */}
            <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4 mb-4">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Pro Tip
              </h4>
              <p className="text-sm font-bold text-gray-700">
                The more specific your question, the better the answer. Instead of "help with cooking," try "my cookies are always flat - using recipe from Betty Crocker cookbook."
              </p>
            </div>

            {/* Related Resources */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-3">Keep Learning</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition">
                  <Video className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-gray-700">Video: AI in 90 Seconds</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-gray-700">PDF: Prompt Cheat Sheet</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition">
                  <BookMarked className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-gray-700">Guide: Trust Checklist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;