import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

const trendColors = {
  up: "text-green-600",
  down: "text-red-600", 
  neutral: "text-muted-foreground"
};

export const StatCard = ({ title, value, change, icon: Icon, trend = "neutral" }: StatCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-card shadow-card hover:shadow-lg transition-all duration-300 border border-border/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-card-foreground mt-1">{value}</p>
          {change && (
            <p className={`text-xs mt-1 ${trendColors[trend]}`}>
              {change}
            </p>
          )}
        </div>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};