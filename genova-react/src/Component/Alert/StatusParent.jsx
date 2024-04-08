import React, { useState, useEffect } from "react";
import Status from "./Status";

function StatusParent({ message }) {
  console.log("res message: ", message);
  const [alert, setAlert] = useState("");
  useEffect(() => {
    setAlert({
      message: message.message,
      type: message.error === true ? "danger" : "success",
    });
  }, [message]);

  return (
    <>
      {alert.message && (
        <Status
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, message: "" })}
        />
      )}
    </>
  );
}

export default StatusParent;
