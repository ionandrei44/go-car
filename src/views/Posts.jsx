import { BlogPost, PrimaryButton } from "../components";

const Posts = () => {
  return (
    <div className="mt-36">
      <div
        className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between
    gap-12 lg:gap-6"
      >
        <div className="flex flex-col gap-9 flex-1">
          <h1 className="head_text text-center lg:text-start">
            Our <span className="green_text">recent posts</span>
          </h1>

          <PrimaryButton className="w-full sm:w-fit mx-auto lg:mx-0">
            Read blogs
          </PrimaryButton>
        </div>

        <div className="flex flex-col gap-7 flex-1">
          <BlogPost
            date="Jan 12"
            category="Tips"
            title="Safest car rental services in 2023"
          />
          <BlogPost
            date="Jan 6"
            category="Rental"
            title="Best car collection in the world"
          />
          <BlogPost
            date="Jan 1"
            category="Travel"
            title="Which car is the best for travel"
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
