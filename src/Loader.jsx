import React from "react";
function LoaderComponent() {
      
        return (
          <div className={"lds-ellipsis"}>
            <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
          </div>
        )
    }

export default LoaderComponent;