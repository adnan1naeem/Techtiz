import { Box, Button, Typography } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";

function ExpertiseMobile({title,des,onPress}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "21em", sm: "28em", md: "26em", lg: "26em", xl: "26em" },
        marginTop:'30%'
      }}
    >
      <Typography sx={{color:'#153A5F',fontSize:'2.2em',fontWeight:'600'}}>{title}</Typography>
      <Typography sx={{color:'#153A5F',fontSize:'1.1em',fontWeight:'400',marginTop:'3%'}}>{des}</Typography>
      <Button
            variant="contained"
            endIcon={<IoMdArrowRoundForward />}
            onClick={onPress}
            sx={{
              marginTop: "5%",
              
              padding: { xs: "3%", sm: "2%", md: "2.3%", lg: "2.3%" },
              width: { xs: "20em", sm: "18em", md: "16em", lg: "16em" },
              paddingLeft: "1%",
              paddingRight: "1%",
              borderRadius: 0,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "400",
              background: "#18B0E6",
              "&:hover": {
                backgroundColor: "#153A5F",
              },
            }}
          >
            Schedule a Meeting &nbsp; &nbsp;
          </Button>
    </Box>
  );
}

export default ExpertiseMobile;
