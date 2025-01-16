import { Box, Typography } from "@mui/material";
import React from "react";

interface FormatTimeProps {
  value: number;
  unit: string;
}

const FormatTime: React.FC<FormatTimeProps> = ({ value, unit }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4">{value}</Typography>
      <Typography variant="subtitle1">{unit}</Typography>
    </Box>
  );
};

export default FormatTime;