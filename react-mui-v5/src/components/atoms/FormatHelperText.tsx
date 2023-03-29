import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
// import { redColor } from "themes/palette";

interface FormatHelperTextProps {
  message: string;
}

const FormatHelperText: React.FC<FormatHelperTextProps> = ({ message }) => (
  <Box component="span" sx={{ color: "#FF0000" }}>
    {message}
  </Box>
);

export default FormatHelperText;
