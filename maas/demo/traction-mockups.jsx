import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Circle, ArrowRight, Sparkles, TrendingUp, MessageSquare, FileText, Mail, Share2, DollarSign, BarChart3, Target, Zap, BookOpen, PenTool, Clock, RefreshCw, ChevronDown, Menu, User, Settings, LogOut, Plus, ExternalLink } from 'lucide-react';

// Color palette - Teal Trust theme
const colors = {
  primary: '#028090',      // teal
  primaryLight: '#03a5a5', // lighter teal
  secondary: '#00A896',    // seafoam
  accent: '#02C39A',       // mint
  dark: '#1a1a2e',         // dark navy
  darkMuted: '#2d2d44',    // muted dark
  light: '#f8fafa',        // off-white
  white: '#ffffff',
  gray: '#6b7280',
  grayLight: '#e5e7eb',
  success: '#10b981',
  warning: '#f59e0b',
};

// Navigation Component
const Navigation = ({ currentView, setCurrentView }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl" style={{ color: colors.dark }}>Traction</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['Dashboard', 'Playbook', 'Create', 'Learn'].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentView(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  currentView === item.toLowerCase()
                    ? 'text-teal-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
            <span className="text-white text-sm font-medium">NW</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Onboarding View
const OnboardingView = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'product',
      question: "What's your product?",
      subtext: "Tell me about what you're building",
      type: 'text',
      placeholder: "e.g., A project management tool for remote teams..."
    },
    {
      id: 'stage',
      question: "Where are you in your journey?",
      subtext: "This helps me tailor recommendations",
      type: 'select',
      options: [
        { value: 'idea', label: 'Just an idea', desc: 'Still validating the concept' },
        { value: 'building', label: 'Building MVP', desc: 'Product in development' },
        { value: 'launched', label: 'Launched', desc: 'Live with some users' },
        { value: 'growing', label: 'Growing', desc: 'Finding product-market fit' },
      ]
    },
    {
      id: 'marketing',
      question: "What marketing have you tried?",
      subtext: "Select all that apply",
      type: 'multi',
      options: [
        { value: 'content', label: 'Blog / Content', icon: FileText },
        { value: 'social', label: 'Social Media', icon: Share2 },
        { value: 'email', label: 'Email Marketing', icon: Mail },
        { value: 'paid', label: 'Paid Ads', icon: DollarSign },
        { value: 'none', label: 'Nothing yet', icon: Circle },
      ]
    },
    {
      id: 'challenge',
      question: "What's your biggest marketing challenge?",
      subtext: "Be honest - this helps me help you",
      type: 'select',
      options: [
        { value: 'direction', label: "Don't know where to start", desc: 'Overwhelmed by options' },
        { value: 'consistency', label: "Can't stay consistent", desc: 'Marketing in bursts' },
        { value: 'results', label: "Not seeing results", desc: "Trying things but they don't work" },
        { value: 'time', label: "No time for marketing", desc: 'Too busy building product' },
      ]
    },
  ];

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      {/* Progress bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: colors.primary }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-2xl" style={{ color: colors.dark }}>Traction</span>
        </div>

        {/* Question */}
        <div className="mb-8">
          <p className="text-sm font-medium mb-2" style={{ color: colors.primary }}>
            Question {step + 1} of {questions.length}
          </p>
          <h1 className="text-3xl font-bold mb-2" style={{ color: colors.dark }}>
            {currentQuestion.question}
          </h1>
          <p className="text-gray-500">{currentQuestion.subtext}</p>
        </div>

        {/* Answer input */}
        <div className="mb-8">
          {currentQuestion.type === 'text' && (
            <textarea
              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors text-lg"
              rows={4}
              placeholder={currentQuestion.placeholder}
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
            />
          )}

          {currentQuestion.type === 'select' && (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setAnswers({ ...answers, [currentQuestion.id]: option.value })}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    answers[currentQuestion.id] === option.value
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="font-medium" style={{ color: colors.dark }}>{option.label}</div>
                  <div className="text-sm text-gray-500">{option.desc}</div>
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'multi' && (
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((option) => {
                const Icon = option.icon;
                const selected = (answers[currentQuestion.id] || []).includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      const current = answers[currentQuestion.id] || [];
                      const updated = selected
                        ? current.filter(v => v !== option.value)
                        : [...current, option.value];
                      setAnswers({ ...answers, [currentQuestion.id]: updated });
                    }}
                    className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                      selected
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selected ? 'bg-teal-500' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${selected ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <span className="font-medium" style={{ color: colors.dark }}>{option.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              step === 0 ? 'invisible' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Back
          </button>
          <button
            onClick={() => {
              if (step < questions.length - 1) {
                setStep(step + 1);
              } else {
                onComplete();
              }
            }}
            className="px-8 py-3 rounded-lg font-medium text-white flex items-center gap-2 transition-transform hover:scale-105"
            style={{ backgroundColor: colors.primary }}
          >
            {step < questions.length - 1 ? 'Continue' : 'See my plan'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Dashboard View
const DashboardView = ({ setCurrentView }) => {
  const actions = [
    {
      id: 1,
      title: 'Write your positioning statement',
      desc: 'Define how you want customers to think about your product',
      type: 'Playbook',
      priority: 'high',
      time: '15 min',
      icon: Target,
    },
    {
      id: 2,
      title: 'Create your first LinkedIn post',
      desc: 'Announce your product to your network',
      type: 'Content',
      priority: 'medium',
      time: '10 min',
      icon: PenTool,
    },
    {
      id: 3,
      title: 'Set up email capture on your site',
      desc: 'Start building your audience before launch',
      type: 'Growth',
      priority: 'medium',
      time: '20 min',
      icon: Mail,
    },
  ];

  const recentInsight = {
    title: 'Your technical content performs 3x better',
    desc: 'Posts about how you built features get much more engagement than product announcements. Consider doing more behind-the-scenes content.',
    source: 'Based on your last 2 weeks of activity',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <Navigation currentView="dashboard" setCurrentView={setCurrentView} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1" style={{ color: colors.dark }}>
            Good morning, Nigel 👋
          </h1>
          <p className="text-gray-500">Here's what to focus on today</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content - Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next Actions Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}15` }}>
                    <Zap className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h2 className="font-semibold" style={{ color: colors.dark }}>Your Next Actions</h2>
                    <p className="text-sm text-gray-500">AI-recommended based on your stage</p>
                  </div>
                </div>
                <button className="text-sm font-medium" style={{ color: colors.primary }}>
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {actions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <div
                      key={action.id}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:border-teal-300 ${
                        idx === 0 ? 'border-teal-500 bg-teal-50' : 'border-gray-100 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          idx === 0 ? 'bg-teal-500' : 'bg-gray-200'
                        }`}>
                          <Icon className={`w-5 h-5 ${idx === 0 ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium" style={{ color: colors.dark }}>{action.title}</h3>
                            {idx === 0 && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-700">
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mb-2">{action.desc}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {action.time}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-gray-100">{action.type}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Latest Insight Card */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-teal-100 text-sm font-medium mb-1">Latest Insight</p>
                  <h3 className="font-semibold text-lg mb-2">{recentInsight.title}</h3>
                  <p className="text-teal-100 text-sm mb-3">{recentInsight.desc}</p>
                  <p className="text-teal-200 text-xs">{recentInsight.source}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-4" style={{ color: colors.dark }}>Your Progress</h3>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Marketing Foundations</span>
                  <span className="font-medium" style={{ color: colors.primary }}>35%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: '35%', backgroundColor: colors.primary }} />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Positioning', done: true },
                  { label: 'Target customer', done: true },
                  { label: 'Messaging', done: false, current: true },
                  { label: 'Channel strategy', done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    {item.done ? (
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                    ) : item.current ? (
                      <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                      </div>
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300" />
                    )}
                    <span className={`text-sm ${item.done ? 'text-gray-500' : item.current ? 'font-medium text-gray-900' : 'text-gray-400'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-4" style={{ color: colors.dark }}>Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { label: 'Log a check-in', icon: MessageSquare, color: colors.primary },
                  { label: 'Create content', icon: PenTool, color: colors.secondary },
                  { label: 'View playbook', icon: BookOpen, color: colors.accent },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                        <Icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: colors.dark }}>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Check-in View
const CheckInView = ({ setCurrentView }) => {
  const [checkInStep, setCheckInStep] = useState(0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <Navigation currentView="dashboard" setCurrentView={setCurrentView} />

      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}15` }}>
              <RefreshCw className="w-6 h-6" style={{ color: colors.primary }} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: colors.dark }}>Weekly Check-in</h1>
              <p className="text-gray-500 text-sm">Let's see what's working for you</p>
            </div>
          </div>

          {checkInStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.dark }}>
                  What marketing did you do this week?
                </label>
                <textarea
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  rows={3}
                  placeholder="e.g., Posted 3 times on LinkedIn, sent out an email to my list..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.dark }}>
                  What results did you see?
                </label>
                <textarea
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  rows={3}
                  placeholder="e.g., Got 50 likes on one post, 3 people signed up for the waitlist..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: colors.dark }}>
                  How do you feel about this week's marketing?
                </label>
                <div className="flex gap-3">
                  {['😞', '😐', '🙂', '😊', '🤩'].map((emoji, idx) => (
                    <button
                      key={idx}
                      className="w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-2xl"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setCheckInStep(1)}
                className="w-full py-3 rounded-xl font-medium text-white transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: colors.primary }}
              >
                Submit Check-in
              </button>
            </div>
          )}

          {checkInStep === 1 && (
            <div className="space-y-6">
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: colors.dark }}>
                  Analyzing your week...
                </h2>
                <p className="text-gray-500">Finding patterns in what's working</p>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h3 className="font-semibold mb-3" style={{ color: colors.dark }}>
                  🎯 Key Insight
                </h3>
                <p className="text-gray-700 mb-4">
                  Your LinkedIn post about "behind the scenes" got 3x more engagement than your product announcement.
                  Your audience responds to authenticity and process content.
                </p>
                <p className="text-sm text-teal-700 font-medium">
                  Recommendation: Create more "building in public" content this week.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-3" style={{ color: colors.dark }}>
                  📊 This Week's Numbers
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Posts', value: '3', change: '+1' },
                    { label: 'Engagement', value: '127', change: '+45%' },
                    { label: 'Signups', value: '3', change: '+2' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold" style={{ color: colors.dark }}>{stat.value}</div>
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="text-xs text-teal-600 font-medium">{stat.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setCurrentView('dashboard')}
                className="w-full py-3 rounded-xl font-medium text-white transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: colors.primary }}
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Content Creator View
const ContentCreatorView = ({ setCurrentView }) => {
  const [contentType, setContentType] = useState('linkedin');
  const [prompt, setPrompt] = useState('');
  const [generated, setGenerated] = useState(false);

  const contentTypes = [
    { id: 'linkedin', label: 'LinkedIn Post', icon: Share2 },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'blog', label: 'Blog Post', icon: FileText },
    { id: 'ad', label: 'Ad Copy', icon: DollarSign },
  ];

  const sampleOutput = `🚀 We spent 6 months building the wrong thing.

Here's what we learned:

We were so focused on features that we forgot to ask: "Does anyone actually want this?"

After talking to 50 potential customers, we realized:
• They didn't need more features
• They needed fewer, better ones
• Our "killer feature" was actually confusing

The pivot was painful but necessary.

Now? We're growing 20% week over week.

The lesson: Talk to customers before you write a single line of code.

What's the biggest lesson you've learned building your product?

#buildinpublic #startups #productdevelopment`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <Navigation currentView="create" setCurrentView={setCurrentView} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1" style={{ color: colors.dark }}>
            Create Content
          </h1>
          <p className="text-gray-500">AI-powered content that sounds like you</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-semibold mb-4" style={{ color: colors.dark }}>What do you want to create?</h2>

            {/* Content Type Selector */}
            <div className="flex gap-2 mb-6">
              {contentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setContentType(type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      contentType === type.id
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {type.label}
                  </button>
                );
              })}
            </div>

            {/* Input Area */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.dark }}>
                  What's the topic or message?
                </label>
                <textarea
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  rows={4}
                  placeholder="e.g., Share a lesson I learned about customer research..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.dark }}>
                  Tone
                </label>
                <div className="flex gap-2">
                  {['Professional', 'Casual', 'Storytelling', 'Educational'].map((tone) => (
                    <button
                      key={tone}
                      className="px-4 py-2 rounded-lg text-sm border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all"
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setGenerated(true)}
                className="w-full py-3 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: colors.primary }}
              >
                <Sparkles className="w-5 h-5" />
                Generate Content
              </button>
            </div>

            {/* Tips */}
            <div className="mt-6 p-4 bg-teal-50 rounded-xl">
              <h3 className="text-sm font-medium mb-2" style={{ color: colors.primary }}>
                💡 Tip based on your data
              </h3>
              <p className="text-sm text-gray-600">
                Your audience engages most with personal stories and lessons learned.
                Try framing this as "what I learned" or "my mistake was..."
              </p>
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold" style={{ color: colors.dark }}>Generated Content</h2>
              {generated && (
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <RefreshCw className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              )}
            </div>

            {!generated ? (
              <div className="h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <PenTool className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Your generated content will appear here</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl whitespace-pre-line text-sm" style={{ color: colors.dark }}>
                  {sampleOutput}
                </div>

                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2 rounded-lg font-medium text-white"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Copy to Clipboard
                  </button>
                  <button className="flex-1 py-2 rounded-lg font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <h3 className="text-sm font-medium text-yellow-800 mb-1">Before you post</h3>
                  <p className="text-sm text-yellow-700">
                    Best time to post on LinkedIn for your audience: Tuesday 9am or Thursday 2pm
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

// Main App Component
export default function App() {
  const [view, setView] = useState('onboarding');
  const [onboarded, setOnboarded] = useState(false);

  const handleOnboardingComplete = () => {
    setOnboarded(true);
    setView('dashboard');
  };

  // Demo navigation
  const demoViews = ['onboarding', 'dashboard', 'checkin', 'create'];

  return (
    <div>
      {/* Demo Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-4">
        <span className="text-xs text-gray-400">View:</span>
        {demoViews.map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              view === v ? 'bg-teal-500' : 'hover:bg-gray-700'
            }`}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {/* Views */}
      {view === 'onboarding' && <OnboardingView onComplete={handleOnboardingComplete} />}
      {view === 'dashboard' && <DashboardView setCurrentView={setView} />}
      {view === 'checkin' && <CheckInView setCurrentView={setView} />}
      {view === 'create' && <ContentCreatorView setCurrentView={setView} />}
    </div>
  );
}
