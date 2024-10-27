'use client';
import MainNotice from '@/components/notice/Main';
import MainBanner from '@/components/banner/Main';
import PopularCourses from '@/components/courses/PopularCourses';

export default function Home() {
  return (
    <>
      <MainNotice />
      <MainBanner />
      <PopularCourses />
    </>
  );
}
