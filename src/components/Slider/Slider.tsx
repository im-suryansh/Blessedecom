import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Slider() {
  const slides = [
    {
      url: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/04/lady-gaga-x-crunchyroll-collab-3.jpg?resize=696%2C392&ssl=1",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0288/6926/3438/files/Geisha_embroidery_japanesestreetwear_2pair233_1400x.jpg?v=1660274306",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0280/8100/files/anime-apparel-web-banner-1440px_7200c185-461b-44cd-8a80-0c8bcead4e1a_1400x.jpg?v=1646345865",
    },

    {
      url: "https://cdn.trendhunterstatic.com/thumbs/anime-apparel-collaboration.jpeg?auto=webp",
    },
    {
      url: "https://img.mipon.org/wp-content/uploads/2019/05/17122648/haikui_tees.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log("prev clicked");
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log("next clicked");
  };

  return (
    <div className="max-w-[1400px] h-[650px] w-full m-auto py-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Slider;
