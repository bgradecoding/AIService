import { Course } from '@/types/course';

export const COURSE_IMAGES = [
  '/img/courseImg1.png',
  '/img/courseImg2.png',
  '/img/courseImg3.png',
] as const;

export const DUMMY_COURSES: Course[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: 'Learning historical words and sentences',
  lessons: 6,
  students: 198,
  level: 'Advanced',
  progress: 1,
  imageIndex: i % COURSE_IMAGES.length,
}));
