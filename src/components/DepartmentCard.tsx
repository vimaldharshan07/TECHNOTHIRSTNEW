import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface DepartmentCardProps {
  department: {
    name: string;
    fullName: string;
    description: string;
    color: string;
    icon: string;
  };
}

export const DepartmentCard = ({ department }: DepartmentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/department/${department.name.toLowerCase()}`);
  };

  return (
    <div
      className={`glass rounded-2xl p-6 cursor-pointer transition-smooth hover:scale-105 hover:glow-primary group ${
        isHovered ? 'transform rotate-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white"
          style={{ background: department.color }}
        >
          {department.icon}
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth group-hover:translate-x-1" />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
        {department.name}
      </h3>
      
      <p className="text-sm text-primary mb-3 font-medium">
        {department.fullName}
      </p>
      
      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-smooth">
        {department.description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-border/50">
        <span className="text-xs text-accent font-semibold tracking-wide">
          CLICK TO EXPLORE →
        </span>
      </div>
    </div>
  );
};