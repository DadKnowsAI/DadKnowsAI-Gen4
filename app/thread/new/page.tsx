'use client'

import React, { useState } from 'react';
import { 
  ArrowLeft, X, Plus, Camera, Link, AlertCircle,
  Wrench, ChefHat, Car, Baby, Heart, Zap, Home,
  Paintbrush, Smartphone, DollarSign, GraduationCap,
  Dumbbell, Globe, Music, Book, Gamepad2
} from 'lucide-react';

const NewThreadPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const categories = [
    { id: 'plumbing', name: 'Plumbing', icon: Wrench, color: 'blue' },
    { id: 'cooking', name: 'Cooking', icon: ChefHat, color: 'orange' },
    { id: 'car', name: 'Car Trouble', icon: Car, color: 'green' },
    { id: 'parenting', name: 'Parenting', icon: Baby, color: 'purple' },
    { id: 'electrical', name: 'Electrical', icon: Zap, color: 'yellow' },
    { id: 'home', name: 'Home Repair', icon: Home, color: 'indigo' },
    { id: 'painting', name: 'Painting', icon: Paintbrush, color: 'pink' },
    { id: 'tech', name: 'Technology', icon: Smartphone, color: 'gray' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'emerald' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'blue' },
    { id: 'fitness', name: 'Fitness', icon: Dumbbell, color: 'red' },
    { id: 'travel', name: 'Travel', icon: Globe, color: 'teal' },
  ];

  const suggestedTitles = [
    "Help! Water won&apos;t stop running in toilet!",
    "My car is making a weird clicking noise when I turn",
    "Burnt my dinner - any way to save it?",
    "Baby won&apos;t sleep through the night - tried everything!",
    "Outlet sparking when I plug things in - dangerous?",
    "How do I fix a squeaky door hinge?"
  ];

  const handleSubmit = () => {
    if (!title.trim() || !body.trim() || !category) {
      alert('Please fill in all required fields');
      return;
    }
    
    // In a real app, this would submit to your backend
    // For now, redirect to the new thread
    window.location.href = '/thread/new-1';
  };

  const handleQuickFill = (suggestion: string) => {
    setTitle(suggestion);
  };

  const getCategoryById = (id: string) => {
    return categories.find(c => c.id === id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.location.href = '/'}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="font-bold text-gray-900 text-lg">Create New Post</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className="px-3 py-1.5 text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
              >
                {showPreview ? 'Edit' : 'Preview'}
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!title || !body || !category}
                className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition font-bold text-sm"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {!showPreview ? (
          <div className="grid grid-cols-3 gap-6">
            {/* Main Form */}
            <div className="col-span-2 space-y-4">
              {/* Category Selection */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`p-3 rounded-lg border-2 transition flex flex-col items-center gap-1 ${
                          category === cat.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-5 h-5" style={{ color: category === cat.id ? '#3B82F6' : '#6B7280' }} />
                        <span className="text-xs font-bold">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Title Input */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  What do you need help with? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Be specific - good titles get better help!"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={100}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">{title.length}/100 characters</span>
                  {title.length < 20 && title.length > 0 && (
                    <span className="text-xs text-orange-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Try to be more descriptive
                    </span>
                  )}
                </div>

                {/* Quick suggestions */}
                <div className="mt-3">
                  <p className="text-xs text-gray-500 mb-2">Need inspiration? Try one of these:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedTitles.slice(0, 3).map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickFill(suggestion)}
                        className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition"
                      >
                        {suggestion.substring(0, 30)}...
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Body Input */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Describe your problem <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Give as much detail as possible. What have you already tried? When did it start? Any other relevant info?"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={8}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">{body.length} characters</span>
                  {body.length < 50 && body.length > 0 && (
                    <span className="text-xs text-orange-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      More details = better help
                    </span>
                  )}
                </div>
              </div>

              {/* Urgency Toggle */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-bold text-gray-700">Is this urgent?</label>
                    <p className="text-xs text-gray-500 mt-1">Urgent posts get priority from online experts</p>
                  </div>
                  <button
                    onClick={() => setIsUrgent(!isUrgent)}
                    className={`w-12 h-6 rounded-full transition ${
                      isUrgent ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition transform ${
                      isUrgent ? 'translate-x-6' : 'translate-x-0.5'
                    }`} />
                  </button>
                </div>
                {isUrgent && (
                  <div className="mt-3 p-2 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-xs text-red-700">
                      ⚠️ Only mark as urgent if it&apos;s a safety issue or needs immediate attention
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1 space-y-4">
              {/* Posting Tips */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="font-bold text-sm text-gray-900 mb-3">Tips for Getting Help</h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Be specific about your problem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Include what you&apos;ve already tried</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Add photos if relevant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Mention your skill level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Be respectful and patient</span>
                  </li>
                </ul>
              </div>

              {/* Community Rules */}
              <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4">
                <h3 className="font-bold text-sm text-gray-900 mb-2">Community Rules</h3>
                <p className="text-xs text-gray-700 mb-2">
                  DadKnows is a supportive community. We don&apos;t tolerate:
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Spam or self-promotion</li>
                  <li>• Disrespectful language</li>
                  <li>• Dangerous advice</li>
                  <li>• Off-topic posts</li>
                </ul>
              </div>

              {/* Active Experts */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="font-bold text-sm text-gray-900 mb-3">
                  Experts Online Now
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>247 experts active</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"></div>
                    <span className="text-xs font-bold">MikeThePlumber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full"></div>
                    <span className="text-xs font-bold">ChefCarla</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full"></div>
                    <span className="text-xs font-bold">MechanicDave</span>
                  </div>
                  <div className="text-xs text-blue-600 hover:text-blue-700 font-bold mt-2">
                    View all →
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Preview Mode */
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">
                  {getCategoryById(category)?.name || 'Uncategorized'}
                </span>
                {isUrgent && (
                  <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">
                    URGENT
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {title || 'No title yet...'}
              </h2>
              <div className="text-gray-700 whitespace-pre-wrap">
                {body || 'No description yet...'}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  This is how your post will appear to the community
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewThreadPage;