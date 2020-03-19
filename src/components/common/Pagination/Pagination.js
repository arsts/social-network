import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  onPageChanged,
  totalUsersCount,
  pageSize,
  currentPage
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map(page => {
        return (
          <span
            key={page}
            onClick={e => {
              onPageChanged(page);
            }}
            className={currentPage === page ? styles.selectedPage : undefined}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
