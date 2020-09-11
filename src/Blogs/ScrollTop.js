import React from "react";

import { Zoom, useScrollTrigger } from "@material-ui/core";

export default function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          float: "right",
          position: "inherit",
          margin: "2%",
        }}
      >
        {children}
      </div>
    </Zoom>
  );
}
