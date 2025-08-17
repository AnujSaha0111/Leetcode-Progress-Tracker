import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Hash } from 'lucide-react';

interface ActivityChartProps {
  chartData: Array<{
    date: string;
    submissions: number;
  }>;
  topTags: Array<{
    name: string;
    count: number;
  }>;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ chartData, topTags }) => {
  const COLORS = ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover fade-in">
      <div className="flex items-center space-x-2 mb-6">
        <Activity className="w-6 h-6 text-indigo-600" />
        <h3 className="text-xl font-bold text-gray-900">Activity & Tags Analysis</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submission Activity Chart */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">30-Day Submission Activity</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.slice(-15)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 10 }}
                stroke="#64748b"
              />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f8fafc', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="submissions" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Tags Pie Chart */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Hash className="w-5 h-5 text-gray-600" />
            <h4 className="text-lg font-semibold text-gray-700">Top Problem Tags</h4>
          </div>
          
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={topTags}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="count"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {topTags.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 space-y-2">
            {topTags.map((tag, index) => (
              <div key={tag.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm text-gray-600">{tag.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-800">{tag.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;