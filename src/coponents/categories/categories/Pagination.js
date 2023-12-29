import React from "react";
import { Link } from "react-router-dom";
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  pageNumbers,
}) => {
  return (
    <nav>
      <ul className="pagination justify-content-center mt-3">
        {currentPage > 1 ? (
          <>
            {" "}
            <li className="page-item">
              <Link
                className="page-link text-white"
                to={currentPage}
                onClick={() => {
                  if (currentPage !== 1) {
                    paginate(currentPage - 1);
                  }
                }}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </Link>
            </li>
          </>
        ) : (
          <></>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to={number}
              className={`page-link text-white ${
                currentPage === number ? "active bg-info" : ""
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
        <li className="page-item">
          {currentPage < totalPosts ? (
            <>
              <Link
                className="page-link text-white"
                to={currentPage}
                onClick={() => {
                  if (currentPage !== totalPosts) {
                    paginate(currentPage + 1);
                  }
                }}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </Link>
            </>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
