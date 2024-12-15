const AppColorWrapper = ({ children }) => {
  return (
    <div
      className={
        "min-h-screen flex flex-col items-center overflow-hidden bg-background-light text-main-text-color dark:bg-background-dark dark:text-dark-main-text-color"
      }
    >
      {children}
    </div>
  );
};

export default AppColorWrapper;
