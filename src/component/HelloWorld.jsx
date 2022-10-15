import { Box, Typography } from "@mui/material";
import Flex from "./core/Flex";

const HelloWorld = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Flex direction="column" alignItems="flex-start" sx={{ gap: 3 }}>
        <Typography variant="h3">Hello World!</Typography>
        <Typography variant="body2">
          Edit <code>`pages/Example.jsx`</code> to see the changes.
        </Typography>
      </Flex>
    </Box>
  );
};

export default HelloWorld;
