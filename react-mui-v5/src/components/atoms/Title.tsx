import React from "react";
import { Typography } from "@mui/material";

export type Props = {
  children: React.ReactNode;
  variant?: any;
  marginBottom?: string;
  [otherProps: string]: any;
};

const Title = ({
  children,
  variant,
  marginBottom = "8px",
  ...otherProps
}: Props) => {
  return (
    <Typography
      variant={variant}
      {...otherProps}
      marginBottom={marginBottom}
      style={{
        overflowWrap: "break-word",
      }}
    >
      {children}
    </Typography>
  );
};

export default Title;
