import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';

interface RecentProblemsListProps {
  problems: Array<{
    id: string;
    title: string;
    titleSlug: string;
    date: string;
  }>;
}

const RecentProblemsList: React.FC<RecentProblemsListProps> = ({ problems }) => {
  const getDifficultyColor = (index: number) => {
    const colors = ['text-green-600', 'text-orange-600', 'text-red-600'];
    return colors[index % 3];
  };

  const getDifficultyBg = (index: number) => {
    const backgrounds = ['bg-green-50', 'bg-orange-50', 'bg-red-50'];
    return backgrounds[index % 3];
  };

  const getDifficultyName = (index: number) => {
    const difficulties = ['Easy', 'Medium', 'Hard'];
    return difficulties[index % 3];
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover fade-in">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-6 h-6 text-indigo-600" />
        <h3 className="text-xl font-bold text-gray-900">Recent Solved Problems</h3>
      </div>

      {problems.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Clock className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No recent submissions found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-indigo-200 hover:bg-gray-50 transition-all group"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(index)} ${getDifficultyBg(index)}`}>
                    {getDifficultyName(index)}
                  </span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-500">Solved on {problem.date}</p>
              </div>
              
              <a
                href={`https://leetcode.com/problems/${problem.titleSlug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">View</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentProblemsList;