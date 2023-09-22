import { CarouselData } from "../Data/Data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);
  useEffect(() => {
    if (playStatus) {
      const Intervel = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % CarouselData.length);
      }, 3500);
      return () => clearInterval(Intervel);
    }
  }, [currentIndex, playStatus]);
  if (CarouselData.length === 0) {
    return <></>;
  }
  return (
    <div className="Carosel">
      <div
        className="block m-auto md:flex bg-[#f2f2f2] md:items-center justify-center"
        style={currentIndex & 1 ? {} : { flexDirection: "row-reverse" }}
      >
        <div className="Image  basis-1/2 object-cover overflow-hidden h-[33rem]">
          <img
            src={CarouselData[currentIndex]?.Img}
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
        <div className="p-5 h-64 w-full shadow-md md:shadow-none basis-1/2 lg:px-14">
          <div className="title text-2xl font-bold md:text-3xl">
            {CarouselData[currentIndex].Title}
          </div>
          <div className="body py-5 md:text-xl">
            {CarouselData[currentIndex].Body}
          </div>
          <div className="footer">
            <Link to={CarouselData[currentIndex]?.Link}>
              <button className="bottom-5 border-2 border-blue-700 bg-blue-700 py-1 px-4 font-semibold text-white">
                Lean more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex gap-4 h-16 items-center justify-center ">
        <div
          className="play-pause text-3xl h-12 w-12 items-center flex cursor-pointer "
          onClick={() => {
            setPlayStatus(!playStatus);
          }}
        >
          {playStatus ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
        </div>
        <div
          className="left text-3xl h-12 w-12 items-center flex cursor-pointer "
          onClick={() => {
            {
              currentIndex === 0
                ? setCurrentIndex(CarouselData.length - 1)
                : setCurrentIndex(currentIndex - 1);
            }
          }}
        >
          <AiOutlineLeft className="hover:-translate-x-3 transition-all" />
        </div>
        <div className="Indicators flex gap-4 justify-center align-middle">
          {CarouselData.map((value, index) => {
            return (
              <div key={index}>
                <div
                  className="Indicator h-3 w-3 cursor-pointer rounded-2xl border-black border-2 hover:bg-gray-400"
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  style={
                    currentIndex === index ? { backgroundColor: "black" } : {}
                  }
                ></div>
              </div>
            );
          })}
        </div>
        <div
          className="right text-3xl h-12 w-12 items-center flex mx-5 cursor-pointer "
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % CarouselData.length);
          }}
        >
          <AiOutlineRight className="hover:translate-x-3 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
