import React from "react";

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
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
