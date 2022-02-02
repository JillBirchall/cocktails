import { useGlobalContext } from "./context";
import { useState } from "react";
import { SearchBtn } from "./SearchBtn";

interface IProps {
  labelText: string;
  title: string;
  options: string[];
}

export const SelectBox: React.FC<IProps> = ({ labelText, title, options }) => {
  const { getCocktails, isLoading } = useGlobalContext();
  const [option, setOption] = useState("");

  const searchForCocktails = () => {
    if (option === "") return;
    getCocktails(option, title.toLowerCase());
    setOption("");
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
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option selected value="">
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
      <SearchBtn getSearchResults={searchForCocktails} />
    </div>
  );
};
