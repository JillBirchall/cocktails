import { useGlobalContext } from "./context";

interface IProps {
  title: string;
  items: string[];
  menuName: string;
}

export const DropdownMenu: React.FC<IProps> = ({ title, items, menuName }) => {
  const { getCocktails } = useGlobalContext();

  return (
    <li className="nav-dropdown nav-item dropdown position-static mx-3">
      <button
        className="nav-link dropdown-toggle text-light fw-bold"
        id="navbarDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className="mega-menu">
          <ul className="d-flex align-items-start justify-content-start flex-wrap">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    className="dropdown-item w-auto"
                    onClick={(e) => getCocktails(item, menuName)}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};
