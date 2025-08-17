import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface DifficultyCardProps {
  difficulty: string;
  data: {
    solved: number;
    total: number;
    submissions: number;
  };
}

const DifficultyCard: React.FC<DifficultyCardProps> = ({ difficulty, data }) => {
  const percentage = data.total > 0 ? (data.solved / data.total) * 100 : 0;
  const acceptanceRate = data.submissions > 0 ? (data.solved / data.submissions) * 100 : 0;

  const getColorScheme = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'easy':
        return {
          bg: 'from-green-50 to-emerald-50',
          border: 'border-green-200',
          text: 'text-green-700',
          path: '#10b981',
          icon: '🟢'
        };
      case 'medium':
        return {
          bg: 'from-orange-50 to-amber-50',
          border: 'border-orange-200',
          text: 'text-orange-700',
          path: '#f59e0b',
          icon: '🟡'
        };
      case 'hard':
        return {
          bg: 'from-red-50 to-pink-50',
          border: 'border-red-200',
          text: 'text-red-700',
          path: '#ef4444',
          icon: '🔴'
        };
      default:
        return {
          bg: 'from-gray-50 to-slate-50',
          border: 'border-gray-200',
          text: 'text-gray-700',
          path: '#6b7280',
          icon: '⚫'
        };
    }
  };

  const colors = getColorScheme(difficulty);

  return (
    <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl shadow-lg p-6 border ${colors.border} card-hover fade-in`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{colors.icon}</span>
          <h3 className={`text-xl font-bold ${colors.text}`}>{difficulty}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="w-20 h-20">
          <CircularProgressbar
            value={percentage}
            text={`${percentage.toFixed(0)}%`}
            styles={buildStyles({
              textColor: colors.path,
              pathColor: colors.path,
              trailColor: '#e5e7eb',
              textSize: '20px',
              pathTransitionDuration: 1.5,
            })}
          />
        </div>

        <div className="text-right">
          <div className={`text-3xl font-bold ${colors.text} mb-1`}>
            {data.solved}
          </div>
          <div className="text-sm text-gray-600">
            of {data.total} solved
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Acceptance Rate</span>
          <span className={`font-semibold ${colors.text}`}>
            {acceptanceRate.toFixed(1)}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-1000`}
            style={{
              width: `${acceptanceRate}%`,
              backgroundColor: colors.path
            }}
          ></div>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>Total Submissions: {data.submissions}</span>
        </div>
      </div>
    </div>
  );
};

export default DifficultyCard;