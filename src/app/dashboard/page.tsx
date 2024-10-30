'use client';
import { FaUser, FaBook, FaCog } from 'react-icons/fa';
import Image from 'next/image';
import DashboardImg from '@/res/img/dashboardImg.svg';
const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex">
      {/* Sidebar */}
      <aside className="w-64 pr-8">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="font-semibold">Maya atay</h2>
            <p className="text-sm text-gray-500">United Arab Emirates</p>
          </div>
        </div>

        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-3 text-rose-600 font-medium"
          >
            <FaUser className="w-5 h-5" />
            <span>My Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700">
            <FaBook className="w-5 h-5" />
            <span>My Courses</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700">
            <FaCog className="w-5 h-5" />
            <span>Setting</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Welcome Card */}
        <div className="bg-rose-600 rounded-2xl p-6 text-white mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Hi Maya, Good Afternoon!
            </h1>
            <p>You've learned 70% of your goal this week!</p>
            <p className="text-sm">Keep it up and improve your progress.</p>
          </div>

          <DashboardImg className="w-304 h-168" />
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Progress Circle */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">32%</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Fluent in English</p>
              <div className="flex justify-between mt-4">
                <p>
                  Word learned:{' '}
                  <span className="text-rose-600 font-bold">210</span>
                </p>
                <p>
                  Box: <span className="text-rose-600 font-bold">4</span>
                </p>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">My Progress</h3>
              <select className="border rounded px-2 py-1">
                <option>JULY 2021</option>
              </select>
            </div>
            {/* Calendar Grid would go here */}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-600">Count of forward</p>
            <p className="text-xl font-bold text-rose-600">257</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-600">active days</p>
            <p className="text-xl font-bold text-rose-600">5</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-600">Points</p>
            <p className="text-xl font-bold text-rose-600">120</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-600">Language</p>
            <p className="text-xl font-bold text-rose-600">2</p>
          </div>
        </div>

        {/* Daily Streak */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-4">Daily streak</h3>
          <div className="flex justify-between">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full ${i < 3 ? 'bg-yellow-400' : 'bg-gray-200'}`}
                ></div>
                <span className="text-sm text-gray-600 mt-2">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
