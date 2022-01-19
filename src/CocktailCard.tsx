import { useGlobalContext } from "./context";

interface IProps {
  name: string;
  image: string;
  id: number;
}

export const CocktailCard: React.FC<IProps> = ({ name, image, id }) => {
  const { getCocktailRecipe } = useGlobalContext();
  return (
    <div
      className="card cocktail-card shadow mt-3 mx-3 overflow-hidden"
      onClick={() => getCocktailRecipe(id)}
      tabIndex={0}
    >
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body pb-0">
        <h2 className="card-title text-center">{name}</h2>
      </div>
    </div>
  );
};
