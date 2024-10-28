import { CourseCard } from '@/components/courses/CourseCard';
import { DUMMY_COURSES } from '@/constants/courses';

const CoursesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#282828]">
          Courses
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DUMMY_COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
