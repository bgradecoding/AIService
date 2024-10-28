import Image from 'next/image';
import { COURSE_IMAGES } from '@/constants/courses';
import type { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-[#bdbdbd] hover:shadow-lg hover:border-[#ffc887] cursor-pointer">
      <div className="p-4">
        <div className="rounded-lg overflow-hidden bg-[#f5f5f5] flex items-center justify-center">
          <Image
            src={COURSE_IMAGES[course.imageIndex]}
            alt="course thumbnail"
            width={355}
            height={236}
          />
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="mb-4">
          <h3 className="text-[#282828] text-base font-semibold">
            {course.title}
          </h3>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#080808]/75 text-sm">
              Lesson : {course.lessons}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#080808]/75 text-sm">
              student : {course.students}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#080808]/75 text-sm">{course.level}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-[#c00c3f] text-white rounded-lg">
            Start Course
          </button>
          <ProgressCircle progress={course.progress} />
        </div>
      </div>
    </div>
  );
};

const ProgressCircle = ({ progress }: { progress: number }) => (
  <div className="relative w-10 h-10">
    <div className="absolute inset-0 rounded-full border-2 border-[#dfdfdf]" />
    <div className="absolute inset-0 rounded-full border-2 border-[#ffc887] rotate-90" />
    <div className="absolute inset-[3px] bg-neutral-50 rounded-full flex items-center justify-center">
      <span className="text-black font-medium">{progress}</span>
    </div>
  </div>
);
