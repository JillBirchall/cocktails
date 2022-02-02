import { useGlobalContext } from "../context";

interface IProps {
  btnText: string;
  handleClick(): void;
}

export const OutlineBtn: React.FC<IProps> = ({ btnText, handleClick }) => {
  const { backToTop } = useGlobalContext();

  return (
    <button
      className="back-btn btn btn-outline-primary rounded-pill ms-md-3 mt-md-3"
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
};
