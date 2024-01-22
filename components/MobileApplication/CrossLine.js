import { Box, Typography } from "@mui/material";

function CrossLine({title,des}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "21em", sm: "33em", md: "35em", lg: "35em", xl: "35em" },
        borderBottom: "1px solid #18B0E6",
        paddingBottom: "7px",
        
      }}
    >
      <Typography
        sx={{ fontSize: "1.5em", color: "#153A5F", fontWeight: "600" ,marginTop:'4%'}}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#153A5F",
          fontWeight: "400",
          marginTop: "1%",
        }}
      >
       {des}
      </Typography>
    </Box>
  );
}

export default CrossLine;
