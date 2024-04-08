import React, { useState, useEffect } from "react";
import "./Status.css"; // Make sure your CSS file contains styles for .alert and .alert-close

const Status = ({
  message,
  type = "info",
  onClose,
  duration = 5000,
  showCloseButton = true,
}) => {
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    if (message && duration) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`alert alert-${type}`}>
      {message}
      {showCloseButton && (
        <button
          onClick={() => {
            setVisible(false);
            if (onClose) onClose();
          }}
          className="alert-close"
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Status;
