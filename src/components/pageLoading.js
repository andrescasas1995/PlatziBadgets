import React from "react";

import Loader from "./Loader";
import "./styles/PageLoading.css";

class PageLoading extends React.Component {
  render() {
    return (
      <div className="PageLoading">
        <Loader />
      </div>
    );
  }
}

export default PageLoading;
