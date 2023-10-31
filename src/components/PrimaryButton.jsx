const PrimaryButton = ({ children, black = true, small = true, className }) => {
  return (
    <button
      className={`${className} btn_base ${
        small ? "px-5 py-[14px]" : "px-5 sm:px-6 py-[14px] sm:py-6"
      } primary_btn ${
        black
          ? "bg-primary-black hover:border-primary-black"
          : "bg-primary-green hover:border-primary-green"
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
