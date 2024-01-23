import { Box, Button } from "@mui/material";

function BlogButton({ text, pr }) {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          paddingRight: pr,
          fontSize: "19px",
          background: "#18B0E6",
          margin: "5px",
          boxSizing: "border-box",
          py: "15px",
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0px",

          "&:hover": {
            backgroundColor: "#153A5F",
            boxShadow: "none",
          },
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
export default BlogButton;
