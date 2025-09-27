import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master IELTS with{' '}
              <span className="gradient-text">AI-Powered</span>{' '}
              Learning
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Achieve your target band score with personalized study plans, expert guidance, 
              and advanced AI technology. Join thousands of successful students worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-hero group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="btn-secondary group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8.5</div>
                <div className="text-sm text-muted-foreground">Average Band Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl transform rotate-3"></div>
              <img
                src={heroImage}
                alt="IELTS Students Learning"
                className="relative rounded-2xl shadow-large w-full h-auto transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-large border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Smart Assessment</div>
                    <div className="text-sm text-muted-foreground">Real-time feedback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;