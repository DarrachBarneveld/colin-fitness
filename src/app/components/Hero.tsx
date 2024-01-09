import { FunctionComponent } from "react";
import { FaPlay } from "react-icons/fa";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section
      id="hero"
      className={`flex md:h-screen items-center justify-center bg-center bg-no-repeat w-full h-full`}
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
            Colin OMeara
          </h3>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Push your fitness further with our mix of facilities, and we&apos;ll
            support you with advice on new and better ways to train.
          </p>
          <div className="mt-8">
            <a
              href=""
              data-type="youtube"
              data-id="yba7hPeTSjk"
              className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full align-middle p-1 pl-4"
            >
              3:07 Intro Video
              <span className="btn btn-icon bg-slate-600 hover:bg-slate-700 border-slate-600 hover:border-slate-700 text-white rounded-full ml-2">
                <FaPlay />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
