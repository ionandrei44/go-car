import carImg from "../assets/pricing-card-car.svg";

import PrimaryButton from "./PrimaryButton";

const essentialPlanOptions = [
  "Quisque rhoncus",
  " Lorem ipsum dolor",
  "Vivamus velit mir",
  "Velit mir",
  "Elit mir ivamus",
];

const recommendedPlanOptions = [
  "Quisque rhoncus",
  " Lorem ipsum dolor",
  "Vivamus velit mir",
  "Velit mir",
  "Elit mir ivamus",
  "Lorem ipsum dolor",
  "Ipsum dolor",
];

const proPlanOptions = [
  "Quisque rhoncus",
  " Lorem ipsum dolor",
  "Vivamus velit mir",
  "Velit mir",
  "Elit mir ivamus",
  "Lorem ipsum dolor",
  "Ipsum dolor",
  "Quisque rhoncus",
  "lit mir iamus",
];

const PricingCard = ({ special, headText, plan }) => {
  const currentPlanOptions =
    plan === "recommended"
      ? recommendedPlanOptions
      : plan === "pro"
      ? proPlanOptions
      : essentialPlanOptions;

  return (
    <div
      className={`h-[557px] flex-initial sm:flex-1 w-full sm:w-fit max-w[312px] border border-secondary-gray py-8 px-5 rounded-[10px]
      ${special ? "bg-secondary-green" : "bg-white"} flex flex-col relative`}
    >
      {special ? (
        <h2 className="text-primary-black font-kalam font-bold text-4xl mb-2">
          {headText}
        </h2>
      ) : (
        <div className="mb-[30px]">
          <p
            className={`${
              plan === "recommended"
                ? "text-primary-green"
                : "text-primary-black"
            } font-bold uppercase text-center mb-[6px]`}
          >
            {plan}
          </p>

          <h2 className="text-primary-black font-kalam font-bold text-4xl text-center">
            {headText}
          </h2>
        </div>
      )}

      {special ? (
        <p className="text-light-gray">Choose our best plan to save a lot.</p>
      ) : (
        <div className="flex flex-col gap-2 items-center">
          {currentPlanOptions.map((option, i) => (
            <p key={i} className="text-light-gray">
              &#10003; {option}
            </p>
          ))}
        </div>
      )}

      {plan ? (
        <PrimaryButton black={plan !== "recommended"} className="mt-auto">
          Choose plan
        </PrimaryButton>
      ) : (
        <img src={carImg} alt="car" className="absolute right-0 bottom-12" />
      )}
    </div>
  );
};

export default PricingCard;
