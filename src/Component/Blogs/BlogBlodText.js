import { Box, Typography } from "@mui/material";

function BlogBlodText({text}) {
  return (
    <Box sx={{mt:'3%',mb:'1%'}}>
      <Typography sx={{color:'#153A5F',fontSize:'32px'}}>
     {text}
      </Typography>
    </Box>
  );
}
export default BlogBlodText;
