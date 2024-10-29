import { Course } from '@/types/course';

export const COURSE_IMAGES = [
  '/img/courseImg1.png',
  '/img/courseImg2.png',
  '/img/courseImg3.png',
] as const;

export const DUMMY_COURSES: Course[] = [
  {
    id: 1,
    title: 'AI RP 트레이닝',
    lessons: 8,
    students: 245,
    level: 'Beginner',
    progress: 0.3,
    imageIndex: 0,
  },
  {
    id: 2,
    title: 'AI 세일즈 화법 생성기',
    lessons: 12,
    students: 167,
    level: 'Intermediate',
    progress: 0.7,
    imageIndex: 1,
  },
  {
    id: 3,
    title: '대화형 챗봇 test',
    lessons: 10,
    students: 198,
    level: 'Advanced',
    progress: 0.5,
    imageIndex: 2,
  },
];
