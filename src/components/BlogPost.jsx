const BlogPost = ({ date, category, title }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-16">
        <h3 className="text-[32px] font-kalam text-primary-black font-bold text-center">
          {date}
          <br />
          2023
        </h3>

        <div>
          <p className="text-subtitle-gray mb-[14px] text-center sm:text-start">
            {category}
          </p>
          <h3 className="text-dark-gray font-bold text-[27px] text-center sm:text-start">
            {title}
          </h3>
        </div>
      </div>

      <div className="w-full h-[1px] bg-secondary-gray" />
    </div>
  );
};

export default BlogPost;
