const TempPartHome = ({
  children,
  heading,
  imgSrc,
  paragraph,
  controlls,
  className,
  headingClass,
}) => {
  return (
    <section className={`mt-5 md:mt-12 ${className || "bg-inherit"}`}>
      <div
        className={`flex justify-between flex-col xl:flex-row items-center py-8 pb-10 xl:pb-8 gap-4 sm:gap-4 ${
          headingClass || ""
        }`}
      >
        <div className="flex gap-2 sm:gap-4 xl:gap-8 flex-col xl:flex-row items-center text-center">
          <h1 className="font-semibold text-base sm:text-3xl text-black">
            {heading}
          </h1>
          <div className="flex flex-wrap-reverse justify-center gap-2 sm:gap-8 xl:gap-8 text-sm sm:text-lg font-medium">
            <img src={imgSrc} />
            <span>{paragraph}</span>
          </div>
        </div>
        {controlls}
      </div>
      {children}
    </section>
  );
};

export default TempPartHome;
