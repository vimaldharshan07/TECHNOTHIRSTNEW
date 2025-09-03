import { DepartmentCard } from './DepartmentCard';

const departments = [
  {
    name: 'CSE',
    fullName: 'Computer Science & Engineering',
    description: 'Exploring algorithms, AI, machine learning, and cutting-edge software development.',
    color: 'linear-gradient(135deg, #60A5FA, #A78BFA)',
    icon: '💻',
  },
  {
    name: 'IT',
    fullName: 'Information Technology',
    description: 'Bridging technology and business with innovative IT solutions and systems.',
    color: 'linear-gradient(135deg, #34D399, #60A5FA)',
    icon: '🌐',
  },
  {
    name: 'AIDS',
    fullName: 'Artificial Intelligence & Data Science',
    description: 'Harnessing the power of AI and big data to solve complex problems.',
    color: 'linear-gradient(135deg, #F472B6, #A78BFA)',
    icon: '🤖',
  },
  {
    name: 'ECE',
    fullName: 'Electronics & Communication Engineering',
    description: 'Innovating in electronics, telecommunications, and embedded systems.',
    color: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
    icon: '📡',
  },
  {
    name: 'EEE',
    fullName: 'Electrical & Electronics Engineering',
    description: 'Powering the future with electrical systems and renewable energy.',
    color: 'linear-gradient(135deg, #EF4444, #F97316)',
    icon: '⚡',
  },
  {
    name: 'MECH',
    fullName: 'Mechanical Engineering',
    description: 'Engineering mechanical systems, robotics, and manufacturing innovation.',
    color: 'linear-gradient(135deg, #6B7280, #9CA3AF)',
    icon: '⚙️',
  },
  {
    name: 'MBA',
    fullName: 'Master of Business Administration',
    description: 'Developing future leaders with strategic business and management skills.',
    color: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    icon: '💼',
  },
  {
    name: 'MCA',
    fullName: 'Master of Computer Applications',
    description: 'Advanced computing applications and software engineering excellence.',
    color: 'linear-gradient(135deg, #06B6D4, #0891B2)',
    icon: '🖥️',
  },
  {
    name: 'CIVIL',
    fullName: 'Civil Engineering',
    description: 'Building sustainable infrastructure and smart cities for tomorrow.',
    color: 'linear-gradient(135deg, #10B981, #059669)',
    icon: '🏗️',
  },
  {
    name: 'CHEMICAL',
    fullName: 'Chemical Engineering',
    description: 'Transforming raw materials into useful products through chemical processes.',
    color: 'linear-gradient(135deg, #F59E0B, #D97706)',
    icon: '🧪',
  },
  {
    name: 'BIO-TECH',
    fullName: 'Biotechnology',
    description: 'Merging biology and technology to create revolutionary solutions.',
    color: 'linear-gradient(135deg, #22C55E, #16A34A)',
    icon: '🧬',
  },
];

export const DepartmentsSection = () => {
  return (
    <section id="departments" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            <span className="gradient-secondary bg-clip-text text-transparent">
              Departments
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover innovative projects and breakthrough research from all departments of A.V.C College of Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((department, index) => (
            <div 
              key={department.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DepartmentCard department={department} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};