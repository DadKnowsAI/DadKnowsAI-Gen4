'use client'

import React, { useState, useEffect, useRef } from 'react'
import HeaderNav from '../../components/HeaderNav'
import '../../thread.css'

interface Message {
  id: string
  type: 'user' | 'ai' | 'expert'
  username: string
  text: string
  badge?: string
  confidence?: number
  reactions: Record<string, number>
  timestamp: Date
}

interface LiveUser {
  name: string
  status: string
  avatar: string
}

export default function ThreadPage() {
  const chatContainerRef = useRef<HTMLDivElement>(null)
  
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [liveUsers, setLiveUsers] = useState<LiveUser[]>([])
  const [showAchievement, setShowAchievement] = useState(false)
  const [achievementText, setAchievementText] = useState('')

  // Initial messages for the thread
  const initialMessages: Message[] = [
    {
      id: '1',
      type: 'user',
      username: 'HungrySteve',
      text: 'Steak is GREY not brown! WTF! 😤',
      reactions: { '👍': 12, '😯': 8 },
      timestamp: new Date()
    },
    {
      id: '2',
      type: 'ai',
      username: 'ChefAI',
      text: 'Pan not hot enough! SMOKING hot first!',
      confidence: 87,
      reactions: { '👍': 34, '🙏': 15 },
      timestamp: new Date()
    },
    {
      id: '3',
      type: 'user',
      username: 'HungrySteve',
      text: 'How hot exactly??',
      reactions: { '😟': 5 },
      timestamp: new Date()
    },
    {
      id: '4',
      type: 'ai',
      username: 'ChefAI',
      text: 'Water drop should dance! 💃 Then oil!',
      confidence: 92,
      reactions: { '💯': 18, '👍': 27 },
      timestamp: new Date()
    },
    {
      id: '5',
      type: 'expert',
      username: 'GrillMaster',
      text: 'Cast iron = best sear! 🔥',
      badge: 'EXPERT',
      reactions: { '🔥': 42, '👍': 67, '🏆': 23 },
      timestamp: new Date()
    },
    {
      id: '6',
      type: 'user',
      username: 'HungrySteve',
      text: 'Holy shit perfect crust!! 🥩',
      reactions: { '🔥': 15, '👍': 8 },
      timestamp: new Date()
    }
  ]

  const initialLiveUsers: LiveUser[] = [
    { name: 'MechanicDave', status: 'Expert', avatar: 'MD' },
    { name: 'CarGuru99', status: 'Helper', avatar: 'CG' },
    { name: 'JohnDad42', status: 'OP', avatar: 'JD' },
    { name: 'AutoAndy', status: 'Viewing', avatar: 'AA' },
    { name: 'FixItFred', status: 'Helper', avatar: 'FF' }
  ]

  const createFloatingReaction = () => {
    const reactions = ['❤️', '👍', '🔥', '💯', '🙌', '✨', '💪', '🎯']
    const container = document.getElementById('floatingReactions')
    if (!container) return

    const emoji = document.createElement('div')
    emoji.className = 'floating-emoji'
    emoji.textContent = reactions[Math.floor(Math.random() * reactions.length)]
    emoji.style.left = Math.random() * 80 + 'px'
    container.appendChild(emoji)
    setTimeout(() => emoji.remove(), 3000)
  }

  const simulateUserJoin = () => {
    if (Math.random() > 0.8) {
      const newUser = {
        name: `User${Math.floor(Math.random() * 999)}`,
        status: 'Just joined',
        avatar: 'U' + Math.floor(Math.random() * 9)
      }
      
      setLiveUsers(prev => {
        const updated = [...prev, newUser]
        if (updated.length > 8) updated.shift()
        return updated
      })
      
      showAchievementToast(`👤 ${newUser.name} joined the chat!`)
    }
  }

  const showTrendingNotification = () => {
    if (Math.random() > 0.85) {
      const notifications = [
        "This thread is trending! 🔥",
        "47 people found this helpful",
        "Similar issue solved 2 hours ago",
        "Expert verified solution ✅"
      ]
      showAchievementToast(notifications[Math.floor(Math.random() * notifications.length)])
    }
  }

  const showAchievementToast = (text: string) => {
    setAchievementText(text)
    setShowAchievement(true)
    setTimeout(() => setShowAchievement(false), 3000)
  }

  useEffect(() => {
    // Initialize chat with delayed message loading for animation
    initialMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg])
      }, index * 500)
    })

    setLiveUsers(initialLiveUsers)

    // Start random events
    const reactionInterval = setInterval(createFloatingReaction, 3000)
    const userJoinInterval = setInterval(simulateUserJoin, 10000)
    const trendingInterval = setInterval(showTrendingNotification, 15000)

    return () => {
      clearInterval(reactionInterval)
      clearInterval(userJoinInterval)
      clearInterval(trendingInterval)
    }
  }, [initialMessages, initialLiveUsers, createFloatingReaction, simulateUserJoin, showTrendingNotification])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = () => {
    if (!inputText.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      username: 'You',
      text: inputText,
      reactions: {},
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputText('')
    
    // Show typing indicator
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        { text: "Great question! Let me help you with that.", confidence: 85 },
        { text: "Based on what you're describing, here's what I recommend:", confidence: 92 },
        { text: "I understand your concern. Here's the solution:", confidence: 88 },
        { text: "That's a common issue! Here's how to fix it:", confidence: 94 }
      ]
      
      const response = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        username: 'Dad AI',
        text: response.text,
        confidence: response.confidence,
        reactions: { '👍': 0 },
        timestamp: new Date()
      }

      setIsTyping(false)
      setMessages(prev => [...prev, aiMessage])

      // Random expert chime in
      if (Math.random() > 0.6) {
        setTimeout(addExpertMessage, 2000)
      }
    }, 1500 + Math.random() * 1500)
  }

  const quickReply = (text: string) => {
    setInputText(text)
    setTimeout(sendMessage, 100)
  }

  const addReaction = (messageId: string, emoji: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        const newReactions = { ...msg.reactions }
        newReactions[emoji] = (newReactions[emoji] || 0) + 1
        return { ...msg, reactions: newReactions }
      }
      return msg
    }))
    
    createFloatingReaction()
  }

  const addExpertMessage = () => {
    const expertMessages = [
      "Can confirm this fix works! Just did it yesterday.",
      "Pro tip: Check both CV joints while you're at it!",
      "If you hear grinding too, don't wait - that's serious!",
      "I've seen this exact issue dozens of times. Easy fix!",
      "Great explanation by Dad AI! Spot on diagnosis."
    ]
    
    const experts = ['MechanicDave', 'CarGuru99', 'AutoExpert', 'FixItFred']
    
    const expertMessage: Message = {
      id: Date.now().toString(),
      type: 'expert',
      username: experts[Math.floor(Math.random() * experts.length)],
      text: expertMessages[Math.floor(Math.random() * expertMessages.length)],
      badge: 'EXPERT',
      reactions: { '👍': Math.floor(Math.random() * 20) },
      timestamp: new Date()
    }

    setMessages(prev => [...prev, expertMessage])
  }


  return (
    <div className="thread-wrapper">
      {/* Main Navigation Header */}
      <HeaderNav />
      
      {/* Stats Header */}
      <div className="stats-header">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-dot green"></div>
            <span>247 experts online</span>
          </div>
          <div className="stat-item">
            <span className="stat-emoji">🔥</span>
            <span>1,847 solved today</span>
          </div>
          <div className="stat-item">
            <span className="stat-emoji">👍</span>
            <span>8,365 nods given</span>
          </div>
        </div>
        <div className="user-profile">
          <div className="user-avatar">HS</div>
          <div className="user-info">
            <div className="username">HungrySteve</div>
            <div className="user-status">Cooking • Just now</div>
          </div>
        </div>
      </div>

      {/* Live Users Panel */}
      <div className="live-users">
        <div className="live-users-header">
          <span>🟢 Active Now</span>
          <span className="user-count">{liveUsers.length}</span>
        </div>
        <div className="live-users-list">
          {liveUsers.map((user, index) => (
            <div key={index} className="live-user-item">
              <div className="user-status"></div>
              <div className="avatar user-avatar">{user.avatar}</div>
              <div>
                <div className="user-name">{user.name}</div>
                <div className="user-role">{user.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Reactions */}
      <div className="floating-reactions" id="floatingReactions"></div>

      {/* Achievement Toast */}
      <div className={`achievement-toast ${showAchievement ? 'show' : ''}`}>
        {achievementText}
      </div>

      {/* Chat Container */}
      <div className="chat-container" ref={chatContainerRef}>
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}`}>
            <div className="message-content">
              <div className="message-header">
                <div className={`avatar ${message.type}-avatar`}>
                  {message.type === 'ai' ? '🍔' : 
                   message.type === 'expert' ? 'Gr' : 
                   message.username.substring(0, 2).toUpperCase()}
                </div>
                <span className="username">{message.username}</span>
                {message.badge && (
                  <span className={`badge ${message.badge.toLowerCase()}-badge`}>
                    {message.badge}
                  </span>
                )}
              </div>
              <div className="message-bubble">
                {message.id === '2' ? (
                  <span>
                    Pan not hot enough! <span className="highlight-text">SMOKING hot</span> first!
                  </span>
                ) : (
                  message.text
                )}
                {message.confidence && (
                  <div className="confidence-meter">
                    <span className="confidence-label">Confidence:</span>
                    <div className="confidence-bar">
                      <div 
                        className="confidence-fill" 
                        style={{width: `${message.confidence}%`}}
                      ></div>
                    </div>
                    <span className="confidence-value">{message.confidence}%</span>
                  </div>
                )}
              </div>
              {Object.keys(message.reactions).length > 0 && (
                <div className="message-reactions">
                  {Object.entries(message.reactions).map(([emoji, count]) => (
                    <div 
                      key={emoji}
                      className="reaction-btn"
                      onClick={() => addReaction(message.id, emoji)}
                    >
                      {emoji} {count}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Success notification */}
        <div className="success-notification">
          <div className="success-icon">✔</div>
          <span>3.4k perfect steaks today!</span>
        </div>
        
        {isTyping && (
          <div className="typing-indicator show">
            <div className="avatar ai-avatar">🍔</div>
            <div className="typing-dots">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
            <span className="typing-text">ChefAI is thinking...</span>
          </div>
        )}

        {/* Input Area - moved inside chat container */}
        <div className="input-area-inline">
          <div className="input-container">
            <input 
              type="text" 
              className="message-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message... (or use quick replies below)"
            />
            <button className="send-btn" onClick={sendMessage}>➤</button>
          </div>
          <div className="quick-replies">
            <div className="quick-reply" onClick={() => quickReply('That makes sense!')}>
              That makes sense! 👍
            </div>
            <div className="quick-reply" onClick={() => quickReply('Can you explain more?')}>
              Can you explain more? 🤔
            </div>
            <div className="quick-reply" onClick={() => quickReply('How much will this cost?')}>
              How much will this cost? 💰
            </div>
            <div className="quick-reply" onClick={() => quickReply('Is this urgent?')}>
              Is this urgent? ⚠️
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <div className="comments-header">
          <h3>Comments</h3>
          <span className="comment-count">47 comments</span>
        </div>
        
        <div className="comments-list">
          <div className="comment-item">
            <div className="comment-avatar">M</div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">MikeThePlumber</span>
                <span className="comment-time">2h</span>
              </div>
              <div className="comment-text">This is exactly what I needed! Thanks ChefAI! 🙏</div>
              <div className="comment-actions">
                <button className="comment-action">👍 12</button>
                <button className="comment-action">Reply</button>
              </div>
            </div>
          </div>
          
          <div className="comment-item">
            <div className="comment-avatar">S</div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">SarahM</span>
                <span className="comment-time">1h</span>
              </div>
              <div className="comment-text">I&apos;ve been doing this wrong for years! Game changer 🔥</div>
              <div className="comment-actions">
                <button className="comment-action">👍 8</button>
                <button className="comment-action">Reply</button>
              </div>
            </div>
          </div>
          
          <div className="comment-item">
            <div className="comment-avatar">T</div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">TechDad99</span>
                <span className="comment-time">45m</span>
              </div>
              <div className="comment-text">Pro tip: Use cast iron for the best sear!</div>
              <div className="comment-actions">
                <button className="comment-action">👍 15</button>
                <button className="comment-action">Reply</button>
              </div>
            </div>
          </div>
          
          <div className="comment-item">
            <div className="comment-avatar">N</div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">NewbieBob</span>
                <span className="comment-time">30m</span>
              </div>
              <div className="comment-text">Trying this tonight! Will report back 🍳</div>
              <div className="comment-actions">
                <button className="comment-action">👍 5</button>
                <button className="comment-action">Reply</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="add-comment">
          <div className="comment-input-container">
            <div className="comment-avatar">Y</div>
            <input 
              type="text" 
              className="comment-input"
              placeholder="Add a comment..."
            />
            <button className="comment-post-btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}