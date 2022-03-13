// import { useEffect } from "react";
import { Search } from "react-bootstrap-icons";
import { useGlobalContext } from "../context";

interface IProps {
  btnLabel: string;
  getSearchResults(): void;
  isSearchInProgress: boolean;
}

export const SearchBtn: React.FC<IProps> = ({
  btnLabel,
  getSearchResults,
  isSearchInProgress,
}) => {
  const { isLoading } = useGlobalContext();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    getSearchResults();
  }

  if (isLoading && isSearchInProgress) {
    return (
      <button
        className="btn btn-primary search-btn col-3 col-md-1"
        type="button"
      >
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Loading...</span>
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-primary search-btn col-3 col-md-1"
        type="submit"
        onClick={(e) => handleClick(e)}
        aria-label={btnLabel}
        disabled={isLoading ? true : false}
      >
        <Search className="icon" />
      </button>
    );
  }
};
