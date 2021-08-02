import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import arrowLeft from "../../../assets/images/icons/arrowLeft.svg";

import s from "./Paginator.module.sass";

type PropsType = {
  onPageChanged: (p: Date) => void;
};

const Paginator: FC<PropsType> = ({ onPageChanged }) => {
  const [currentPage, setCurrentPage] = useState<any>(new Date());

  useEffect(() => setCurrentPage(currentPage), [currentPage]);

  const leftPortionPageNumber = () => {
    setCurrentPage(moment(currentPage, "MMM Do YY").subtract(1, "days"));
    console.log(currentPage);
    onPageChanged(currentPage);
  };
  const rightPortionPageNumber = () => {
    setCurrentPage(moment(currentPage, "MMM Do YY").add(1, "days"));
    console.log(currentPage);
    onPageChanged(currentPage);
  };
  return (
    <div className={s.wrapper}>
      <button onClick={leftPortionPageNumber}>
        <img src={arrowLeft} />
      </button>
      <div>{moment(currentPage).format("MMM Do YY") || currentPage}</div>
      <button onClick={rightPortionPageNumber}>
        <img src={arrowLeft} />
      </button>
    </div>
  );
};
export default React.memo(Paginator);
