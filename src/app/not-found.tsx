import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center pt-20 px-4">
      <div className="max-w-[801px] w-full flex-col justify-center items-center gap-4 md:gap-6 inline-flex">
        <Image
          src="/img/404.svg"
          alt="404 illustration"
          width={400}
          height={400}
          className="w-[200px] md:w-[300px] lg:w-[400px] h-auto"
          priority
        />
        <div className="w-full flex-col justify-start items-start gap-2 flex">
          <div className="w-full flex-col justify-start items-start gap-2 md:gap-[9px] flex">
            <div className="w-full text-center text-[#1c1c1c] text-2xl md:text-3xl lg:text-[40px] font-bold">
              This page could not be found
            </div>
            <div className="w-full text-center text-neutral-700 text-base md:text-lg font-normal">
              The page you are looking for might have been removed or
              temporarily unavailable.
            </div>
          </div>
        </div>
        <div className="w-full max-w-[284px] h-12 px-4 py-4 bg-[#c00c3f] rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-base font-normal">
            Back to Homepage
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
