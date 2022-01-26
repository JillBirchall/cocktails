import { useGlobalContext } from "./context";

export const BackToTopBtn = () => {
  const { backToTop } = useGlobalContext();

  return (
    <button
      className="btn rounded-pill bg-secondary text-light px-3 py-1 border-0"
      onClick={backToTop}
    >
      Back to Search
    </button>
  );
};
