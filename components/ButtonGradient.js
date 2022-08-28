import { Button } from "@chakra-ui/react";
import React from "react";

function ButtonGradient({
  title,
  icon,
  textcolor,
  size,
  bg,
  download,
  data,
}) {
  return (
    <Button
      className={`group ${textcolor}`}
      size={size}
      bg={bg}
      leftIcon={icon}
      onClick={() => {
        download(data);
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonGradient;
