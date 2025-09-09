import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate: string;
}

const statusColors = {
  "todo": "bg-muted text-muted-foreground",
  "in-progress": "bg-primary/10 text-primary border border-primary/20",
  "completed": "bg-green-100 text-green-700 border border-green-200"
};

const priorityColors = {
  "low": "border-l-green-500",
  "medium": "border-l-yellow-500", 
  "high": "border-l-red-500"
};

export const TaskCard = ({ title, description, status, priority, assignee, dueDate }: TaskCardProps) => {
  return (
    <div className={`p-4 rounded-lg bg-card shadow-card hover:shadow-lg transition-all duration-300 border-l-4 ${priorityColors[priority]} border border-border/50`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-card-foreground line-clamp-1">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status.replace("-", " ")}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{assignee}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{dueDate}</span>
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
          <Clock className="h-3 w-3 mr-1" />
          View
        </Button>
      </div>
    </div>
  );
};