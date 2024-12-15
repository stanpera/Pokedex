const AbilityContainer = ({ children, parametr }) => {
  return (
    <p
      className={
        "text-sm lg:text-lg xl:text-xl text-center font-itim mb-2 text-pokemon-card-details dark:text-dark-second-text-color"
      }
    >
      {parametr}
      <span
        className={"block text-main-text-color dark:text-dark-main-text-color"}
      >
        {children}
      </span>
    </p>
  );
};

export default AbilityContainer;
