import React from "react";

import s from "./Preloader.module.sass";

export default () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
