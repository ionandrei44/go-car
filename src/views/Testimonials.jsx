import { Carousel } from "@material-tailwind/react";

import { Testimonial } from "../components";

const Testimonials = () => {
  return (
    <div className="mt-36 py-24 bg-lightest-gray">
      <div className="wrapper flex justify-center items-center">
        <Carousel
          className="rounded-xl pb-12 max-w-[860px]"
          prevArrow={() => null}
          nextArrow={() => null}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-['']
                   ${
                     activeIndex === i ? "bg-primary-green" : "bg-accent-green"
                   } `}
                />
              ))}
            </div>
          )}
        >
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
