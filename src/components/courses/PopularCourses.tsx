import React from 'react';
import Link from 'next/link';
import { FaLaptopCode, FaCommentDots } from 'react-icons/fa';
import { MdSell, MdArrowForward } from 'react-icons/md';
import { useTranslations } from 'next-intl';
const courses = [
  {
    title: 'AI RP 트레이닝',
    href: '/courses/ai-rp-training',
    icon: FaLaptopCode,
  },
  {
    title: 'AI 세일즈 화법 생성기',
    href: '/courses/ai-sales-generator',
    icon: MdSell,
  },
  {
    title: '대화형 챗봇 TEST',
    href: '/courses/interactive-chatbot-test',
    icon: FaCommentDots,
  },
];

const PopularCourses: React.FC = () => {
  const t = useTranslations('main.popularCourses');
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {courses.map((course, index) => (
          <Link
            href={course.href}
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 flex flex-col items-center text-center"
          >
            <course.icon className="w-8 h-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-gray-800">
              {course.title}
            </h3>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/courses"
          className="inline-flex items-center justify-center w-64 px-6 py-3 rounded-lg border border-[#c00c3f] text-[#c00c3f] hover:bg-[#c00c3f] hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium">{t('seeAllCourses')}</span>
          <MdArrowForward className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default PopularCourses;
