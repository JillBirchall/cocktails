import { Search } from "react-bootstrap-icons";

interface IProps {
  getSearchResults(): void;
}

export const SearchBtn: React.FC<IProps> = ({ getSearchResults }) => {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    getSearchResults();
  }

  return (
    <button
      className="btn btn-primary search-btn col-3 col-md-1"
      type="submit"
      onClick={(e) => handleClick(e)}
    >
      <Search className="icon" />
    </button>
  );
};
