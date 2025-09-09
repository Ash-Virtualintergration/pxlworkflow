import { DashboardHeader } from '@/components/DashboardHeader';
import { TaskCard } from '@/components/TaskCard';
import { StatCard } from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Users, TrendingUp, Calendar, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroWorkspace from '@/assets/hero-workspace.jpg';

const mockTasks = [
  {
    title: "Design System Implementation",
    description: "Create comprehensive design system with components and documentation",
    status: "in-progress" as const,
    priority: "high" as const,
    assignee: "Sarah Chen",
    dueDate: "Dec 15"
  },
  {
    title: "User Authentication Module",
    description: "Implement secure login system with email verification",
    status: "todo" as const,
    priority: "high" as const,
    assignee: "Alex Rodriguez",
    dueDate: "Dec 18"
  },
  {
    title: "Mobile App Optimization",
    description: "Optimize performance and UI for mobile devices",
    status: "completed" as const,
    priority: "medium" as const,
    assignee: "Jordan Kim",
    dueDate: "Dec 10"
  },
  {
    title: "API Documentation",
    description: "Complete REST API documentation with examples",
    status: "in-progress" as const,
    priority: "medium" as const,
    assignee: "Maya Patel",
    dueDate: "Dec 20"
  },
  {
    title: "Database Migration",
    description: "Migrate legacy data to new database structure",
    status: "todo" as const,
    priority: "low" as const,
    assignee: "Chris Johnson",
    dueDate: "Dec 25"
  },
  {
    title: "Testing Framework Setup",
    description: "Set up automated testing pipeline with coverage reports",
    status: "completed" as const,
    priority: "medium" as const,
    assignee: "Lisa Wong",
    dueDate: "Dec 8"
  }
];

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/projects');
  };

  const handleWatchDemo = () => {
    // TODO: Implement demo functionality
    console.log('Demo clicked');
  };

  const handleCreateProject = () => {
    navigate('/projects');
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <img 
          src={heroWorkspace} 
          alt="Modern workspace setup" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative container px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">PXL WorkFlow</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Streamline your team's productivity with our modern workflow management platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={handleWatchDemo}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <main className="container px-6 py-8">
        {/* Stats Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Active Tasks"
              value="24"
              change="+12% from last week"
              icon={Clock}
              trend="up"
            />
            <StatCard
              title="Completed"
              value="156"
              change="+8% from last week"
              icon={CheckCircle}
              trend="up"
            />
            <StatCard
              title="Team Members"
              value="12"
              change="2 new this month"
              icon={Users}
              trend="up"
            />
            <StatCard
              title="Productivity"
              value="94%"
              change="+5% from last week"
              icon={TrendingUp}
              trend="up"
            />
          </div>
        </section>

        {/* Task Management */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 sm:mb-0">Recent Tasks</h2>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert('Filter functionality coming soon!')}
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert('Date filter coming soon!')}
              >
                <Calendar className="h-4 w-4" />
                Due Date
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-12 p-8 rounded-xl bg-gradient-secondary border border-border/50">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Ready to boost your productivity?</h3>
            <p className="text-muted-foreground mb-6">Create your first project and start managing tasks efficiently</p>
            <Button 
              variant="workflow" 
              size="lg"
              onClick={handleCreateProject}
            >
              Create New Project
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;