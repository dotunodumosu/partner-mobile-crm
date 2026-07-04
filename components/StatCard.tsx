import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  colorClass?: string;
  description?: string;
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend, colorClass = "text-brand-600", description, onClick }) => {
  // Extract color name (e.g., 'brand', 'accent', 'danger') to use lighter shade for background
  const colorName = colorClass.split('-')[1] || 'brand';
  const bgClass = `bg-${colorName}-50`;

  return (
  <div
    onClick={onClick}
    className={`bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between transition-all duration-200 ${
      onClick ? "cursor-pointer hover:shadow-lg hover:border-brand-300" : ""
    }`}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>

      <div className={`p-2 rounded-full ${bgClass}`}>
        <Icon className={`w-5 h-5 ${colorClass}`} />
      </div>
    </div>

    <div className="mt-4">
      <div className="text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>

      {description && (
        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      )}

      {trend && (
        <p className="mt-2 text-sm font-medium text-danger-600">
          {trend}
        </p>
      )}
    </div>
  </div>
  );
};