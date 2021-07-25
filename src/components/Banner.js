import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="/carousel-img1.jpg" />
        </div>

        <div>
          <img src="/carousel-img2.jpg" />
        </div>

        <div>
          <img src="/carousel-img3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
