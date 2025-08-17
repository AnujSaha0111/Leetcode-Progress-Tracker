import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Overall Chart Skeleton */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-pulse">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-300 rounded-full"></div>
          </div>
          <div className="space-y-4">
            <div className="h-16 bg-gray-300 rounded-xl"></div>
            <div className="h-16 bg-gray-300 rounded-xl"></div>
            <div className="h-16 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Difficulty Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-20 mb-4"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
              <div className="text-right">
                <div className="h-8 bg-gray-300 rounded w-16 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Stats Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-32 mb-6"></div>
          <div className="h-48 bg-gray-300 rounded"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-32 mb-6"></div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-300 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Problems Skeleton */}
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-48 mb-6"></div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 bg-gray-300 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;