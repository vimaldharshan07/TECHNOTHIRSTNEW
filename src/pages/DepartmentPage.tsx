import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Trophy } from 'lucide-react';

export const DepartmentPage = () => {
  const { department } = useParams<{ department: string }>();
  const navigate = useNavigate();

  const departmentData = {
    name: department?.toUpperCase() || 'DEPARTMENT',
    fullName: getDepartmentFullName(department || ''),
    description: 'Explore innovative projects, competitions, and events from this department.',
    color: getDepartmentColor(department || ''),
  };

  const events = [
    {
      title: 'Technical Paper Presentation',
      time: '10:00 AM - 12:00 PM',
      venue: 'Main Auditorium',
      participants: '50+ Teams',
      prize: '₹50,000',
    },
    {
      title: 'Project Exhibition',
      time: '2:00 PM - 5:00 PM',
      venue: 'Exhibition Hall',
      participants: '100+ Projects',
      prize: '₹75,000',
    },
    {
      title: 'Innovation Challenge',
      time: '9:00 AM - 6:00 PM',
      venue: 'Lab Complex',
      participants: '30+ Teams',
      prize: '₹1,00,000',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/')}
            className="glass px-6 py-3 rounded-full text-white font-semibold hover:glow-primary transition-smooth hover:scale-105 mb-8 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-glow">
              <span className="gradient-primary bg-clip-text text-transparent">
                {departmentData.name}
              </span>
            </h1>
            <p className="text-2xl text-accent font-semibold mb-4">
              {departmentData.fullName}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {departmentData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
              <span className="gradient-secondary bg-clip-text text-transparent">
                Events & Competitions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Participate in exciting events and showcase your skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={event.title}
                className="glass rounded-2xl p-6 hover:glow-accent transition-smooth hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm">{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-primary">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold">{event.prize}</span>
                  </div>
                </div>

                <button className="w-full glass-dark py-3 rounded-full text-white font-semibold hover:glow-primary transition-smooth">
                  Register Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="glass rounded-3xl p-8 inline-block">
              <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
                Ready to Participate?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join us for an unforgettable experience of innovation and competition
              </p>
              <button className="glass px-8 py-4 rounded-full text-white font-semibold hover:glow-primary transition-smooth hover:scale-105">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function getDepartmentFullName(dept: string): string {
  const names: Record<string, string> = {
    'cse': 'Computer Science & Engineering',
    'it': 'Information Technology',
    'aids': 'Artificial Intelligence & Data Science',
    'ece': 'Electronics & Communication Engineering',
    'eee': 'Electrical & Electronics Engineering',
    'mech': 'Mechanical Engineering',
    'mba': 'Master of Business Administration',
    'mca': 'Master of Computer Applications',
    'civil': 'Civil Engineering',
    'chemical': 'Chemical Engineering',
    'bio-tech': 'Biotechnology',
  };
  return names[dept] || 'Department';
}

function getDepartmentColor(dept: string): string {
  const colors: Record<string, string> = {
    'cse': 'linear-gradient(135deg, #60A5FA, #A78BFA)',
    'it': 'linear-gradient(135deg, #34D399, #60A5FA)',
    'aids': 'linear-gradient(135deg, #F472B6, #A78BFA)',
    'ece': 'linear-gradient(135deg, #FBBF24, #F59E0B)',
    'eee': 'linear-gradient(135deg, #EF4444, #F97316)',
    'mech': 'linear-gradient(135deg, #6B7280, #9CA3AF)',
    'mba': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    'mca': 'linear-gradient(135deg, #06B6D4, #0891B2)',
    'civil': 'linear-gradient(135deg, #10B981, #059669)',
    'chemical': 'linear-gradient(135deg, #F59E0B, #D97706)',
    'bio-tech': 'linear-gradient(135deg, #22C55E, #16A34A)',
  };
  return colors[dept] || 'linear-gradient(135deg, #60A5FA, #A78BFA)';
}