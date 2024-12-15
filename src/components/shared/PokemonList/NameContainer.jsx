const NameContainer = ({ parametr }) => {
  return (
    <h3
      className={
        "text-2xl xl:text-3xl text-center leading-none capitalize font-bangers text-main-text-color dark:text-dark-main-text-color"
      }
    >
      {parametr}
    </h3>
  );
};

export default NameContainer;
