import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="text-center relative z-10 px-4">
        <div className="glass rounded-3xl p-12 max-w-md mx-auto">
          <div className="text-8xl mb-6">
            <span className="gradient-primary bg-clip-text text-transparent font-bold">
              404
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-foreground">
            Page Not Found
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/')}
              className="glass px-6 py-3 rounded-full text-white font-semibold hover:glow-primary transition-smooth hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </button>
            
            <button 
              onClick={() => navigate(-1)}
              className="glass-dark px-6 py-3 rounded-full text-white font-semibold hover:glow-secondary transition-smooth hover:scale-105 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
