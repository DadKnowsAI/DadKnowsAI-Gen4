// app/education/lesson/[id]/page.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Users, Trophy, Clock, 
  CheckCircle, MessageSquare, Lightbulb, 
  ArrowRight, Lock, Star
} from 'lucide-react';

interface LessonContent {
  category: string;
  title: string;
  duration: string;
  difficulty: string;
  objectives: string[];
  content: {
    section: string;
    text: string;
    example?: string;
    tip?: string;
  }[];
  quiz?: {
    question: string;
    options: string[];
    correct: number;
  }[];
  nextLesson?: string;
}

const lessonDatabase: Record<string, LessonContent> = {
  'basics-0': {
    category: 'AI Basics',
    title: "AI Isn&apos;t Magic - It&apos;s Pattern Matching",
    duration: "5 min read",
    difficulty: "Beginner",
    objectives: [
      "Understand how AI recognizes patterns",
      "Learn why AI seems &apos;smart&apos; but isn&apos;t conscious",
      "Grasp the cookbook analogy for AI learning"
    ],
    content: [
      {
        section: "What AI Really Is",
        text: "Imagine you have a friend who has read every cookbook ever written. When you ask them how to make bread, they don't actually understand 'cooking' - they just remember patterns from millions of recipes. That's essentially what AI does.",
        example: "When you ask AI 'How do I fix a leaky faucet?', it's not actually understanding plumbing. It's matching your question to patterns it learned from millions of home repair texts.",
        tip: "AI is like the world's best pattern matcher, not a thinking being."
      },
      {
        section: "Why This Matters",
        text: "Understanding that AI is pattern matching helps you use it better. It explains why AI can write a decent email (it's seen millions of them) but might give terrible advice about your specific 1952 vintage car (too few examples to match against).",
        example: "AI can easily help write a thank you note (common pattern) but struggles with your unique family recipe that grandma never wrote down (no pattern to match)."
      },
      {
        section: "The Training Process",
        text: "AI 'learns' by analyzing massive amounts of text and finding patterns. It's like teaching someone to recognize dogs by showing them millions of dog pictures - eventually they recognize the pattern of 'dog-ness' without understanding what a dog actually is.",
        tip: "The more common something is in AI's training data, the better it will be at helping with it."
      }
    ],
    quiz: [
      {
        question: "What is AI essentially doing when it answers your questions?",
        options: [
          "Thinking deeply about the problem",
          "Matching patterns from its training data",
          "Connecting to the internet to search",
          "Understanding meaning like humans do"
        ],
        correct: 1
      },
      {
        question: "Why might AI struggle with very specific or rare problems?",
        options: [
          "It gets tired",
          "It doesn't care about unique problems",
          "It has fewer patterns to match against",
          "It only works on common issues"
        ],
        correct: 2
      }
    ],
    nextLesson: "basics-1"
  },
  'basics-1': {
    category: 'AI Basics',
    title: "Why AI Sometimes Gets Things Wrong",
    duration: "7 min read",
    difficulty: "Beginner",
    objectives: [
      "Learn about AI 'hallucinations'",
      "Understand confidence vs correctness",
      "Recognize when to double-check AI answers"
    ],
    content: [
      {
        section: "The Confidence Problem",
        text: "AI always sounds confident, even when it's wrong. It's like that friend who can tell any story with absolute conviction, even if they're mixing up details from different movies.",
        example: "AI might confidently tell you that WD-40 stands for 'Water Displacement, 40th formula' (correct) but then claim it was invented in 1963 (wrong - it was 1953).",
        tip: "AI's confidence level doesn't indicate accuracy - always verify important facts."
      },
      {
        section: "Hallucinations Explained",
        text: "When AI doesn't have enough information, it sometimes 'fills in the gaps' with plausible-sounding but incorrect information. We call these hallucinations.",
        example: "Ask AI about a made-up person like 'Dr. Johnson who invented the flying bicycle in 1887' and it might create a whole fictional biography that sounds real."
      },
      {
        section: "When to Be Extra Careful",
        text: "Be especially cautious with: recent events (after AI's training cutoff), specific numbers and dates, medical or legal advice, and anything where being wrong has consequences.",
        tip: "Use AI for drafts and ideas, but verify facts through reliable sources, especially for important decisions."
      }
    ],
    nextLesson: "basics-2"
  },
  'practical-0': {
    category: 'Practical Tips',
    title: "Getting Better Answers from AI",
    duration: "8 min interactive",
    difficulty: "Intermediate",
    objectives: [
      "Master the art of specific prompting",
      "Learn the power of context and examples",
      "Understand iterative refinement"
    ],
    content: [
      {
        section: "Be Specific Like You're Talking to a Specialist",
        text: "The more specific your question, the better the answer. Think of it like calling a mechanic - saying 'car broken' won't help as much as '2015 Honda Civic, makes grinding noise when turning left, started yesterday.'",
        example: "Bad: 'Help me cook dinner'\nGood: 'I have chicken thighs, rice, and bell peppers. Need a 30-minute recipe for 4 people, kids don't like spicy food.'",
        tip: "Include: What you have, what you want to achieve, any constraints or preferences"
      },
      {
        section: "Give Context and Background",
        text: "AI doesn't know your situation unless you explain it. It's like asking for directions without saying where you're starting from.",
        example: "Instead of: 'How do I fix this error?'\nTry: 'I'm a beginner learning Python. I get this error [paste error] when trying to read a CSV file. Here's my code [paste code].'",
      },
      {
        section: "Iterate and Refine",
        text: "Don't expect perfect answers on the first try. Have a conversation! Ask follow-ups, request clarification, or ask for alternatives.",
        example: "Start with: 'How do I unclog a drain?'\nFollow up: 'I don't have a plunger, what else can I try?'\nRefine: 'The baking soda method didn't work, what's next?'",
        tip: "Treat AI like a collaborative partner, not a one-shot answer machine."
      }
    ],
    quiz: [
      {
        question: "Which prompt is likely to get the best response?",
        options: [
          "Fix my computer",
          "Computer won't start",
          "Dell laptop won't boot, shows black screen with cursor, happened after Windows update",
          "Help with tech issues"
        ],
        correct: 2
      }
    ],
    nextLesson: "practical-1"
  },
  'dadknows-0': {
    category: 'How DadKnows Works',
    title: "How DadKnows Combines AI + Human Experts",
    duration: "4 min video",
    difficulty: "Essential",
    objectives: [
      "Understand the DadKnows hybrid model",
      "Learn how AI facilitates expert connections",
      "See why human verification matters"
    ],
    content: [
      {
        section: "The Best of Both Worlds",
        text: "DadKnows uses AI as a matchmaker, not the final authority. When you describe your problem, our AI understands the pattern and connects you with humans who've solved similar issues hundreds of times.",
        example: "You say: 'My sourdough starter smells like vinegar'\nAI recognizes: This is a fermentation issue\nDadKnows connects you to: BakerBeth who's maintained starters for 10 years",
        tip: "AI understands the problem category, humans provide the actual solution."
      },
      {
        section: "Why Human Experts Matter",
        text: "Real problems have nuances that AI might miss. A photo of your bread, the sound your car makes, the specific model of your appliance - human experts can process these subtleties that AI can't.",
        example: "AI might say 'replace the alternator' but MechanicDave hears your audio clip and says 'that's just a loose belt - $20 fix, not $500'."
      },
      {
        section: "The Verification Layer",
        text: "Every expert on DadKnows is verified through credentials, peer review, and track record. When Dad AI cites an expert, you can see their success rate, specialties, and how many people they've helped.",
        tip: "Look for experts with high nod counts in your specific problem area - they've proven their knowledge repeatedly."
      }
    ],
    nextLesson: "dadknows-1"
  }
};

export default function LessonPage({ params }: { params: { id: string } }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [completed, setCompleted] = useState(false);

  const lesson = lessonDatabase[params.id] || lessonDatabase['basics-0'];

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex });
  };

  const checkQuizResults = () => {
    setShowQuizResults(true);
    const allCorrect = lesson.quiz?.every((q, i) => quizAnswers[i] === q.correct);
    if (allCorrect) {
      setCompleted(true);
    }
  };

  const quizScore = lesson.quiz?.reduce((score, q, i) => {
    return score + (quizAnswers[i] === q.correct ? 1 : 0);
  }, 0) || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/education" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-bold">Back to Lessons</span>
              </Link>
              <div className="border-l border-gray-200 pl-4">
                <span className="text-xs font-bold text-gray-500">{lesson.category}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-sm font-bold text-gray-500">
                <Clock className="w-4 h-4" />
                {lesson.duration}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                lesson.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                lesson.difficulty === 'Important' ? 'bg-orange-100 text-orange-700' :
                'bg-red-100 text-red-700'
              }`}>
                {lesson.difficulty}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-1 bg-gray-200">
            <div 
              className="h-1 bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentSection + 1) / (lesson.content.length + (lesson.quiz ? 1 : 0))) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Lesson Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <h1 className="text-2xl font-bold mb-3">{lesson.title}</h1>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-blue-100">What you&apos;ll learn:</h3>
              <ul className="space-y-1">
                {lesson.objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm font-bold text-blue-50">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="p-6">
            {currentSection < lesson.content.length ? (
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {lesson.content[currentSection].section}
                </h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed font-bold">
                  {lesson.content[currentSection].text}
                </p>
                
                {lesson.content[currentSection].example && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-sm text-blue-900 mb-2">Example:</div>
                        <div className="text-sm font-bold text-blue-800 whitespace-pre-line">
                          {lesson.content[currentSection].example}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {lesson.content[currentSection].tip && (
                  <div className="bg-yellow-50 rounded-lg p-4 mb-4 border border-yellow-200">
                    <div className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-sm text-yellow-900 mb-1">Pro Tip:</div>
                        <div className="text-sm font-bold text-yellow-800">
                          {lesson.content[currentSection].tip}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : lesson.quiz ? (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Check</h2>
                <div className="space-y-4">
                  {lesson.quiz.map((q, qIdx) => (
                    <div key={qIdx} className="border border-gray-200 rounded-lg p-4">
                      <p className="font-bold text-gray-900 mb-3">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleQuizAnswer(qIdx, oIdx)}
                            className={`w-full text-left px-4 py-2 rounded-lg border transition ${
                              quizAnswers[qIdx] === oIdx
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            } ${
                              showQuizResults && oIdx === q.correct
                                ? 'border-green-500 bg-green-50'
                                : showQuizResults && quizAnswers[qIdx] === oIdx && oIdx !== q.correct
                                ? 'border-red-500 bg-red-50'
                                : ''
                            }`}
                            disabled={showQuizResults}
                          >
                            <span className="text-sm font-bold">{option}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {!showQuizResults ? (
                    <button
                      onClick={checkQuizResults}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                      disabled={Object.keys(quizAnswers).length < (lesson.quiz?.length || 0)}
                    >
                      Check Answers
                    </button>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-lg font-bold text-gray-900 mb-2">
                        Score: {quizScore}/{lesson.quiz?.length || 0}
                      </p>
                      {completed ? (
                        <p className="text-green-600 font-bold">Perfect! You&apos;ve mastered this lesson!</p>
                      ) : (
                        <p className="text-gray-600 font-bold">Review the incorrect answers and try again!</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : null}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition ${
                  currentSection === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex gap-2">
                {[...Array(lesson.content.length + (lesson.quiz ? 1 : 0))].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSection(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      idx === currentSection ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {currentSection < lesson.content.length - 1 || (currentSection === lesson.content.length - 1 && lesson.quiz) ? (
                <button
                  onClick={() => setCurrentSection(currentSection + 1)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  {currentSection === lesson.content.length - 1 && lesson.quiz ? 'Take Quiz' : 'Next'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={lesson.nextLesson ? `/education/lesson/${lesson.nextLesson}` : '/education'}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
                >
                  {lesson.nextLesson ? 'Next Lesson' : 'Back to Lessons'}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-900">Complete this lesson</p>
            <p className="text-xs font-bold text-gray-500">Earn 10 learning points</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <MessageSquare className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-900">Got questions?</p>
            <Link href="/chat" className="text-xs font-bold text-blue-600 hover:text-blue-700">Ask Dad AI →</Link>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-900">Join discussion</p>
            <Link href="/categories" className="text-xs font-bold text-green-600 hover:text-green-700">View communities →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};