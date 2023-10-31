import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          We've got <span className="green_text">answers</span>
        </h1>

        <Accordion open={open === 1} className="max-w-[860px] mx-auto">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-dark-gray"
          >
            Why to go with GoCar rental services?
          </AccordionHeader>

          <AccordionBody className="text-subtitle-gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            vitae impedit error assumenda repellendus explicabo officia,
            consequatur veritatis culpa sint?
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} className="max-w-[860px] mx-auto">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-dark-gray"
          >
            What is the refund policy of this car rental service?
          </AccordionHeader>

          <AccordionBody className="text-subtitle-gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            vitae impedit error assumenda repellendus explicabo officia,
            consequatur veritatis culpa sint?
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} className="max-w-[860px] mx-auto">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-dark-gray"
          >
            What is the cost for just one day of renting?
          </AccordionHeader>

          <AccordionBody className="text-subtitle-gray">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            vitae impedit error assumenda repellendus explicabo officia,
            consequatur veritatis culpa sint?
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
