import ArrowLeft from "../vectors/ArrowLeft";
import ArrowRight from "../vectors/ArrowRight";
import { useContext } from "react";
import { ArtContext } from "../contexts/ArtGalleryContext";

interface PaginateBarProps {}

const PaginateBar: React.FC<PaginateBarProps> = () => {
  const { currPage, totalPages, handleCurrPage } = useContext(ArtContext);
  const pages = [...Array(totalPages).keys()].map((number) => number + 1);
  const lastPage = pages.length;

  const handlePageNumber = (num: number) => handleCurrPage(num);

  return (
    <div>
      {currPage !== 1 && (
        <button onClick={() => handlePageNumber(currPage - 1)}>
          <ArrowLeft />
        </button>
      )}

      {pages.map((page) => {
        let isActive =
          page === currPage ? { color: "#000" } : { color: "#B4B4B4" };
        return (
          <button
            key={page}
            onClick={() => handlePageNumber(page)}
            style={isActive}
          >
            {page}
          </button>
        );
      })}
      {currPage !== lastPage && (
        <button onClick={() => handlePageNumber(currPage + 1)}>
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default PaginateBar;
