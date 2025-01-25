import MainPageButtons from "@/components/MainPageButtons";
import { MapPinIcon } from "lucide-react";

const Page = () => {
  return (
    <section className="h-screen lg:py-20 lg:px-20 w-full py-20 mx-auto lg:max-w-screen-lg max-w-screen-sm">
      <div className="flex flex-col space-y-10 justify-start">
        <p className="max-w-fit text-green-600 rounded-full px-4 py-1 bg-green-100 text-[12px]">
          Available for Projects
        </p>
        <h1 className="text-4xl flex flex-col gap-2 font-semibold">
          Hello!, {"I'm"} Kohinoor Nimes👏
          <p className="w-fit font-semibold text-gray-600">
            Tech Enthusiast. Software Developer. Problem Solver.
          </p>
        </h1>

        <div className="flex items-center gap-2 text-orange-600">
          <MapPinIcon size={18} />
          <p>Agra, India</p>
        </div>

        <div className="text-lg font-medium">
          I am a software developer interested in developing ideas into reality.
          I am also passionate about distributed systems, machine learning, and
          the future of computing.
        </div>

        <div className="flex gap-2 items-center">
          <MainPageButtons />
        </div>
      </div>
    </section>
  );
};

export default Page;
