import { FunctionComponent } from "react";
import sampleImage from "@/public/assets/images/01.jpg";
import Image from "next/image";

interface GalleryProps {}

const Gallery: FunctionComponent<GalleryProps> = () => {
  const images = [
    "assets/images/gym/01.jpg",
    "assets/images/gym/02.jpg",
    "assets/images/gym/03.jpg",
    "assets/images/gym/04.jpg",
    "assets/images/gym/05.jpg",
    "assets/images/gym/06.jpg",
    "assets/images/gym/07.jpg",
    "assets/images/gym/08.jpg",
    "assets/images/gym/09.jpg",
    "assets/images/gym/10.jpg",
  ];
  return (
    <section id="gallery" className="p-8">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">
          Gallery
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Push your fitness further with our mix of facilities and we&apos;ll
          support you with advice on new and better ways to train.
        </p>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 justify-center mx-auto mt-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative block overflow-hidden transition-all duration-500"
          >
            <div className="transition-all duration-500 group-hover:scale-105 block">
              <Image
                src={sampleImage}
                className=""
                alt={`Gym Image ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
