import React from 'react';
import { Award, Calendar, Flame, Target } from 'lucide-react';

interface StatsTableProps {
  contest: {
    rating: number;
    globalRank: number;
    attendedContests: number;
    topPercentage: number;
  };
  streak: number;
  activity: {
    last7Days: number;
    last30Days: number;
  };
}

const StatsTable: React.FC<StatsTableProps> = ({ contest, streak, activity }) => {
  const stats = [
    {
      icon: Award,
      label: 'Contest Rating',
      value: contest.rating > 0 ? contest.rating.toString() : 'Not Participated',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Target,
      label: 'Global Rank',
      value: contest.globalRank > 0 ? `#${contest.globalRank.toLocaleString()}` : 'N/A',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Calendar,
      label: 'Contests Attended',
      value: contest.attendedContests.toString(),
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      icon: Flame,
      label: 'Current Streak',
      value: `${streak} days`,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover fade-in">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Stats</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bg} rounded-xl p-4 border border-gray-100`}>
            <div className="flex items-center space-x-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-indigo-50 rounded-xl">
            <p className="text-2xl font-bold text-indigo-600">{activity.last7Days}</p>
            <p className="text-sm text-gray-600">Last 7 Days</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <p className="text-2xl font-bold text-purple-600">{activity.last30Days}</p>
            <p className="text-sm text-gray-600">Last 30 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTable;