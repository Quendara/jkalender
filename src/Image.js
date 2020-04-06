import React from "react";
import Settings from "./Settings";

export const Image = props => {
  const getSrc = () => {
    const prefix = "";
    if (props.prefix) {
      prefix = props.prefix;
    }
    return "" + Settings.baseS3Bucket + prefix + props.value + ".jpg";
  };

  return (
    <>
      <img src={getSrc()} />
      
    </>
  );
  // prefix
};
