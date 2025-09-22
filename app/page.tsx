'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import './feed.css'

// Types
interface Message {
  type: 'user' | 'ai' | 'expert' | 'stat'
  text: string
  delay: number
  success?: boolean
  name?: string
}

interface ConversationTemplate {
  user: string
  username: string
  category: string
  avatar: string
  aiName: string
  messages: Message[]
}

export default function LiveFeedPage() {
  const [nodCounter, setNodCounter] = useState(8299)
  const [loading, setLoading] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Conversation templates
  const conversationTemplates: ConversationTemplate[] = [
    {
      user: 'MD',
      username: 'MomDebbie',
      category: 'Parenting',
      avatar: '👶',
      aiName: 'ParentAI',
      messages: [
        { type: 'user', text: 'Baby won\'t stop crying!! 3AM!! 😭😭', delay: 0 },
        { type: 'ai', text: 'Try the <span class="ai-highlight">5 S\'s</span>: Swaddle, Side, Shush!', delay: 200 },
        { type: 'user', text: 'OMG trying now...', delay: 400 },
        { type: 'ai', text: 'Swing gently + white noise app! 📱', delay: 550 },
        { type: 'expert', name: 'SuperMom', text: 'Hair dryer sound works too!', delay: 750 },
        { type: 'user', text: 'BABY SLEEPING!! THANK YOU!! 🙏', delay: 950, success: true },
        { type: 'stat', text: '🔥 1.2k parents saved tonight!', delay: 1100 }
      ]
    },
    {
      user: 'BB',
      username: 'BrokeBob',
      category: 'Home Repair',
      avatar: '🔨',
      aiName: 'FixItAI',
      messages: [
        { type: 'user', text: 'Toilet running nonstop! Water bill!! 💸', delay: 0 },
        { type: 'ai', text: 'Easy fix! <span class="ai-highlight">$5 flapper</span> replacement!', delay: 180 },
        { type: 'user', text: 'Where is flapper??', delay: 350 },
        { type: 'ai', text: 'Inside tank! Red rubber thing! 🔴', delay: 500 },
        { type: 'user', text: 'Found it! Now what?', delay: 650 },
        { type: 'ai', text: 'Pop off old, snap on new! 2 min job!', delay: 800 },
        { type: 'expert', name: 'PlumberPete', text: 'Turn water off first! ⚠️', delay: 950 },
        { type: 'user', text: 'FIXED! Saved $200!! 💪', delay: 1150, success: true }
      ]
    },
    {
      user: 'HS',
      username: 'HungrySteve',
      category: 'Cooking',
      avatar: '🍔',
      aiName: 'ChefAI',
      messages: [
        { type: 'user', text: 'Steak is GREY not brown! WTF! 😤', delay: 0 },
        { type: 'ai', text: 'Pan not hot enough! <span class="ai-highlight">SMOKING hot</span> first!', delay: 200 },
        { type: 'user', text: 'How hot exactly??', delay: 380 },
        { type: 'ai', text: 'Water drop should dance! 💃 Then oil!', delay: 520 },
        { type: 'expert', name: 'GrillMaster', text: 'Cast iron = best sear! 🔥', delay: 700 },
        { type: 'user', text: 'Holy shit perfect crust!! 🥩', delay: 900, success: true },
        { type: 'stat', text: '✅ 3.4k perfect steaks today!', delay: 1050 }
      ]
    }
  ]

  useEffect(() => {
    // Set up intersection observer for chat animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chatId = entry.target.querySelector('[data-chat-id]')?.getAttribute('data-chat-id')
          if (chatId && !entry.target.hasAttribute('data-played')) {
            entry.target.setAttribute('data-played', 'true')
            playChat(chatId)
            
            // Restart animation after completion
            setTimeout(() => {
              entry.target.removeAttribute('data-played')
              playChat(chatId)
            }, 3500)
          }
        }
      })
    }, { threshold: 0.3 })

    // Observe initial cards
    const cards = document.querySelectorAll('.knowledge-card')
    cards.forEach(card => {
      observerRef.current?.observe(card)
    })

    // Start intervals
    const nodInterval = setInterval(() => {
      setNodCounter(prev => prev + Math.floor(Math.random() * 10) + 1)
    }, 2000)

    const commentInterval = setInterval(addRandomComment, 3000)
    const reactionInterval = setInterval(createReactions, 1000)

    // Handle scroll for infinite loading
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        loadMoreCards()
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(nodInterval)
      clearInterval(commentInterval)
      clearInterval(reactionInterval)
      window.removeEventListener('scroll', handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const playChat = (chatId: string) => {
    const container = document.querySelector(`[data-chat-id="${chatId}"]`) as HTMLElement
    if (!container) return
    
    const messages = container.querySelectorAll('.chat-message')
    const typingIndicator = container.querySelector('.typing-indicator') as HTMLElement
    const confidenceMeters = container.querySelectorAll('.confidence-meter')
    const confidenceFills = container.querySelectorAll('.confidence-fill')
    const verifications = container.querySelectorAll('.expert-verification')
    const successFlash = container.querySelector('.success-flash') as HTMLElement
    
    // Reset all elements
    messages.forEach(msg => msg.classList.remove('show'))
    if (typingIndicator) typingIndicator.classList.remove('show')
    confidenceMeters.forEach(m => m.classList.remove('show'))
    confidenceFills.forEach(f => f.classList.remove('animate'))
    verifications.forEach(v => v.classList.remove('show'))
    
    // Play sequence
    messages.forEach((message) => {
      const msgElement = message as HTMLElement
      const delay = parseInt(msgElement.dataset.delay || '0')
      
      setTimeout(() => {
        if (message.classList.contains('ai-message') && typingIndicator) {
          typingIndicator.classList.add('show')
          setTimeout(() => {
            typingIndicator.classList.remove('show')
            message.classList.add('show')
            
            if (Math.random() > 0.5) {
              createReactionEmoji(container as HTMLElement)
            }
          }, 200)
        } else {
          message.classList.add('show')
          
          if (message.querySelector('.user-bubble[style*="4CAF50"]')) {
            if (successFlash) {
              successFlash.classList.add('show')
              setTimeout(() => successFlash.classList.remove('show'), 500)
            }
          }
        }
      }, delay)
    })
    
    // Animate confidence meters
    confidenceMeters.forEach((meter, index) => {
      const meterElement = meter as HTMLElement
      const fill = confidenceFills[index] as HTMLElement
      const meterDelay = parseInt(meterElement.dataset.delay || String(1000 + index * 200))
      setTimeout(() => {
        meter.classList.add('show')
        if (fill) {
          setTimeout(() => {
            fill.classList.add('animate')
          }, 100)
        }
      }, meterDelay)
    })
    
    // Show verifications
    verifications.forEach((verification, index) => {
      const verifyElement = verification as HTMLElement
      const verifyDelay = parseInt(verifyElement.dataset.delay || String(1200 + index * 200))
      setTimeout(() => {
        verifyElement.style.display = 'flex'
        verification.classList.add('show')
      }, verifyDelay)
    })
  }

  const createReactionEmoji = (container: HTMLElement) => {
    const reactions = ['❤️', '👍', '🔥', '💯', '🙌', '✨', '💪', '🎯']
    const emoji = document.createElement('div')
    emoji.className = 'reaction-emoji'
    emoji.textContent = reactions[Math.floor(Math.random() * reactions.length)]
    emoji.style.left = Math.random() * 100 + 'px'
    emoji.style.bottom = '100px'
    container.appendChild(emoji)
    setTimeout(() => emoji.remove(), 2000)
  }

  const createFloatingReaction = (containerId: string) => {
    const container = document.getElementById(containerId)
    if (!container) return
    
    const reactions = ['❤️', '👍', '🔥', '😂', '💯', '🙌', '✨', '💪', '🎯', '⚡']
    const reaction = document.createElement('div')
    reaction.className = 'floating-reaction'
    reaction.textContent = reactions[Math.floor(Math.random() * reactions.length)]
    reaction.style.left = Math.random() * 80 + 'px'
    reaction.style.animationDelay = Math.random() * 0.5 + 's'
    
    container.appendChild(reaction)
    setTimeout(() => reaction.remove(), 3000)
  }

  const createReactions = () => {
    document.querySelectorAll('.reaction-stream').forEach(stream => {
      if (Math.random() > 0.7) {
        createFloatingReaction(stream.id)
      }
    })
  }

  const addRandomComment = () => {
    const comments = [
      { user: 'DadMike', text: 'This is genius!' },
      { user: 'Sarah92', text: 'Worked perfectly!' },
      { user: 'JoeFixIt', text: 'Can confirm ✅' },
      { user: 'NewMom', text: 'Lifesaver!' },
      { user: 'TechGuy', text: 'Mind blown 🤯' },
      { user: 'HomeDIY', text: 'Saved $$$!' }
    ]
    
    const commentSections = document.querySelectorAll('.live-comments')
    if (commentSections.length === 0) return
    
    const section = commentSections[Math.floor(Math.random() * commentSections.length)]
    const comment = comments[Math.floor(Math.random() * comments.length)]
    
    const bubble = document.createElement('div')
    bubble.className = 'comment-bubble'
    bubble.innerHTML = `<span class="comment-user">${comment.user}:</span> ${comment.text}`
    
    section.appendChild(bubble)
    
    if (section.children.length > 2) {
      const firstChild = section.firstChild
      if (firstChild) {
        section.removeChild(firstChild)
      }
    }
  }

  const generateChatCard = (template: ConversationTemplate) => {
    const chatId = 'chat' + Date.now() + Math.random().toString(36).substr(2, 9)
    
    let messagesHTML = ''
    template.messages.forEach(msg => {
      if (msg.type === 'user') {
        const bgColor = msg.success ? 
          'success-gradient' : 
          'primary-gradient'
        messagesHTML += `
          <div class="chat-message user-message" data-delay="${msg.delay}">
            <div class="user-bubble ${bgColor}">
              <div class="message-text">${msg.text}</div>
            </div>
          </div>`
      } else if (msg.type === 'ai') {
        messagesHTML += `
          <div class="chat-message ai-message" data-delay="${msg.delay}">
            <div class="ai-bubble">
              <div class="ai-header">
                <div class="ai-avatar">${template.avatar}</div>
                <span class="ai-name">${template.aiName}</span>
              </div>
              <div class="ai-response">${msg.text}</div>
            </div>
          </div>`
      } else if (msg.type === 'expert') {
        messagesHTML += `
          <div class="chat-message ai-message" data-delay="${msg.delay}">
            <div class="ai-bubble expert-bubble">
              <div class="ai-header">
                <div class="ai-avatar expert-avatar-bg">${msg.name?.substring(0, 2)}</div>
                <span class="ai-name">${msg.name}</span>
                <span class="ai-badge expert-badge">EXPERT</span>
              </div>
              <div class="ai-response">${msg.text}</div>
            </div>
          </div>`
      } else if (msg.type === 'stat') {
        messagesHTML += `
          <div class="chat-message ai-message" data-delay="${msg.delay}">
            <div class="ai-bubble stat-bubble">
              <div class="expert-verification show" style="margin: 0; padding: 0; border: none;">
                <div class="expert-tag">
                  ${msg.text}
                </div>
              </div>
            </div>
          </div>`
      }
    })
    
    const cardHTML = `
      <div class="live-badge">
        <span class="live-dot-${['white', 'gold', 'teal', 'pink'][Math.floor(Math.random() * 4)]}"></span>
        ${['LIVE', 'VIRAL', 'TRENDING', 'HOT'][Math.floor(Math.random() * 4)]}
      </div>
      
      <div class="playback-indicator">
        <span class="playback-dot"></span>
        <span class="playback-speed">3x SPEED</span>
      </div>
      
      <div class="card-user-info" onclick="window.location.href='/profile/${template.username.toLowerCase()}'">
        <div class="card-avatar">${template.user}</div>
        <div class="card-user-details">
          <div class="card-username">${template.username}</div>
          <div class="card-meta">${template.category} • Just now</div>
        </div>
      </div>
      
      <div class="chat-replay-container" data-chat-id="${chatId}" onclick="window.location.href='/thread/${template.category.toLowerCase().replace(/\s+/g, '-')}-${template.username.toLowerCase()}-${Date.now()}'">
        <div class="success-flash"></div>
        <div class="typing-indicator" data-delay="150">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
        ${messagesHTML}
      </div>
      
      <div class="auto-play-progress">
        <div class="progress-fill"></div>
      </div>
      
      <div class="reaction-stream" id="reactions${chatId}"></div>
      
      <div class="live-comments">
        <div class="comment-bubble">
          <span class="comment-user">User${Math.floor(Math.random() * 999)}:</span> ${['This works!', 'Thank you!', 'Trying now!', 'Amazing!'][Math.floor(Math.random() * 4)]}
        </div>
      </div>
      
      <div class="engagement-bar">
        <div class="engagement-btn">
          <span>👍</span>
          <span>${(Math.random() * 9 + 0.5).toFixed(1)}k</span>
        </div>
        <div class="engagement-btn">
          <span>💬</span>
          <span>${Math.floor(Math.random() * 900 + 100)}</span>
        </div>
        <div class="engagement-btn">
          <span>🔖</span>
          <span>Save</span>
        </div>
        <div class="engagement-btn">
          <span>↗️</span>
          <span>Share</span>
        </div>
      </div>
    `
    
    return { html: cardHTML, id: chatId }
  }

  const loadMoreCards = () => {
    if (loading) return
    setLoading(true)
    
    const loader = document.getElementById('loader')
    if (loader) loader.style.display = 'block'
    
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const template = conversationTemplates[Math.floor(Math.random() * conversationTemplates.length)]
        const { html } = generateChatCard(template)
        
        const card = document.createElement('div')
        card.className = 'knowledge-card live-card'
        card.style.background = `linear-gradient(135deg, hsl(${Math.random() * 60 + 200}, 30%, 10%) 0%, hsl(${Math.random() * 60 + 240}, 40%, 20%) 100%)`
        card.innerHTML = html
        
        document.querySelector('.feed-container')?.insertBefore(card, loader)
        
        if (observerRef.current) {
          observerRef.current.observe(card)
        }
        
        // Remove unused cardsGenerated increment
      }
      
      if (loader) loader.style.display = 'none'
      setLoading(false)
    }, 500)
  }

  const handleEngagementClick = (e: React.MouseEvent) => {
    const btn = (e.target as HTMLElement).closest('.engagement-btn')
    if (!btn) return
    
    btn.classList.toggle('active')
    
    const card = btn.closest('.knowledge-card')
    const reactionContainer = card?.querySelector('.reaction-stream')
    if (reactionContainer) {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          createFloatingReaction(reactionContainer.id)
        }, i * 100)
      }
    }
    
    const countSpan = btn.querySelector('span:last-child')
    if (countSpan && !isNaN(parseFloat(countSpan.textContent || '0'))) {
      let count = parseFloat(countSpan.textContent || '0')
      if (countSpan.textContent?.includes('k')) {
        count = parseFloat(countSpan.textContent) * 1000
      }
      count += 1
      countSpan.textContent = count > 1000 ? 
        (count / 1000).toFixed(1) + 'k' : 
        Math.floor(count).toString()
    }
  }

  return (
    <div className="app-wrapper">
      {/* HEADER */}
      <div className="header">
        <div className="nav-bar">
          <div className="logo">
            🛠️ DadKnows
          </div>
          <div className="search-bar">
            <input className="search-input" placeholder="Search for help..." />
          </div>
          <div className="nav-items">
            <Link href="/" className="nav-item">🏠 Home</Link>
            <div className="nav-item">👥 Communities</div>
            <div className="nav-item">🤖 Learn AI</div>
            <div className="nav-item">🏆 Rankings</div>
            <div className="nav-item">🔔 <span className="notification-badge" style={{padding: '2px 6px', borderRadius: '10px', fontSize: '10px', marginLeft: '-5px'}}>3</span></div>
            <div className="nav-item">👤</div>
            <div className="ask-dad-btn">Ask Dad AI →</div>
          </div>
        </div>
        <div className="stats-bar">
          <div className="stat-item">
            <span className="live-dot"></span>
            <span>247 experts online</span>
          </div>
          <div className="stat-item">
            🔥 <span>1,847 solved today</span>
          </div>
          <div className="stat-item">
            👍 <span id="nod-counter">{nodCounter.toLocaleString()}</span> nods given
          </div>
        </div>
      </div>
      
      {/* MAIN CONTAINER */}
      <div className="main-container">
        {/* LEFT SIDEBAR */}
        <div className="left-sidebar">
          <div className="quick-help">
            <div className="section-title">Quick Help</div>
            <div className="category-item active">
              <div className="category-info">
                <span className="category-icon">🔧</span>
                <div>
                  <div className="category-name">Home Repair</div>
                  <div className="category-count">247 active</div>
                </div>
              </div>
              <div className="active-indicator"></div>
            </div>
            <div className="category-item">
              <div className="category-info">
                <span className="category-icon">🍳</span>
                <div>
                  <div className="category-name">Cooking</div>
                  <div className="category-count">183 active</div>
                </div>
              </div>
              <div className="active-indicator"></div>
            </div>
            <div className="category-item">
              <div className="category-info">
                <span className="category-icon">🚗</span>
                <div>
                  <div className="category-name">Car Trouble</div>
                  <div className="category-count">156 active</div>
                </div>
              </div>
              <div className="active-indicator"></div>
            </div>
            <div className="category-item">
              <div className="category-info">
                <span className="category-icon">👶</span>
                <div>
                  <div className="category-name">Parenting</div>
                  <div className="category-count">94 active</div>
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '15px'}}>
              <Link href="#" className="link-primary" style={{fontSize: '14px'}}>Browse all categories →</Link>
            </div>
          </div>
          
          <div className="top-experts">
            <div className="section-title">⭐ Top Experts Online</div>
            <Link href="/profile/mike-the-plumber" className="expert-item">
              <div className="expert-avatar">M</div>
              <div className="expert-info">
                <div className="expert-name">MikeThePlumber</div>
                <div className="expert-badge">
                  Super Dad • 2.8k nods
                </div>
              </div>
              <div className="expert-status">LIVE</div>
            </Link>
            <Link href="/profile/chef-carla" className="expert-item">
              <div className="expert-avatar chef-gradient">C</div>
              <div className="expert-info">
                <div className="expert-name">ChefCarla</div>
                <div className="expert-badge">
                  Pro Chef • 1.9k nods
                </div>
              </div>
            </Link>
            <Link href="/profile/techdad99" className="expert-item">
              <div className="expert-avatar tech-gradient">T</div>
              <div className="expert-info">
                <div className="expert-name">TechDad99</div>
                <div className="expert-badge">
                  Tech Guru • 1.5k nods
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* CENTER FEED */}
        <div className="feed-container" onClick={handleEngagementClick}>
          <div className="feed-filters">
            <div className="filter-tab active">🔥 Trending</div>
            <div className="filter-tab">📍 Recent</div>
            <div className="filter-tab">✅ Solved</div>
            <div className="filter-tab">🎯 Live Feed</div>
          </div>
          
          {/* Initial Cards - Using dangerouslySetInnerHTML for the HTML content */}
          <div className="knowledge-card live-card" dangerouslySetInnerHTML={{__html: `
            <div class="live-badge">
              <span style="width: 6px; height: 6px; background: white; border-radius: 50%;"></span>
              LIVE REPLAY
            </div>
            
            <div class="playback-indicator">
              <span class="playback-dot"></span>
              <span class="playback-speed">3x SPEED</span>
            </div>
            
            <div class="card-user-info" onclick="window.location.href='/profile/johndad42'">
              <div class="card-avatar">JD</div>
              <div class="card-user-details">
                <div class="card-username">JohnDad42</div>
                <div class="card-meta">Car Trouble • 2 min ago</div>
              </div>
            </div>
            
            <div class="chat-replay-container" data-chat-id="chat1" onclick="window.location.href='/thread/car-clicking-when-turning'">
              <div class="success-flash"></div>
              
              <!-- Initial chat messages here -->
              <div class="chat-message user-message" data-delay="0">
                <div class="user-bubble">
                  <div class="message-text">
                    Car clicking when turning!! HELP! 😰
                  </div>
                </div>
              </div>
              
              <div class="typing-indicator" data-delay="200">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
              </div>
              
              <div class="chat-message ai-message" data-delay="400">
                <div class="ai-bubble">
                  <div class="ai-header">
                    <div class="ai-avatar">🔧</div>
                    <span class="ai-name">MechanicAI</span>
                  </div>
                  <div class="ai-response">
                    <span class="ai-highlight">CV joint</span> issue! ~$280 fix
                  </div>
                </div>
              </div>
            </div>
            
            <div class="auto-play-progress">
              <div class="progress-fill"></div>
            </div>
            
            <div class="reaction-stream" id="reactions1"></div>
            
            <div class="live-comments">
              <div class="comment-bubble">
                <span class="comment-user">Mike:</span> Exact same issue!
              </div>
            </div>
            
            <div class="engagement-bar">
              <div class="engagement-btn active">
                <span>👍</span>
                <span>2.8k</span>
              </div>
              <div class="engagement-btn">
                <span>💬</span>
                <span>147</span>
              </div>
              <div class="engagement-btn">
                <span>🔖</span>
                <span>Save</span>
              </div>
              <div class="engagement-btn">
                <span>↗️</span>
                <span>Share</span>
              </div>
            </div>
          `}} />
          
          {/* Loading Spinner */}
          <div className="loading-spinner" id="loader">
            <div className="spinner"></div>
            <p className="text-muted" style={{marginTop: '20px'}}>Loading more wisdom...</p>
          </div>
        </div>
        
        {/* RIGHT SIDEBAR */}
        <div className="right-sidebar">
          <div className="dad-bot-section">
            <div className="dad-bot-header">
              <div className="dad-bot-icon">🤖</div>
              <div className="dad-bot-status">
                <div className="dad-bot-title">Dad&apos;s Here to Help</div>
                <div className="helping-count">● Currently helping 14 people</div>
              </div>
            </div>
            <div className="dad-bot-preview">
              <div className="preview-text">
                Hey there! What&apos;s going on? Car trouble? Leaky faucet? Burnt dinner? Whatever it is, we&apos;ll figure it out together!
              </div>
              <div className="active-helpers">
                <span>Active experts:</span>
                <div className="helper-avatars">
                  <div className="helper-avatar">MK</div>
                  <div className="helper-avatar">CC</div>
                  <div className="helper-avatar">TD</div>
                </div>
                <span>standing by</span>
              </div>
            </div>
            <button className="open-chat-btn">Open Full Chat →</button>
          </div>
          
          <div className="champions-section">
            <div className="section-title">🏆 Today&apos;s Champions</div>
            <Link href="/profile/electricianed" className="champion-item">
              <span className="champion-rank gold">1</span>
              <div className="champion-info">
                <div className="champion-name">ElectricianEd</div>
                <div className="champion-stats">847 nods • 42 helps</div>
              </div>
            </Link>
            <Link href="/profile/chef-carla" className="champion-item">
              <span className="champion-rank silver">2</span>
              <div className="champion-info">
                <div className="champion-name">ChefCarla</div>
                <div className="champion-stats">623 nods • 31 helps</div>
              </div>
            </Link>
            <Link href="/profile/mechanicdave" className="champion-item">
              <span className="champion-rank bronze">3</span>
              <div className="champion-info">
                <div className="champion-name">MechanicDave</div>
                <div className="champion-stats">512 nods • 28 helps</div>
              </div>
            </Link>
            <div style={{textAlign: 'center', marginTop: '15px'}}>
              <Link href="#" className="link-primary" style={{fontSize: '14px'}}>View All →</Link>
            </div>
          </div>
          
          <div className="rising-stars">
            <div className="section-title text-dark">🌟 Rising Stars</div>
            <Link href="/profile/newbiebob" className="star-item">
              <span className="star-icon">🔥</span>
              <div className="star-info">
                <div className="star-name">NewbieBob</div>
                <div className="star-achievement">+342 today!</div>
              </div>
            </Link>
            <Link href="/profile/teachertina" className="star-item">
              <span className="star-icon">⚡</span>
              <div className="star-info">
                <div className="star-name">TeacherTina</div>
                <div className="star-achievement">+289 today!</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
