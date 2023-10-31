import quoteIcon from "../assets/quote-icon.svg";

const Testimonial = () => {
  return (
    <div>
      <img src={quoteIcon} alt="" className="mx-auto" />
      <h3 className="text-light-gray text-3xl text-center tracking-wider">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.The more
        content you provide about you. Quos saepe suscipit, nemo dolore
        sapiente!
      </h3>

      <p className="text-dark-gray font-bold text-center uppercase mt-[30px]">
        James Rodrigo
      </p>
    </div>
  );
};

export default Testimonial;
