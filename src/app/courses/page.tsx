import Image from 'next/image';
const CourseImgArray = [
  '/img/courseImg1.png',
  '/img/courseImg2.png',
  '/img/courseImg3.png',
];
const CoursesPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* 타이틀을 컨테이너 안으로 이동하고 패딩 조정 */}
      <div className="py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#282828]">
          Courses
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* 기존 카드 컴포넌트를 map으로 반복 */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg border border-[#bdbdbd]"
          >
            <div className="p-4">
              <div className="rounded-lg overflow-hidden bg-[#f5f5f5] flex items-center justify-center">
                <Image
                  src={CourseImgArray[item % CourseImgArray.length]}
                  alt="course thumbnail"
                  width={355}
                  height={236}
                />
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="mb-4">
                <h3 className="text-[#282828] text-base font-semibold">
                  Learning historical words and sentences
                </h3>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#080808]/75 text-sm">Lesson : 6</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#080808]/75 text-sm">
                    student : 198
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#080808]/75 text-sm">Advanced</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="px-4 py-2 bg-[#c00c3f] text-white rounded-lg">
                  Start Course
                </button>

                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full border-2 border-[#dfdfdf]" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#ffc887] rotate-90" />
                  <div className="absolute inset-[3px] bg-neutral-50 rounded-full flex items-center justify-center">
                    <span className="text-black font-medium">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
