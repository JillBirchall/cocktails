import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

interface Cocktail {
  id: number;
  name: string;
  image: string;
}

interface Drink {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
}

type Ingredient = {
  strIngredient1: string;
};

type Category = {
  strCategory: string;
};

interface CocktailDetails extends Drink {
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

type CocktailInfo = {
  id: number;
  name: string;
  image: string;
  glass: string;
  category: string;
  alcoholic: string;
  method: string;
  ingredients: string[];
};

interface IAppContext {
  isError: boolean;
  isLoading: boolean;
  cocktails: Cocktail[];
  ingredients: string[];
  categories: string[];
  displayCocktail: boolean;
  showResults: boolean;
  currentCocktail: CocktailInfo;
  currentSearch: string;
  getCocktails(searchQuery: string, searchType: string): void;
  getCocktailRecipe(cocktailId: number): void;
  backToResults(): void;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [showResults, setShowResults] = useState(false);
  const [displayCocktail, setDisplayCocktail] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [currentCocktail, setCurrentCocktail] = useState<CocktailInfo>({
    id: 0,
    name: "",
    image: "",
    glass: "",
    category: "",
    alcoholic: "",
    method: "",
    ingredients: [],
  });
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentSearch, setCurrentSearch] = useState("");

  const getCocktails = (searchQuery: string, searchType: string): void => {
    setIsLoading(true);
    setIsError(false);
    setCocktails([]);
    setShowResults(false);

    let url: string;

    switch (searchType) {
      case "name":
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`;
        break;
      case "ingredient":
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchQuery}`;
        break;
      case "category":
        url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchQuery}`;
        break;
      default:
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`;
    }

    axios
      .get(url)
      .then((res) => {
        let newCocktails: Cocktail[] = [];
        if (res.data.drinks != null) {
          newCocktails = res.data.drinks.map((drink: Drink) => {
            return {
              id: drink.idDrink,
              name: drink.strDrink,
              image: drink.strDrinkThumb,
            };
          });
        }
        setCocktails(newCocktails);
        setShowResults(true);
        setDisplayCocktail(false);
        setCurrentSearch(searchQuery);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  };

  const getCocktailRecipe = (cocktailId: number) => {
    setIsLoading(true);
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      )
      .then((res) => {
        let currentDrink: CocktailDetails = res.data.drinks[0];

        let tempIngredients: string[] = [
          currentDrink.strIngredient1,
          currentDrink.strIngredient2,
          currentDrink.strIngredient3,
          currentDrink.strIngredient4,
          currentDrink.strIngredient5,
          currentDrink.strIngredient6,
          currentDrink.strIngredient7,
          currentDrink.strIngredient8,
          currentDrink.strIngredient9,
          currentDrink.strIngredient10,
          currentDrink.strIngredient11,
          currentDrink.strIngredient12,
          currentDrink.strIngredient13,
          currentDrink.strIngredient14,
          currentDrink.strIngredient15,
        ];

        let tempMeasures: string[] = [
          currentDrink.strMeasure1,
          currentDrink.strMeasure2,
          currentDrink.strMeasure3,
          currentDrink.strMeasure4,
          currentDrink.strMeasure5,
          currentDrink.strMeasure6,
          currentDrink.strMeasure7,
          currentDrink.strMeasure8,
          currentDrink.strMeasure9,
          currentDrink.strMeasure10,
          currentDrink.strMeasure11,
          currentDrink.strMeasure12,
          currentDrink.strMeasure13,
          currentDrink.strMeasure14,
          currentDrink.strMeasure15,
        ];

        setCurrentCocktail({
          id: currentDrink.idDrink,
          name: currentDrink.strDrink,
          category: currentDrink.strCategory,
          glass: currentDrink.strGlass,
          alcoholic: currentDrink.strAlcoholic,
          image: currentDrink.strDrinkThumb,
          method: currentDrink.strInstructions,
          ingredients: formatIngredients(tempIngredients, tempMeasures),
        });
        setShowResults(false);
        setDisplayCocktail(true);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  };

  const formatIngredients = (
    ingredients: string[],
    measures: string[]
  ): string[] => {
    let formattedIngredients: string[] = [];

    for (let i = 0; i < 15; i++) {
      let newIngredient: string = "";

      if (ingredients[i] !== null && ingredients[i] !== "") {
        if (measures[i] !== null) {
          newIngredient = measures[i] + " " + ingredients[i];
        } else {
          newIngredient = ingredients[i];
        }
        formattedIngredients.push(newIngredient);
      }
    }
    return formattedIngredients;
  };

  const backToResults = () => {
    setDisplayCocktail(false);
    setShowResults(true);
  };

  //Utility function to convert first letter to uppercase.
  const firstLetterUpperCase = (stringToConvert: string): string => {
    return stringToConvert[0].toUpperCase() + stringToConvert.substring(1);
  };

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => {
        let newCategories: string[] = res.data.drinks.map((drink: Category) => {
          return firstLetterUpperCase(drink.strCategory);
        });
        setCategories(newCategories.sort());
      })
      .catch((error) => console.log(error));

    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => {
        let newIngredients: string[] = res.data.drinks.map(
          (drink: Ingredient) => {
            return firstLetterUpperCase(drink.strIngredient1);
          }
        );
        setIngredients(newIngredients.sort());
      })
      .catch((error) => console.log(error));

    getCocktails("Vodka", "ingredient");
  }, []);

  return (
    <AppContext.Provider
      value={{
        isError,
        isLoading,
        showResults,
        cocktails,
        ingredients,
        categories,
        displayCocktail,
        currentCocktail,
        currentSearch,
        getCocktails,
        getCocktailRecipe,
        backToResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IAppContext => {
  return useContext(AppContext);
};
