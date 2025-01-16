import { Box } from "@mui/material";
import UpcomingEvents from "./ui/UpcomingEvents/UpcomingEvents";

export default function HeroSection() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <UpcomingEvents />
    </Box>
  );
}
