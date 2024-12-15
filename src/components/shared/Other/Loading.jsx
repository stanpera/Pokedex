import clsx from "clsx";

const Loading = ({ edit }) => {

  return (
    <div
      className={clsx(
        !edit &&
          "flex items-center absolute gap-x-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        edit && "flex flex-col items-center"
      )}
    >
      <p>Trwa pobieranie danych...</p>
      <div
        className={
          "w-10 h-10 border-4 rounded-full animate-spin border-main-gray border-t-main-text-color dark:border-dark-red dark:border-t-dark-main-text-color"
        }
      ></div>
    </div>
  );
};

export default Loading;
