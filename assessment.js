const { useState, useEffect } = React;

// Simple icon components to replace Lucide
const ChevronRight = () => React.createElement('span', null, '→');
const ChevronLeft = () => React.createElement('span', null, '←');
const Brain = () => React.createElement('span', null, '🧠');
const Users = () => React.createElement('span', null, '👥');
const TrendingUp = () => React.createElement('span', null, '📈');
const Heart = () => React.createElement('span', null, '❤️');
const BarChart3 = () => React.createElement('span', null, '📊');

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
      icon: React.createElement(Brain),
    },
    {
      title: "Organisational Culture", 
      subtitle: "How ready is your organisation to embrace deep transformation?",
      icon: React.createElement(Users),
    },
    {
      title: "Change Implementation",
      subtitle: "How do you navigate and sustain transformational change?",
      icon: React.createElement(TrendingUp),
    }
  ];

  const questions = [
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
      icon: React.createElement(Heart),
      description: "You prioritise stability and proven approaches, leading with care and consistency. Your strength lies in maintaining organisational continuity, but you may find deep transformation challenging when it requires significant cultural shifts.",
      opportunity: "Develop comfort with uncertainty and learn to see change as an opportunity for growth rather than a threat to stability. Your steady foundation can become the platform for profound transformation.",
      nextStep: "Start with small experimental changes that build confidence in your organisation's ability to adapt while maintaining your values and core strengths."
    },
    optimiser: {
      name: "The Progressive Builder",
      icon: React.createElement(BarChart3),
      description: "You balance operational excellence with openness to change, creating steady progress while maintaining performance. You're building transformation readiness but may need to go deeper into cultural and emotional aspects of change.",
      opportunity: "Accelerate transformation by addressing not just what changes, but how people experience and integrate change. Your systematic approach can become more powerful when combined with emotional intelligence.",
      nextStep: "Develop a deeper understanding of the human dynamics that either support or sabotage change, and integrate this into your change management approach."
    },
    architect: {
      name: "The Transformation Leader",
      icon: React.createElement(Users),
      description: "You understand that lasting change requires shifts in culture, mindset, and relationships. You're building organisations that can adapt and thrive through complexity, viewing challenges as opportunities for growth.",
      opportunity: "Scale your transformation approach by developing other leaders who can carry this work forward. Your insights need to spread throughout the organisation to create lasting change.",
      nextStep: "Create systematic ways to develop transformation capability in others, building a network of leaders who can sustain and expand the cultural changes you're initiating."
    },
    visionary: {
      name: "The Change Catalyst",
      icon: React.createElement(Brain),
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
    
    // Auto-scroll to insight when it appears
    setTimeout(() => {
      const insightElement = document.querySelector('.insight-block');
      if (insightElement) {
        insightElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }, 100);
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

  const styles = {
    container: {
      fontFamily: 'Lato, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdf4 100%)',
      padding: '0.5rem'
    },
    maxWidth: {
      maxWidth: '56rem',
      margin: '0 auto'
    },
    gradient: {
      background: 'linear-gradient(to right, #01170E, #53645C)',
      borderRadius: '0.75rem',
      padding: '1rem',
      color: 'white',
      marginBottom: '1rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '1.5rem',
      marginBottom: '1rem'
    },
    slider: {
      width: '100%',
      height: '12px',
      borderRadius: '6px',
      background: 'linear-gradient(to right, #01170E, #53645C)',
      outline: 'none',
      cursor: 'pointer'
    },
    button: {
      background: 'linear-gradient(to right, #01170E, #53645C)',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'all 0.2s'
    },
    link: {
      background: 'linear-gradient(to right, #01170E, #53645C)',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      fontWeight: '500',
      display: 'inline-block',
      transition: 'all 0.2s'
    }
  };

  if (showResults && archetype) {
    const archetypeData = archetypes[archetype];
    return React.createElement('div', { style: styles.container },
      React.createElement('div', { style: styles.maxWidth },
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '2rem' } },
          React.createElement('h1', { style: { fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' } }, 'Your Strategic Assessment Results'),
          React.createElement('p', { style: { color: '#6b7280' } }, 'Discover your unique position in the workplace wellbeing landscape')
        ),
        React.createElement('div', { style: styles.card },
          React.createElement('div', { style: {...styles.gradient, textAlign: 'center', marginBottom: '1.5rem'} },
            React.createElement('div', { style: { display: 'flex', justifyContent: 'center', marginBottom: '1rem', fontSize: '2rem' } }, archetypeData.icon),
            React.createElement('h2', { style: { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' } }, archetypeData.name)
          ),
          React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '1.5rem' } },
            React.createElement('div', null,
              React.createElement('h3', { style: { fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' } }, 'Your Profile'),
              React.createElement('p', { style: { color: '#6b7280', lineHeight: '1.625' } }, archetypeData.description)
            ),
            React.createElement('div', null,
              React.createElement('h3', { style: { fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' } }, 'Primary Opportunity'),
              React.createElement('p', { style: { color: '#6b7280', lineHeight: '1.625' } }, archetypeData.opportunity)
            ),
            React.createElement('div', null,
              React.createElement('h3', { style: { fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' } }, 'Recommended Next Step'),
              React.createElement('p', { style: { color: '#6b7280', lineHeight: '1.625' } }, archetypeData.nextStep)
            )
          )
        ),
        React.createElement('div', { style: styles.card },
          React.createElement('h3', { style: { fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' } }, 'Understanding Your Transformation Readiness'),
          React.createElement('div', { style: { color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '1rem' } },
            React.createElement('p', null, 'This assessment reveals where you and your organisation currently stand in your readiness for meaningful, lasting transformation.'),
            React.createElement('p', null, 'True organizational transformation isn\'t just about changing processes or structures—it\'s about evolving the culture, mindset, and relationships that drive everything your organization does.'),
            React.createElement('div', { style: { background: 'linear-gradient(to right, #f9fafb, #f0fdf4)', borderRadius: '0.5rem', padding: '1.5rem', marginTop: '1.5rem' } },
              React.createElement('h4', { style: { fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' } }, 'Ready to accelerate your transformation journey?'),
              React.createElement('p', { style: { color: '#6b7280', marginBottom: '1rem' } }, 'Book a confidential leadership consultation to explore how to build deeper transformation readiness and create lasting change in your organisation.'),
              React.createElement('a', { 
                href: "https://therapeuticinsights.co.uk/#contact",
                target: "_parent",
                style: styles.link
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

  return React.createElement('div', { style: styles.container },
    React.createElement('div', { style: styles.maxWidth },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: '2rem' } },
        React.createElement('h1', { style: { fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' } }, 'Leadership Transformation Readiness Assessment'),
        React.createElement('p', { style: { color: '#6b7280' } }, 'Evaluate your organisation\'s readiness for meaningful change and sustainable growth')
      ),
      React.createElement('div', { style: { marginBottom: '2rem' } },
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' } },
          React.createElement('span', null, `Question ${getCurrentQuestionIndex() + 1} of ${getTotalQuestions()}`),
          React.createElement('span', null, `${Math.round(getProgress())}% Complete`)
        ),
        React.createElement('div', { style: { width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '0.5rem' } },
          React.createElement('div', { 
            style: { 
              height: '0.5rem', 
              borderRadius: '9999px', 
              transition: 'all 0.3s',
              width: `${getProgress()}%`,
              background: 'linear-gradient(to right, #01170E, #53645C)'
            }
          })
        )
      ),
      React.createElement('div', { style: {...styles.gradient, display: 'flex', flexDirection: 'column'} },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', marginBottom: '0.5rem' } },
          sections[currentSection].icon,
          React.createElement('span', { style: { marginLeft: '0.5rem', fontWeight: '500' } }, `Section ${currentSection + 1} of 3`)
        ),
        React.createElement('h2', { style: { fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' } }, sections[currentSection].title),
        React.createElement('p', { style: { opacity: '0.9' } }, sections[currentSection].subtitle)
      ),
      React.createElement('div', { style: styles.card },
        React.createElement('h3', { style: { fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem', textAlign: 'center' } }, questionData.question),
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', padding: '0 1rem' } },
          React.createElement('div', { style: { textAlign: 'left', maxWidth: '45%' } },
            React.createElement('div', { style: { fontWeight: '600', marginBottom: '0.25rem', color: '#01170E' } }, questionData.leftLabel),
            React.createElement('div', { style: { fontSize: '0.875rem', color: '#6b7280' } }, questionData.leftDesc)
          ),
          React.createElement('div', { style: { textAlign: 'right', maxWidth: '45%' } },
            React.createElement('div', { style: { fontWeight: '600', marginBottom: '0.25rem', color: '#53645C' } }, questionData.rightLabel),
            React.createElement('div', { style: { fontSize: '0.875rem', color: '#6b7280' } }, questionData.rightDesc)
          )
        ),
        React.createElement('div', { style: { marginBottom: '1.5rem' } },
          React.createElement('input', {
            type: "range",
            min: "0",
            max: "100",
            value: currentValue,
            onChange: (e) => handleSliderChange(questionIndex, e.target.value),
            style: styles.slider
          })
        ),
        responses[questionIndex] && React.createElement('div', { 
          className: 'insight-block',
          style: { background: 'linear-gradient(to right, #fffbeb, #fed7aa)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem' } 
        },
          React.createElement('h4', { style: { fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' } }, 'Strategic Insight'),
          React.createElement('p', { style: { color: '#374151', fontSize: '0.875rem', lineHeight: '1.625' } }, questionData.insight)
        ),
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between' } },
          React.createElement('button', {
            onClick: prevQuestion,
            disabled: currentSection === 0 && currentQuestion === 0,
            style: { 
              display: 'flex', 
              alignItems: 'center', 
              padding: '0.5rem 1rem', 
              color: '#6b7280', 
              backgroundColor: 'transparent',
              border: 'none',
              cursor: currentSection === 0 && currentQuestion === 0 ? 'not-allowed' : 'pointer',
              opacity: currentSection === 0 && currentQuestion === 0 ? 0.5 : 1
            }
          },
            React.createElement(ChevronLeft),
            ' Previous'
          ),
          React.createElement('button', {
            onClick: nextQuestion,
            style: {...styles.button, display: 'flex', alignItems: 'center'}
          },
            currentSection === sections.length - 1 && currentQuestion === questions.filter(q => q.section === currentSection).length - 1 ? 'View Results' : 'Next',
            ' ', React.createElement(ChevronRight)
          )
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(TherapeuticInsightsAssessment), document.getElementById('root'));
