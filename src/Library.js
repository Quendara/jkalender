import React from "react";
import Settings from "./Settings";
import { Image } from "./Image";

export const Library = props => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <p>Library </p>
      <hr />
      <Image value="2" />
      <Image value="0" />
      <Image value="1" />
      <Image value="4" />
      <hr />
      <Image prefix="m" value="3" />
      <Image prefix="m" value="4" />
      <Image prefix="m" value="5" />
      <hr />
      <Image prefix="zeit" value="f" />
      <Image prefix="zeit" value="s" />
      <Image prefix="zeit" value="h" />
      <Image prefix="zeit" value="w" />
      <hr />
      <Image prefix="d" value="1" />
      <Image prefix="d" value="2" />
      <Image prefix="d" value="3" />
      <Image prefix="d" value="4" />
      <hr />
    </>
  );
  // prefix
};
