const { useState } = React;const { ChevronRight, CheckCircle, Circle, ArrowRight, Sparkles, TrendingUp, MessageSquare, FileText, Mail, Share2, DollarSign, BarChart3, Target, Zap, BookOpen, PenTool, Clock, RefreshCw, ChevronDown, Menu, User, Settings, LogOut, Plus, ExternalLink } = lucideReact;

// Color palette - Teal Trust theme
const colors = {
  primary: '#028090',
  // teal
  primaryLight: '#03a5a5',
  // lighter teal
  secondary: '#00A896',
  // seafoam
  accent: '#02C39A',
  // mint
  dark: '#1a1a2e',
  // dark navy
  darkMuted: '#2d2d44',
  // muted dark
  light: '#f8fafa',
  // off-white
  white: '#ffffff',
  gray: '#6b7280',
  grayLight: '#e5e7eb',
  success: '#10b981',
  warning: '#f59e0b'
};

// Navigation Component
const Navigation = ({
  currentView,
  setCurrentView
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "bg-white border-b border-gray-200 px-6 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg flex items-center justify-center",
    style: {
      backgroundColor: colors.primary
    }
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    className: "w-5 h-5 text-white"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-xl",
    style: {
      color: colors.dark
    }
  }, "Traction")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center gap-6"
  }, ['Dashboard', 'Playbook', 'Create', 'Learn'].map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    onClick: () => setCurrentView(item.toLowerCase()),
    className: `text-sm font-medium transition-colors ${currentView === item.toLowerCase() ? 'text-teal-600' : 'text-gray-600 hover:text-gray-900'}`
  }, item)))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-2 rounded-lg hover:bg-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement(Settings, {
    className: "w-5 h-5 text-gray-600"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white text-sm font-medium"
  }, "NW")))));
};

// Onboarding View
const OnboardingView = ({
  onComplete
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = [{
    id: 'product',
    question: "What's your product?",
    subtext: "Tell me about what you're building",
    type: 'text',
    placeholder: "e.g., A project management tool for remote teams..."
  }, {
    id: 'stage',
    question: "Where are you in your journey?",
    subtext: "This helps me tailor recommendations",
    type: 'select',
    options: [{
      value: 'idea',
      label: 'Just an idea',
      desc: 'Still validating the concept'
    }, {
      value: 'building',
      label: 'Building MVP',
      desc: 'Product in development'
    }, {
      value: 'launched',
      label: 'Launched',
      desc: 'Live with some users'
    }, {
      value: 'growing',
      label: 'Growing',
      desc: 'Finding product-market fit'
    }]
  }, {
    id: 'marketing',
    question: "What marketing have you tried?",
    subtext: "Select all that apply",
    type: 'multi',
    options: [{
      value: 'content',
      label: 'Blog / Content',
      icon: FileText
    }, {
      value: 'social',
      label: 'Social Media',
      icon: Share2
    }, {
      value: 'email',
      label: 'Email Marketing',
      icon: Mail
    }, {
      value: 'paid',
      label: 'Paid Ads',
      icon: DollarSign
    }, {
      value: 'none',
      label: 'Nothing yet',
      icon: Circle
    }]
  }, {
    id: 'challenge',
    question: "What's your biggest marketing challenge?",
    subtext: "Be honest - this helps me help you",
    type: 'select',
    options: [{
      value: 'direction',
      label: "Don't know where to start",
      desc: 'Overwhelmed by options'
    }, {
      value: 'consistency',
      label: "Can't stay consistent",
      desc: 'Marketing in bursts'
    }, {
      value: 'results',
      label: "Not seeing results",
      desc: "Trying things but they don't work"
    }, {
      value: 'time',
      label: "No time for marketing",
      desc: 'Too busy building product'
    }]
  }];
  const currentQuestion = questions[step];
  const progress = (step + 1) / questions.length * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen",
    style: {
      backgroundColor: colors.light
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-1 bg-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full transition-all duration-500",
    style: {
      width: `${progress}%`,
      backgroundColor: colors.primary
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto px-6 py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl flex items-center justify-center",
    style: {
      backgroundColor: colors.primary
    }
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    className: "w-6 h-6 text-white"
  })), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-2xl",
    style: {
      color: colors.dark
    }
  }, "Traction")), /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium mb-2",
    style: {
      color: colors.primary
    }
  }, "Question ", step + 1, " of ", questions.length), /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-bold mb-2",
    style: {
      color: colors.dark
    }
  }, currentQuestion.question), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, currentQuestion.subtext)), /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, currentQuestion.type === 'text' && /*#__PURE__*/React.createElement("textarea", {
    className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors text-lg",
    rows: 4,
    placeholder: currentQuestion.placeholder,
    value: answers[currentQuestion.id] || '',
    onChange: e => setAnswers({
      ...answers,
      [currentQuestion.id]: e.target.value
    })
  }), currentQuestion.type === 'select' && /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, currentQuestion.options.map(option => /*#__PURE__*/React.createElement("button", {
    key: option.value,
    onClick: () => setAnswers({
      ...answers,
      [currentQuestion.id]: option.value
    }),
    className: `w-full p-4 rounded-xl border-2 text-left transition-all ${answers[currentQuestion.id] === option.value ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-gray-300 bg-white'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium",
    style: {
      color: colors.dark
    }
  }, option.label), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-gray-500"
  }, option.desc)))), currentQuestion.type === 'multi' && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, currentQuestion.options.map(option => {
    const Icon = option.icon;
    const selected = (answers[currentQuestion.id] || []).includes(option.value);
    return /*#__PURE__*/React.createElement("button", {
      key: option.value,
      onClick: () => {
        const current = answers[currentQuestion.id] || [];
        const updated = selected ? current.filter(v => v !== option.value) : [...current, option.value];
        setAnswers({
          ...answers,
          [currentQuestion.id]: updated
        });
      },
      className: `p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${selected ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-gray-300 bg-white'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-10 h-10 rounded-lg flex items-center justify-center ${selected ? 'bg-teal-500' : 'bg-gray-100'}`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: `w-5 h-5 ${selected ? 'text-white' : 'text-gray-500'}`
    })), /*#__PURE__*/React.createElement("span", {
      className: "font-medium",
      style: {
        color: colors.dark
      }
    }, option.label));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(Math.max(0, step - 1)),
    className: `px-6 py-3 rounded-lg font-medium transition-colors ${step === 0 ? 'invisible' : 'text-gray-600 hover:bg-gray-100'}`
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        onComplete();
      }
    },
    className: "px-8 py-3 rounded-lg font-medium text-white flex items-center gap-2 transition-transform hover:scale-105",
    style: {
      backgroundColor: colors.primary
    }
  }, step < questions.length - 1 ? 'Continue' : 'See my plan', /*#__PURE__*/React.createElement(ChevronRight, {
    className: "w-5 h-5"
  })))));
};

// Dashboard View
const DashboardView = ({
  setCurrentView
}) => {
  const actions = [{
    id: 1,
    title: 'Write your positioning statement',
    desc: 'Define how you want customers to think about your product',
    type: 'Playbook',
    priority: 'high',
    time: '15 min',
    icon: Target
  }, {
    id: 2,
    title: 'Create your first LinkedIn post',
    desc: 'Announce your product to your network',
    type: 'Content',
    priority: 'medium',
    time: '10 min',
    icon: PenTool
  }, {
    id: 3,
    title: 'Set up email capture on your site',
    desc: 'Start building your audience before launch',
    type: 'Growth',
    priority: 'medium',
    time: '20 min',
    icon: Mail
  }];
  const recentInsight = {
    title: 'Your technical content performs 3x better',
    desc: 'Posts about how you built features get much more engagement than product announcements. Consider doing more behind-the-scenes content.',
    source: 'Based on your last 2 weeks of activity'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen",
    style: {
      backgroundColor: colors.light
    }
  }, /*#__PURE__*/React.createElement(Navigation, {
    currentView: "dashboard",
    setCurrentView: setCurrentView
  }), /*#__PURE__*/React.createElement("main", {
    className: "max-w-7xl mx-auto px-6 py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold mb-1",
    style: {
      color: colors.dark
    }
  }, "Good morning, Nigel \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "Here's what to focus on today")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl flex items-center justify-center",
    style: {
      backgroundColor: `${colors.primary}15`
    }
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "w-5 h-5",
    style: {
      color: colors.primary
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "font-semibold",
    style: {
      color: colors.dark
    }
  }, "Your Next Actions"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "AI-recommended based on your stage"))), /*#__PURE__*/React.createElement("button", {
    className: "text-sm font-medium",
    style: {
      color: colors.primary
    }
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, actions.map((action, idx) => {
    const Icon = action.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: action.id,
      className: `p-4 rounded-xl border-2 transition-all cursor-pointer hover:border-teal-300 ${idx === 0 ? 'border-teal-500 bg-teal-50' : 'border-gray-100 bg-gray-50'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${idx === 0 ? 'bg-teal-500' : 'bg-gray-200'}`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: `w-5 h-5 ${idx === 0 ? 'text-white' : 'text-gray-500'}`
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-1"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-medium",
      style: {
        color: colors.dark
      }
    }, action.title), idx === 0 && /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-700"
    }, "Recommended")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500 mb-2"
    }, action.desc), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 text-xs text-gray-400"
    }, /*#__PURE__*/React.createElement("span", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement(Clock, {
      className: "w-3 h-3"
    }), action.time), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded-full bg-gray-100"
    }, action.type))), /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-5 h-5 text-gray-400 flex-shrink-0"
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "w-5 h-5 text-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-teal-100 text-sm font-medium mb-1"
  }, "Latest Insight"), /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-lg mb-2"
  }, recentInsight.title), /*#__PURE__*/React.createElement("p", {
    className: "text-teal-100 text-sm mb-3"
  }, recentInsight.desc), /*#__PURE__*/React.createElement("p", {
    className: "text-teal-200 text-xs"
  }, recentInsight.source))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold mb-4",
    style: {
      color: colors.dark
    }
  }, "Your Progress"), /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500"
  }, "Marketing Foundations"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium",
    style: {
      color: colors.primary
    }
  }, "35%")), /*#__PURE__*/React.createElement("div", {
    className: "h-2 bg-gray-100 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full rounded-full",
    style: {
      width: '35%',
      backgroundColor: colors.primary
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, [{
    label: 'Positioning',
    done: true
  }, {
    label: 'Target customer',
    done: true
  }, {
    label: 'Messaging',
    done: false,
    current: true
  }, {
    label: 'Channel strategy',
    done: false
  }].map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    className: "flex items-center gap-3"
  }, item.done ? /*#__PURE__*/React.createElement(CheckCircle, {
    className: "w-5 h-5 text-teal-500"
  }) : item.current ? /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-2 h-2 rounded-full bg-teal-500"
  })) : /*#__PURE__*/React.createElement(Circle, {
    className: "w-5 h-5 text-gray-300"
  }), /*#__PURE__*/React.createElement("span", {
    className: `text-sm ${item.done ? 'text-gray-500' : item.current ? 'font-medium text-gray-900' : 'text-gray-400'}`
  }, item.label))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold mb-4",
    style: {
      color: colors.dark
    }
  }, "Quick Actions"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, [{
    label: 'Log a check-in',
    icon: MessageSquare,
    color: colors.primary
  }, {
    label: 'Create content',
    icon: PenTool,
    color: colors.secondary
  }, {
    label: 'View playbook',
    icon: BookOpen,
    color: colors.accent
  }].map(item => {
    const Icon = item.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: item.label,
      className: "w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 rounded-lg flex items-center justify-center",
      style: {
        backgroundColor: `${item.color}15`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "w-4 h-4",
      style: {
        color: item.color
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium",
      style: {
        color: colors.dark
      }
    }, item.label));
  })))))));
};

// Check-in View
const CheckInView = ({
  setCurrentView
}) => {
  const [checkInStep, setCheckInStep] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen",
    style: {
      backgroundColor: colors.light
    }
  }, /*#__PURE__*/React.createElement(Navigation, {
    currentView: "dashboard",
    setCurrentView: setCurrentView
  }), /*#__PURE__*/React.createElement("main", {
    className: "max-w-2xl mx-auto px-6 py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl flex items-center justify-center",
    style: {
      backgroundColor: `${colors.primary}15`
    }
  }, /*#__PURE__*/React.createElement(RefreshCw, {
    className: "w-6 h-6",
    style: {
      color: colors.primary
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold",
    style: {
      color: colors.dark
    }
  }, "Weekly Check-in"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm"
  }, "Let's see what's working for you"))), checkInStep === 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium mb-2",
    style: {
      color: colors.dark
    }
  }, "What marketing did you do this week?"), /*#__PURE__*/React.createElement("textarea", {
    className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors",
    rows: 3,
    placeholder: "e.g., Posted 3 times on LinkedIn, sent out an email to my list..."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium mb-2",
    style: {
      color: colors.dark
    }
  }, "What results did you see?"), /*#__PURE__*/React.createElement("textarea", {
    className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors",
    rows: 3,
    placeholder: "e.g., Got 50 likes on one post, 3 people signed up for the waitlist..."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium mb-3",
    style: {
      color: colors.dark
    }
  }, "How do you feel about this week's marketing?"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, ['😞', '😐', '🙂', '😊', '🤩'].map((emoji, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    className: "w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-2xl"
  }, emoji)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCheckInStep(1),
    className: "w-full py-3 rounded-xl font-medium text-white transition-transform hover:scale-[1.02]",
    style: {
      backgroundColor: colors.primary
    }
  }, "Submit Check-in")), checkInStep === 1 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "w-8 h-8 text-teal-600"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold mb-2",
    style: {
      color: colors.dark
    }
  }, "Analyzing your week..."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "Finding patterns in what's working")), /*#__PURE__*/React.createElement("div", {
    className: "bg-teal-50 border border-teal-200 rounded-xl p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold mb-3",
    style: {
      color: colors.dark
    }
  }, "\uD83C\uDFAF Key Insight"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700 mb-4"
  }, "Your LinkedIn post about \"behind the scenes\" got 3x more engagement than your product announcement. Your audience responds to authenticity and process content."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-teal-700 font-medium"
  }, "Recommendation: Create more \"building in public\" content this week.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-50 rounded-xl p-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold mb-3",
    style: {
      color: colors.dark
    }
  }, "\uD83D\uDCCA This Week's Numbers"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, [{
    label: 'Posts',
    value: '3',
    change: '+1'
  }, {
    label: 'Engagement',
    value: '127',
    change: '+45%'
  }, {
    label: 'Signups',
    value: '3',
    change: '+2'
  }].map(stat => /*#__PURE__*/React.createElement("div", {
    key: stat.label,
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-bold",
    style: {
      color: colors.dark
    }
  }, stat.value), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-gray-500 mb-1"
  }, stat.label), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-teal-600 font-medium"
  }, stat.change))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentView('dashboard'),
    className: "w-full py-3 rounded-xl font-medium text-white transition-transform hover:scale-[1.02]",
    style: {
      backgroundColor: colors.primary
    }
  }, "Back to Dashboard")))));
};

// Content Creator View
const ContentCreatorView = ({
  setCurrentView
}) => {
  const [contentType, setContentType] = useState('linkedin');
  const [prompt, setPrompt] = useState('');
  const [generated, setGenerated] = useState(false);
  const contentTypes = [{
    id: 'linkedin',
    label: 'LinkedIn Post',
    icon: Share2
  }, {
    id: 'email',
    label: 'Email',
    icon: Mail
  }, {
    id: 'blog',
    label: 'Blog Post',
    icon: FileText
  }, {
    id: 'ad',
    label: 'Ad Copy',
    icon: DollarSign
  }];
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
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen",
    style: {
      backgroundColor: colors.light
    }
  }, /*#__PURE__*/React.createElement(Navigation, {
    currentView: "create",
    setCurrentView: setCurrentView
  }), /*#__PURE__*/React.createElement("main", {
    className: "max-w-6xl mx-auto px-6 py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold mb-1",
    style: {
      color: colors.dark
    }
  }, "Create Content"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500"
  }, "AI-powered content that sounds like you")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-semibold mb-4",
    style: {
      color: colors.dark
    }
  }, "What do you want to create?"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mb-6"
  }, contentTypes.map(type => {
    const Icon = type.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: type.id,
      onClick: () => setContentType(type.id),
      className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${contentType === type.id ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "w-4 h-4"
    }), type.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium mb-2",
    style: {
      color: colors.dark
    }
  }, "What's the topic or message?"), /*#__PURE__*/React.createElement("textarea", {
    className: "w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors",
    rows: 4,
    placeholder: "e.g., Share a lesson I learned about customer research...",
    value: prompt,
    onChange: e => setPrompt(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium mb-2",
    style: {
      color: colors.dark
    }
  }, "Tone"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, ['Professional', 'Casual', 'Storytelling', 'Educational'].map(tone => /*#__PURE__*/React.createElement("button", {
    key: tone,
    className: "px-4 py-2 rounded-lg text-sm border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all"
  }, tone)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setGenerated(true),
    className: "w-full py-3 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]",
    style: {
      backgroundColor: colors.primary
    }
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "w-5 h-5"
  }), "Generate Content")), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 p-4 bg-teal-50 rounded-xl"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium mb-2",
    style: {
      color: colors.primary
    }
  }, "\uD83D\uDCA1 Tip based on your data"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-600"
  }, "Your audience engages most with personal stories and lessons learned. Try framing this as \"what I learned\" or \"my mistake was...\""))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-semibold",
    style: {
      color: colors.dark
    }
  }, "Generated Content"), generated && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "p-2 rounded-lg hover:bg-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement(RefreshCw, {
    className: "w-4 h-4 text-gray-500"
  })))), !generated ? /*#__PURE__*/React.createElement("div", {
    className: "h-64 flex items-center justify-center text-gray-400"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(PenTool, {
    className: "w-12 h-12 mx-auto mb-3 opacity-50"
  }), /*#__PURE__*/React.createElement("p", null, "Your generated content will appear here"))) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gray-50 rounded-xl whitespace-pre-line text-sm",
    style: {
      color: colors.dark
    }
  }, sampleOutput), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex-1 py-2 rounded-lg font-medium text-white",
    style: {
      backgroundColor: colors.primary
    }
  }, "Copy to Clipboard"), /*#__PURE__*/React.createElement("button", {
    className: "flex-1 py-2 rounded-lg font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors"
  }, "Edit")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-sm font-medium text-yellow-800 mb-1"
  }, "Before you post"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-yellow-700"
  }, "Best time to post on LinkedIn for your audience: Tuesday 9am or Thursday 2pm")))))));
};

// Main App Component
window.App = function App() {
  const [view, setView] = useState('onboarding');
  const [onboarded, setOnboarded] = useState(false);
  const handleOnboardingComplete = () => {
    setOnboarded(true);
    setView('dashboard');
  };

  // Demo navigation
  const demoViews = ['onboarding', 'dashboard', 'checkin', 'create'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-gray-400"
  }, "View:"), demoViews.map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setView(v),
    className: `px-3 py-1 rounded-full text-sm font-medium transition-colors ${view === v ? 'bg-teal-500' : 'hover:bg-gray-700'}`
  }, v.charAt(0).toUpperCase() + v.slice(1)))), view === 'onboarding' && /*#__PURE__*/React.createElement(OnboardingView, {
    onComplete: handleOnboardingComplete
  }), view === 'dashboard' && /*#__PURE__*/React.createElement(DashboardView, {
    setCurrentView: setView
  }), view === 'checkin' && /*#__PURE__*/React.createElement(CheckInView, {
    setCurrentView: setView
  }), view === 'create' && /*#__PURE__*/React.createElement(ContentCreatorView, {
    setCurrentView: setView
  }));
}