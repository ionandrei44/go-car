import carOne from "../assets/car-one.svg";
import carTwo from "../assets/car-two.svg";
import carThree from "../assets/car-three.svg";
import { CarCard } from "../components";

const CarsForRental = () => {
  return (
    <div className="pt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          Cars for <span className="green_text">rental</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-20 md:gap-5">
          <CarCard carName="BMW X3" imageSrc={carOne} />
          <CarCard carName="BMW M2" imageSrc={carTwo} />
          <CarCard carName="Ford Explorer" imageSrc={carThree} />
        </div>
      </div>
    </div>
  );
};

export default CarsForRental;
