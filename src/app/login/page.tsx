'use client';

import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log('Login attempt:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* 왼쪽 소개 섹션 */}
      <div className="w-full lg:w-1/2 bg-primary py-24 lg:p-12 flex items-center justify-center relative overflow-hidden">
        {/* 배경 장식 요소 */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-md text-center text-white relative z-10">
          {/* 아이콘 추가 */}
          <div className="mb-8">
            <svg
              className="w-20 h-20 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in">
            Welcome to AI STS!
          </h1>

          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            혁신적인 AI 기반 학습 관리 시스템으로 더 효율적인 학습 경험을
            시작하세요.
          </p>

          {/* 특징 리스트 추가 */}
          <div className="space-y-4 text-left bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-primary-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>맞춤형 학습 경험</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-primary-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>실시간 성과 분석</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-primary-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>AI 기반 학습 추천</span>
            </div>
          </div>
        </div>
      </div>

      {/* 오른쪽 로그인 폼 섹션 */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
            로그인
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              로그인
            </button>
          </form>

          <div className="mt-6 flex flex-col space-y-4 text-center">
            <Link
              href="/forgot-password"
              className="text-primary hover:underline"
            >
              비밀번호를 잊으셨나요?
            </Link>
            <div className="text-gray-600">
              계정이 없으신가요?{' '}
              <Link
                href="/create-account"
                className="text-primary hover:underline"
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
