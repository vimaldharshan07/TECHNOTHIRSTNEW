import { Zap, Users, Award, Rocket } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation Hub',
      description: 'Showcasing cutting-edge projects and breakthrough research from talented students.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Bringing together brilliant minds from 11 departments to share knowledge and ideas.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Celebrating academic excellence and recognizing outstanding achievements.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Future Ready',
      description: 'Preparing students for tomorrow\'s challenges with today\'s innovative solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            <span className="gradient-accent bg-clip-text text-transparent">
              About TECHNOTHRIST
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            TECHNOTHRIST is the flagship symposium of A.V.C College of Engineering, where innovation meets inspiration. 
            It's a platform that celebrates the technological prowess and creative genius of our students, fostering 
            an environment of learning, collaboration, and breakthrough discoveries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass rounded-2xl p-6 text-center hover:glow-accent transition-smooth hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-accent mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Join the Innovation Revolution
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Be part of something extraordinary. Experience the future of technology, connect with like-minded innovators, 
            and witness groundbreaking projects that will shape tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass px-8 py-4 rounded-full text-white font-semibold hover:glow-primary transition-smooth hover:scale-105">
              Register Now
            </button>
            <button className="glass-dark px-8 py-4 rounded-full text-white font-semibold hover:glow-secondary transition-smooth hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};