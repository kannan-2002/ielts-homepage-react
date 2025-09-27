import { Mic, FileText, Brain, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'AI Speaking Practice',
      description: 'Practice speaking with our AI tutor that provides real-time feedback and pronunciation improvement tips.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Mock Tests',
      description: 'Take unlimited practice tests that simulate real IELTS conditions with detailed performance analytics.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Band Score Prediction',
      description: 'Get accurate band score predictions based on your performance with personalized improvement strategies.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Learn from certified IELTS instructors with years of experience and proven track records.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="courses" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">IELTS Academy</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with expert instruction 
            to deliver the most effective IELTS preparation experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-feature group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-hero">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;