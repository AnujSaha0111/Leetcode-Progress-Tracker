import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import OverallChart from './components/OverallChart';
import DifficultyCard from './components/DifficultyCard';
import StatsTable from './components/StatsTable';
import ActivityChart from './components/ActivityChart';
import RecentProblemsList from './components/RecentProblemsList';
import LoadingSkeleton from './components/LoadingSkeleton';
import { AlertCircle, Github, Star } from 'lucide-react';

interface UserData {
  username: string;
  profile: {
    realName: string;
    avatar: string;
  };
  overall: {
    totalSolved: number;
    totalQuestions: number;
    completionRate: string;
  };
  difficulty: {
    [key: string]: {
      solved: number;
      total: number;
      submissions: number;
    };
  };
  contest: {
    rating: number;
    globalRank: number;
    attendedContests: number;
    topPercentage: number;
  };
  activity: {
    last7Days: number;
    last30Days: number;
    chartData: Array<{
      date: string;
      submissions: number;
    }>;
  };
  recentProblems: Array<{
    id: string;
    title: string;
    titleSlug: string;
    date: string;
  }>;
  topTags: Array<{
    name: string;
    count: number;
  }>;
  streak: number;
  totalSubmissions: number;
}

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await axios.get(`http://localhost:3001/api/user/${username}`);
      setUserData(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.error || 
        'Failed to fetch user data. Please check the username and try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LeetCode Progress Tracker
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Track your coding journey and analyze your LeetCode performance
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-1 text-yellow-600">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm">Production Ready</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-600">
              <Github className="w-4 h-4" />
              <span className="text-sm">Open Source</span>
            </div>
          </div>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-red-800 font-medium">Error</h3>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {isLoading && <LoadingSkeleton />}

        {userData && (
          <div className="max-w-7xl mx-auto">
            {/* Overall Progress */}
            <div className="mb-8">
              <OverallChart 
                data={userData.overall} 
                username={userData.username}
                avatar={userData.profile.avatar}
              />
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(userData.difficulty).map(([difficulty, data]) => (
                <DifficultyCard
                  key={difficulty}
                  difficulty={difficulty}
                  data={data}
                />
              ))}
            </div>

            {/* Stats and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <StatsTable 
                contest={userData.contest}
                streak={userData.streak}
                activity={userData.activity}
              />
              <ActivityChart 
                chartData={userData.activity.chartData}
                topTags={userData.topTags}
              />
            </div>

            {/* Recent Problems */}
            <RecentProblemsList problems={userData.recentProblems} />

            {/* Footer Info */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 inline-block">
                <p className="text-gray-600 text-sm mb-2">
                  Data fetched from LeetCode GraphQL API
                </p>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}

        {!userData && !isLoading && !error && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to Track Progress
              </h3>
              <p className="text-gray-600">
                Enter a LeetCode username above to see detailed analytics and progress tracking
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;