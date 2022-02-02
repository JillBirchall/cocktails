export const Loader = () => {
  return (
    <div className="loader-container d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-secondary"
        style={{ width: "3rem", height: "3rem", marginTop: "10%" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
