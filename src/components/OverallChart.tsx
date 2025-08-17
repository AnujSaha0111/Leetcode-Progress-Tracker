import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Trophy, Target, TrendingUp } from 'lucide-react';

interface OverallChartProps {
  data: {
    totalSolved: number;
    totalQuestions: number;
    completionRate: string;
  };
  username: string;
  avatar?: string;
}

const OverallChart: React.FC<OverallChartProps> = ({ data, username, avatar }) => {
  const percentage = parseFloat(data.completionRate);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {avatar ? (
            <img src={avatar} alt={username} className="w-12 h-12 rounded-full" />
          ) : (
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-indigo-600" />
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{username}</h2>
            <p className="text-gray-600">Overall Progress</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <div className="w-48 h-48">
            <CircularProgressbar
              value={percentage}
              text={`${data.completionRate}%`}
              styles={buildStyles({
                textColor: '#1f2937',
                pathColor: '#4f46e5',
                trailColor: '#e5e7eb',
                textSize: '16px',
                pathTransitionDuration: 1.5,
              })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 font-medium">Problems Solved</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">{data.totalSolved}</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Total Available</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">{data.totalQuestions}</span>
          </div>

          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
            <div className="text-center">
              <p className="text-sm text-indigo-600 font-medium">Completion Rate</p>
              <p className="text-3xl font-bold text-indigo-700">{data.completionRate}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallChart;