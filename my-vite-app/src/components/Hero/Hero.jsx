import React from "react";
import BiryaniImg1 from "../../assets/burger/burger1.png";
import BiryaniImg2 from "../../assets/burger/burger2.png";
import BiryaniImg3 from "../../assets/burger/burger3.png";
import Vector from "../../assets/vector.png";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className="min-h-[800px] bg-gray-100 " style={bgImage}>
        <div className="min-h-[650px] backdrop-blur-sm flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1
                  data-aos="zoom-out"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  {" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] "
                    style={{
                      filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                    }}
                  >
                    Career Counselling
                  </span>{" "}

                </h1>
                <p data-aos="fade-up" className="text-md font-bold text-justify ml-2">
                  Unlock your true potential with personalized career guidance. Whether you're a student, a professional looking to make a change, or someone seeking career clarity, our expert counselors provide tailored advice to help you navigate your career journey and achieve your dreams.
                </p>
                <a href="#about" className="flex items-center gap-2 px-9 py-3 rounded-full text-white text-sm m-auto md:m-3 hover:scale-105 transition-all duration-300 w-[110px] bg-gradient-to-r from-primary to-secondary">About</a>
              </div>
              {/* Image section */}
              <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                <div data-aos="fade-left" data-aos-delay="300">
                  <img
                    src={imageId}
                    alt="biryani img"
                    className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                  />
                </div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[-30px] lg:-right-10 bg-white/30 rounded-full">
                  {ImageList.map((item) => (
                    <div data-aos="zoom-in" data-aos-offset="0" className="mr-12">
                      <img
                        key={item.id}
                        src={item.img}
                        onClick={() => {
                          setImageId(
                            item.id === 1
                              ? BiryaniImg1
                              : item.id === 2
                                ? BiryaniImg2
                                : BiryaniImg3
                          );
                        }}
                        alt="biryani img"
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;