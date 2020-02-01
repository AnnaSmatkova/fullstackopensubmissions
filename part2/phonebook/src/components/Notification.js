import React from "react";

const Notification = ({ message, type }) => {
  const notificationStyle = {
    borderStyle: "solid",
    borderRadius: 5
  };

  if (message === null) {
    return null;
  }

  return (
    <div style={notificationStyle} className={type}>
      {message}
    </div>
  );
};

export default Notification;
