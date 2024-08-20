  import React, { useEffect, useState } from "react";
import "../Styles/AlertComponent.css"; // Import your CSS file

const AlertComponent = ({ type, message, uniqueKey }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, uniqueKey]); // Add uniqueKey to dependencies

  return (
    <>
      {visible && (
        <div
          key={uniqueKey} // Unique key forces re-render
          className={`d-flex gap-3 alert alert-${type} ${
            visible ? "slide-in" : "slide-out"
          }`}
        >
          <div>
            <i
              className={`${
                type === "success"
                  ? "ri-thumb-up-fill"
                  : type === "warning"
                  ? "ri-error-warning-fill"
                  : type === "danger"
                  ? "ri-close-circle-fill"
                  : ""
              }`}
            ></i>
          </div>
          <div>{message}</div>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
