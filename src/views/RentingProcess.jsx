import rentingProcessDiagram from "../assets/process.svg";
import rentingProcessDiagramMobile from "../assets/process-vertical.svg";

import { Step } from "../components";

const steps = [
  "Choose a vehicle",
  "Pick location & date",
  "Book your care",
  "Finish process",
];

const RentingProcess = () => {
  return (
    <div className="pt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          Our renting <span className="green_text">process</span>
        </h1>

        <div className="flex md:flex-col justify-center md:justify-start gap-8">
          <img src={rentingProcessDiagram} alt="" className="hidden md:block" />
          <img
            src={rentingProcessDiagramMobile}
            alt=""
            className="block md:hidden"
          />

          <div className="flex flex-col md:flex-row gap-5">
            {steps.map((step, i) => (
              <Step key={i} title={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentingProcess;
