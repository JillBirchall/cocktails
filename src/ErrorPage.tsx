import { useGlobalContext } from "./context";
import { OutlineBtn } from "./OutlineBtn";

export const ErrorPage = () => {
  const { resetError } = useGlobalContext();

  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center error-page">
      <h1 className="text-primary">An Error Has Occurred!</h1>
      <p className="mt-3">Please try again</p>
      <OutlineBtn btnText="Back to Search" handleClick={resetError} />
    </div>
  );
};
