import { Box, Button } from "@mui/material";

function BlogButton( {text,pl,pr,pb,pt,onClick}) {
  return (
    <Box>
      <Button
      onClick={onClick}
        variant="contained"
        sx={{
         marginTop:'6%',
          bgcolor: "#18B0E6",
          color: "white",
          pl:pl,
          pr: pr,
          pb: pb,
          pt: pt,
          fontSize: "19px",
          boxShadow: "none",
          textTransform: "none",
          borderRadius:'0',
     
          "&:hover": {
            bgcolor: "#153A5F",
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
