import { useGlobalContext } from "./context";

interface IProps {
  labelText: string;
  title: string;
  options: string[];
}

export const SelectBox: React.FC<IProps> = ({ labelText, title, options }) => {
  const { getCocktails, isLoading } = useGlobalContext();

  const selectOption = (element: HTMLSelectElement) => {
    if (
      element.value === `Select ${title === "Ingredient" ? "an" : "a"} ${title}`
    )
      return;
    getCocktails(element.value, title.toLowerCase());
  };

  return (
    <div className="select-box row mt-3">
      <label className="text-light col-md-6" htmlFor={title}>
        {labelText}
      </label>
      <select
        className="form-select col-md-6"
        name={title}
        id={title}
        onChange={(e) => selectOption(e.target)}
      >
        <option selected>
          Select {title === "Ingredient" ? "an" : "a"} {title}
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
