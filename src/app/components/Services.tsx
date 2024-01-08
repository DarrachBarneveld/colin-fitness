import { FunctionComponent } from "react";
import { FaHeart, FaRunning, FaDumbbell } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import servicesImage from "@/public/assets/images/service-pic.webp";
import Image from "next/image";

interface ServicesProps {}

const Services: FunctionComponent<ServicesProps> = () => {
  return (
    <section id="services" className="p-8">
      <div className="container-fluid">
        <div className="flex flex-wrap justify-center">
          <div className="w-full xl:w-1/2">
            <Image
              className="max-w-full inset-0 hidden xl:block shadow-lg"
              src={servicesImage}
              alt="services image"
              style={{
                width: "100%",
                height: " 660px",
              }}
            />
          </div>
          <div className="w-full xl:w-1/2">
            <div className="service-items">
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2">
                  <div
                    className="services-item bg-gray-900 p-8 sm:p-16 text-white"
                    style={{
                      height: "330px",
                    }}
                  >
                    <FaHeart className="text-red-600 text-4xl mb-1" />
                    <h4 className="text-xl font-semibold text-white mb-4 uppercase">
                      Nutrition Coaching
                    </h4>
                    <p className=" text-lg text-gray-400 leading-relaxed">
                      Personalized meal plans tailored to your goals and dietary
                      restrictions.
                    </p>
                  </div>
                  <div
                    className="services-item bg-black p-8 sm:p-16 text-white"
                    style={{ height: "330px" }}
                  >
                    <FaDumbbell className="text-red-600 text-4xl mb-1" />

                    <h4 className="text-xl font-semibold text-white mb-4 uppercase">
                      HIIT Fitness
                    </h4>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      High-intensity interval training for maximum calorie burn
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:mb-0 mb-12">
                  <div
                    className="services-item bg-black p-8 sm:p-16 text-white"
                    style={{
                      height: "330px	",
                    }}
                  >
                    <FaRunning className="text-red-600 text-4xl mb-1" />

                    <h4 className="text-xl font-semibold text-white mb-4 uppercase">
                      Agility
                    </h4>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Training to improve athletic performance and speed
                    </p>
                  </div>
                  <div
                    className="services-item bg-gray-900 p-8 sm:p-16 text-white"
                    style={{ height: "330px" }}
                  >
                    <GiStrong className="text-red-600 text-4xl mb-1" />

                    <h4 className="text-xl font-semibold text-white mb-4 uppercase">
                      Strength
                    </h4>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Resistance training to build muscle and improve overall
                      fitness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
