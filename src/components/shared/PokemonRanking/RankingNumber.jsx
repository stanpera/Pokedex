import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const RankingNumber = ({ id }) => {
  return (
    <div
      className={clsx(
        "text-3xl flex flex-col gap-y-1 text-center leading-none capitalize font-bangers mx-5",
        id === 1 && " text-gold-statistic text-4xl",
        id === 2 && " text-silver-statistic text-4xl",
        id === 3 && " text-brown-statistic text-4xl"
      )}
    >
      <p>{id}</p>
      {(id === 1 || id === 2 || id === 3) && <FontAwesomeIcon icon={faMedal} />}
    </div>
  );
};

export default RankingNumber;
