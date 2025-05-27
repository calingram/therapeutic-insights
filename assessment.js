const { useState, useEffect } = React;
const { ChevronRight, ChevronLeft, BarChart3, Users, TrendingUp, Brain, Heart, Target } = lucide;

const TherapeuticInsightsAssessment = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [archetype, setArchetype] = useState(null);

  const sections = [
    {
      title: "Leadership Mindset",
      subtitle: "How do you approach change and transformation as a leader?",
      icon: React.createElement(Brain, { className: "w-6 h-6" }),
      color: "custom-gradient"
    },
    {
      title: "Organisational Culture", 
      subtitle: "How ready is your organisation to embrace deep transformation?",
      icon: React.createElement(Users, { className: "w-6 h-6" }),
      color: "custom-gradient"
    },
    {
      title: "Change Implementation",
      subtitle: "How do you navigate and sustain transformational change?",
      icon: React.createElement(TrendingUp, { className: "w-6 h-6" }),
      color: "custom-gradient"
    }
  ];

  const questions = [
    // Section 1: Leadership Mindset
    {
      section: 0,
      question: "When facing organisational challenges, what's your instinctive response?",
      leftLabel: "Fix the Symptoms",
      leftDesc: "Address immediate problems with quick solutions and process changes",
      rightLabel: "Transform the System",
      rightDesc: "Examine underlying patterns and create fundamental shifts in how we operate",
      insight: "Leaders who focus on symptom-fixing spend 60% more time on recurring issues. Those who address systemic patterns see 45% fewer repeat problems and build more resilient organisations capable of sustainable change."
    },
    {
      section: 0,
      question: "How do you view your role in driving organisational change?",
      leftLabel: "Direction Setter",
      leftDesc: "I tell people what needs to change and expect them to implement it",
      rightLabel: "Culture Catalyst",
      rightDesc: "I model the change and create conditions for others to transform themselves",
      insight: "Directive change initiatives have a 30% success rate and often revert within 18 months. Leaders who act as culture catalysts achieve 67% sustainable transformation rates by creating internal motivation for change."
    },
    {
      section: 0,
      question: "When your team resists change, how do you typically respond?",
      leftLabel: "Overcome Resistance",
      leftDesc: "Use persuasion, incentives, or consequences to push through resistance",
      rightLabel: "Understand Resistance",
      rightDesc: "Explore the wisdom in resistance and address underlying concerns first",
      insight: "Pushing through resistance creates compliance but not commitment—85% of forced changes fail within two years. Leaders who explore resistance as valuable feedback achieve 3x higher buy-in and lasting transformation."
    },
    {
      section: 0,
      question: "What drives your decision-making in times of uncertainty?",
      leftLabel: "Data and Analysis",
      leftDesc: "Rely on metrics, benchmarks, and proven best practices from other organisations",
      rightLabel: "Intuition and Insight",
      rightDesc: "Combine data with emotional intelligence and deep understanding of people",
      insight: "Data-only decisions in complex human systems miss 70% of critical change factors. Leaders who integrate analytical and intuitive intelligence make decisions that are 40% more likely to succeed in transformational contexts."
    },
    // Section 2: Organisational Culture
    {
      section: 1,
      question: "How does your organisation typically handle difficult conversations?",
      leftLabel: "Avoid or Minimize",
      leftDesc: "Keep discussions polite and professional, avoid emotional or controversial topics",
      rightLabel: "Embrace and Explore",
      rightDesc: "Create safe spaces for honest dialogue about difficult issues and emotions",
      insight: "Organisations that avoid difficult conversations spend £47,000 per unresolved conflict in lost productivity and turnover. Those with healthy conflict cultures see 50% higher innovation rates and 35% better team performance."
    },
    {
      section: 1,
      question: "When someone makes a mistake, what's the typical organisational response?",
      leftLabel: "Accountability Focus",
      leftDesc: "Identify what went wrong, who's responsible, and how to prevent it happening again",
      rightLabel: "Learning Focus",
      rightDesc: "Explore what we can learn, how systems contributed, and how we grow stronger",
      insight: "Blame-focused cultures see 43% of employees hide mistakes, leading to bigger problems later. Learning-focused organisations have 67% higher psychological safety scores and catch potential issues 6 months earlier."
    },
    {
      section: 1,
      question: "How does your organisation view employee wellbeing and mental health?",
      leftLabel: "Support Service",
      leftDesc: "Provide resources like EAPs and wellness programs when people need help",
      rightLabel: "Cultural Foundation",
      rightDesc: "Integrate psychological safety and wellbeing into how we work every day",
      insight: "Organisations treating wellbeing as a service see average utilisation of 12% and limited impact. Those embedding it culturally achieve 78% engagement in wellbeing initiatives and 23% higher overall performance."
    },
    {
      section: 1,
      question: "How does your leadership team handle their own stress and challenges?",
      leftLabel: "Private Management",
      leftDesc: "Leaders handle their struggles privately and maintain strong public facades",
      rightLabel: "Vulnerable Leadership",
      rightDesc: "Leaders model healthy coping and openness about their own challenges",
      insight: "Leaders who hide their struggles create cultures where 67% of employees feel unable to be authentic at work. Vulnerable leadership increases team trust by 76% and reduces stress-related absence by 42%."
    },
    // Section 3: Change Implementation
    {
      section: 2,
      question: "How do you typically measure the success of organisational change?",
      leftLabel: "Performance Metrics",
      leftDesc: "KPIs, productivity measures, financial results, and operational efficiency",
      rightLabel: "Transformation Indicators",
      rightDesc: "Shifts in mindset, relationship quality, resilience, and cultural health",
      insight: "Performance-only measurement misses 80% of transformation success factors. Organisations tracking both performance and cultural transformation achieve 2.5x higher long-term success rates and avoid the 70% change failure rate."
    },
    {
      section: 2,
      question: "When implementing change, what's your primary timeline expectation?",
      leftLabel: "Quick Wins",
      leftDesc: "Focus on rapid results and visible improvements within 3-6 months",
      rightLabel: "Deep Transformation",
      rightDesc: "Allow 18-36 months for fundamental shifts in culture and mindset",
      insight: "Quick-win focused changes achieve initial results but 73% revert within two years. Deep transformation approaches take longer initially but create lasting change that compounds—delivering 400% greater ROI over five years."
    },
    {
      section: 2,
      question: "How do you sustain change momentum when initial enthusiasm wanes?",
      leftLabel: "Renewed Push",
      leftDesc: "Re-energize with new communications, incentives, or leadership pressure",
      rightLabel: "Embedded Integration",
      rightDesc: "Make change part of daily practices, systems, and how people naturally work",
      insight: "Push-based sustainability requires constant energy and fails when pressure reduces. Embedded integration creates self-sustaining change—organisations using this approach maintain 85% of transformation gains after three years."
    },
    {
      section: 2,
      question: "What's your approach to developing change capability in others?",
      leftLabel: "Skill Training",
      leftDesc: "Provide training programs, workshops, and tools for managing change",
      rightLabel: "Capacity Building",
      rightDesc: "Develop people's inner resilience, adaptability, and transformational mindset",
      insight: "Skills training alone has 23% retention after six months. Capacity building that develops inner resources creates 67% sustained behaviour change and builds organisational resilience that supports future transformations."
    }
  ];

  const archetypes = {
    traditionalist: {
      name: "The Steady Steward",
      icon: React.createElement(Heart, { className: "w-8 h-8" }),
      color: "custom-gradient",
      description: "You prioritise stability and proven approaches, leading with care and consistency. Your strength lies in maintaining organisational continuity, but you may find deep transformation challenging when it requires significant cultural shifts.",
      opportunity: "Develop comfort with uncertainty and learn to see change as an opportunity for growth rather than a threat to stability. Your steady foundation can become the platform for profound transformation.",
      nextStep: "Start with small experimental changes that build confidence in your organisation's ability to adapt while maintaining your values and core strengths."
    },
    optimiser: {
      name: "The Progressive Builder",
      icon: React.createElement(BarChart3, { className: "w-8 h-8" }),
      color: "custom-gradient",
      description: "You balance operational excellence with openness to change, creating steady progress while maintaining performance. You're building transformation readiness but may need to go deeper into cultural and emotional aspects of change.",
      opportunity: "Accelerate transformation by addressing not just what changes, but how people experience and integrate change. Your systematic approach can become more powerful when combined with emotional intelligence.",
      nextStep: "Develop a deeper understanding of the human dynamics that either support or sabotage change, and integrate this into your change management approach."
    },
    architect: {
      name: "The Transformation Leader",
      icon: React.createElement(Users, { className: "w-8 h-8" }),
      color: "custom-gradient",
      description: "You understand that lasting change requires shifts in culture, mindset, and relationships. You're building organisations that can adapt and thrive through complexity, viewing challenges as opportunities for growth.",
      opportunity: "Scale your transformation approach by developing other leaders who can carry this work forward. Your insights need to spread throughout the organisation to create lasting change.",
      nextStep: "Create systematic ways to develop transformation capability in others, building a network of leaders who can sustain and expand the cultural changes you're initiating."
    },
    visionary: {
      name: "The Change Catalyst",
      icon: React.createElement(Brain, { className: "w-8 h-8" }),
      color: "custom-gradient",
      description: "You lead transformation from the inside out, understanding that sustainable change requires inner work as much as outer systems change. You create environments where people can grow into their highest potential whilst achieving business results.",
      opportunity: "Leverage your transformation mastery to influence broader organisational and industry change. Your approach can become a model for how business can be a force for human flourishing.",
      nextStep: "Document and share your transformation methodology to influence other leaders and organisations. Consider how your approach could reshape entire industries or sectors."
    }
  };

  const calculateArchetype = () => {
    const scores = { traditionalist: 0, optimiser: 0, architect: 0, visionary: 0 };
    
    Object.entries(responses).forEach(([questionIndex, value]) => {
      const score = parseInt(value);
      if (score <= 25) scores.traditionalist += 2;
      else if (score <= 50) scores.optimiser += 2;
      else if (score <= 75) scores.architect += 2;
      else scores.visionary += 2;
    });

    const maxScore = Math.max(...Object.values(scores));
    const result = Object.keys(scores).find(key => scores[key] === maxScore);
    return result;
  };

  const handleSliderChange = (questionIndex, value) => {
    setResponses(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const nextQuestion = () => {
    const totalQuestions = questions.filter(q => q.section === currentSection).length;
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      setCurrentQuestion(0);
    } else {
      const calculatedArchetype = calculateArchetype();
      setArchetype(calculatedArchetype);
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setCurrentQuestion(questions.filter(q => q.section === currentSection - 1).length - 1);
    }
  };

  const getCurrentQuestionData = () => {
    return questions.filter(q => q.section === currentSection)[currentQuestion];
  };

  const getCurrentQuestionIndex = () => {
    let index = 0;
    for (let i = 0; i < currentSection; i++) {
      index += questions.filter(q => q.section === i).length;
    }
    return index + currentQuestion;
  };

  const getTotalQuestions = () => questions.length;
  const getProgress = () => ((getCurrentQuestionIndex() + 1) / getTotalQuestions()) * 100;

  if (showResults && archetype) {
    const archetypeData = archetypes[archetype];
    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-slate-50 to-green-50 p-4", style: { fontFamily: 'Lato, sans-serif' } },
      React.createElement('div', { className: "max-w-4xl mx-auto" },
        React.createElement('div', { className: "text-center mb-8" },
          React.createElement('h1', { className: "text-3xl font-bold text-gray-800 mb-2" }, 'Your Strategic Assessment Results'),
          React.createElement('p', { className: "text-gray-600" }, 'Discover your unique position in the workplace wellbeing landscape')
        ),
        React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-8 mb-8" },
          React.createElement('div', { className: "rounded-xl p-6 text-white text-center mb-6", style: { background: 'linear-gradient(to right, #01170E, #53645C)' } },
            React.createElement('div', { className: "flex justify-center mb-4" }, archetypeData.icon),
            React.createElement('h2', { className: "text-2xl font-bold mb-2" }, archetypeData.name)
          ),
          React.createElement('div', { className: "space-y-6" },
            React.createElement('div', null,
              React.createElement('h3', { className: "text-lg font-semibold text-gray-800 mb-3" }, 'Your Profile'),
              React.createElement('p', { className: "text-gray-600 leading-relaxed" }, archetypeData.description)
            ),
            React.createElement('div', null,
              React.createElement('h3', { className: "text-lg font-semibold text-gray-800 mb-3" }, 'Primary Opportunity'),
              React.createElement('p', { className: "text-gray-600 leading-relaxed" }, archetypeData.opportunity)
            ),
            React.createElement('div', null,
              React.createElement('h3', { className: "text-lg font-semibold text-gray-800 mb-3" }, 'Recommended Next Step'),
              React.createElement('p', { className: "text-gray-600 leading-relaxed" }, archetypeData.nextStep)
            )
          )
        ),
        React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-8" },
          React.createElement('h3', { className: "text-xl font-bold text-gray-800 mb-4" }, 'Understanding Your Transformation Readiness'),
          React.createElement('div', { className: "text-gray-600 space-y-4" },
            React.createElement('p', null, 'This assessment reveals where you and your organisation currently stand in your readiness for meaningful, lasting transformation.'),
            React.createElement('p', null, 'True organizational transformation isn\'t just about changing processes or structures—it\'s about evolving the culture, mindset, and relationships that drive everything your organization does.'),
            React.createElement('div', { className: "bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-6 mt-6" },
              React.createElement('h4', { className: "font-semibold text-gray-800 mb-3" }, 'Ready to accelerate your transformation journey?'),
              React.createElement('p', { className: "text-gray-600 mb-4" }, 'Book a confidential leadership consultation to explore how to build deeper transformation readiness and create lasting change in your organisation.'),
              React.createElement('a', { 
                href: "https://therapeuticinsights.co.uk/#contact",
                target: "_parent",
                className: "inline-block text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200",
                style: { background: 'linear-gradient(to right, #01170E, #53645C)', textDecoration: 'none' }
              }, 'Book Your Leadership Consultation')
            )
          )
        )
      )
    );
  }

  const questionData = getCurrentQuestionData();
  const questionIndex = getCurrentQuestionIndex();
  const currentValue = responses[questionIndex] || 50;

  return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-slate-50 to-green-50 p-4", style: { fontFamily: 'Lato, sans-serif' } },
    React.createElement('div', { className: "max-w-4xl mx-auto" },
      React.createElement('div', { className: "text-center mb-8" },
        React.createElement('h1', { className: "text-3xl font-bold text-gray-800 mb-2" }, 'Leadership Transformation Readiness Assessment'),
        React.createElement('p', { className: "text-gray-600" }, 'Evaluate your organisation\'s readiness for meaningful change and sustainable growth')
      ),
      React.createElement('div', { className: "mb-8" },
        React.createElement('div', { className: "flex justify-between text-sm text-gray-600 mb-2" },
          React.createElement('span', null, `Question ${getCurrentQuestionIndex() + 1} of ${getTotalQuestions()}`),
          React.createElement('span', null, `${Math.round(getProgress())}% Complete`)
        ),
        React.createElement('div', { className: "w-full bg-gray-200 rounded-full h-2" },
          React.createElement('div', { 
            className: "h-2 rounded-full transition-all duration-300",
            style: { width: `${getProgress()}%`, background: 'linear-gradient(to right, #01170E, #53645C)' }
          })
        )
      ),
      React.createElement('div', { className: "rounded-xl p-6 text-white mb-8", style: { background: 'linear-gradient(to right, #01170E, #53645C)' } },
        React.createElement('div', { className: "flex items-center mb-2" },
          sections[currentSection].icon,
          React.createElement('span', { className: "ml-2 font-medium" }, `Section ${currentSection + 1} of 3`)
        ),
        React.createElement('h2', { className: "text-xl font-bold mb-1" }, sections[currentSection].title),
        React.createElement('p', { className: "text-white/90" }, sections[currentSection].subtitle)
      ),
      React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-8 mb-8" },
        React.createElement('h3', { className: "text-xl font-semibold text-gray-800 mb-8 text-center" }, questionData.question),
        React.createElement('div', { className: "flex justify-between mb-8 px-8" },
          React.createElement('div', { className: "text-left", style: { maxWidth: '45%' } },
            React.createElement('div', { className: "font-semibold mb-1", style: { color: '#01170E' } }, questionData.leftLabel),
            React.createElement('div', { className: "text-sm text-gray-600" }, questionData.leftDesc)
          ),
          React.createElement('div', { className: "text-right", style: { maxWidth: '45%' } },
            React.createElement('div', { className: "font-semibold mb-1", style: { color: '#53645C' } }, questionData.rightLabel),
            React.createElement('div', { className: "text-sm text-gray-600" }, questionData.rightDesc)
          )
        ),
        React.createElement('div', { className: "mb-8" },
          React.createElement('input', {
            type: "range",
            min: "0",
            max: "100",
            value: currentValue,
            onChange: (e) => handleSliderChange(questionIndex, e.target.value),
            className: "w-full h-3 rounded-lg appearance-none cursor-pointer",
            style: { background: 'linear-gradient(to right, #01170E 0%, #53645C 100%)' }
          })
        ),
        responses[questionIndex] && React.createElement('div', { className: "bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-8" },
          React.createElement('h4', { className: "font-semibold text-gray-800 mb-2" }, 'Strategic Insight'),
          React.createElement('p', { className: "text-gray-700 text-sm leading-relaxed" }, questionData.insight)
        ),
        React.createElement('div', { className: "flex justify-between" },
          React.createElement('button', {
            onClick: prevQuestion,
            disabled: currentSection === 0 && currentQuestion === 0,
            className: "flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          },
            React.createElement(ChevronLeft, { className: "w-4 h-4 mr-1" }),
            'Previous'
          ),
          React.createElement('button', {
            onClick: nextQuestion,
            className: "flex items-center px-6 py-3 text-white rounded-lg hover:shadow-lg transition-all duration-200",
            style: { background: 'linear-gradient(to right, #01170E, #53645C)' }
          },
            currentSection === sections.length - 1 && currentQuestion === questions.filter(q => q.section === currentSection).length - 1 ? 'View Results' : 'Next',
            React.createElement(ChevronRight, { className: "w-4 h-4 ml-1" })
          )
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(TherapeuticInsightsAssessment), document.getElementById('root'));
