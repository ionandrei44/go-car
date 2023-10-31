const LabelInput = ({ label, placeholder, icon }) => {
  return (
    <div className="flex flex-col gap-2.5 w-full lg:w-2/3 mx-0 lg:mx-auto xl:w-[272px] max-w-full">
      <label htmlFor={label} className="text-dark-gray">
        {label}
      </label>

      <div className="relative h-16 rounded-[4px]">
        <input
          type="text"
          id={label}
          placeholder={placeholder}
          className="absolute bottom-0 left-0 text-dark-gray placeholder-subtitle-gray w-full h-full border rounded-[4px]
          border-accent-gray py-4 sm:py-[22px] pl-4 sm:pl-[22px] pr-9 sm:pr-11 focus:ring-primary-green focus:border-primary-green"
        />
        <img
          src={icon}
          alt=""
          className="absolute right-3 sm:right-[22px] top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default LabelInput;
