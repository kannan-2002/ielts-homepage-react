import { Star, Quote, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    
    {
      name: 'Marcus Johnson',
      role: 'Business Analyst',
      university: 'Canada Immigration',
      band: '8.5',
      text: 'Working full-time made preparation challenging, but the flexible schedule and mobile practice app were perfect. The mock tests felt exactly like the real exam. Highly recommend for busy professionals.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Masters Student',
      university: 'LSE London',
      band: '7.5',
      text: 'The personalized feedback on my speaking practice sessions was invaluable. I could see my progress week by week. The instructors genuinely care about your success and provide support beyond just lessons.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'James Rodriguez',
      role: 'Nurse',
      university: 'NMC Registration UK',
      band: '7.0',
      text: 'Needed this for my nursing registration. The healthcare-specific vocabulary sessions and OET-style practice made all the difference. Finally passed after two previous attempts with other institutes.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from <span className="gradient-text">Real Students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These are actual testimonials from students who achieved their target bands and transformed their futures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="card-feature relative group">
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary opacity-20" />
              
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.university}</p>
                </div>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {testimonial.band}
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary">15,000+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">8.2</div>
              <div className="text-sm text-muted-foreground">Avg Band Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">First Attempt Pass</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;